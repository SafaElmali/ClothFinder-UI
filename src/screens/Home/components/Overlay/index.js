import React from 'react';
import { Overlay, Text, ListItem } from 'react-native-elements';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


const GarmentModal = (props) => {
    const { isVisible, wearList } = props;

    const onCloseOverlay = () => {
        const { onCloseOverlay } = props;
        onCloseOverlay(false);
    }

    return (
        <Overlay
            isVisible={isVisible}
            onBackdropPress={onCloseOverlay}
            borderRadius={15}
            fullScreen>
            <SafeAreaView>
                {wearList.length > 0 ?
                    <View style={styles.overlayView}>
                        <Text style={styles.overlayTitle}>{wearList[0]['garmentType']}</Text>
                        <Icon
                            name='times-circle-o'
                            size={30}
                            style={styles.overlayCloseButton}
                            onPress={onCloseOverlay}>
                        </Icon>
                    </View> : null
                }
                {
                    wearList.map((garmentItem, index) => {
                        return (
                            <ListItem
                                key={index}
                                title={garmentItem.name}
                                bottomDivider
                            />
                        )
                    }
                    )
                }
            </SafeAreaView>
        </Overlay>
    )
}

export default GarmentModal;