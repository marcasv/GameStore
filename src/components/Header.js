import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderStyles } from '../styles';
import { STORE_NAME } from '../strings';

export default function Header(props) {
  return (
    <View style={HeaderStyles.container}>
        <View style={HeaderStyles.left.container}>
          <Image
            style={HeaderStyles.left.image}
            source={{
              uri: 'https://png.pngtree.com/png-clipart/20230807/original/pngtree-video-game-shop-theme-logo-template-controller-video-game-market-vector-picture-image_10094360.png',
            }}
            resizeMode="stretch"
          />
          <Text style={HeaderStyles.left.title}>{STORE_NAME}</Text>
        </View>
        <View style={HeaderStyles.right.container}>
            <TouchableOpacity>
                <Icon name="cart" size={35} style={HeaderStyles.right.cart} />
            </TouchableOpacity>
            <TouchableOpacity style={HeaderStyles.right.profile.container}>
                <Image
                  style={HeaderStyles.right.profile.image}
                  source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png',
                  }}
                  resizeMode="stretch"
                />
            </TouchableOpacity>
        </View>
    </View>
  );
}
