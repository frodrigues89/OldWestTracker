import ImagePicker from 'react-native-image-picker';

function takePicture() {
  const options = {
    title: 'oldWestTracker',
    mediaType: 'photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  ImagePicker.launchCamera(options, (response) => {
    if (response.didCancel) {
      console.log('Captura de imagem cancelada');
    } else if (response.error) {
      console.log('Erro ao capturar imagem:', response.error);
    } else {
      // Aqui você pode usar a imagem capturada, que está em response.uri
      const source = { uri: response.uri };
      return source;
    }
  });

}

export default takePicture;
