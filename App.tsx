import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import RootStack from './Navigation'
export class App extends Component{
    constructor(props : any) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <RootStack/>
            </View>
    );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    }
});
