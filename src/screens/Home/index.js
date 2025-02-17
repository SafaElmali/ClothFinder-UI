import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { BottomWear, Boots, Glasses, TopWear } from '../../components/SvgFiles/index';
import { outfitSaveEndPoint } from '../../utils/config/config';
import { Toast } from 'native-base';
import StoryButton from './components/StoryButton/index';
import GarmentModal from './components/Overlay/index';
import Weather from './components/Weather/index';
import Rating from './components/Ratings/index';
import HeaderTitle from '../../components/HeaderTitle/index';
import ProfileButton from './components/ProfileButton/index';
import styles from './styles';
import axios from 'axios';

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => {

        return {
            headerTitle: () => <HeaderTitle title="Clothfinder" />,
            headerRight: () => (
                <ProfileButton onClick={navigation} />
            ),
        }
    };

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const userDetails = navigation.getParam('user');

        this.state = {
            username: "Safa",
            jwt: "sdadsdlaskdlşsakdaşlk",
            isVisible: false,
            isLoading: false,
            tempOutfit: {
                topwear: [],
                bottomwear: [],
                footwear: [],
                accessories: [],
            },
            currentWeather: {},
            outfit: {}
        }
    }

    // Handle garment type list and open modal
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
                        isVisible: true
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

    // Get selected list for each story
    handleSelectedOutfit = (garmentItem, garmentType) => {
        switch (garmentType) {
            case 'TOPWEAR':
                if (garmentItem.garment.selected) {
                    this.setState(state => ({
                        tempOutfit: {
                            ...state.tempOutfit,
                            topwear: state.tempOutfit.topwear.concat(garmentItem)
                        }
                    }))
                } else {
                    this.setState(state => ({
                        tempOutfit: {
                            ...state.tempOutfit,
                            topwear: state.tempOutfit.topwear.filter((value => value.garment.id !== garmentItem.garment.id))
                        }
                    }));
                }
                break;
            case 'BOTTOMWEAR':
                if (garmentItem.garment.selected) {
                    this.setState(state => ({
                        tempOutfit: {
                            ...state.tempOutfit,
                            bottomwear: state.tempOutfit.bottomwear.concat(garmentItem)
                        }
                    }));
                } else {
                    this.setState(state => ({
                        tempOutfit: {
                            ...state.tempOutfit,
                            bottomwear: state.tempOutfit.bottomwear.filter((value => value.garment.id !== garmentItem.garment.id))
                        }
                    }));
                }
                break;
            case 'FOOTWEAR':
                if (garmentItem.garment.selected) {
                    this.setState(state => ({
                        tempOutfit: {
                            ...state.tempOutfit,
                            footwear: state.tempOutfit.footwear.concat(garmentItem)
                        }
                    }));
                } else {
                    this.setState(state => ({
                        tempOutfit: {
                            ...state.tempOutfit,
                            footwear: state.tempOutfit.footwear.filter((value => value.garment.id !== garmentItem.garment.id))
                        }
                    }));
                }
                break;
            case 'ACCESSORIES':
                if (garmentItem.garment.selected) {
                    this.setState(state => ({
                        tempOutfit: {
                            ...state.tempOutfit,
                            accessories: state.tempOutfit.accessories.concat(garmentItem)
                        }
                    }));
                } else {
                    this.setState(state => ({
                        tempOutfit: {
                            ...state.tempOutfit,
                            accessories: state.tempOutfit.accessories.filter((value => value.garment.id !== garmentItem.garment.id))
                        }
                    }));
                }
                break;
        }
    }

    // Get current weather detail
    handleCurrentWeather = (currentWeather) => {
        this.setState({
            currentWeather: currentWeather
        });
    }

    // Send each rate selection
    handleSelectedRate = (isSaveOutfitClicked) => {
        const { jwt, username, currentWeather } = this.state;

        if (!isSaveOutfitClicked) {
            this.setState(state => ({
                outfit: {
                    ...state.tempOutfit,
                    username: username,
                    currentWeather: currentWeather,
                    saved: false
                },
            }), () => {
                const { outfit } = this.state;

                axios.post(outfitSaveEndPoint, outfit, {
                    headers: {
                        Authorization: 'Bearer ' + jwt
                    }
                }).then(({ status, data }) => {
                    if (status === 201) {
                        Toast.show({
                            text: 'Rating saved!',
                            buttonText: 'Okay',
                            position: 'bottom',
                            type: 'success',
                            duration: 2000
                        });
                        console.log(data);
                    }
                }, (error) => {
                    console.log(error);
                    Toast.show({
                        text: 'Error occured saving rating!',
                        buttonText: 'Okay',
                        position: 'bottom',
                        type: 'danger',
                        duration: 2000
                    });
                });
            });
        } else {
            this.setState(state => ({
                outfit: {
                    ...state.tempOutfit,
                    username: username,
                    currentWeather: currentWeather,
                    saved: true,
                },
                isLoading: true
            }), () => {
                const { outfit } = this.state;

                axios.post(outfitSaveEndPoint, outfit, {
                    headers: {
                        Authorization: 'Bearer ' + jwt
                    }
                }).then(({ status, data }) => {
                    if (status === 201) {
                        console.log(data);
                        Toast.show({
                            text: 'Outfit saved to your history!',
                            buttonText: 'Okay',
                            position: 'bottom',
                            type: 'success',
                            duration: 2000
                        });
                        this.setState({
                            isLoading: false
                        });
                    }
                }, (error) => {
                    console.log(error);
                    Toast.show({
                        text: 'Error occured saving outfit!',
                        buttonText: 'Okay',
                        position: 'bottom',
                        type: 'danger',
                        duration: 2000
                    });
                    this.setState({
                        isLoading: false
                    });
                });
            });
        }
    }

    // Close modal
    onCloseOverlay = (closeState) => {
        this.setState({
            isVisible: closeState
        });
    }

    render() {
        const { wearList, jwt, isVisible, tempOutfit, topwearList, bottomwearList, footwearList, accessoriesList, isLoading } = this.state;

        return (
            <View style={styles.container}>
                <GarmentModal wearList={wearList} outfit={tempOutfit} isVisible={isVisible} onCloseOverlay={this.onCloseOverlay} onHandleOutfit={this.handleSelectedOutfit} />
                <View style={styles.storyView}>
                    <ScrollView contentContainerStyle={styles.storyViewScrollContainer} horizontal={true} alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.storyButtonView}>
                            <StoryButton jwt={jwt} wearList={topwearList} garmentType='TOPWEAR' onHandleGarmentList={this.handleGarmentList} image={<TopWear />} />
                            <StoryButton jwt={jwt} wearList={bottomwearList} garmentType='BOTTOMWEAR' onHandleGarmentList={this.handleGarmentList} image={<BottomWear />} />
                            <StoryButton jwt={jwt} wearList={footwearList} garmentType='FOOTWEAR' onHandleGarmentList={this.handleGarmentList} image={<Boots />} />
                            <StoryButton jwt={jwt} wearList={accessoriesList} garmentType='ACCESSORIES' onHandleGarmentList={this.handleGarmentList} image={<Glasses />} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.ratingContainer}>
                    <Rating outfit={tempOutfit} onHandleSelectedRate={this.handleSelectedRate} isLoading={isLoading} />
                </View>
                <View style={styles.weatherContainer}>
                    <Weather jwt={jwt} onHandleCurrentWeather={this.handleCurrentWeather} />
                </View>
            </View>
        );
    }
}