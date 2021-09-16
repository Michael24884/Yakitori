import { simklPosterGenerator } from '@core';
import { SimklHomeItemModels } from '@data';
import React, { memo } from 'react';
import {View, StyleSheet, Platform, Dimensions, Text} from 'react-native';
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';
import { YakiimoImage } from '../image/YakiimoImage';

export interface CarouselProps {
  data: Array<SimklHomeItemModels>
};

interface CarouselCellProps {
  item: SimklHomeItemModels;
}

export const Carousel: React.FC<CarouselProps> = (props) => {

  const { data } = props;

  const _layoutProvider = new LayoutProvider(() => 'full', (type, dim) => {
    dim.width = Dimensions.get('screen').height * 0.42;
    dim.height = Dimensions.get('screen').width * 0.43;
  });

  const _dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(data);

  const _rowRenderer = (_: string | number, data: SimklHomeItemModels) =>
    <CarouselCells item={data}/>

  return <View style={StyleSheet.flatten([styles.containerIos, styles.container])}>
    <RecyclerListView
      style={styles.container}
      layoutProvider={_layoutProvider}
      rowRenderer={_rowRenderer}
      dataProvider={_dataProvider}
      isHorizontal
    />
  </View>;
};


const _CarouselCells: React.FC<CarouselCellProps> = (props) => {

  const { item } = props;

  return (
    <View style={[styles.cellContainer]}>
        <View style={styles.cellArt}>
        <YakiimoImage hasBorder={Platform.OS == 'ios'} key={item.art} style={styles.cellArt} url={simklPosterGenerator(item.art, 'FANART')} hasShadow />
        </View>

        <Text numberOfLines={2} style={styles.cellTitle}>{item.title}</Text>
        <Text style={styles.cellSubTitle}>{"Episode " + item.episode + " - " + item.episode_title}</Text>
    </View>
  )

}

const shouldUpdateCells = (o: CarouselCellProps, n: CarouselCellProps) => o.item.art === n.item.art;

const CarouselCells = memo(_CarouselCells, shouldUpdateCells);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Platform.OS == 'ios' ?  10 : 0,
  },

  cellContainer: Platform.OS == 'ios' ? {
    paddingTop: 12,
    paddingHorizontal: 8,
  } : {
    paddingHorizontal: 4,
  },
  cellTitle: {
    paddingTop: 12,
    fontWeight: '700',
    fontSize: 16,
  },
  cellSubTitle: {
    color: 'grey',
    fontStyle: 'italic',
    fontSize: 14,
  },
  cellArt: {
    height: Dimensions.get('screen').height * 0.24,
    width: '100%',
  },
  containerIos: Platform.OS == 'ios' ? {
    marginTop: 14,
    height: Dimensions.get('screen').height * 0.36,
    width: '100%',
  } : {
    height: Dimensions.get('screen').height * 0.36,
    width: '100%',
  },
});
