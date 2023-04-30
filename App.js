import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import CardFilme from './src/components/CardFilme';

export default function App() {
  let [filmes, setFilmes] = useState([]);


  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';
  
  useEffect(function(){                                               //toda vez q a tela é iniciada
    fetch(baseURL)                                                    //requisição a um determinado indereço na web
    .then(data => data.json())                                       //retorna uma info do json 
    .then(objeto => {                                               //pega o objeto da info e da um consle.log
      console.log(objeto);
      setFilmes(objeto.data)                                      //O objeto vai ter as info q vierem em data
    })
  },[]);  
  
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView horizontal>
        {filmes.length > 0 ? filmes.map(filme => 
        <CardFilme key={filme.id} filme={filme.attributes} />) :                     // quando o vetor filme for maior q 0 ele irá mapear e trará o card
          <Text>Carregando ...</Text>}                            
        <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDEAD',
    justifyContent: 'center',
  },
});
