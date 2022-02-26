import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

const CategoryCard = ({containerStyle, catrgoryItem, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={catrgoryItem.image}
        resizeMode="cover"
        style={{width: 100, height: 100, borderRadius: SIZES.radius}}
      />
      <View style={{width: '65%', paddingHorizontal: 20}}>
        <Text style={{flex: 1, ...FONTS.h2, color: COLORS.black}}>
          {catrgoryItem.name}
        </Text>
        <Text style={{flex: 1, ...FONTS.body4, color: COLORS.gray}}>
          {catrgoryItem.duration} | {catrgoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
