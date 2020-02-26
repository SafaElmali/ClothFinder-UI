import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import DisabledCard from '../DisabledCard/index';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import RatingItems from './components/RatingItems/index';

const Rating = props => {
  const { outfit } = props;
  const [outfitList, setOutfitList] = useState([]);
  const selectedList = [];

  // Get all selected outfits into an array
  outfitList.forEach(outfitArray => {
    if (outfitArray.length > 0) {
      outfitArray.forEach(garmentItem => {
        selectedList.push(garmentItem);
      });
    }
  });

  // Update outfitList if garment item added or removed
  useEffect(() => {
    setOutfitList(Object.values(outfit));
  }, [outfit]);

  const assignRate = (item, rateType, garmentType) => {
    const { onHandleSelectedRate } = props;
    const { topwear, bottomwear, footwear, accessories } = outfit;
    let selectedGarmentItem = -1;

    if (garmentType === 'TOPWEAR') {
      selectedGarmentItem = topwear.findIndex(
        garmentItem => garmentItem.garment.id == item.garment.id,
      );

      topwear[selectedGarmentItem].rating = rateType;
      onHandleSelectedRate(false);
    } else if (garmentType === 'BOTTOMWEAR') {
      selectedGarmentItem = bottomwear.findIndex(
        garmentItem => garmentItem.garment.id == item.garment.id,
      );

      bottomwear[selectedGarmentItem].rating = rateType;
      onHandleSelectedRate(false);
    } else if (garmentType === 'FOOTWEAR') {
      selectedGarmentItem = footwear.findIndex(
        garmentItem => garmentItem.garment.id == item.garment.id,
      );

      footwear[selectedGarmentItem].rating = rateType;
      onHandleSelectedRate(false);
    } else if (garmentType === 'ACCESSORIES') {
      selectedGarmentItem = accessories.findIndex(
        garmentItem => garmentItem.garment.id == item.garment.id,
      );

      accessories[selectedGarmentItem].rating = rateType;
      onHandleSelectedRate(false);
    } else {
      return 'Comollocco';
    }
  };

  const _renderItem = ({ item, index }) => {
    const { isLoading, onHandleSelectedRate } = props;
    return <RatingItems key={item.id} item={item} onAssignRate={assignRate} isLoading={isLoading} onHandleSelectedRate={onHandleSelectedRate} />
  };

  const sliderWidth = Dimensions.get('window').width;
  const itemWidth = sliderWidth - 64;

  return (
    <>
      {selectedList.length > 0 ? (
        <Carousel
          data={selectedList}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          activeSlideAlignment={'center'}
          inactiveSlideOpacity={1}
        />
      ) : (
          <View style={styles.disabledCardContainer}>
            <DisabledCard />
          </View>
        )}
    </>
  );
};

export default Rating;
