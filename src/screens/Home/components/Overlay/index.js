import React, { useState, useEffect } from 'react';
import { Overlay, Text, ListItem } from 'react-native-elements';
import { View, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const GarmentModal = (props) => {
    const { isVisible, wearList, onHandleOutfit } = props;
    const [garment, setGarment] = useState({ garment: { id: 0, name: '', garmentType: '', selected: null } })

    const onCloseOverlay = () => {
        const { onCloseOverlay } = props;
        onCloseOverlay(false);
    }

    useEffect(() => {
        onHandleOutfit(garment, garment.garment.garmentType);
    }, [garment])

    return (
        <Overlay
            isVisible={isVisible}
            onBackdropPress={onCloseOverlay}
            borderRadius={15}
            fullScreen>
            <SafeAreaView>
                {
                    <View style={styles.overlayView}>
                        {wearList !== undefined ? <Text style={styles.overlayTitle}>{wearList[0]['garmentType']}</Text> : null}
                        <Icon
                            name='times-circle-o'
                            size={30}
                            style={styles.overlayCloseButton}
                            onPress={onCloseOverlay}>
                        </Icon>
                    </View>
                }
                {wearList !== undefined ?
                    <FlatList
                        data={wearList}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <ListItem
                                    key={index}
                                    title={item.name}
                                    bottomDivider
                                    checkBox={{
                                        title: 'Reco',
                                        onPress() {
                                            item.selected = !item.selected;
                                            setGarment({ garment: { id: item.id, name: item.name, garmentType: item.garmentType, selected: item.selected } });
                                        },
                                        checked: item.selected,
                                        checkedIcon: 'dot-circle-o',
                                        uncheckedIcon: 'circle-o'
                                    }}
                                />
                            )
                        }}
                    /> : null
                }
            </SafeAreaView>
        </Overlay>
    )
}

export default GarmentModal;
