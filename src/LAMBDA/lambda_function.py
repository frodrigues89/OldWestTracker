import json
import boto3
from boto3.dynamodb.conditions import Key, Attr
from time import gmtime, strftime
from functools import reduce
from getJob import getJob
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
        
        return getJob(event, context)
            
    elif job == "put" :
        
        return putJob(event, context)
            
    elif job == "scan" :
        
        return scanJob(event, context)
        
    elif job == "update" :
        
        return updateJob(event,context)
        
    elif job == "count" :
        
        return countJob(event, context)