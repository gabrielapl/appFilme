import React from 'react';
import {View,Text,FlatList,StyleSheet,TouchableOpacity,Image } from 'react-native'

const List = ({anime}) =>{
  return(
    <View style={styles.container} >
      <FlatList  
      style ={styles.slideBox}
      data={anime}
      renderItem={({item})=> (
        <TouchableOpacity 
        >
          <View>
            <Image style={[styles.boxImage,{marginRight:5},{marginLeft:2}]} source={{uri: item.img}} />
            <View style={[styles.boxBox,{marginRight:5},{marginLeft:2}]} > 
            <Text style={styles.boxText} > {item.title} </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      Vertical
      numColumns={2}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  slideBox:{
    width:'100%',
    height:180,
    marginTop:40,

  },
  boxImage:{
    height:300,
    width:200,
  },
  boxBox:{
    backgroundColor: 'white',
    height:40,
    justifyContent:'center',
    alignItems:'flex-start',
    marginBottom:30,
  },
  boxText:{
    position:'absolute',
    color:'black',
    fontSize:15,
    fontWeight:'bold',
    marginLeft:10,
    marginVertical:10,
  }

})

export default List;