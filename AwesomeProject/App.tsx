import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native';

const MyApp = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ padding: 10 , height:100, alignItems:"center", justifyContent:"center", backgroundColor:"red"}}>
      <TextInput
        style={{ height: 40 }}
        placeholder='Type hear to translate'
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  );
}

export default MyApp;