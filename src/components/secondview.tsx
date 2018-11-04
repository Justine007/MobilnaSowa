import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface AuthState {
}
interface AuthProps {
}

export default class SecondView extends Component<AuthProps, AuthState>{
    constructor(props : AuthProps) {
        super(props)

    }

    render() {
        return (
            <View>
                <Text>Drugi view</Text>
            </View>
        )
    }
}
