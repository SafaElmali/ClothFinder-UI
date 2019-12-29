import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Overlay, Text, ListItem } from 'react-native-elements';
import { garmentTypeLocalPoint } from '../../utils/config';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const userDetails = navigation.getParam('user');

        this.state = {
            username: userDetails.username,
            jwt: userDetails.jwt,
            isVisible: false,
            bottomWearList: []
        }

        this.handleGarment = this.handleGarment.bind(this);
    }

    logoutUser = async () => {
        try {
            await AsyncStorage.removeItem("USER_DETAILS");
            this.props.navigation.navigate('Login');
        }
        catch (exception) {
            return false;
        }
    }

    handleGarment = (garmentType) => {
        const { jwt } = this.state;

        axios.get(garmentTypeLocalPoint + `${garmentType}`, {
            headers: {
                Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
            }
        }).then(({ data }) => {
            this.setState({
                bottomWearList: data,
                isVisible: true
            });
        });
    }

    render() {
        const { bottomWearList } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.storyView}>
                    <View style={{}}>
                        <Button
                            icon={
                                <Icon
                                    name="crosshairs"
                                    size={15}
                                    color="green"
                                />
                            }
                            buttonStyle={{ borderRadius: 50, width: 50, height: 50, backgroundColor: '#fff', borderColor: '#000', borderWidth: 1, margin: 20, borderStyle: 'dashed' }}
                            onPress={() => this.handleGarment('TOPWEAR')}
                        />
                    </View>
                    <Button
                        icon={
                            <Icon
                                name="crosshairs"
                                size={15}
                                color="green"
                            />
                        }
                        buttonStyle={{ borderRadius: 50, width: 50, height: 50, backgroundColor: '#fff', borderColor: '#000', borderWidth: 1, margin: 20, borderStyle: 'dashed' }}
                        onPress={() => this.handleGarment('BOTTOMWEAR')}
                    />
                    <Button
                        icon={
                            <Icon
                                name="crosshairs"
                                size={15}
                                color="green"
                            />
                        }
                        buttonStyle={{ borderRadius: 50, width: 50, height: 50, backgroundColor: '#fff', borderColor: '#000', borderWidth: 1, margin: 20, borderStyle: 'dashed' }}
                        onPress={() => this.handleGarment('FOOTWEAR')}
                    />
                    <Button
                        icon={
                            <Icon
                                name="crosshairs"
                                size={15}
                                color="green"
                            />
                        }
                        buttonStyle={{ borderRadius: 50, width: 50, height: 50, backgroundColor: '#fff', borderColor: '#000', borderWidth: 1, margin: 20, borderStyle: 'dashed' }}
                        onPress={() => this.handleGarment('ACCESSORIES')}
                    />
                </View>
                <Overlay isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })} >
                    {bottomWearList.length > 0 ?
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#bcbbc1' }}>
                            <Text>{bottomWearList[0]['garmentType']}</Text>
                        </View> : null
                    }
                    {
                        bottomWearList.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.name}
                                bottomDivider
                            />
                        ))
                    }
                </Overlay>
                <Button onPress={this.logoutUser} title="Logout" />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    storyView: {
        flex: 0.15,
        flexDirection: 'row'
    }
});