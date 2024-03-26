import * as ImagePicker from 'expo-image-picker';



const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  
  return new Promise((resolve, reject) => {
    console.log('entrei no return')
    if (!result.canceled && result.assets[0].uri) {
      console.log('entrei no if')
      resolve(result.assets[0].uri);
    } else {
      console.log('entrei no else')
      reject(new Error('Seleção de imagem cancelada ou sem URI.'));
    }
  });
};


export default pickImage;
