
import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import {icones, SIZES} from '../../../constants'

const Welcome = () => {
  const router = useRouter()
  return (
    <View>
      <View styele={styles.container}>
        <Text style={styles.userName}>Hello Amar</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
       <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput}
          value=""
          onChange={() => {}}
          placeholder="What are you looking for ?"
          />

        </View>
       </View>
      </View>
    </View>
  )
}

export default Welcome