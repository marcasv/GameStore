import {View, Image, TouchableOpacity, Text} from 'react-native';
import { ProductButtonStyles } from '../styles';
import { FREE } from '../strings';

export default function ProductButton(props) {
  const onPressed = () => {
    console.log('Product pressed');
    props.navigation.navigate('ProductDetails', {name: props.product.title});
  };

  return (
    <TouchableOpacity
      style={[ProductButtonStyles.container, {...props?.style}]}
      onPress={onPressed}
    >
        <View>
            <Image
                style={ProductButtonStyles.image}
                source={{
                uri: props.product.image,
                }}
                resizeMode="stretch"
            />
            <View style={ProductButtonStyles.label}>
                <Text 
                  style={[
                    {
                      width: props.product.deal ? '50%' : '70%'
                    }
                  ]} 
                  numberOfLines={1}
                >
                  {props.product.title}
                </Text>
                {
                    props.product.price ?
                    <>
                        <Text 
                          style={{
                            fontSize: props.product.deal && 10, 
                            textDecorationLine: props.product.deal ? 'line-through' : 'none', 
                            textDecorationStyle: 'solid'
                          }}
                        >
                          ${props.product.price}
                        </Text>
                        {
                            props.product.deal ?
                            <Text>${props.product.deal}</Text>
                            :
                            <></>
                        }
                    </>
                    :
                    <Text style={ProductButtonStyles.label.price.free}>{FREE}</Text>
                }
            </View>
        </View>
    </TouchableOpacity>
  );
}
