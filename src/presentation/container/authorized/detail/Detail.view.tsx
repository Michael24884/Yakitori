import React, { useEffect, useState } from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import {Divider, FlatButton, FullScreenLoadingIndicator, TextButton, TextView, YakiimoImage} from '@components';
import {withHotEnhanceRedux} from '@hocs';
import {useDetailModel} from './Detail.hooks';
import { hotDetailRedux} from './Detail.slice';
import { DetailProps} from './types';
import {styles} from './Detail.style';
import { simklPosterGenerator } from '@core';
import { Button, LayoutAnimation, Text, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from '@hooks';
import { LayoutManager } from 'recyclerlistview';

const _Detail: React.FC< DetailProps> = (props) => {
  const {navigation, selector, route, actions} = props;
  const theme = useTheme();
  const {
    isLoadingSimklData,
    simklData,
  } = useDetailModel(
    actions,
    selector,
    route.params.simklID);

  const [synopsisExpanded, setSynopsisExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (simklData != undefined)
      navigation.setOptions({
        headerTitle: "",
        headerShown: true
      })
  }, [navigation, simklData])
 
    if (simklData == undefined)
      return <FullScreenLoadingIndicator visible={isLoadingSimklData}/>

    const {
      title,
      en_title,
      poster,
      fanart,
      overview
    } = simklData;

    return (
    <SafeAreaView edges={['left', 'right']} style={[styles.container]}>
     <ScrollView style={styles.container}>
        
      <View style={styles.container}>
        <View style={styles.fanartView}>
        <YakiimoImage style={styles.fanart} url={simklPosterGenerator(fanart, 'FANART')} />
        <View style={styles.fanartViewFilter} />
        </View>
        {/* <View style={styles.posterRow}>
        
        </View> */}
        <YakiimoImage hasBorder={false} style={styles.poster} url={simklPosterGenerator(poster)} />
        <View>
          <Text style={styles.title}>{title}</Text>
          {en_title != undefined ? <Text style={styles.en_title}>{en_title}</Text> : null}
        </View>
      </View>


      <View style={styles.row}>
        <Text style={styles.subTitles}>Synopsis</Text>
        <TextButton title={synopsisExpanded ? 'Collapse' : 'Expand'}  onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
              return setSynopsisExpanded((v) => !v);
            }} />
        </View>


      
      <View style={[styles.iosContainer, {backgroundColor: theme.colorScheme.primary }]}>
        <Text numberOfLines={synopsisExpanded ? 500 : 3} >{overview}</Text>
      </View>
      <Divider />
      

     </ScrollView>
    </SafeAreaView>
  );
};





export const Detail = withHotEnhanceRedux(hotDetailRedux)(_Detail);
// export const Detail = withHotRedux(
//   detailSlice.name,
//   detailSlice.reducer,
//   detailEpic,
// )(_Detail);
