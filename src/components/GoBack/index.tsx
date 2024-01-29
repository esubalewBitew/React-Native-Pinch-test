import React from "react";
import { TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";
import styles from "./style";
import Images from "../../assets/images";

type GoBackProps = {};

const GoBack: React.FC<GoBackProps> = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <Icon
                name={'arrow-left'}
                style={{ marginTop: 0, width: 90 }}
                size={50}
                color={'#000'}
            /> */}
            <Image
                source={Images.backArrow}
                style={styles.backArrowImageStyle}
            />
        </TouchableOpacity>
    );
};

export default GoBack;
