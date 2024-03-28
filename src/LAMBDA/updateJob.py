import json
import boto3
from boto3.dynamodb.conditions import Key, Attr
from time import gmtime, strftime
from functools import reduce

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('oldWestTest')
now = strftime("%a, %d %b %y %H:%M:%S +0000", gmtime())

def updateJob(event, context):
    id = event['id']
        
    newData=[]
    
    for chave, valor in event.items():
        print (chave),
        if chave not in ['id', 'job']:
            if valor != '':
                print (chave + ':' + valor),
                newData.append({
                    chave: valor
                })
    
    # Crie uma expressão de atualização para cada campo que você deseja atualizar
    expressao_de_atualizacao = "SET "
    expressao_de_atualizacao += ", ".join([f"{list(d.keys())[0]} = :{list(d.keys())[0]}" for d in newData])
    print (expressao_de_atualizacao),
    
    # Crie uma expressão de atributos de valores para fornecer os valores a serem atualizados
    expressao_de_valores = {f":{list(d.keys())[0]}": list(d.values())[0] for d in newData}
    print (expressao_de_valores),
    
    # Execute a operação de atualização do item na tabela
    response = table.update_item(
        Key={'id': id},
        UpdateExpression=expressao_de_atualizacao,
        ExpressionAttributeValues=expressao_de_valores
    )
    return {
        'statusCode': 200,
        'body': json.dumps('atualizado')
    }