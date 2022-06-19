import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import COLORS from '../constants/colors'
import plants from '../constants/plants'

const width = Dimensions.get('screen').width / 2 - 30

const HomeScreen = ({ navigation }) => {

  // State
  const [categoryIndex, setCategoryIndex] = useState(0)

  const categories = ['popular', 'organic', 'indoors', 'synthetic']

  // Category component
  const CategoryList = () => (
    <View style={styles.categoryContainer}>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setCategoryIndex(index)}
          activeOpacity={0.8}
        >
          <Text style={[styles.categoryText, categoryIndex === index && styles.categoryTextSeleted]}>
            {item.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )

  // Card component
  const Card = ({ plant }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Details', plant)}
    >
      <View style={styles.card}>
        <View style={{ alignItems: 'flex-end' }}>
          <View style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: plant.like ? 'rgba(245, 42, 42, 0.2)' : 'rgba(0,0,0,0.2)'
          }}>
            <Icon
              name='favorite'
              size={18}
              color={plant.like ? COLORS.red : COLORS.dark}
            />
          </View>
        </View>
        <View style={{ height: 100, alignItems: 'center' }}>
          <Image
            source={plant.img}
            style={{ flex: 1, resizeMode: 'contain' }}
          />
        </View>
        <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10 }}>{plant.name}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
            ${plant.price}
          </Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: COLORS.green,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5
            }}>
            <Text style={{ fontSize: 22, color: COLORS.white, fontWeight: 'bold' }}>+</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white
      }}
    >
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
          <Text style={{ fontSize: 38, fontWeight: 'bold', color: COLORS.green }}>Plant Shop</Text>
        </View>
        <Icon name='shopping-cart' size={28} />
      </View>

      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <View style={styles.searchContainer}>
          <Icon name='search' size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder='Search' style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <Icon name='sort' size={30} color={COLORS.white} />
        </View>
      </View>

      <CategoryList />

      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => (
          <Card plant={item} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    flex: 1
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  categoryText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold'
  },
  categoryTextSeleted: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  }
})