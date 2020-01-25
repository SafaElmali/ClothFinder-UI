import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

const HeaderTitle = (props) => {
    const { title } = props;

    return (
        <View style={{ marginLeft: 16 }}>
            <Text style={{ fontSize: 18 }}>{title}</Text>
        </View>
    )
}

export default HeaderTitle;