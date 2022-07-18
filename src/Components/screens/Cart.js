import React, {useState, useEffect} from 'react';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useSelector, useDispatch} from 'react-redux';
import RootReducer from '../../redux/RootReducer';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');

export default function Cart(props) {
  const cartItem = useSelector(state => state.cart);
  console.log("rfrsh===",props.refresh)
  console.log('cartItem====23==>>',cartItem);
  const cartItemLength = Object.keys(cartItem).length;
  console.log('cartItemLength ===', cartItemLength);
  const navigation = useNavigation();
  const[length,setLength] = useState(0)


  React.useEffect(()=>{
    setLength(cartItemLength)
  },[props.refresh])

  return (
    <>
      <View style={{position: 'absolute', marginTop: 550, left: 0}}>
        <LinearGradient
          // colors={['#e71a23', '#b5005d']}
          colors={['#ffbe76', '#4285f4']}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 0}}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            height: 65,
            borderRadius: 10,
            elevation: 5,
            // height: 35,
            width: width,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('ShowCart')}>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                // margin: 10,
                color: 'black',
                fontFamily: 'serif',
                backgroundColor: 'transparent',
              }}>
              VIEW CART ({length})
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </>
  );
}
