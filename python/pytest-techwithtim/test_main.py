from main import get_weather

def teste_get_weather():
    assert get_weather(21) == "hot"
    assert get_weather(10) == "cold"
