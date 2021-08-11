import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import RootStack from './app-navigation/RootStack';

const style = StyleSheet.create({
    main: {
        flex: 1,
    }
})

const Home = () => {
    return(
        <SafeAreaView style={style.homeMain}>
                <RootStack />     
        </SafeAreaView>
    )
}

export default Home;