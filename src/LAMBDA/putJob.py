import json
import boto3
from boto3.dynamodb.conditions import Key, Attr
from time import gmtime, strftime
import cgi

# Inicializa os recursos AWS
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('oldWestTest')
s3 = boto3.client('s3')
bucket_name = 'nome_do_bucket'

def putJob(event, context):
    
    form = cgi.FieldStorage(fp=event['body'], environ={'REQUEST_METHOD': 'POST', 'CONTENT_TYPE': content_type})

    try:
        # Verifica se 'file' está presente no evento
        if 'file' not in form_data.items:
            return {"statusCode": 400, "body": "Nenhuma imagem encontrada na requisição"}

        # Obtém o arquivo da requisição
        file = form_data['file']

        # Verifica se o arquivo tem um nome; se não, define um nome padrão
        if 'name' not in file or file['name'] == '':
            file['name'] = 'foto.jpg'

        # Define a pasta no S3 onde a imagem será armazenada
        folder = f'/Pessoas/{event["id"]}/'

        # Faz o upload da imagem para o S3
        if upload_image_to_s3(file, bucket_name, folder):
            # Remove 'id', 'job' e 'image' do event antes de inserir no DynamoDB
            data_to_insert = {k: v for k, v in form_data.items() if k not in ['id', 'job', 'file']}

            # Insere os dados no DynamoDB
            response = table.put_item(Item=data_to_insert)

            return {"statusCode": 200, "body": json.dumps('cadastrado')}
        else:
            return {"statusCode": 500, "body": f"Erro ao fazer upload da imagem para o S3: {folder}{file['name']}"}
    except Exception as e:
        return {"statusCode": 500, "body": str(e)}

def upload_image_to_s3(file, bucket_name, folder):
    try:
        # Faz o upload do arquivo para o S3
        s3.upload_fileobj(file['uri'], bucket_name, folder + file['name'])
        return True
    except Exception as e:
        print("Erro ao fazer upload da imagem para o S3:", e)
        return False
