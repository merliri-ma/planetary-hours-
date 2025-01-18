
import datetime
import random

class MLPredictor:
    def predict_hour(self):
        planets = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn']
        now = datetime.datetime.now()
        
        return {
            'current_planet': planets[now.hour % len(planets)],
            'power': round(random.uniform(50, 100), 2),
            'timestamp': now.isoformat()
        }
