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
    ScrollView,Image} from 'react-native';
    import firebase from 'firebase';
    import db from '../config';
    import Hyperlink from 'react-native-hyperlink'
    import MyHeader from '../components/MyHeader';

    export default class SaveScreen extends Component{
        render(){
            return(

                 <View>
                    <MyHeader title="Save" navigation={this.props.navigation}/>
                    <ScrollView style={{width:'100%'}}>
                           
                    <Image source={require("../Images/solutionsavings.jpg")} style={{width:165, height:165}}/>
                    
                    
                    <Text>Why SM3?</Text> 
                    <Text>SM3("Student Micro Money Mangement") leads to macro savings and small investments for future studies or extra-curricular activities.</Text>

                    <Text>"TINY DROPS MAKES MIGHTY OCEAN".</Text>

                    <Text></Text>
                    <Text>Why SM3 for a student(To take up ownership of your finances).</Text>
                    <Text>"LEARN TO SAVE EVERYDAY".</Text>
                    <Text>"SAVE YOUR SCHOOL FEES EVERYDAY".</Text>
                    <Text>"SAVE A PORTION OF YOUR POCKET MONEY EVERYDAY".</Text>
                    <Text>"SUPPORT YOUR FELLOW STUDENTS AND THE NEEDY BY DOING CHARITY".</Text>
                    <Text>"SCHOOL, SOCIETY AND STUDENTS LEARN HOW TO MICRO MANAGE MONEY".</Text>

                    <Text></Text>

                    <Text>Daily savings brings in good habit and develops your personal character to manage money efficiently.</Text>

                    <Text></Text>

                    <Text>Why Donate to us?</Text>
                    <Text>Donation is something which helps people who are need of money for a good cause. </Text>

                    <Text></Text>

                    <Text>When a student enrolls in SM3 he learns how to save and he also learns how to support others. </Text>

                    <Text>Practice from childhood shapes up your adulthood in the right direction for a better future.</Text>

<Text></Text>
<TouchableOpacity style = {{backgroundColor:'gold'}}>
                <Text>Save Now</Text>
        </TouchableOpacity>
<Text></Text>
</ScrollView>
                </View>
            )
        }
    }
    const styles = StyleSheet.create({
    
    }) 