import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Overlay, Text, ListItem } from 'react-native-elements';
import StoryButton from './components/StoryButton/index';
import LogoutButton from './components/LogoutButton/index';

export default class Home extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const userDetails = navigation.getParam('user');

        this.state = {
            username: userDetails.username,
            jwt: userDetails.jwt,
            isVisible: false,
            wearList: []
        }

        // this.handleGarment = this.handleGarment.bind(this);
    }

    handleGarmentList = (garmentList) => {
        if (garmentList.length > 0) {
            console.log(garmentList);
        } else {
            console.log("No wearable object found!");
        }
    }

    render() {
        const { wearList, jwt } = this.state;
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.storyView}>
                        <StoryButton jwt={jwt} garmentType='TOPWEAR' handleGarmentList={this.handleGarmentList} />
                        <StoryButton jwt={jwt} garmentType='BOTTOMWEAR' handleGarmentList={this.handleGarmentList} />
                        <StoryButton jwt={jwt} garmentType='FOOTWEAR' handleGarmentList={this.handleGarmentList} />
                        <StoryButton jwt={jwt} garmentType='ACCESSORIES' handleGarmentList={this.handleGarmentList} />
                    </View>
                </ScrollView>

                { /*
                <Overlay isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })} >
                    {wearList.length > 0 ?
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#bcbbc1' }}>
                            <Text>{wearList[0]['garmentType']}</Text>
                        </View> : null
                    }
                    {
                        wearList.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.name}
                                bottomDivider
                            />
                        ))
                    }
                </Overlay>
                */}
                <LogoutButton onClick={navigation} />
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
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
});

export const garmetTypes = ['TOPWEAR', 'BOTTOMWEAR', 'FOOTWEAR', 'ACCESSORIES'];