import React from 'react';
import { View, Text } from 'react-native';
import styles from './Header.style';

const Header = ({todos}) => {

    const activeTodos = todos.filter(todo => !todo.isDone);

    return(
        <View style={styles.usttekiyazilar}>
        <Text style={styles.yapilacaklar}>Yapılacaklar</Text>
        <Text style={styles.sayi}>{activeTodos.length}</Text>
        </View>
    );
};

export default Header;