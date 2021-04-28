import React,{useEffect,useState} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import List from '../components/List';
import api from '../api';


export default function Home(){
  const [animes, setAnimes] = useState([])
  useEffect(()=>{
    async function getAnime(){
      const response = await api.get('/filmes');
      const {filmes} = response.data;
      setAnimes(filmes)
      console.log(animes)
    }
    getAnime();
  },[])

  return (
    <View style={styles.container} >
      <List anime={animes} />
    </View>
  );
}
const styles = StyleSheet.create({
container:{
  backgroundColor:'grey',
  flex:1,
  width:'100%',
  }
})
 