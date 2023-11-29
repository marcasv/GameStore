import {ScrollView, Text, View} from 'react-native';
import ProductButton from './ProductButton';
import MoreButton from './MoreButton';
import { HorizontalSelectorStyles } from '../styles';
import { EMPTY_SELECTOR } from '../strings';

export default function HorizontalSelector(props) {
  return (
    <View style={[HorizontalSelectorStyles.container, {...props?.style}]}>
      <Text>{props.title}</Text>
      {
        props.products.length ? 
        <ScrollView
          style={HorizontalSelectorStyles.scrollView}
          contentContainerStyle={HorizontalSelectorStyles.contentContainerScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {
            props.products.map((product, index) => <ProductButton key={product.title + '_' + index} product={product} navigation={props.navigation}/>)
          }
          <MoreButton />  
        </ScrollView>
        :
        <View style={HorizontalSelectorStyles.empty}>
          <Text>{EMPTY_SELECTOR}</Text>
        </View>
      }
    </View>
  );
}
