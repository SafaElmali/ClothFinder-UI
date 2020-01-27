import React from 'react';
import { Overlay, Text } from 'react-native-elements';

const DetailOverlay = (props) => {
    const { isVisible, outfitDetail } = props;
    console.log(outfitDetail);
    const { topwear, bottomwear, footwear, accessories } = outfitDetail;
    const selectedList = [];

    selectedList.push(topwear, bottomwear, footwear, accessories);
    console.log(selectedList);

    const onCloseOverlay = () => {
        const { closeOverlay } = props;
        closeOverlay(false);
    }

    return (
        <Overlay isVisible={isVisible} onBackdropPress={onCloseOverlay}>
            {
                selectedList.map((garmentList) => {
                    console.log(garmentList);
                })
            }
        </Overlay>
    )
}

export default DetailOverlay;