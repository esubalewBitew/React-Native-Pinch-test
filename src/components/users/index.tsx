import React from "react";
import styles from "./style";
import FastImage from 'react-native-fast-image';

//images
import Images from "../../assets/images";

import { Image, ImageProps, Text, TouchableOpacity, View } from "react-native";
interface IuserRenderComponentProps {
    item: {
        createdAt: String;
        name: String,
        avatar: String,
        id: Number
    }
}

const imageLink = "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/586.jpg";

const UserRenderCompopnent: React.FC<IuserRenderComponentProps> = ({ item }) => {
    return (
        <TouchableOpacity style={styles.container}>
            {/* <Image style={styles.profileImageStyle} source={{ uri: imageLink }} /> */}
            <View style={styles.profileImageViewContainer}>
                <FastImage
                    style={styles.profileImageStyle}
                    defaultSource={Images.fallBackImage}
                    source={{
                        uri: item?.avatar,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
            <Text style={styles.userNameLabel}>{item?.name}</Text>
        </TouchableOpacity>
    )

}
export default UserRenderCompopnent;