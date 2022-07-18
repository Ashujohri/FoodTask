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
import InputSpinner from 'react-native-input-spinner';
import {data} from '../config/data';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import Cart from './Cart';
const {height, width} = Dimensions.get('window');

const finalData = [];
export default function MainView(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [getData, setData] = useState([]);
  const [getMainCourse, setMainCourse] = useState([]);
  const [getDessert, setDessert] = useState([]);
  const [getDrinks, setDrinks] = useState([]);
  const [getTrue, setTrue] = useState(false);
  const [Qty, setQty] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [getIndex, setIndex] = useState('');
  const [getName, setName] = useState('');
  const [refresh, setRefresh] = useState(false);

  var cartItem = useSelector(state => state.cart);
  var cartLength = Object.keys(cartItem).length;
  console.log('============================', cartLength);

  useEffect(() => {
    fetchStarter();
  }, []);

  const fetchStarter = () => {
    setRefresh(true);
    setModalVisible(false);
    setName('Starter');
    finalData.length = 0;
    data.map(item => {
      if (item.type === 1) {
        // console.log('item in fetchStarter', item);
        finalData.push(item);
      } else if (item.type === 2) {
        getMainCourse.push(item);
      } else if (item.type === 3) {
        getDessert.push(item);
      } else if (item.type === 4) {
        getDrinks.push(item);
      }
      // console.log('Final Data', finalData);
      setData(finalData);
    });
  };

  const fetcMainCourse = n => {
    setModalVisible(false);
    setName(n);
    // console.log('in main course');
    finalData.length = 0;
    data.map(item => {
      if (item.type === 2) {
        // console.log('item in fetchStarter', item);
        finalData.push(item);
      }
      console.log('Final Data', finalData);
      setData(finalData);
    });
  };

  const fetcDessert = n => {
    setModalVisible(false);
    // console.log('in Dessert');
    setName(n);
    finalData.length = 0;
    data.map(item => {
      if (item.type === 3) {
        // console.log('item in fetchStarter', item);
        finalData.push(item);
      }
      // console.log('Final Data', finalData);
      setData(finalData);
    });
  };

  const fetcDrinks = n => {
    setModalVisible(false);
    setName(n);
    finalData.length = 0;
    data.map(item => {
      if (item.type === 4) {
        // console.log('item in fetchStarter', item);
        finalData.push(item);
      }
      // console.log('Final Data', finalData);
      setData(finalData);
    });
  };

  const handleFlagTrue = (value, item, index) => {
    // console.log('Indexxxx==========================113', index, value);
    if (value == 0) {
      item['qtydemand'] = value;
      dispatch({type: 'REMOVE_ITEM', payload: [item.id, item]});
      setTrue(false);
      setIndex(index);
    } else {
      item['qtydemand'] = value;
      dispatch({type: 'ADD_CART', payload: [item.id, item]});
    }
    setRefresh(!refresh);
  };

  return (
    <View style={{position: 'absolute', top: 2}}>
      <View style={{position: 'absolute', marginTop: 330, left: 10}}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'serif',
            color: '#30336b',
            fontWeight: 'bold',
          }}>
          {getName}
        </Text>
      </View>

      {/* FlatList */}

      <View style={{marginTop: 25}}>
        <ScrollView style={{height: height * 0.5, marginTop: 340}}>
          <View style={{left: 50}}>
            <FlatList
              data={getData}
              renderItem={({item, index}) => {
                // console.log('Item in flatList', item);
                return (
                  <View style={{width: width}}>
                    <View style={{position: 'absolute', marginTop: 25}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontFamily: 'serif',
                        }}>
                        {item.id}
                      </Text>
                    </View>

                    <View style={{left: 20, width: width, marginTop: 25}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontFamily: 'serif',
                        }}>
                        Name: {item.name}
                      </Text>
                    </View>

                    <View style={{left: 20, width: width}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontFamily: 'serif',
                        }}>
                        Description: {item.description}
                      </Text>
                    </View>
                    <View style={{left: 100, width: width}}>
                      {item.status == 'VEG' ? (
                        <Image
                          source={require('../images/veg.png')}
                          resizeMode={'contain'}
                          style={{height: height * 0.1, width: width * 0.1}}
                        />
                      ) : (
                        <Image
                          source={require('../images/nonVeg.png')}
                          resizeMode={'contain'}
                          style={{height: height * 0.1, width: width * 0.1}}
                        />
                      )}
                    </View>

                    <View
                      style={{
                        left: 10,
                        width: width,
                        position: 'absolute',
                        top: 95,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'serif',
                          color: 'black',
                          fontSize: 16,
                        }}>
                        Price:{item.price}
                      </Text>
                    </View>
                    <View style={{position: 'absolute', left: 250, top: 20}}>
                      {getTrue ? (
                        <InputSpinner
                          max={10}
                          min={0}
                          step={1}
                          colorMax={'#30336b'}
                          colorMin={'#30336b'}
                          color={'#30336b'}
                          value={Qty}
                          selectTextOnFocus={true}
                          style={{
                            alignSelf: 'center',
                            padding: 10,
                          }}
                          height={35}
                          width={40}
                          onChange={num => handleFlagTrue(num, item, index)}
                        />
                      ) : (
                        <TouchableOpacity onPress={() => setTrue(true)}>
                          <LinearGradient
                            colors={['#09096c', '#4285f4']}
                            start={{x: 1, y: 1}}
                            end={{x: 0, y: 0}}
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: 50,
                              height: 50,
                              borderRadius: 10,
                              height: 35,
                              left: -10,
                            }}>
                            <Text
                              style={{
                                fontSize: 16,
                                textAlign: 'center',
                                color: 'white',
                                fontFamily: 'serif',
                                backgroundColor: 'transparent',
                              }}>
                              ADD{' '}
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>

      {/* Modal View */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 300,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: 'black',

              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              width: width * 0.7,
              height: height * 0.3,
            }}>
            <TouchableOpacity onPress={() => fetchStarter()}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontFamily: 'serif',
                }}>
                Starter: {getData.length}
              </Text>
            </TouchableOpacity>
            <View style={{marginVertical: 5}} />
            <TouchableOpacity onPress={() => fetcMainCourse('Main Course')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontFamily: 'serif',
                }}>
                Main Course: {getMainCourse.length}
              </Text>
            </TouchableOpacity>
            <View style={{marginVertical: 5}} />
            <TouchableOpacity onPress={() => fetcDessert('Desserts')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontFamily: 'serif',
                }}>
                Dessert: {getDessert.length}
              </Text>
            </TouchableOpacity>
            <View style={{marginVertical: 5}} />
            <TouchableOpacity onPress={() => fetcDrinks('Drinks')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontFamily: 'serif',
                }}>
                Drinks: {getDrinks.length}
              </Text>
            </TouchableOpacity>
            <View style={{marginVertical: 5}} />
            <Pressable
              style={{
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                // backgroundColor: '#2196F3',
                position: 'absolute',
                top: 6,
                right: 5,
                justifyContent: 'flex-end',
                alignSelf: 'flex-end',
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                <FIcon name={'window-close'} size={14} color={'black'} />
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{padding: 200, position: 'absolute', marginTop: 300, left: -90}}>
        <LinearGradient
          colors={['#ffbe76', '#4285f4']}
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
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                // margin: 10,
                color: 'white',
                fontFamily: 'serif',
                backgroundColor: 'transparent',
              }}>
              Menu{' '}
            </Text>
          </TouchableOpacity>
          <Animatable.Text
            animation="tada"
            // easing="ease-out"
            iterationCount="infinite"
            style={{textAlign: 'center'}}>
            <FIcon name="pizza-slice" size={13} color="#FFF" />
          </Animatable.Text>
        </LinearGradient>
      </View>
      {getTrue ? <Cart refresh={refresh} setRefresh={setRefresh} /> : <></>}
    </View>
  );
}
