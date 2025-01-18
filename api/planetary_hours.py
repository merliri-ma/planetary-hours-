from .ml_predictor import MLPredictor
from .advanced_astronomy import AstronomyCalculator

def calculate_planetary_hours():
    predictor = MLPredictor()
    astronomy = AstronomyCalculator()
    
    return {
        'planetary_hour': predictor.predict_hour(),
        'astronomical_data': astronomy.calculate_positions()
    }
