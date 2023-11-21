import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TrangChu from '../ShopHuy/View/TrangChu';
<<<<<<< HEAD
import SanPham from '../ShopHuy/View/SanPham';
=======

>>>>>>> 9aedd4de0c1cd864ed29a9fd288adbacfc1c8c24
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='TrangChu'>
      <Stack.Screen name="TrangChu" component={TrangChu} options={{headerShown:false}}/>
<<<<<<< HEAD
      <Stack.Screen name="SanPham" component={SanPham} options={{title:'Sản Phẩm'}}/>
=======
      
>>>>>>> 9aedd4de0c1cd864ed29a9fd288adbacfc1c8c24
    </Stack.Navigator>
  </NavigationContainer>
  );
}
<<<<<<< HEAD
// <Stack.Screen name="SanPham" component={SanPham} options={{title:'Sản Phẩm'}}/>
=======

>>>>>>> 9aedd4de0c1cd864ed29a9fd288adbacfc1c8c24




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

