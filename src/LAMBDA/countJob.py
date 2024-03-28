import json
import boto3
from boto3.dynamodb.conditions import Key, Attr
from time import gmtime, strftime
from functools import reduce

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('oldWestTest')
now = strftime("%a, %d %b %y %H:%M:%S +0000", gmtime())

def countJob(event, context):
    kwargs = {}
        
    for chave, valor in event.items():
        if valor != '':
            if chave == 'nome':
                kwargs[chave] = Attr(chave).contains(valor)
            elif chave not in ['id', 'job']:
                kwargs[chave] = Attr(chave).eq(valor)
        
    # Inicialize uma lista para armazenar as partes da expressão de filtro
    filter_parts = []

    # Adicione cada expressão de filtro do kwargs à lista
    for key, value in kwargs.items():
        filter_parts.append(value)
    
    
    
    if filter_parts == "":
        response = table.scan()
    else: 
        # Combine todas as partes da expressão de filtro usando o operador lógico AND
        filter_expression = reduce(lambda x, y: x & y, filter_parts)
        # Agora você pode passar filter_expression como FilterExpression
        response = table.scan(
            Select='COUNT',
            FilterExpression=filter_expression
        )
    
    body = {
        'response': response,
        'outras_informacoes': str(kwargs)
    }
    return {
        'statusCode': 200,
        'body': body
    }