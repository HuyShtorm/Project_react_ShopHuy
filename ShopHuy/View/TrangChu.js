<<<<<<< HEAD
import React, {useRef, useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList,ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import data from '../data/datahome';
import datasale from '../data/datasale';
import { useNavigation } from '@react-navigation/native';

import SanPham from '../View/SanPham';
const TrangChu = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
//tim kiem 
const [filteredData, setFilteredData] = useState([]);
  const renderSaleItem = ({ item }) => (
    <View style={styles.view1}>
      <Text style={styles.saleText}>Sale</Text> {/* Thêm phần tiêu đề "Sale" */}
      <Image source={item.imageLocal} style={styles.img5} />
      <Pressable onPress={() => navigation.navigate('SanPham',{data:item})}>
      <View style={styles.view2}>
        <Text style={styles.text1}>{item.name}</Text>
        <Text style={styles.text2}>₫{item.price}</Text> {/* Sử dụng một style mới cho giá để giảm kích thước */}
      </View>
      </Pressable>
    </View>
  );
 useEffect(() => {
  // Lọc dữ liệu dựa trên từ khóa tìm kiếm
  const filteredResults = data.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  setFilteredData(filteredResults);
  console.log('Filtered Data:', filteredResults);
}, [searchText]);

  
  useEffect(() => {
    // Sắp xếp lại dữ liệu lọc
    const sortFilteredData = () => {
      const sortedData = [...filteredData].sort((a, b) =>
        a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' })
      );
      setFilteredData(sortedData);
    };
  
    sortFilteredData();
  }, [filteredData]);
  
  return (
    <ScrollView>
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
          <Image style={styles.img3} source={require('../img/shop.png')} />
        </Pressable>
        <Pressable>
          <Image style={styles.img4} source={require('../img/chatcc.png')} />
        </Pressable>
      </View>
      <ScrollView>
<View style={styles.saleContainer}>
<Text style={styles.carouselTitle}>Sale</Text>
      <Carousel
        data={datasale}
        renderItem={renderSaleItem}
        sliderWidth={350}
        itemWidth={120}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        loop={true}
        autoplay={true}
        autoplayInterval={100}
        layout={'default'}
        layoutCardOffset={9}
      />
      </View>
      </ScrollView>
      <View style={styles.saleContainer}>
      <Text style={styles.carouselTitle}>Đề Xuất </Text>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('SanPham',{data:item})}>
          <View style={styles.view1}>
            <Image source={item.imageLocal} style={styles.img5} />
            <View style={styles.view2}>
              <Text style={styles.text1}>{item.name}</Text>
              <Text style={styles.text2}>₫{item.price}</Text>

            </View>
          </View></Pressable>
        )}
        keyExtractor={item => item.id}
      /></View>
      <View style={styles.view4}>
        <Pressable>
          <Image style={styles.img3} source={require('../img/list.png')} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image style={styles.img3} source={require('../img/home.png')} />
        </Pressable>
        <Pressable>
          <Image style={styles.img3} source={require('../img/back1.png')} />
        </Pressable>
      </View>
    </View></ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
=======
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
    
>>>>>>> 9aedd4de0c1cd864ed29a9fd288adbacfc1c8c24
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F93409',
<<<<<<< HEAD
    width: '100%',
  },
  img3: {
    width: 24,
    height: 24,
  },
  img4: {
    width: 50,
    height: 24,
  },
  searchInput: {
    height: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginLeft: 0,
    borderRadius: 5,
    width: 250,
  },
  view1: {
    alignItems: 'center',
    margin: 15,
    borderRadius: 10,
    backgroundColor: '#EBFFFA',
    padding: 10,
  },
  img5: {
    width: 120, // Giảm kích thước ảnh
    height: 120, // Giảm kích thước ảnh
    resizeMode: 'contain',
  },
  view2: {
    alignItems: 'center',
  },
  
  text1: {
    fontSize: 16, // Giảm kích thước chữ
    fontWeight: 'bold',
    width: 120,
    textAlign: 'center',
    marginVertical: 5,
  },
  text2: {
    fontSize: 14, // Giảm kích thước chữ
    width: 120,
    textAlign: 'center',
  },
  carouselContainer: {
    marginBottom: 20,
   
  },
  saleContainer: {
    marginTop : 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#F93409',
    padding: 10,
    marginBottom: 20,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recommendationContainer: {
    marginBottom: 20,
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  saleText: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    fontSize: 12,
    zIndex: 1,
  },
  view4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F93409',
    width: '100%',
  },
});

export default TrangChu;
=======
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
>>>>>>> 9aedd4de0c1cd864ed29a9fd288adbacfc1c8c24
