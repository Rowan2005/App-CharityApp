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
    ScrollView, Image} from 'react-native';
    import firebase from 'firebase';
    import db from '../config';
    import MyHeader from '../components/MyHeader';
    
    export default class MyDonationsScreen extends Component{
        constructor(){
            super()
            this.state={
                DonorIDNo:"",
                AmountDonated:0,
                LastDonatedDate:"",
                PendingDonationAmount:0,
                TotalDonated:0,
            }
        }
        render(){
            return(
                <View>
                  
                  <MyHeader title="My Savings" navigation={this.props.navigation}/>
                   <ScrollView style={{width:'100%'}}>
                  <Image source={require("../Images/balancesavings.jpg")} style={{width:200, height:200}}/>
                  <Text></Text>
                    <Text>My Saving Details</Text>
                    <Text></Text>
                    <Text>Depositor ID Number</Text>
                    <TextInput
                 style={styles.formTextInput}
                 placeholder ={"DepositorID Number"}
                 maxLength ={14}
                 onChangeText={(text)=>{
                   this.setState({
                    DonorIDNo: text
                   })
                 }}
               />
               <Text></Text>
               <Text>Amount Deposited</Text>
               <TextInput
              style={styles.formTextInput}
              placeholder ={"Amount Deposited"}
              maxLength ={12}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  AmountDonated: text
                })
              }}
            />
            <Text></Text>
            <Text>Pending Deposit Amount</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Pending Deposit Amount"}
              maxLength ={12}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  PendingDonationAmount: text
                })
              }}
            />
            <Text></Text>
            <Text>Total Amount Deposited</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Total Amount Deposited"}
              maxLength ={12}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  TotalDonated: text
                })
              }}
            />
            </ScrollView>
                </View>
            )
        }
    }
    const styles = StyleSheet.create({
      KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        //alignItems:'center'
      },
    }) 