import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import MIcon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export default function Header(props) {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          elevation: 5,
          shadowOffset: {height: 8, width: 8},
          shadowColor: 'red',
          width: width,
          height: height * 0.3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <Image
          source={require('../images/food.jpg')}
          resizeMode={'cover'}
          style={{
            height: height * 0.3,
            width: width,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width * 0.9,
            flex: 1,
            position: 'absolute',
            height: 200,
            zIndex: 999,
            left: 20,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 18,
              fontSize: 20,
              color: 'white',
              fontFamily: 'serif',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MIcon name={'arrow-left'} size={18} color="#FFF" />
            </TouchableOpacity>
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            width: width * 0.9,
            flex: 1,
            position: 'absolute',
            height: 200,
            zIndex: 999,
            left: 140,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 16,
              fontSize: 20,
              color: 'blue',
              fontFamily: 'serif',
            }}>
            <MIcon name={'upload'} size={18} color="#FFF" />
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            width: width * 0.9,
            flex: 1,
            position: 'absolute',
            height: 200,
            zIndex: 999,
            left: 170,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 16,
              fontSize: 20,
              color: 'blue',
              fontFamily: 'serif',
            }}>
            <MIcon name={'info-circle'} size={20} color="#FFF" />
          </Text>
        </View>
      </View>
    </>
  );
}
