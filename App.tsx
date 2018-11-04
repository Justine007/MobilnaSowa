import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AuthComponent from './src/components/AuthComponent';
import SecondView from "./src/components/secondview";
export class App extends Component{
    constructor(props : any) {
        super(props)
    }

    componentDidMount () {
        console.log('mount app')
    }
    render() {
        return (
            <View style={styles.container}>
                <RootStack/>
            </View>
    );
    }
}

const RootStack = createStackNavigator({
        Auth: { screen: AuthComponent },
        Second: { screen: SecondView }
    },
    {
        initialRouteName: 'Auth'
    });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
