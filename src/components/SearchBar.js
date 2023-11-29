import {useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchBarStyles } from '../styles';

export default function SearchBar(props) {
  const [input, setInput] = useState('');

  const search = () => {
    console.log('Search simulated');
  };
  return (
    <View
      style={[SearchBarStyles.container, { ...props?.style }]}>
      <Icon name="magnify" size={25} style={SearchBarStyles.icon} />
      <TextInput
        style={SearchBarStyles.input}
        value={input}
        onChangeText={setInput}
        onSubmitEditing={search}
      />
    </View>
  );
}
