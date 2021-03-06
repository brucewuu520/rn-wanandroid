import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Dimensions,
    TouchableNativeFeedback
} from 'react-native'

import { Hideo } from 'react-native-textinput-effects'
import Icon from 'react-native-vector-icons/Ionicons'




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class LoginView extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }
    }



    render() {

        const {themeColor,login} = this.props 
        return (
            <View style={styles.contentWarpper}>
               
                <View style={styles.inputWarpper}>

                    <Hideo
                        iconClass={Icon}
                        iconName={'md-person'}
                        iconColor={'white'}
                        value={this.state.user}
                        onChangeText={(user) => this.setState({ user })}
                        iconBackgroundColor={themeColor}
                        selectionColor={themeColor}
                        inputStyle={[styles.inputStyle,{borderBottomColor:themeColor}]}
                    />

                    <Hideo
                        iconClass={Icon}
                        iconName={'md-key'}
                        iconColor={'white'}
                        value={this.state.pwd}
                        secureTextEntry={true}
                        onChangeText={(pwd) => this.setState({ pwd })}
                        iconBackgroundColor={themeColor}
                        selectionColor={themeColor}
                        inputStyle={[styles.inputStyle,{borderBottomColor:themeColor}]}
                    />
                </View>

                <TouchableNativeFeedback key='login' background={TouchableNativeFeedback.Ripple('rgba(52,52,52,0.5)', true)}  onPress={() =>login(this.state.user, this.state.pwd)}>

                    <View style={[styles.loginWarpper,{backgroundColor:themeColor}]}>
                    <Text style={styles.loginText}>登 录</Text>
                    </View>
                   
                </TouchableNativeFeedback>

            </View>

        )
    }
}


const styles = StyleSheet.create({
    contentWarpper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputWarpper: {
        marginTop:32,
        height: 150,
        width:windowWidth*0.7
    },
    inputStyle: {
        color: '#464949',
        borderBottomColor:'#e91e63',
        borderBottomWidth: 2,
        marginLeft: 8,
    },
    loginWarpper: {
        borderRadius: windowWidth * 0.2,
        marginTop: 48,
        height: windowWidth * 0.4,
        width: windowWidth * 0.4,
        backgroundColor: '#e91e63',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        fontSize: 32,
        color: 'white'
    }
})



