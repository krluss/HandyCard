import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import firebase from 'firebase'
import { useSelector, useDispatch } from 'react-redux'
import {  fetchUserCards } from '../../redux/actions/index'

require('firebase/firestore')

function SaveCard(props) {
    const [brandName, setBrandName] = useState('')
    const dispatch = useDispatch()
    const cardNumber = useSelector(state=>state.userState.cardNumber)
    const setNumberOfCard = (cardNumber) => setCardNumber(cardNumber)
    const setNameofBrand = (brandName) => setBrandName(brandName)
    
    const saveCardData = () => {
        firebase.firestore()
            .collection('cards')
            .doc(firebase.auth().currentUser.uid)
            .collection('userCards')
            .add({
                brandName,
                cardNumber
            }).then((function () {
                props.navigation.popToTop()
                setNumberOfCard('')
            }))
    }

    return (
        <View>
            <TextInput style={styles.input}
                placeholder='Brand'
                onChangeText={
                    setNameofBrand
                }
            />
            <TextInput style={styles.input}
                placeholder='Card Number'
                onChangeText={
                    setNumberOfCard
                }
                value={cardNumber}
                keyboardType='numeric'
            />
            <Button
                title='Save Card' onPress={() => {
                    saveCardData()
                    dispatch(fetchUserCards())
                    
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        height: 40,
        width: 390,
        backgroundColor: 'white',
        paddingLeft: 6,

    },
})




export default SaveCard
