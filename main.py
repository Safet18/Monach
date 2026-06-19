from fastapi import FastAPI
import logging
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

app = FastAPI()
logger = logging.getLogger("uvicorn")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # можно потом ограничить
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    name: str

@app.post("/")
def create_user(user: User):
    logger.info(f"Получено имя: {user.name}")

    return {"message": "Успешно добавлено!"}
