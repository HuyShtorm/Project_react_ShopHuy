import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import data from '../data/datahome';
import { useNavigation } from '@react-navigation/native';
import React  from 'react';
import { useState } from 'react';

const TrangChu = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    return (

        <View style={styles.container}>
            <View style={styles.view}>
              {/* Thanh tìm kiếm */}
            <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
               
                 
       
                <Pressable>
                    <Image style={styles.img3} source={require('../img/shop.png')}></Image>
                </Pressable>
                <Pressable>
                    <Image style={styles.img4} source={require('../img/chatcc.png')}></Image>
                </Pressable>
            </View>

            <FlatList
                numColumns={2}
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.view1}>
                        <Image source={item.imageLocal} style={styles.img5}></Image>
                        <View style={styles.view2}>
                            <Text style={styles.text1}>{item.name}</Text>
                            <Text style={styles.text1}>{item.price}</Text>
                          
                        </View>

                    </View>
                )}
                keyExtractor={item => item.id}

            />
            <View style={styles.view4}>



                <Pressable >
                    <Image style={styles.img3} source={require('../img/list.png')}>

                    </Image>
                </Pressable>

                <Pressable onPress={()=>{navigation.navigate('Home')}}>
                    <Image style={styles.img3} source={require('../img/home.png')}></Image>
                </Pressable>

                <Pressable>
                    <Image style={styles.img3} source={require('../img/back1.png')}></Image>
                </Pressable>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Đổi màu nền toàn bộ ứng dụng
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F93409',
    width: '100%', // Rộng toàn màn hình
  },
    img: {
        width: 30,
        height: 30
    },

    ip: {

        width: 192,
        height: 30,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 30,
        backgroundColor: '#fff'
    },
    img2: {
        width: 22,
        height: 20,
        position: 'relative',
        left: 47

    },
    img3: {
        width: 24,
        height: 24,
    },
    img4: {
        width: 50,
        height: 24,


    },
    view1: {
      alignItems: 'center',
      margin: 15,
      borderRadius: 10,
      backgroundColor: '#EBFFFA',
      padding: 10,
    

    },

    img5: {
      width: 140,
      height: 140,
      resizeMode: 'contain',
    },
    view2: {
      alignItems: 'center',
    },
  
    text1: {
      fontSize: 18,
      fontWeight: 'bold',
      width: 150,
      textAlign: 'center', // Căn giữa văn bản
      marginVertical: 5, // Khoảng cách từ trên xuống và từ dưới lên
    },
    priceText: {
      color: 'red', // Màu của phần giá
    },
    ra: {
        left: -40
    },
    view4: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#F93409',
      width: '100%', // Rộng toàn màn hình
    },
       img3:{
        width:40,
        height:40,
        
       },
       searchInput: {
       
        height: 30, // Giảm chiều cao của TextInput
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginLeft: 0,
        borderRadius: 5,
        width: 250, // Giảm chiều rộng của TextInput
      },
      
      
});
export default TrangChu;