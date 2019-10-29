from datetime import datetime

from fastapi import APIRouter

from core.port_reader import arr

router = APIRouter()


@router.get('/')
def get_data():
    return {'data': arr, 'timestamp': datetime.now().timestamp(), 'message': '', 'statusCode': 200}
