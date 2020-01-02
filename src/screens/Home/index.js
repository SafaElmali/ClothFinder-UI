import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { BottomWear, Boots, Glasses, TopWear } from '../../components/SvgFiles/index';
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
                <GarmentModal wearList={wearList} isVisible={isVisible} onCloseOverlay={this.onCloseOverlay} />
                <View style={styles.storyView}>
                    <ScrollView horizontal={true} alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.storyButtonView}>
                            <StoryButton jwt={jwt} garmentType='TOPWEAR' handleGarmentList={this.handleGarmentList} image={<TopWear />} />
                            <StoryButton jwt={jwt} garmentType='BOTTOMWEAR' handleGarmentList={this.handleGarmentList} image={<BottomWear />} />
                            <StoryButton jwt={jwt} garmentType='FOOTWEAR' handleGarmentList={this.handleGarmentList} image={<Boots />} />
                            <StoryButton jwt={jwt} garmentType='ACCESSORIES' handleGarmentList={this.handleGarmentList} image={<Glasses />} />
                        </View>
                    </ScrollView>
                    <View style={styles.ratingView}>

                    </View>
                </View>
                <View style={styles.weatherView}>

                </View>
                <LogoutButton onClick={navigation} />
            </View>

        );
    }
}

// export const garmetTypes = ['TOPWEAR', 'BOTTOMWEAR', 'FOOTWEAR', 'ACCESSORIES'];