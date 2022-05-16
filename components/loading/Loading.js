import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './style';

const Loading = () => (
    <View style={styles.bg}>
        <ActivityIndicator size='large' color='#F9AA33'/>
    </View>
);

export default Loading;
