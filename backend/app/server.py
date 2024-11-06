import os

from dotenv import load_dotenv
from flask import Flask, request
from flask_socketio import SocketIO, emit

load_dotenv()

VITE_FRONTEND_URL = os.environ.get("VITE_FRONTEND_URL")
FLASK_HOST = os.environ.get("FLASK_HOST")
FLASK_PORT = os.environ.get("FLASK_PORT")

app = Flask(__name__)
socket_io = SocketIO(app, cors_allowed_origins=VITE_FRONTEND_URL)


@socket_io.on("connect")
def handle_connect():
    print(f"Client connected {request.sid}")


@socket_io.on("incoming_message")
def handle_incoming_message(data):
    print(f"Client sent message {request.sid}: {data}")
    emit("incoming_message", {"socketId": request.sid, "data": data}, broadcast=True)


@socket_io.on("disconnect")
def handle_disconnect():
    print(f"Client disconnected {request.sid}")


if __name__ == "__main__":
    socket_io.run(app, debug=True, host=FLASK_HOST, port=FLASK_PORT)
