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
    import Hyperlink from 'react-native-hyperlink'
    import MyHeader from '../components/MyHeader';
    import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
    var radio_props = [
      
        {label: 'Education', value: 1 },
        {label: 'Sports', value: 2 },
        {label: 'Medical', value: 3 },
        {label: 'Stationary', value: 4 },
        {label: 'Hostel Fee', value: 5 },
        {label: 'Uniform/Shoes', value: 5 },
  
      ];
    export default class CharityScreen extends Component{
        constructor(){
            super()
            this.state = {
                VaAlue:0,
            }
        }
        render(){
            return(
                <View>
                    <MyHeader title="Charity" navigation={this.props.navigation}/>
                    <ScrollView style={{width:'100%'}}>
                    <Image source={require("../Images/helptheneedycharity.png")} style={{width:200, height:200}}/>
                    <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                    <Text>Why SM3?</Text> 
                    <Text>Student Micro Money Management also leads to honorable charity service.</Text>

                    <Text></Text>

                    <Text>"CHARITY IS THE GRAVITY TOWARDS DIVINITY".</Text>

                    <Text>"ONE WHO DOES CHARITY IS HONORED DIVINELY"</Text>

                    <Text></Text>

                    <Text>Practice from childhood shapes up your adulthood in the right direction for a better future.</Text>
                    
                    <Text></Text>

                    <Text>Charity brings in peace, wellness, sharing and caring about people around us.</Text>

                    <Text></Text>

                    <Text>Why Donate to us?</Text> 
                    <Text>Donation is something which helps people who are need of money for a good cause. </Text>
                    
                    <Text></Text>

                    <Text>When a student enrolls in SM3 he learns how to save and he also learns how to support others. </Text>

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
                    <RadioForm
          radio_props={radio_props}
          initial={10}
          onPress={(VAalue) => {this.setState({VAalue:VAalue})}}
        />
       
<TouchableOpacity style = {{backgroundColor:'gold'}}>
                <Text>Donate</Text>
        </TouchableOpacity>
 
<Text></Text>

</KeyboardAvoidingView>
</ScrollView>
                </View>
            )
        }
    }
    const styles = StyleSheet.create({

    }) 