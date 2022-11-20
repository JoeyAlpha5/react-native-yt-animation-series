import React, {useRef, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Animated,
  Easing,
} from 'react-native';


const App: () => Node = () => {

  let opacityValue = useRef(new Animated.Value(0)).current;

  // animated value
  useEffect(() => {
    Animated.timing(opacityValue,{
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  },[])


  return (
    <SafeAreaView style={styles.mainView}>
      <Animated.View style={[styles.blackBox,{opacity: opacityValue}]}>

      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#202021',
  },
  blackBox:{
    width:300,
    height:300,
    borderRadius:20,
    backgroundColor:'#5D5D5D',
  }
});

export default App;
