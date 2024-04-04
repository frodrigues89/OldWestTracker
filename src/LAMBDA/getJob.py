import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('oldWestTest')

def getJob(event, context):
    response = table.get_item(
            Key={
                'id': event['id']
            }
        )
    
    return {
        'statusCode': 200,
        'body': response['Item']
    }