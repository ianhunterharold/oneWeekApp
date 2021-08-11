import React from 'react';
import { Text,View,StyleSheet } from 'react-native';

const style = StyleSheet.create({
    main: {
        flex: 1,
    }
})

const LandingPage = () => {
    return(
        <View style={style.main}>
            <Text>
                Inside of Landinggg page
            </Text>
        </View>
    )
};

export default LandingPage;