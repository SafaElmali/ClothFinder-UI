import React from 'react';
import { Overlay, Text } from 'react-native-elements';

const DetailOverlay = (props) => {
    const { isVisible, outfitDetail } = props;
    console.log(outfitDetail);
    const { topwear, bottomwear, footwear, accessories } = outfitDetail;
    console.log(topwear);
    console.log(bottomwear);
    console.log(footwear);
    console.log(accessories);

    const onCloseOverlay = () => {
        const { onCloseOverlay } = props;
        onCloseOverlay(false);
    }

    return (
        <Overlay isVisible={isVisible} onBackdropPress={onCloseOverlay}>
            <Text>Hello from Overlay!</Text>
        </Overlay>
    )
}

export default DetailOverlay;