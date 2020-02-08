import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Image, Button } from 'react-native-elements';
import { outfitSaveEndPoint } from '../../utils/config/config';
import NoDataView from './components/NoDataView/index';
import DetailOverlay from './components/DetailOverlay/index';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: {
        icon: '',
      },
      hasData: false,
      isVisible: false,
      outfitDetail: []
    };
  }

  // Get user history when History tab is triggered
  componentDidMount() {
    const { navigation } = this.props;
    this.navFocusListener = navigation.addListener('willFocus', () => {
      this.loadHistory();
    });
  }

  loadHistory = async () => {
    try {
      const userDetails = await AsyncStorage.getItem('USER_DETAILS');
      const user = JSON.parse(userDetails);
      if (user !== null) {
        this.setState(
          {
            user: user,
          },
          () => {
            this.getHistory();
          },
        );
      } else {
        console.log('storage is null');
      }
    } catch (error) {
      console.log(error);
    }
  };

  getHistory = () => {
    const { user } = this.state;
    var url = outfitSaveEndPoint + `${user.username}`;

    axios
      .get(url, {
        headers: {
          Authorization: 'Bearer ' + user.jwt, //the token is a variable which holds the token
        },
      })
      .then(({ status, data }) => {
        if (status === 200) {
          this.setState({
            history: data,
            hasData: true,
          });
        }
      });
  };

  historyView() {
    const { history } = this.state;

    return history.map((item, index) => (

      <View key={index}>
        <View style={styles.cardItem}>
          <View style={styles.dateBadge}>
            <Text style={styles.date}>{item.currentWeather.date}</Text>
          </View>
          <View style={styles.weatherContainer}>
            <Text style={styles.weather}>{item.currentWeather.temperature}℃</Text>
            <Text style={styles.description}>
              {item.currentWeather.description}
            </Text>
            <View style={styles.locationContainer}>
              <Image
                source={require('../../images/location-pin.png')}
                style={{
                  width: 16,
                  height: 16,
                }}
              />
              <Text style={styles.location}>
                {item.currentWeather.locationName}
              </Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: item.currentWeather.icon,
              }}
              style={{
                width: 72,
                height: 72,
              }}
            />
          </View>
          <View style={{ flex: 1, bottom: -5, right: 0, left: 0, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
            <Button
              title='See Details'
              titleStyle={{ color: '#AAAAAA', paddingRight: 5 }}
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="#AAAAAA"
                />
              }
              containerStyle={{ bottom: -20 }}
              buttonStyle={{
                borderRadius: 50, backgroundColor: '#FFFFFF', shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 8,
              }}
              iconRight
              onPress={() => {
                this.setState({
                  outfitDetail: item,
                  isVisible: true
                })
              }} />
          </View>
        </View>
      </View>
    ));
  }



  //Close modal
  onCloseOverlay = (closeState) => {
    this.setState({
      isVisible: closeState
    });
  }

  render() {
    const { hasData, isVisible, outfitDetail } = this.state;

    return (
      <View style={styles.container}>
        {hasData === true ? (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <DetailOverlay isVisible={isVisible} outfitDetail={outfitDetail} closeOverlay={this.onCloseOverlay} />
            {this.historyView()}
          </ScrollView>
        ) : <NoDataView />
        }
      </View>
    );
  }
}
