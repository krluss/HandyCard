import React from 'react';
import { View, Button } from 'react-native';
import styles from './style';
import routeNames from '../../../utils/routeNamesEnum';
import styleConst from '../../../utils/styleConst';

const Landing = ({ navigation }) => (
    <View style={styles.bg}>
        <Button
            title="Register"
            onPress={() => navigation.navigate(routeNames.registration)}
            color={styleConst.tintColor}
        />
        <View style={styles.hr}></View>
        <Button
            title="Login"
            onPress={() => navigation.navigate(routeNames.login)}
            color={styleConst.tintColor}
        />
    </View>
);

export default Landing;
