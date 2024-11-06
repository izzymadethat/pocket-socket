import os

from dotenv import load_dotenv

load_dotenv()


class Config(object):
    FLASK_DEBUG = os.environ.get("FLASK_DEBUG")
    FLASK_PORT = os.environ.get("FLASK_PORT")
    FLASK_HOST = os.environ.get("FLASK_HOST")
    VITE_FRONTEND_URL = os.environ.get("VITE_FRONTEND_URL")
    FLASK_SECRET_KEY = os.environ.get("FLASK_SECRET_KEY")
