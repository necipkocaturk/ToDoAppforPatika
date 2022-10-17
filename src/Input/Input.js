import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './Input.style';


const Input = ({handleAddToDo,setText,text}) => {
    const [changeColor, setChangeColor] = useState('#808080')

    return(
    <View style={styles.input_container}>
        <TextInput
            style={styles.input_textinput}
            placeholder='Yapılacak...'
            placeholderTextColor='gray'
            underlineColorAndroid="gray"
            onFocus={()=> setChangeColor('orange')}
            onBlur={()=> setChangeColor('808080')}
            onChangeText={setText}
            value={text}
        />
        <TouchableOpacity
            style={[{backgroundColor:`${changeColor}`}, styles.input_touchableopacity]}
            onPress={handleAddToDo}>
            <Text style={styles.input_kaydet}>Kaydet</Text>
        </TouchableOpacity>
    </View>
    );
};

export default Input;