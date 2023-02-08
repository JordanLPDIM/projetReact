
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Card, Button } from "react-native-paper";
import React, { useState } from "react";
import { Routes } from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";
import { useDescription } from "../hooks/useDescription";
import { useImage } from "../hooks/useImages";

export function RandomQuoteScreen({ route } : any) {
    const { item } = route.params;
  
    const quote = item.quote;
    const author = item.author;
    return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Card>
        <Card.Content>
            <Text style={styles.description}>{quote}</Text>
        </Card.Content>
    </Card>
    </View>
    );
  }

  const styles = StyleSheet.create({
    description: {
      color: 'grey',
      textAlign: 'center',
      margin:10,
      fontSize:16,
     
    },
  });