import { simklPosterGenerator } from '@core';
import { SimklItemModels } from '@data';
import React, { useCallback, useEffect, useState } from 'react';
import {View, StyleSheet, Text, Dimensions, ActivityIndicator, Platform, UIManager, LayoutAnimation} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';
import { YakiimoImage } from '../image/YakiimoImage';

export interface FeatureListProps {
  title: string;
  subTitle: string;
  data: Array<SimklItemModels>;
  onItemSelect: (item: SimklItemModels) => void;
};

interface FeatureItemProps {
  data: SimklItemModels;
  onTap: (item: SimklItemModels) => void;
}

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const FeatureList: React.FC<FeatureListProps> = (props) => {
  const { title, subTitle, data, onItemSelect } = props;

  const _layoutProvider = new LayoutProvider(() => "full", (_, dim) => {
    dim.width = Dimensions.get('screen').width * 0.38;
    dim.height = Dimensions.get('screen').height * 0.31;
  }); 

  const _dataProvider = new DataProvider(
    (r1, r2) => r1 !== r2 
  );

  const [dataBlock, setData] = useState<DataProvider>(_dataProvider);

  useEffect(() => {
    setData((block) => block.cloneWithRows(data))
    if (data.length > 0) LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }, [data]);

  const _rowRenderer = (_: string | number, data: SimklItemModels) =>
    <FeatureItemCells data={data} onTap={onItemSelect}/>



  return <View style={StyleSheet.flatten([styles.container])}>
    <View style={styles.padding}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
    
   {data.length == 0 ? <ActivityIndicator /> :  <RecyclerListView
      style={styles.listView}
      layoutProvider={_layoutProvider}
      dataProvider={dataBlock}
      rowRenderer={_rowRenderer}
      isHorizontal
      canChangeSize={false}
    />}
   
  </View>;
};



const FeatureItemCells: React.FC<FeatureItemProps> = (props) => {
  const { data, onTap } = props;


  return <TouchableOpacity onPress={() => onTap(data)}>
    <View style={styles.cellContainer}>
    <YakiimoImage style={styles.image} url={simklPosterGenerator(data.poster)} hasShadow/>
    <Text style={styles.cellTitle} numberOfLines={3} lineBreakMode={"tail"}>{data.title}</Text>
  </View>
  </TouchableOpacity>
}




const styles = StyleSheet.create({

  cellContainer: {
    height: Dimensions.get('screen').height * 0.31,
    width: '100%',
    padding: 8
  },

  listView: {
    paddingTop : 12,
    height: Dimensions.get('screen').height * 0.34,
  },

  image: {
    height: Dimensions.get('screen').height * 0.23,
    width: '100%'
  },
  cellTitle: {
    paddingTop: 8,
  },
  padding: {
    padding: 8
  },
  container: {},
  title: {
    fontSize: 24,
    fontWeight: '800'
  },
  subTitle: {
    color: 'grey',
    fontSize: 14
  }
});
