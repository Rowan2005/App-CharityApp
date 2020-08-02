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
    import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

    var radio_props = [
      
      {label: 'Education', value: 1 },
      {label: 'Sports', value: 2 },
      {label: 'Medical', value: 3 },
      {label: 'Mortgage', value: 4 },
      {label: 'Auto Loan', value: 5 },

    ];
    export default class LoanAmountScreen extends Component{
        constructor(){
            super()
            this.state={
                LoanIDNo:"",
                AmountDisbursed:0,
                MonthlyEMI:0,
                DateLastPaid:"",
                AmountLastPaid:0,
                TotalPaid:0,
                BalanceOutstanding:0,
                VAlue:0,
            }
        }
        render(){
            return(
                <View>
                  
                  <MyHeader title="Loan Details" navigation={this.props.navigation}/>
                  <ScrollView style = {{height:"100%"}}>
                  <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                  <Image source={require("../Images/loan1.jpg")} style={{width:200, height:200}}/>

                  <Text>Loan Eligibility:</Text>
                  <Text></Text>

                  <Text>You can only avail 80% of the total deposited amount.</Text>
                  <Text></Text>

                  <Text> Minimum 2 years of payment has to be done to avail the loan.</Text>
                  <Text></Text>

                    <Text>To avail the loan a "GUARANTOR" is a must.</Text>
                    <Text></Text>

                    <Text>Any default in deposits within 2 years will void loan eligibility.</Text>
                    <Text></Text>

                      <Text>Relevant and verified documents should be submitted for loan approval.</Text>
                      <Text></Text>

                     <Text>Loan is eligibile for those who choose to "SAVE".</Text>
                     <Text></Text>

                     <Text>Those who choose to "DONATE" are not eligibile for loan or to claim their "DONATED AMOUNT".</Text> 
                     
                      <Text></Text>
                    <Text>Loan Details</Text>
                    <Text></Text>
                    <Text>Loan ID Number</Text>
                    <TextInput
                 style={styles.formTextInput}
                 placeholder ={"Loan ID Number"}
                 maxLength ={14}
                 onChangeText={(text)=>{
                   this.setState({
                     LoanIDNo: text
                   })
                 }}
               />
               <Text></Text>
               <Text>Amount Disbursed</Text>
                <TextInput
              style={styles.formTextInput}
              placeholder ={"Amount Disbursed"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  AmountDisbursed: text
                })
              }}
            />
            <Text></Text>
            <Text>Monthly EMI</Text>
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Monthly EMI"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  MonthlyEMI: text
                })
              }}
            />
            <Text></Text>
            <Text>Amount Last Paid</Text>
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Amount Last Paid"}
              maxLength ={6}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  AmountLastPaid: text
                })
              }}
            />
            <Text></Text>
            <Text>Total Paid</Text>
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Total Paid"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  TotalPaid: text
                })
              }}
            />
            <Text></Text>
            <Text>Balance Outstanding</Text>
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Balance Outstanding"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  BalanceOutstanding: text
                })
              }}
            />
            <Text></Text>
            <Text>Reason for Loan</Text>
              <Text></Text>
              <RadioForm
          radio_props={radio_props}
          initial={10}
          onPress={(VAlue) => {this.setState({VAlue:VAlue})}}
        />
             <TouchableOpacity style = {{backgroundColor:'gold'}}>
                <Text>I Need a Loan</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </ScrollView>
                </View>
            )
        }
    }
    const styles = StyleSheet.create({
      KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
      },
    }) 