
import React, { useState, createContext } from 'react';

// You can import from local files
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useQuery } from "@tanstack/react-query";
import { useQuotes } from '../hooks/useQuotes';
import { useImage } from '../hooks/useImages';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const StarshipsContext = createContext(null);

const Item = ({quote, author }: any) => {

    const source = useImage(author);
    return (
      <Card style={styles.cardContainer}>
        <Card.Cover source={source} /> 
        <Card.Content style={styles.cardContainerContent}>
        <Text style={styles.auteurStyle}>{author}</Text>
            <Text style={styles.quoteStyle}>{quote}</Text>
        </Card.Content>
    </Card>
    );
  };


export function QuoteScreen() {
    const navigation = useNavigation();
    const renderItem = ({ item }: any) => <TouchableOpacity
    onPress={() => navigation.navigate('Details', { item })}>
    <Item quote={item.quote} author={item.author} />
  </TouchableOpacity>;
       
    const { data, status } = useQuotes();
    
  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'error') {
    return <Text>Error!</Text>;
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
     {/*  <View style={styles.viewBtn}>
             <Button style={styles.btn} buttonColor="black" mode="contained">
            Citation random
            </Button> 
        </View> */}

      <View style={styles.container}>
        <FlatList style={styles.containerFlat}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.author}
    />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
   
  },
  container: {
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom:20,
  },
  
  auteurStyle: {
    textAlign:'center',
    fontSize:20,
    
  },
  cardContainer:{
    margin:5,
  },
  cardContainerContent:{
 

  },
  textContent:{
    color:'blue',
    textAlign:'center',
  },
  
  quoteStyle:{
    color:'grey',
    fontStyle: 'italic',
    fontSize:17,
  },

  viewBtn: {
    marginTop: 20,
    alignItems: 'center',
  },
  btn: {
    width: '60%',
    height: 40,
    borderRadius: 10,
  },


});