import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { Text, Button } from 'react-native-elements';
import {
  WorstEmoji,
  BestEmoji,
  BadEmoji,
  NeutralEmoji,
  GoodEmoji,
} from '../../../../components/SvgFiles/index';
import DisabledCard from '../DisabledCard/index';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

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
    let selectedGarmentItem = -1;

    if (garmentType === 'TOPWEAR') {
      const topwearList = outfitList.find(garmentArray => {
        return garmentArray.some((garmentItem, index) => {
          return garmentItem.garment.id == item.garment.id;
        });
      });

      selectedGarmentItem = topwearList.findIndex(
        garmentItem => garmentItem.garment.id == item.garment.id,
      );
      topwearList[selectedGarmentItem].rating = rateType;
      onHandleSelectedRate(false);
    } else if (garmentType === 'BOTTOMWEAR') {
      const bottomwearList = outfitList.find(garmentArray => {
        return garmentArray.some((garmentItem, index) => {
          return garmentItem.garment.id == item.garment.id;
        });
      });

      selectedGarmentItem = bottomwearList.findIndex(
        garmentItem => garmentItem.garment.id == item.garment.id,
      );
      bottomwearList[selectedGarmentItem].rating = rateType;
      onHandleSelectedRate(false);
    } else if (garmentType === 'FOOTWEAR') {
      const footwearList = outfitList.find(garmentArray => {
        return garmentArray.some((garmentItem, index) => {
          return garmentItem.garment.id == item.garment.id;
        });
      });

      selectedGarmentItem = footwearList.findIndex(
        garmentItem => garmentItem.garment.id == item.garment.id,
      );
      footwearList[selectedGarmentItem].rating = rateType;
      onHandleSelectedRate(false);
    } else if (garmentType === 'ACCESSORIES') {
      const accessoriesList = outfitList.find(garmentArray => {
        return garmentArray.some((garmentItem, index) => {
          return garmentItem.garment.id == item.garment.id;
        });
      });

      selectedGarmentItem = accessoriesList.findIndex(
        garmentItem => garmentItem.garment.id == item.garment.id,
      );
      accessoriesList[selectedGarmentItem].rating = rateType;
      onHandleSelectedRate(false);
    } else {
      return 'Comollocco';
    }
  };

  const _renderItem = ({ item, index }) => {
    const { onHandleSelectedRate, isLoading } = props;

    return (
      <View key={index} style={styles.ratingCard}>
        <View style={styles.ratingContent}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              How do you feel with selected {item.garment.name}?
            </Text>
          </View>
          <View style={styles.selectionContainer}>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonCenterView}>
                <WorstEmoji
                  onPress={() =>
                    assignRate(item, 'WORST', item.garment.garmentType)
                  }
                />
                <Text style={styles.buttonText}>WORST</Text>
              </View>
              <View style={styles.buttonCenterView}>
                <BadEmoji
                  onPress={() =>
                    assignRate(item, 'BAD', item.garment.garmentType)
                  }
                />
                <Text style={styles.buttonText}>BAD</Text>
              </View>
              <View style={styles.buttonCenterView}>
                <NeutralEmoji
                  onPress={() =>
                    assignRate(item, 'NEUTRAL', item.garment.garmentType)
                  }
                />
                <Text style={styles.buttonText}>NEUTRAL</Text>
              </View>
              <View style={styles.buttonCenterView}>
                <GoodEmoji
                  onPress={() =>
                    assignRate(item, 'GOOD', item.garment.garmentType)
                  }
                />
                <Text style={styles.buttonText}>GOOD</Text>
              </View>
              <View style={styles.buttonCenterView}>
                <BestEmoji
                  onPress={() =>
                    assignRate(item, 'BEST', item.garment.garmentType)
                  }
                />
                <Text style={styles.buttonText}>BEST</Text>
              </View>
            </View>
          </View>
          <View style={styles.submitContainer}>
            <Button
              buttonStyle={styles.submitButton}
              title="save outfit"
              loading={isLoading}
              onPress={() => onHandleSelectedRate(true)} />
          </View>
        </View>
      </View>
    );
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
