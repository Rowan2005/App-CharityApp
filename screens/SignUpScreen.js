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
    import SaveScreen from './SaveScreen';

    export default class SignUpScreen extends Component{
        constructor(){
            super();
            this.state={
                emailId:"",
                password:"",
                firstName:"",
                lastName:"",
                address:"",
                Institution:"",
                contact:"",
                confirmPassword:"",
                isModalVisible:'false',
            }
        }
        userSignUp = (emailId, password,confirmPassword) =>{
          console.log("signup"+ emailId+password)
          if(password !== confirmPassword){
            console.log("password")
              return Alert.alert("password doesn't match\Check your password.")
          }else{
            console.log("firebase")
            firebase.auth().createUserWithEmailAndPassword(emailId, password)
            .then(()=>{
              db.collection("users").add({
                first_name:this.state.firstName,
                last_name:this.state.lastName,
                contact:this.state.contact,
                email_id:this.state.emailId,
                address:this.state.address,
                Institution:this.state.Institution,
              })
              return  Alert.alert(
                   'User Added Successfully',
                   '',
                   [
                     {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
                   ]
               );
            })
            .catch((error)=> {
              var errorCode = error.code;
              var errorMessage = error.message;
              return Alert.alert(errorMessage)
            });
          }
        }
        userLogin = (emailId, password)=>{
          firebase.auth().signInWithEmailAndPassword(emailId, password)
          .then(()=>{
            this.props.navigation.navigate('Save')
          })
          .catch((error)=> {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
          })
        }
       
       showModal = ()=>{
         return(
         <Modal
           animationType="fade"
           transparent={true}
           visible={this.state.isModalVisible}
           >
           <View style={styles.modalContainer}>
             <ScrollView style={{width:'100%'}}>
               <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
               <Text
                 style={styles.modalTitle}
                 >Registration</Text>

               <TextInput
                 style={styles.formTextInput}
                 placeholderTextColor = "gold"
                 placeholder ={"First Name"}
                 maxLength ={8}
                 onChangeText={(text)=>{
                   this.setState({
                     firstName: text
                   })
                 }}
               />
               <TextInput
                 style={styles.formTextInput}
                 placeholderTextColor = "gold"
                 placeholder ={"Last Name"}
                 maxLength ={8}
                 onChangeText={(text)=>{
                   this.setState({
                     lastName: text
                   })
                 }}
               />
               <TextInput
                 style={styles.formTextInput}
                 placeholderTextColor = "gold"
                 placeholder ={"Contact"}
                 maxLength ={10}
                 keyboardType={'numeric'}
                 onChangeText={(text)=>{
                   this.setState({
                     contact: text
                   })
                 }}
               />
               <TextInput
                 style={styles.formTextInput}
                 placeholderTextColor = "gold"
                 placeholder ={"Address"}
                 multiline = {true}
                 onChangeText={(text)=>{
                   this.setState({
                     address: text
                   })
                 }}
               />
               <TextInput 
               style={styles.formTextInput}
               placeholderTextColor = "gold"
               placeholder ={"School/College/Others"}
               multiline = {true}
               onChangeText={(text)=>{
                 this.setState({
                   Institution: text
                 })
               }}
               />
               <TextInput
                 style={styles.formTextInput}
                 placeholderTextColor = "gold"
                 placeholder ={"abc@example.com"}
                 keyboardType ={'email-address'}
                 onChangeText={(text)=>{
                   this.setState({
                     emailId: text
                   })
                 }}
               />
               <TextInput
                 style={styles.formTextInput}
                 placeholderTextColor = "gold"
                 placeholder ={"Password"}
                 secureTextEntry = {true}
                 onChangeText={(text)=>{
                   this.setState({
                     password: text
                   })
                 }}
               />
               <TextInput
                 style={styles.formTextInput}
                 placeholderTextColor = "gold"
                 placeholder ={"Confrim Password"}
                 secureTextEntry = {true}
                 onChangeText={(text)=>{
                   this.setState({
                     confirmPassword: text
                   })
                 }}
               />
               <View style={styles.modalBackButton}>
                 <TouchableOpacity
                   style={styles.registerButton}
                   onPress={()=>
                     this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                   }
                 >
                 <Text style={styles.registerButtonText}>Register</Text>
                 </TouchableOpacity>
               </View>
               <View style={styles.modalBackButton}>
                 <TouchableOpacity
                   style={styles.cancelButton}
                   onPress={()=>this.setState({"isModalVisible":false})}
                 >
                 <Text style={{color:'gold'}}>Cancel</Text>
                 </TouchableOpacity>
               </View>
               </KeyboardAvoidingView>
             </ScrollView>
           </View>
         </Modal>
       )
       }
        render(){
            return(<View style={styles.container}>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                
          {
            this.showModal()
          }
                </View>
                  
                <View style={{justifyContent:'center', alignItems:'center'}}>
                  
                  <Text style={styles.title}>SM3</Text>
                </View>
                <View>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="abc@example.com"
                    keyboardType ='email-address'
                    onChangeText={(text)=>{
                      this.setState({
                        emailId: text
                      })
                    }}
                  />
                  <TextInput
                  style={styles.loginBox}
                  secureTextEntry = {true}
                  placeholder="Enter Password"
                  onChangeText={(text)=>{
                    this.setState({
                      password: text
                    })
                  }}
                />
                <TouchableOpacity
                    
                   style={[styles.button,{marginBottom:20, marginTop:20}]}
                   onPress = {()=>{
                     this.userLogin(this.state.emailId, this.state.password)
                   }}
                   >
                   <Text style={styles.buttonText}>Login</Text>
                 </TouchableOpacity>
        
                 <TouchableOpacity
                   style={styles.button}
                   onPress={()=>this.setState({ isModalVisible:true})}
                   >
                   <Text style={styles.buttonText}>SignUp</Text>
                    </TouchableOpacity>

                 <TouchableOpacity
                 style={styles.button1}>
                   <Text style={styles.buttonText}>Forgot Password</Text>
                 </TouchableOpacity>
                   
                 
              </View>
            </View>
            )
                
        }
    }


    const styles = StyleSheet.create({
        container:{
         flex:1,
         backgroundColor:'lightblue',
         alignItems: 'center',
         justifyContent: 'center'
       },
       profileContainer:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
       },
       title :{
         fontSize:65,
         fontWeight:'300',
         paddingBottom:30,
         color : 'blue'
       },
       loginBox:{
         width: 300,
         height: 40,
         borderBottomWidth: 1.5,
         borderColor : 'blue',
         fontSize: 20,
         margin:10,
         paddingLeft:10
       },
       KeyboardAvoidingView:{
         flex:1,
         justifyContent:'center',
         alignItems:'center'
       },
       modalTitle :{
         justifyContent:'center',
         alignSelf:'center',
         fontSize:30,
         color:'gold',
         margin:50
       },
       modalContainer:{
         flex:1,
         borderRadius:20,
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:"blue",
         marginRight:30,
         marginLeft : 30,
         marginTop:80,
         marginBottom:80,
       },
       formTextInput:{
         width:"75%",
         height:35,
         alignSelf:'center',
         borderColor:'white',
         borderRadius:10,
         borderWidth:3,
         marginTop:20,
         padding:10,
         color:"white",
         
       },
       registerButton:{
         width:200,
         height:40,
         alignItems:'center',
         justifyContent:'center',
         borderWidth:1,
         borderRadius:10,
         marginTop:30
       },
       registerButtonText:{
         color:'gold',
         fontSize:15,
         fontWeight:'bold'
       },
       cancelButton:{
         width:200,
         height:30,
         justifyContent:'center',
         alignItems:'center',
         marginTop:5,
       },
      
       button:{
         width:300,
         height:50,
         justifyContent:'center',
         alignItems:'center',
         borderRadius:25,
         backgroundColor:"gold",
         shadowColor: "#000",
         shadowOffset: {
            width: 0,
            height: 8,
         },
         shadowOpacity: 0.30,
         shadowRadius: 10.32,
         elevation: 16,
         padding: 10
       },
       button1:{
        width:200,
        height:50,
        justifyContent:'center',
         alignItems:'center',
         borderRadius:40,
         backgroundColor:"blue",
         shadowColor: "#000",
         marginTop:10,
         marginLeft:50,
         shadowOffset: {
            width: 0,
            height: 8,
         },
         shadowOpacity: 0.30,
         shadowRadius: 10.32,
         elevation: 16,
         padding: 10
       },
       
       buttonText:{
         color:'#ffff',
         fontWeight:'200',
         fontSize:20,
       }
      })
      