from typing import Optional

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def index():
    """
    """
    return { "msg": "hello world" }
