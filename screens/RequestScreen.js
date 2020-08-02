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
    import MyHeader from '../components/MyHeader'
    import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

    var radio_props = [
      
        {label: 'Education', value: 1 },
        {label: 'Medical', value: 2 },
        {label: 'Sports', value: 3 },
        {label: 'Extra Curricular Activities', value: 4 },
        {label: 'Food', value: 5 },
        {label: 'Utilities', value: 6 },
        {label: 'Apparels', value: 7 },
      ];

    export default class RequestScreen extends Component{
        constructor(){
            super()
            this.state={
                NameOfSponser:"",
                FIRSTNAME:"",
                LASTNAME:"",
                CONTACCT:0,
                EMAIL:"",
                Vaalue:0,

            }
        }

        updateSponsershipdetails = ()=>{
            db.collection("Sponsership").add({
               NameOfSponser:this.state.NameOfSponser,
               FIRSTNAME:this.state.FIRSTNAME,
               LASTNAME:this.state.LASTNAME,
               EMAIL:this.state.EMAIL,
               CONTACCT:this.state.CONTACCT,
               Value:this.state.CONTACCT,
             })
         
             Alert.alert("Profile Updated Successfully")
                 }

        render(){
            return(
                <View>
                  
                     <MyHeader title="Sponsorships" navigation={this.props.navigation}/>
                     <ScrollView style={styles.ScrollView} >
                     <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                     <Image source={require("../Images/sponsor.jpg")} style={{width:100, height:100}}/>


                    <Text>Sponsorship Details</Text>
                    <Text></Text>
                    <Text>Name Of Sponsor(Company Name)</Text>
                    <TextInput
                 style={styles.formTextInput}
                 placeholder ={"NameOfSpon.Comp.Name"}
                 maxLength ={100}
                 onChangeText={(text)=>{
                   this.setState({
                     NameOfSponser: text
                   })
                 }}
               />
               <Text></Text>

               <Text>Sponsor Representative Details</Text>

               <Text></Text>
               <Text>First Name</Text>
               <TextInput
                 style={styles.formTextInput}
                 placeholder ={"First Name"}
                 maxLength ={15}
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
                 maxLength ={15}
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
                     EMAIL: text
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
                     CONTACCT: text
                   })
                 }}
               />
               <RadioForm
          radio_props={radio_props}
          initial={10}
          onPress={(Vaalue) => {this.setState({Vaalue:Vaalue})}}
        />
               <Text></Text>
               <TouchableOpacity style = {{backgroundColor:'gold'}}
               onPress={()=>{
                this.updateSponsershipdetails()
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
        //alignItems:'center',

      },
      ScrollView:{
        width:'100%',
      },
    })