import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Button, Image} from 'react-native-elements';

export default class MyAccountGuest extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        const {goToScreen} = this.props;
        return (
            <View style={styles.viewBody}>
                <Image
                    source={require('../../../assets/img/image-my-account-guest-01.jpg')}
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode='contain'
                />
                <Text style={styles.title}>Consulta tu perfil</Text>
                <Text style={styles.description}>¿Como describirias tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado más y comenta como ha sido tu experiencia.</Text>
                <View style={styles.viewBody2}>
                    <Button 
                        buttonStyle={styles.btnViewProfile}
                        title="Ver tu perfil"
                        onPress={() => goToScreen("Login")}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },
    image: {
        height: 300,
        marginBottom: 40
    },
    title: {
        fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 10
    },
    description: {
        textAlign: "center",
        marginBottom: 10
    },
    btnViewProfile: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'center',
        width: '100%',
        backgroundColor: '#00a680'
    }
})