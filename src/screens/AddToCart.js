import React from 'react'
import { View, Text, Image , StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'

const AddToCart = ({navigation}) => {

    const handleOnPress = () => {
        navigation.navigate('Payment Successful')
    }

    const handlePrevious = () => {
        navigation.navigate('Online Shopping')
    }

    const handleSkip = () => {
        navigation.navigate('Payment Successful')
    }

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.textContainer}>
                <Text style = {styles.heading}>ADD TO CART</Text>
                <Text style = {styles.loremText}>Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown 
                    printer took a galley
                </Text>
            </View>

            <View style = {styles.imageContainer}>
                <Image source = {require('../../assets/addtocart.png')}
                        style = {styles.image}/>

            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.button} onPress = {handleOnPress}>
                    <Text style = {styles.text}>Next</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.navigationContainer}>
                <TouchableOpacity onPress = {handlePrevious}>
                    <Text style = {styles.navigationText}>Previous</Text>
                </TouchableOpacity>
               
                <View style = {styles.innerNavigation}>
                    <View style = {styles.navigationCircle}></View>
                    <View style = {styles.navigationThick}></View>
                    <View style = {styles.navigationCircle}></View>
                </View>

                <TouchableOpacity onPress = {handleSkip}>
                    <Text style = {styles.navigationText}>Skip</Text>
                </TouchableOpacity>
            </View>
            
            
        </SafeAreaView>
    )
}

export default AddToCart

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginHorizontal : 30,
        marginTop : 24
    },

    textContainer : {
        flex : 0.3,
        alignItems : 'flex-start',
        justifyContent : 'flex-start'
    },

    heading : {
        fontSize : 22,
        fontWeight : 'bold'
    },

    loremText : {
        marginTop : 15,
        fontSize : 18,
        color : 'grey'
    },

    imageContainer : {
        flex : 0.4,
        alignItems : 'center',
        justifyContent : 'center' ,
        marginTop : 30
    },

    image : {
        width : 320,
        height : 320, 
    },

    buttonContainer : {
        flex : 0.2,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 30
    },

    button : {
        justifyContent : 'center',
        alignItems : 'center',
        width : '50%',
        height : 50,
        borderRadius : 50,
        backgroundColor : '#9B95F7' 
    },

    text : {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold'
    },

    navigationContainer : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      flex : 0.1
    },

    navigationText : {
        color : 'lightgrey',
        fontSize : 20,
        marginVertical : 20
    },

    innerNavigation : {
        flexDirection : 'row',
        padding : 5,
        marginVertical : 20
    },

    navigationCircle : {
        height : 7,
        width : 7,
        backgroundColor : 'lightgrey',
        borderRadius : 50,
        alignItems : 'baseline'
    },

    navigationThick : {
        height : 8,
        width : 15,
        backgroundColor : '#9B95F7',
        borderRadius : 50,
        marginHorizontal : 3
    }
})
