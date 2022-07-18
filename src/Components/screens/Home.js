import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import MainView from './MainView';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
const {height, width} = Dimensions.get('window');

const finalData = [];
export default function Home(props) {
  return (
    <>
      <View>
        <Header />
        <View
          style={{
            width: width * 0.9,
            flex: 1,
            position: 'absolute',
            backgroundColor: 'white',
            height: 200,
            zIndex: 999,
            top: 120,
            left: 20,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 16,
              fontSize: 20,
              color: 'black',
              fontFamily: 'serif',
            }}>
            Param Resturant
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 16,
              fontSize: 16,
              color: 'black',
              fontFamily: 'serif',
              marginTop: 40,
            }}>
            😎5.0(200+)|All days:9:00AM - 06:00 PM
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 16,
              fontSize: 16,
              color: 'black',
              fontFamily: 'serif',
              marginTop: 65,
            }}>
            {/* <FIcon name={'phone-call'} size={20} /> */}
            🎇Reach us at: 8889870969
          </Text>
          <View
            style={{
              marginTop: 100,
              justifyContent: 'center',
              alignSelf: 'center',
              flex: 1,
            }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Menu')}>
              <LinearGradient
                colors={['#09096c', '#4285f4']}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 70,
                  height: 70,
                  borderRadius: 10,
                  elevation: 5,
                  height: 35,
                  width: width * 0.4,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    // margin: 10,
                    color: 'white',
                    fontFamily: 'serif',
                    backgroundColor: 'transparent',
                  }}>
                  Book A Table &nbsp;
                </Text>
                <Animatable.Text
                  animation="tada"
                  iterationCount="infinite"
                  style={{textAlign: 'center'}}>
                  <FIcon name="arrow-right" size={13} color="#FFF" />
                </Animatable.Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <MainView props={props} />
      </View>
    </>
  );
}
