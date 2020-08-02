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
    import DatePicker from 'react-native-datepicker';
    import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
    import MyHeader from '../components/MyHeader';

    var radio_props = [
      
        {label: 'School', value: 1 },
        {label: 'College', value: 2 },
        {label: 'Institution', value: 3 },
        {label: 'Individual', value: 4 },
      ];
    export default class AffiliateScreen extends Component{
        constructor(){
            super()
            this.state={
                NAME:"",
                DateOfBirth:"",
                ADDRESS:"",
                Value:0,
                CONTACT:0,
                EMAILID:"",
                AAdharCard:0,
                BankAccNo:0,
                BankName:"",
                NameofAccHolder:"",
                BankIFSC:"",
                BankBranch:"",
            }
        }
updateAffiliatedetails = ()=>{
   db.collection("Affiliate").add({
      NAME: this.state.NAME,
      DateOfBirth:this.state.DateOfBirth,
      ADDRESS:this.state.ADDRESS,
      value:this.state.Value,
      CONTACT:this.state.CONTACT,
      EMAILID:this.state.EMAILID,
      AAdharCard:this.state.AAdharCard,
      BankAccNo:this.state.BankAccNo,
      BankName:this.state.BankName,
      NameofAccHolder:this.state.NameofAccHolder,
      BankIFSC:this.state.BankIFSC,
      BankBranch:this.state.BankBranch
    })

    Alert.alert("Profile Updated Successfully")
        }

        render(){
            return(
                <View style = {{flexDirection:'row'}}>
                 
                  <MyHeader title="Affiliate" navigation={this.props.navigation}/>
                   <ScrollView style={{width:'100%'}}>
                   <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                  <Image source={require("../Images/affiliate3.png")} style={{width:75, height:75}}/>

                    <Text>Affiliate Login Details</Text>
                    <Text></Text>
                    <Text>Name</Text>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="Name"
                    onChangeText={(text)=>{
                      this.setState({
                       NAME: text
                      })
                    }}
                  />
                  <DatePicker
        style={{width: 200}}
        date={this.state.DateOfBirth}
        mode="Date Of Birth"
        placeholder="Date Of Birth"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="3030-12-12"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({DateOfBirth: date})}}
      />
                <Text></Text>
                <Text>Address</Text>
                <TextInput
                    style={styles.loginBox}
                    placeholder="Address"
                    multiline = {true}
                    onChangeText={(text)=>{
                      this.setState({
                        ADDRESS: text
                      })
                    }}
                  />
                  <RadioForm style={{flexDirection:'row'}}
          radio_props={radio_props}
          initial={10}
          onPress={(Value) => {this.setState({Value:Value})}}
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
                  CONTACT: text
                })
              }}
                value ={this.state.contact}
            />
            <Text></Text>
            <Text>email ID</Text>
             <TextInput
                 style={styles.formTextInput}
                 placeholder ={"abc@example.com"}
                 keyboardType ={'email-address'}
                 onChangeText={(text)=>{
                   this.setState({
                     EMAILID: text
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
                  AAdharCard: text
                })
              }}
            />
            <Text></Text>
            <Text></Text>
            
            <Text>Bank Details</Text>

            <Text></Text>
            <Text>Bank A/c Number</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Bank A/c Number"}
              maxLength ={18}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  BankAccNo: text
                })
              }}
                //value ={this.state.BankAccNo}
            />

            <Text></Text>
            <Text>Bank Name</Text>
            <TextInput
                 style={styles.formTextInput}
                 placeholder ={"Bank Name"}
                 maxLength ={30}
                 onChangeText={(text)=>{
                   this.setState({
                     BankName: text
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
                     NameofAccHolder: text
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
                     BankIFSC: text
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
                        BankBranch: text
                      })
                    }}
                  />
                 
                  <Text></Text>
                  
        <TouchableOpacity style = {{backgroundColor:'gold'}}
            onPress={()=>{
              console.log("Affiliate log")
                this.updateAffiliatedetails()
              }}>
                <Text>Submit</Text>
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
        padding:0,
        margin:0,
      },
    }) 