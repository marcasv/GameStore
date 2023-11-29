import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProductButtonStyles } from '../styles';

export default function MoreButton(props) {
  const onPressed = () => {
    console.log('More pressed');
  };
  
  return (
    <TouchableOpacity
      style={[ProductButtonStyles.container, {...props?.style}]}
      onPress={onPressed}
    >
      <View style={ProductButtonStyles.more.container}>
        <Icon name="plus-circle-outline" size={100} style={ProductButtonStyles.more.icon} />
      </View>
    </TouchableOpacity>
  );
}
