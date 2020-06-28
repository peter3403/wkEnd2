import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, View, Image, ScrollView, TouchableOpacity, Text, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Constants from "expo-constants";
import * as Location from "expo-location";
import { Icon } from "react-native-elements";
import metroJson from "./json/metro.json";

import Header from "./src/components/Header";


const App = () => {
  return (
    
        
    <ScrollView style={styles.container}>
      <Header/>
            <View>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/taipei-h-imperial_3/hotel/taipei-tw.html?cid=1647692')}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs2/hotel1.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>台北亞太帝國</Text>
                  <Text style={styles.foodText}>台北市忠孝西路一段50號11樓</Text>
                  
                    <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                  <View style={styles.rank}>
                  <View style={styles.rank1}>
                      <Image source={require("./imgs2/metropolitan.png")} style={styles.rankPic}/>                      
                      <Text style={styles.rankText}>台北市中心</Text>                      
                      
                    </View>
                    <View style={styles.rank2}>
                      <Image source={require("./imgs2/wifi-connection.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>免費Wi-Fi</Text>
                    </View>    
                  </View>
                                  
                </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/morwing-hotel-culture-vogue/hotel/taipei-tw.html?cid=1647692')}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs2/hotel2.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>清翼居采風館</Text>
                  <Text style={styles.foodText}>台北市南陽街8號5樓</Text>
                  
                    <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                  <View style={styles.rank}>
                  <View style={styles.rank1}>
                      <Image source={require("./imgs2/metropolitan.png")} style={styles.rankPic}/>                      
                      <Text style={styles.rankText}>台北市中心</Text>                      
                      
                    </View>
                    <View style={styles.rank2}>
                      <Image source={require("./imgs2/wifi-connection.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>免費Wi-Fi</Text>
                    </View>    
                  </View>
                                  
                </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/taiwan-youth-hostel-capsule-hotel/hotel/taipei-tw.html?cid=1647692')}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs2/hotel3.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>台灣青旅膠囊旅店</Text>
                  <Text style={styles.foodText}>台北市青島西路11號</Text>
                  
                    <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                  <View style={styles.rank}>
                  <View style={styles.rank1}>
                      <Image source={require("./imgs2/bread.png")} style={styles.rankPic}/>                      
                      <Text style={styles.rankText}>免費早餐</Text>                      
                      
                    </View>
                    <View style={styles.rank2}>
                      <Image source={require("./imgs2/metropolitan.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>台北市中心</Text>
                    </View>    
                  </View>
                                  
                </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/flip-flop-hostel-garden_3/hotel/taipei-tw.html?cid=1647692')}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs2/hotel4.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>夾脚拖的家</Text>
                  <Text style={styles.foodText}>台北市長安西路122號</Text>
                  
                    <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                  <View style={styles.rank}>
                  <View style={styles.rank1}>
                      <Image source={require("./imgs2/bread.png")} style={styles.rankPic}/>                      
                      <Text style={styles.rankText}>免費早餐</Text>                      
                      
                    </View>
                    <View style={styles.rank2}>
                      <Image source={require("./imgs2/wifi-connection.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>免費Wi-Fi</Text>
                    </View>    
                  </View>
                                  
                </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/moshamanla-main-station/hotel/taipei-tw.html?cid=1647692')}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs2/hotel5.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>摩莎曼拉精品旅館</Text>
                  <Text style={styles.foodText}>台北市開封街一段33號</Text>
                  
                    <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                  <View style={styles.rank}>
                  <View style={styles.rank1}>
                      <Image source={require("./imgs2/metropolitan.png")} style={styles.rankPic}/>                      
                      <Text style={styles.rankText}>台北市中心</Text>                      
                      
                    </View>
                    <View style={styles.rank2}>
                      <Image source={require("./imgs2/wifi-connection.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>免費Wi-Fi</Text>
                    </View>    
                  </View>
                                  
                </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/caesar-park-hotel-taipei_6/hotel/taipei-tw.html?cid=1647692')}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs2/hotel6.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>台北凱撒大飯店</Text>
                  <Text style={styles.foodText}>台北市忠孝西路一段38號</Text>
                  
                    <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                  <View style={styles.rank}>
                  <View style={styles.rank1}>
                      <Image source={require("./imgs2/metropolitan.png")} style={styles.rankPic}/>                      
                      <Text style={styles.rankText}>台北市中心</Text>                      
                      
                    </View>
                    <View style={styles.rank2}>
                      <Image source={require("./imgs2/taxi.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>機場接送</Text>
                    </View>    
                  </View>
                                  
                </View>
            </TouchableOpacity> 
            </View>

            {/* <View>
            <TouchableOpacity style={styles.food2}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs/no7.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>海天香餃</Text>
                  <Text style={styles.foodText}>臺北市萬華區和平西路三段168號</Text>
                    <View style={styles.rank}>
                      <Image source={require("./imgs/dot.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>第七名</Text>
                      <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                    </View>
                </View>
            </TouchableOpacity> 
            </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex:1,
      
  },

  HeaderStyle: {
      
      justifyContent: "center",
      alignItems: "center",
      height: 70,
      paddingTop: 30,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      // Android Only
      elevation: 2
  },

  cardSectionStyle: {
      //paddingTop:20,
      height:280,
      backgroundColor: "#FFEBCD",
      margin:25,
      shadowOpacity:2,
      shadowColor:"gray",
      shadowOffset:{width:1,height:3}
    },

  img:{
      //top:20,
      position:"relative",
      height:200,
      width:365,
      //left:20,
      borderWidth:1,
      borderColor:"gray",
      //borderRadius:25,
    },

  foodHeaderText: {
      color:"#000",
      fontSize:28,
      position:'relative',
      top:8,
      left:10
      //textAlign: "center",
  },

  foodText: {
    left:33,
    top:25
  },
  rankPic:{
    left:1,
    width:25,
    height:25,
    top:2,
  },

  rank: {
    backgroundColor:"#fff",
    width:110,
    height:81,
    left:255,
    top:-63.8,
    borderWidth:1,
    borderColor:"gray",
    borderLeftWidth:0,
    borderBottomWidth:0,
    //borderRadius:5
  },

  rank1: {
    left:10,
    top:5,
  },
  rank2: {
    left:10,
    top:5,
  },

  rankText: {
    
    left:27,
    top:-17,
    fontSize:14,
  },

  loimg: {
    width:20,
    height:20,
    top:6,
    left:10,
  }
});

export default App;