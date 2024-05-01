// src/utils/s3Uploader.js

import AWS from 'aws-sdk';

// Configura as credenciais AWS
const keyId = 'AKIA3FLD4MAWRZK2SDMF';
const encriptedKey = '';

AWS.config.update({
  accessKeyId: keyId,
  secretAccessKey: '',
  region: 'sa-east-1', // Ex: 'us-east-1'
});

// Função para fazer o upload de um arquivo para o Amazon S3
export const uploadFileToS3 = (file, fileName, bucketName, contentType) => {
  // Crie uma nova instância do S3
  const s3 = new AWS.S3();

  // Defina os parâmetros do upload
  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: file,
    ContentType: contentType,
  };

  // Retorne uma promessa para o resultado do upload
  return new Promise((resolve, reject) => {
    // Faça o upload do arquivo para o S3
    s3.upload(params, (err, data) => {
      if (err) {
        console.error('Erro ao fazer upload do arquivo:', err);
        reject(err);
      } else {
        console.log('Arquivo enviado com sucesso para o S3:', data.Location);
        resolve(data.Location);
      }
    });
  });
};
