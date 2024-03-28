import json
import boto3
from boto3.dynamodb.conditions import Key, Attr
from time import gmtime, strftime
from functools import reduce
from putJob import putJob
from scanJob import scanJob
from countJob import countJob
from updateJob import updateJob


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('oldWestTest')
now = strftime("%a, %d %b %y %H:%M:%S +0000", gmtime())

def lambda_handler(event, context):
    
    job = event['job']

    if job == "get" :
        response = table.get_item(
            Key={
                'id': id
            }
        )
    
        return {
            'statusCode': 200,
            'body': response['Item']
        }
            
    elif job == "put" :
        
        return putJob(event, context)
            
    elif job == "scan" :
        
        return scanJob(event, context)
        
    elif job == "update" :
        
        return updateJob(event,context)
        
    elif job == "count" :
        
        return countJob(event, context)