import { useState } from 'react';
import { uploadFileToS3 } from './s3Uploader';

class ApiService {
  static async handleSalvarPress(pessoa, jobParam, navigation, novaFoto) {
    const parts = pessoa.image.split('.');
    const extension = parts[parts.length - 1];
    const contentType = `image/${extension}`;
    const directory = `Pessoas/${extension}`;
    const fotoName = `foto`;
    const key = `${directory}/${fotoName}.${extension}`;
    try {

      if (novaFoto){
        const blob = await fetch(pessoa.image).then(response => response.blob());

        // Faça o upload da imagem para o S3
        const imageUrl = await uploadFileToS3(
          blob,
          key,
          'oldwestimg',
          contentType // Defina o tipo de conteúdo da imagem aqui
        );
        pessoa.image = imageUrl;
      };

      // Se o upload da imagem for bem-sucedido, envie os dados da pessoa para o Lambda
      const requestOptionsLambda = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...pessoa,
          job: jobParam // Use o parâmetro jobParam fornecido
        })
      };

      const responseLambda = await fetch('https://tcy36fyg2j.execute-api.sa-east-1.amazonaws.com/Test/', requestOptionsLambda);
      if (!responseLambda.ok) {
        throw new Error('Erro ao enviar dados da pessoa para o Lambda.');
      }
      const dataLambda = await responseLambda.json();

      console.log('Resposta da API do Lambda:', dataLambda);
      alert('Dados atualizados com sucesso');
      navigation.navigate('FichaScreen', { pessoa: pessoa });
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao enviar os dados.');
    }
  }
}
// Função para obter o número de objetos em um diretório do Amazon S3
const getNumberOfFilesInDirectory = (bucketName, directoryPrefix) => {
  return new Promise((resolve, reject) => {
    // Crie uma nova instância do S3
    const s3 = new AWS.S3();

    // Parâmetros para listar objetos no diretório
    const params = {
      Bucket: bucketName,
      Prefix: directoryPrefix,
    };

    // Faça uma solicitação para listar os objetos no diretório
    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.error('Erro ao listar objetos:', err);
        reject(err);
      } else {
        // Retorne o número total de objetos no diretório
        resolve(data.Contents.length);
      }
    });
  });
};

export default ApiService;
