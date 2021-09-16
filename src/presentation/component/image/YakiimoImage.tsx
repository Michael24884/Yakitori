import React, { FC, memo } from "react";
import { Platform, StyleProp, StyleSheet, View } from "react-native";
import FastImage, { ImageStyle, ResizeMode } from "react-native-fast-image";

interface Props {
 url?: string;
 style?: StyleProp<ImageStyle>;
 resizeMode?: ResizeMode;
 hasShadow?: boolean;
 hasBorder?: boolean;
}

const _YakiimoImage: FC<Props> = (props) => {
    const { url, style, resizeMode, hasShadow, hasBorder = true } = props;
    return <View key={url} style={hasShadow ? Platform.OS == 'ios' ? styles.image : styles.imageAndroid : undefined}>
        <View style={ hasBorder ? styles.border : undefined}>
        <FastImage
    style={[style]}
    source={{
        uri: url,
    }}
    resizeMode={resizeMode || FastImage.resizeMode.cover }
    />
        </View>
    </View>
}


const styles = StyleSheet.create({
    image: {
        shadowColor: 'black',
        shadowRadius: 12,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.23,
    },
    imageAndroid: {
        shadowColor: 'black',
        shadowRadius: 12,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.23,
        elevation: 4,
        backgroundColor: 'transparent'
    },

    border: {
        borderRadius: Platform.OS == 'ios' ? 4 : 6,
        overflow: 'hidden'
    }
});

const shouldReload = (oldProps: Props, newProps: Props) : boolean => {
    return oldProps.url == newProps.url;
}

export const YakiimoImage = memo(_YakiimoImage, shouldReload);
// export const YakiimoImage = _YakiimoImage;