import React, { useCallback } from 'react';
import { Text } from 'react-native';
// import from library
import {SafeAreaView} from 'react-native-safe-area-context';
// import from alias
import {Carousel, FeatureList, FullScreenLoadingIndicator, TextView} from '@components';
import {withHotRedux} from '@hocs';
// localImport
import {useHomeModel} from './Home.hooks';
import { homeSlice} from './Home.slice';
import { homeEpic} from './Home.epic';
import { HomeProps} from './types';
import {styles} from './Home.style';
import { ScrollView } from 'react-native-gesture-handler';
import { SimklItemModels } from '@data';

const _Home: React.FC< HomeProps> = (props) => {
  const { navigation } = props;
  const {
    premiere,
    posters,
    best,
    bestRating,
  } = useHomeModel();


  const _moveToDetail = useCallback((item: SimklItemModels) => {
    navigation.navigate('Detail', {simklID: item.ids.simkl_id })
  }, [navigation]); 
 
  return (
    <SafeAreaView edges={['left', 'right']} style={[styles.container]}>
      <ScrollView style={styles.container}>
        {posters.length == 0 ? null : <Carousel data={posters} />}
      <FeatureList title={'Premieres'} subTitle={'Just added with high expectancy'} data={premiere} onItemSelect={_moveToDetail} />
      <FeatureList title={'All Time Best'} subTitle={'Based on watch count'} data={best} onItemSelect={_moveToDetail}/>
      <FeatureList title={'All Time Scored'} subTitle={'Based on rating amount'} data={bestRating} onItemSelect={_moveToDetail}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export const Home = withHotRedux(
  homeSlice.name,
  homeSlice.reducer,
  homeEpic,
)(_Home);
