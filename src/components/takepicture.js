import { launchCamera } from 'react-native-image-picker';

function takePicture() {
  return new Promise ((resolve, reject) => {
  const options = {
    title: 'oldWestTracker',
    mediaType: 'photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  launchCamera(options, (response) => {
    if (response.didCancel) {
      console.log('Captura de imagem cancelada');
    } else if (response.error) {
      console.log('Erro ao capturar imagem:', response.error);
    } else {
      // Aqui você pode usar a imagem capturada, que está em response.uri
      const source = { uri: response.uri };
      console.log (uri)
      return 'source';
    }
  });
});
}

export default takePicture;
