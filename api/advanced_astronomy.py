
import math

class AstronomyCalculator:
    def calculate_positions(self):
        return {
            'ecliptic_longitude': round(math.pi * 0.5, 2),
            'right_ascension': round(math.pi * 0.75, 2),
            'declination': round(math.pi * 0.25, 2)
        }
