/*
 * @Author: tonyYo
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: tonyYo
 * @LastEditTime: 2025-04-22 17:56:32
 */
import { View, Text } from 'react-native';

import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
  
    <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Link href={'/test'}>
        <Text>link</Text>
      </Link>
      </View>
  );
}

