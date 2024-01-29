import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StatusBar,
    ScrollView,
} from "react-native";

// package
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import styles from "./style";

// components
import GoBack from "components/GoBack";
import Images from "../../../assets/images";
//@ts-ignore
import GridComponent from "@/components/GridComponent";
//@ts-ignore
import Colors from "@/style/Colors";

interface CounterFloatingButtonProps {
    onPressMinus: () => void;
    onPressPlus: () => void;
    counterValue: number;
}

const CounterFloatingButton: React.FC<CounterFloatingButtonProps> = ({
    onPressMinus,
    onPressPlus,
    counterValue,
}) => {
    return (
        <View style={styles.FloatingCounterContainerStyle}>
            <TouchableOpacity onPress={onPressMinus} style={styles.counterContainer}>
                <Icon name="minus" size={20} color={Colors.WHITE} />
            </TouchableOpacity>
            <View style={styles.counterContainer}>
                <Text style={styles.counterLabel}>{counterValue}</Text>
            </View>
            <TouchableOpacity onPress={onPressPlus} style={styles.counterContainer}>
                <Icon name="plus" size={20} color={Colors.WHITE} />
            </TouchableOpacity>
        </View>
    );
};

interface HomeScreenProps {
    navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [counterValue, setCounterValue] = useState(0);

    const handlePressMinus = () => {
        setCounterValue(counterValue - 1);
    };

    const handlePressPlus = () => {
        setCounterValue(counterValue + 1);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
            <ScrollView>
                <GridComponent />
            </ScrollView>

            <TouchableOpacity
                onPress={() => navigation.navigate('UserScreen')}
                style={styles.addUserContainer}>
                <Icon name="user-plus" size={20} color={Colors.WHITE} />
            </TouchableOpacity>
            <CounterFloatingButton
                onPressMinus={handlePressMinus}
                onPressPlus={handlePressPlus}
                counterValue={counterValue}
            />
        </View>
    );
};

export default HomeScreen;
