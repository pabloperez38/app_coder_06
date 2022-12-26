import { Button, ScrollView, Text, TextInput, View } from "react-native";

import {ImageSelector} from '../../components/';
import {addPlace} from '../../store/place.slice';
import colors from '../../utils/colors';
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { useState } from "react";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch();
  const onHandleSubmit = () => {
    dispatch(addPlace({title}));
    navigation.navigate("Places");
  }
  const onHandleChange = (text) => {
    setTitle(text);    
  }
  const onImagePicker = (uri) => {
    console.warn("uri", uri)
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contenido}>        
        <Text style={styles.titulo}>Título</Text>
        <TextInput style={styles.input} placeholder="Ingrese el lugar" onChangeText={onHandleChange} />
        <ImageSelector onImagePicker={onImagePicker} />
        <Button color={colors.primary} title="Guardar dirección" onPress={onHandleSubmit}  />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
