
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Card, Button } from "react-native-paper";
import React, { useState } from "react";
import { Routes } from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation<any>();

  const navigationToQuotes = () => {
    navigation.navigate(Routes.QUOTES_SCREEN);
  };
  const navigationToTerms = () => {
    navigation.navigate(Routes.TERMS_SCREEN);
  };
  const [secureTextEntry, setPasswordVisible] = useState(true);
  return (
    <View style={styles.container}>
     <Text style={styles.paragraph}>
  <Text style={{color: 'green'}}>Br</Text>eaking
  <Text style={{color: 'green'}}> Ba</Text>d
</Text>

      <Card>
      <Card.Cover source={{ uri: 'https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_.jpg' }} /> 
        <TextInput label="Email" placeholder="exemple@test.com" />
        <TextInput
          secureTextEntry={secureTextEntry}
          label="Password"
          right={
            <TextInput.Icon
              icon={secureTextEntry ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible(!secureTextEntry)}
            />
          }
        />
        <View style={styles.viewBtn}>
            <Button style={styles.btn} buttonColor="green" mode="contained" onPress={navigationToQuotes}>
            Voir des citations!
            </Button>
        </View>
      </Card>
      <Text style={styles.terms} onPress={navigationToTerms}>Read Terms and conditions.</Text>
      <StatusBar style="auto" />
    </View>
  );
}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
      },
      paragraph: {
        margin: 24,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        
      },
      cardContainer: {
        padding: 20,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 5,
        borderRadius: 10,
        overflow: 'hidden',
      },
      inputContainer: {
        marginTop: 20,
      },
      textInput: {
        marginBottom: 20,
      },
      viewBtn: {
        marginTop: 20,
        alignItems: 'center',
      },
      btn: {
        width: '100%',
        height: 40,
        borderRadius: 10,
      },
      terms: {
        color: '#999999',
        marginTop: 20,
        fontSize: 18,
        alignSelf: 'center',
        textDecorationLine: 'underline',
      },
    });