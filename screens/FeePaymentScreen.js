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
    
    export default class FeePaymentScreen extends Component{
        constructor(){
            super()
            this.state={
                FIRSTNAME:"",
                LASTNAME:"",
                EMAILiD:"",
                CONAaCT:0,
                SCHOOLNAME:"",
                SCHOOLIDNO:0,
                BANKNAME:"",
                NAMEOFACHOLD:"",
                BANKACNO:0,
                BANKIFSCNO:0,
                AADHARCARD:0,
                BANKBRANCH:"",
                
            }
        }
        render(){
            return(
                <View>
                  
                  <MyHeader title="Easy Fee Payment" navigation={this.props.navigation}/>
                   <ScrollView style={{width:'100%'}}>
                  <Text></Text>
                    <Text>Student Details</Text>
                    <Text></Text>
                    <Text>First Name</Text>
                    <TextInput
                 style={styles.formTextInput}
                 placeholder ={"First Name"}
                 maxLength ={14}
                 onChangeText={(text)=>{
                   this.setState({
                    FIRSTNAME: text
                   })
                 }}
               />
               <Text></Text>
               <Text>Last Name</Text>
               <TextInput
              style={styles.formTextInput}
              placeholder ={"Last Name"}
              maxLength ={12}
              onChangeText={(text)=>{
                this.setState({
                  LASTNAME: text
                })
              }}
            />
            <Text></Text>
            <Text>Email ID</Text>
             <TextInput
                 style={styles.formTextInput}
                 placeholder ={"abc@example.com"}
                 keyboardType ={'email-address'}
                 onChangeText={(text)=>{
                   this.setState({
                     EMAILiD: text
                   })
                 }}
               />
            <Text></Text>
            <Text>Contact</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Contact"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  CONAaCT: text
                })
              }}
            />
            <Text></Text>
            <Text>School Name</Text>
                    <TextInput
                 style={styles.formTextInput}
                 placeholder ={"School Name"}
                 maxLength ={100}
                 onChangeText={(text)=>{
                   this.setState({
                    SCHOOLNAME: text
                   })
                 }}
               />
               <Text></Text>
               <Text>School ID Number</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"SchoolIDNO."}
              maxLength ={15}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  SCHOOLIDNO: text
                })
              }}
            />
            <Text></Text>
            <Text>Bank Details</Text>
            <Text></Text>

            <Text>Bank Name</Text>
            <TextInput
                 style={styles.formTextInput}
                 placeholder ={"Bank Name"}
                 maxLength ={30}
                 onChangeText={(text)=>{
                   this.setState({
                     BANKNAME: text
                   })
                 }}
               />
               <Text></Text>
            <Text>Name of A/c Holder</Text>
                <TextInput
                 style={styles.formTextInput}
                 placeholder ={"Name of A/c Holder"}
                 maxLength ={30}
                 onChangeText={(text)=>{
                   this.setState({
                     NAMEOFACHOLD: text
                   })
                 }}
               />
     <Text></Text>

           
            <Text>Bank A/c Number</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Bank A/c Number"}
              maxLength ={18}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  BANKACNO: text
                })
              }}
            />
               <Text></Text>
               <Text>Bank IFSC</Text>
                <TextInput
                 style={styles.formTextInput}
                 placeholder ={"Bank IFSC"}
                 maxLength ={11}
                 onChangeText={(text)=>{
                   this.setState({
                     BANKIFSCNO: text
                   })
                 }}
               />
               <Text></Text>
               <Text>AAdharCard</Text>
               <TextInput
              style={styles.formTextInput}
              placeholder ={"Aadhar Card"}
              maxLength ={12}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  AADHARCARD: text
                })
              }}
            />
               <Text></Text>
               <Text>Bank Branch</Text>
               <TextInput
                    style={styles.loginBox}
                    placeholder="Bank Branch"
                    multiline = {true}
                    onChangeText={(text)=>{
                      this.setState({
                        BANKBRANCH: text
                      })
                    }}
                  />
                  <Text></Text>
            <TouchableOpacity style = {{backgroundColor:'gold'}}>
                <Text>Pay Today</Text>
        </TouchableOpacity>
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