import { View, Text } from "react-native";

export const ProductDetails = ({route, navigation}) => {
    return(
        <View>
            <Text>{route.params.name}</Text>
        </View>
    );
}