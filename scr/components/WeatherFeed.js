import React from 'react';
import { Text,StyleSheet,View } from 'react-native';

const style = StyleSheet.create({
    main: {
        flex: 1,
    }
})

const WeatherFeed = () => {
    return(
    <>
        <View style={style.main}>
        <Text>
            Inside of profile page
        </Text>
        </View>
    </>
    )
};

export default WeatherFeed;
