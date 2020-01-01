import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import StoryButton from './components/StoryButton/index';
import LogoutButton from './components/LogoutButton/index';
import GarmentModal from './components/Overlay/index';
import styles from './styles';

export default class Home extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const userDetails = navigation.getParam('user');

        this.state = {
            username: userDetails.username,
            jwt: userDetails.jwt,
            isVisible: false,
            wearList: [],
        }

        // this.handleGarment = this.handleGarment.bind(this);
    }

    handleGarmentList = (garmentList, garmentType) => {
        if (garmentList.length > 0) {
            console.log(garmentList);
            this.setState({
                wearList: garmentList,
                isVisible: true
            })
        } else {
            console.log("No wearable object found!");
        }
    }

    //Close modal
    onCloseOverlay = (closeState) => {
        this.setState({
            isVisible: closeState
        });
    }

    render() {
        const { wearList, jwt, isVisible } = this.state;
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
                <GarmentModal wearList={wearList} isVisible={isVisible} onCloseOverlay={this.onCloseOverlay} />
                <LogoutButton onClick={navigation} />
            </View>

        );
    }
}

// export const garmetTypes = ['TOPWEAR', 'BOTTOMWEAR', 'FOOTWEAR', 'ACCESSORIES'];