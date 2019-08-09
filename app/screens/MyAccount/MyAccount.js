import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Button } from 'react-native-elements';

export default class MyAccount extends Component {
    goToScreen = nameScreen => {
        console.log(nameScreen);
    }

    render() {
        return (
            <View style={styles.viewBody}>
                <Text>MyAccount Scsssreen. </Text>
                <Button title="Registro" onPress={() => this.goToScreen('Register')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})