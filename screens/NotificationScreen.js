import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
    import firebase from 'firebase';
    import db from '../config';
    import MyHeader from '../components/MyHeader';
    export default class NotificationScreen extends Component{
        render(){
            return(
                <View>
                    <MyHeader title="Notification" navigation={this.props.navigation}/>
                    <Text>Notification </Text>
                </View>
            )
        }
    }
    const styles = StyleSheet.create({

    }) 