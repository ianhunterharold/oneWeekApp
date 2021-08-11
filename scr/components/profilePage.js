import React from 'react';
import { Text,View,StyleSheet } from 'react-native';

const style = StyleSheet.create({
    main: {
        flex: 1,
    }
})

const ProfilePage = () => {
    return(
        <View style={style.main}>
            <Text>
                Inside of profile page
            </Text>
        </View>
    )
};

export default ProfilePage;
