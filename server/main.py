from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware

from api import api_router

app = FastAPI(title='PPG detection', openapi_url="/openapi.json")

# CORS
origins = ['http://localhost:3000']

# Set all CORS enabled origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)
