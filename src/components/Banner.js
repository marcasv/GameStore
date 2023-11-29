import {Image, TouchableOpacity} from 'react-native';
import { BannerStyles } from '../styles';

export default function Banner(props) {
  const onBannerPressed = () => {
    console.log('Banner pressed');
  };
  return (
    <TouchableOpacity
      style={[BannerStyles.container, {...props?.style,}]}
      onPress={onBannerPressed}
      activeOpacity={1}
    >
      <Image
        style={BannerStyles.image}
        source={{
          uri: props.data.image,
        }}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
}
