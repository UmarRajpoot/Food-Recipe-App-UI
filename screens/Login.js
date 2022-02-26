import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {images, COLORS, SIZES, FONTS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {CustomButton} from '../components';

const Login = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View style={{height: SIZES.height > 700 ? '65%' : '60%'}}>
        <ImageBackground
          source={images.loginBackground}
          style={{flex: 1, justifyContent: 'flex-end'}}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <Text
              style={{width: '80%', color: COLORS.white, ...FONTS.largeTitle}}>
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const renderDetail = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* Description */}
        <Text
          style={{
            marginTop: SIZES.radius,
            width: '70%',
            color: COLORS.gray,
            ...FONTS.body3,
          }}>
          Discover more than 1200 food recipes in yout hands and cooking it
          easily.
        </Text>
        {/* Buttons */}

        <View style={{flex: 1, justifyContent: 'center'}}>
          <CustomButton
            buttonText="Login"
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace('Home')}
          />
          <CustomButton
            buttonText="Sign Up"
            colors={[]}
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
            }}
            onPress={() => navigation.replace('Home')}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* Header */}
      <StatusBar barStyle="light-content" />
      {renderHeader()}
      {/* Detail */}
      {renderDetail()}
    </View>
  );
};

export default Login;
