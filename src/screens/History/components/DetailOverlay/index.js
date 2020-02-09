import React from 'react';
import { FlatList, View } from 'react-native';
import { Overlay, ListItem, Text } from 'react-native-elements';
import {
    WorstEmoji,
    BestEmoji,
    BadEmoji,
    NeutralEmoji,
    GoodEmoji,
} from '../../../../components/SvgFiles/index';

const DetailOverlay = (props) => {
    const { isVisible, outfitDetail } = props;
    const { topwear, bottomwear, footwear, accessories } = outfitDetail;
    const selectedList = [];
    selectedList.push(topwear, bottomwear, footwear, accessories);

    const onCloseOverlay = () => {
        const { closeOverlay } = props;
        closeOverlay(false);
    }

    const _renderHistoryDetail = () => {
        return selectedList.map((garmentList, index) => {
            if (garmentList != undefined && garmentList.length > 0) {
                return (
                    <View>
                        <FlatList
                            key={index}
                            data={garmentList}
                            keyExtractor={item => item.garment.id.toString()}
                            renderItem={_renderItem}
                        />
                    </View>
                )
            } else {
                return null;
            }
        });
    }

    const _renderItem = (({ item, index }) => {
        return (
            <ListItem
                key={index}
                title={item.garment.name}
                bottomDivider
                underlayColor={'#d2d4d6'}
                rightElement={
                    checkSelectedRating(item)
                }
            />
        )
    });

    const checkSelectedRating = (garmentItem) => {
        if (garmentItem.rating === 'WORST') {
            return <WorstEmoji />
        } else if (garmentItem.rating === 'BAD') {
            return <BadEmoji />
        } else if (garmentItem.rating === 'NEUTRAL') {
            return <NeutralEmoji />
        } else if (garmentItem.rating === 'GOOD') {
            return <GoodEmoji />
        } else if (garmentItem.rating === 'BEST') {
            return <BestEmoji />
        } else {
            return <Text>Not Rated</Text>;
        }
    }

    return (
        <Overlay
            isVisible={isVisible}
            onBackdropPress={onCloseOverlay}
            borderRadius={15}>
            {
                _renderHistoryDetail()
            }
        </Overlay>
    )
}

export default DetailOverlay;