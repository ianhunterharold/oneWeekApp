import React from 'react';
import { Text,View,StyleSheet, Button } from 'react-native';

const style = StyleSheet.create({
    main: {
        flex: 1,
    }
})



const LandingPage = (props) => {
    const { navigation } = props;
    return(
        <View style={style.main}>
            <Text>
                Landing
            </Text>
            <Button 
                onPress={()=> navigation.navigate("WeatherFeed")}
                title="Weather Feed"
                accessibilityLabel="learn more about this button"
            />
            <Button 
                onPress={()=> navigation.navigate("ProfilePage")}
                title="Profile XXX"
                accessibilityLabel="learn more about this button"
            />

        </View>
    )
};

export default LandingPage;