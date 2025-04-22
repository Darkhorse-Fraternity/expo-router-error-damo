/*
 * @Author: tonyYo
 * @Date: 2025-04-22 17:11:31
 * @LastEditors: tonyYo
 * @LastEditTime: 2025-04-22 18:05:02
 * @FilePath: /my-app/app/test/index.tsx
 */
import {Text,View } from 'react-native';

import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Link push={false} href={'/start'}>
        <Text>back</Text>
      </Link>
      </View>
  );
}

