import json
import boto3


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('oldWestTest')

def putJob(event, context):
    # Remover o campo 'job' do evento
    event.pop('job', None)
    
    try:
        # Inserir dados no DynamoDB
        table.put_item(Item=event)
        
        return {"statusCode": 200, "body": "Dados inseridos com sucesso"}
    except Exception as e:
        return {"statusCode": 500, "body": str(e)}
    