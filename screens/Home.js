import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {COLORS, dummyData, SIZES} from '../constants';
import {CategoryCard} from '../components';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View></View>}
        renderItem={({item}) => {
          return (
            <CategoryCard
              containerStyle={{marginHorizontal: SIZES.padding}}
              catrgoryItem={item}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          );
        }}
        ListFooterComponent={<View style={{marginBottom: 100}} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
