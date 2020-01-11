import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { BottomWear, Boots, Glasses, TopWear } from '../../components/SvgFiles/index';
import StoryButton from './components/StoryButton/index';
import LogoutButton from './components/LogoutButton/index';
import GarmentModal from './components/Overlay/index';
import Weather from './components/Weather/index';
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
            outfit: {
                topwear: [],
                bottomwear: [],
                footwear: [],
                accessories: [],
            },
        }
    }

    //handle garment type list and open modal
    handleGarmentList = (garmentList, garmentType) => {
        if (garmentList.length > 0) {
            switch (garmentType) {
                case 'TOPWEAR':
                    this.setState({
                        topwearList: garmentList,
                    }, () => {
                        const { topwearList } = this.state;
                        this.setState({
                            wearList: topwearList,
                            isVisible: true
                        })
                    });
                    break;
                case 'BOTTOMWEAR':
                    this.setState({
                        bottomwearList: garmentList,
                    }, () => {
                        const { bottomwearList } = this.state;
                        this.setState({
                            wearList: bottomwearList,
                            isVisible: true
                        })
                    });
                    break;
                case 'FOOTWEAR':
                    this.setState({
                        footwearList: garmentList,
                    }, () => {
                        const { footwearList } = this.state;
                        this.setState({
                            wearList: footwearList,
                            isVisible: true
                        })
                    });
                    break;
                case 'ACCESSORIES':
                    this.setState({
                        accessoriesList: garmentList,
                    }, () => {
                        const { accessoriesList } = this.state;
                        this.setState({
                            wearList: accessoriesList,
                            isVisible: true
                        })
                    });
                    break;
            }
        } else {
            console.log("No wearable object found!");
        }
    }

    //Get selected list for each story
    handleSelectedOutfit = (garmentItem, garmentType) => {
        switch (garmentType) {
            case 'TOPWEAR':
                if (garmentItem.garment.selected) {
                    this.setState(state => ({
                        outfit: {
                            ...state.outfit,
                            topwear: state.outfit.topwear.concat(garmentItem)
                        }
                    }), () => {
                        console.log(this.state.outfit);
                    });
                } else {
                    this.setState(state => ({
                        outfit: {
                            ...state.outfit,
                            topwear: state.outfit.topwear.filter((value => value.garment.id !== garmentItem.garment.id))
                        }
                    }), () => {
                        console.log(this.state.outfit);
                    });
                }
                break;
            case 'BOTTOMWEAR':
                if (garmentItem.garment.selected) {
                    this.setState(state => ({
                        outfit: {
                            ...state.outfit,
                            bottomwear: state.outfit.bottomwear.concat(garmentItem)
                        }
                    }), () => {
                        console.log(this.state.outfit);
                    });
                } else {
                    this.setState(state => ({
                        outfit: {
                            ...state.outfit,
                            bottomwear: state.outfit.bottomwear.filter((value => value.garment.id !== garmentItem.garment.id))
                        }
                    }), () => {
                        console.log(this.state.outfit);
                    });
                }
                break;
            case 'FOOTWEAR':
                if (garmentItem.garment.selected) {
                    this.setState(state => ({
                        outfit: {
                            ...state.outfit,
                            footwear: state.outfit.footwear.concat(garmentItem)
                        }
                    }), () => {
                        console.log(this.state.outfit);
                    });
                } else {
                    this.setState(state => ({
                        outfit: {
                            ...state.outfit,
                            footwear: state.outfit.footwear.filter((value => value.garment.id !== garmentItem.garment.id))
                        }
                    }), () => {
                        console.log(this.state.outfit);
                    });
                }
                break;
            case 'ACCESSORIES':
                if (garmentItem.garment.selected) {
                    this.setState(state => ({
                        outfit: {
                            ...state.outfit,
                            accessories: state.outfit.accessories.concat(garmentItem)
                        }
                    }), () => {
                        console.log(this.state.outfit);
                    });
                } else {
                    this.setState(state => ({
                        outfit: {
                            ...state.outfit,
                            accessories: state.outfit.accessories.filter((value => value.garment.id !== garmentItem.garment.id))
                        }
                    }), () => {
                        console.log(this.state.outfit);
                    });
                }
                break;
        }
    }

    //Close modal
    onCloseOverlay = (closeState) => {
        this.setState({
            isVisible: closeState
        });
    }

    render() {
        const { wearList, jwt, isVisible, outfit, topwearList, bottomwearList, footwearList, accessoriesList } = this.state;
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <GarmentModal wearList={wearList} outfit={outfit} isVisible={isVisible} onCloseOverlay={this.onCloseOverlay} onHandleOutfit={this.handleSelectedOutfit} />
                <View style={styles.storyView}>
                    <ScrollView contentContainerStyle={styles.storyViewContainer} horizontal={true} alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.storyButtonView}>
                            <StoryButton jwt={jwt} wearList={topwearList} garmentType='TOPWEAR' handleGarmentList={this.handleGarmentList} image={<TopWear />} />
                            <StoryButton jwt={jwt} wearList={bottomwearList} garmentType='BOTTOMWEAR' handleGarmentList={this.handleGarmentList} image={<BottomWear />} />
                            <StoryButton jwt={jwt} wearList={footwearList} garmentType='FOOTWEAR' handleGarmentList={this.handleGarmentList} image={<Boots />} />
                            <StoryButton jwt={jwt} wearList={accessoriesList} garmentType='ACCESSORIES' handleGarmentList={this.handleGarmentList} image={<Glasses />} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.ratingView}>
                    <Text>{JSON.stringify(outfit)}</Text>
                </View>
                <View style={styles.weatherContainer}>
                    <Weather jwt={jwt} />
                </View>
                { /*
                    <View style={styles.submitView}>
                        <Text>Submit</Text>
                    </View>
                    */
                }
                <LogoutButton onClick={navigation} />
            </View>
        );
    }
}