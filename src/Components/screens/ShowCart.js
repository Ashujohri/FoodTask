import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import InputSpinner from 'react-native-input-spinner';
import {useSelector, useDispatch} from 'react-redux';
import {RadioButton} from 'react-native-paper';
// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
const {height, width} = Dimensions.get('window');

const finalData = [];
export default function ShowCart(props) {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState('first');
  const [getTrue, setTrue] = useState(false);
  const [getIndex, setIndex] = useState('');
  const [getShowMore, setShowMore] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [getTotal, setTotal] = useState(0);
  const cartItem = useSelector(state => state.cart);
  const cartValues = Object.values(cartItem);
  //   console.log('cartValues', cartValues);
  var total = cartValues.reduce(calculate, 0);

  useEffect(() => {
    checkLength();
    setTotal(total);
  }, [refresh]);

  function calculate(a, b) {
    // console.log('AAAAAAAAA , BBBBBBBBBB ===============31 in SHOW CART', a, b);
    var price = b.price * b.qtydemand;
    // console.log('Priceeee', price);
    return a + price;
  }

  const checkLength = () => {
    if (cartValues.length > 2) {
      setShowMore(true);
    }
  };

  const handleFlagTrue = (value, item, index) => {
    console.log('In show CArt', index);
    if (value == 0) {
      item['qtydemand'] = value;
      dispatch({type: 'REMOVE_ITEM', payload: [item.id, item]});
      setTrue(!getTrue);
      setIndex(index);
    } else {
      item['qtydemand'] = value;
      dispatch({type: 'ADD_CART', payload: [item.id, item]});
    }
    setRefresh(!refresh);
  };

  return (
    <>
      <View>
        <Header />
        <View
          style={{
            justifyContent: 'space-between',
            width: width * 0.6,
            flex: 1,
            position: 'absolute',
            backgroundColor: 'white',
            height: 110,
            zIndex: 999,
            top: 75,
            left: 80,
            alignSelf: 'center',
            borderRadius: 20,
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 16,
              fontSize: 16,
              color: '#7f8fa6',
              fontFamily: 'serif',
            }}>
            Total Cost
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 50,
              fontSize: 16,
              color: '#7f8fa6',
              fontFamily: 'serif',
            }}>
            Rs. {getTotal}
          </Text>
        </View>
      </View>
      <View
        style={{
          top: 0,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#7f8fa6',
            fontFamily: 'serif',
            fontWeight: 'bold',
          }}>
          Review Order
        </Text>
      </View>

      {/* Review Order */}

      <ScrollView style={{height: height * 0.5, marginTop: 5}}>
        <View>
          {cartValues.map((item, index) => {
            console.log('item in show Cart', item, index);
            return (
              <>
                <View style={{width: width * 0.9}}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'serif',
                        fontWeight: 'bold',
                      }}>
                      {index + 1}.
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontFamily: 'serif',
                        fontWeight: 'bold',
                        //   margin: 14,
                        left: -60,
                      }}>
                      {item.name}
                    </Text>
                    <View>
                      <InputSpinner
                        max={10}
                        min={0}
                        step={1}
                        colorMax={'#30336b'}
                        colorMin={'#30336b'}
                        color={'#30336b'}
                        value={item.qtydemand}
                        selectTextOnFocus={true}
                        style={{
                          alignSelf: 'center',
                          // marginVertical: 50,
                          padding: 10,
                        }}
                        height={35}
                        width={40}
                        onChange={num => handleFlagTrue(num, item)}
                      />
                      <Text
                        style={{
                          fontFamily: 'serif',
                          fontSize: 12,
                          fontWeight: 'bold',
                        }}>
                        Quantity: {item.qtydemand}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'serif',
                        fontWeight: 'bold',
                        margin: 10,
                        top: -28,
                      }}>
                      Des: {item.description}
                    </Text>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: 'serif',
                          fontWeight: 'bold',
                        }}>
                        Type: {item.status}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'serif',
                        fontWeight: 'bold',
                        margin: 10,
                        top: -40,
                      }}>
                      Price :{item.price}
                    </Text>
                  </View>
                </View>
              </>
            );
          })}
          <View style={{justifyContent: 'center', top: -30}}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 20, fontFamily: 'serif', fontWeight: 'bold'}}>
                Delivery Options
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                marginTop: 280,
                left: 200,
                flexDirection: 'row',
              }}>
              <View>
                <FIcon name={'🍔🍟'} size={32} />
              </View>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
            </View>
            <View style={{left: 80, flexDirection: 'row'}}>
              <View style={{marginTop: 5}}>
                <FIcon name={'cc-diners-club'} size={32} />
              </View>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Place Order Button */}

      <View style={{position: 'absolute', marginTop: 550, left: 0}}>
        <LinearGradient
          colors={['#ffbe76', '#4285f4']}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 0}}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            height: 65,
            borderRadius: 3,
            elevation: 5,
            // height: 35,
            width: width,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('#')}>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                color: 'black',
                fontFamily: 'serif',
                backgroundColor: 'transparent',
              }}>
              Place Order
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </>
  );
}
