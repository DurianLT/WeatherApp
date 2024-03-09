import json
import requests
import time
from datetime import datetime, timezone, timedelta
from django.http import JsonResponse

def get_weather(request):
    if request.method == 'GET':
        lat = request.GET.get('lat')
        lon = request.GET.get('lon')

        # 调用天气查询 API
        api_key = '55f3e1a091c89bd88b46377928c31c16'
        url = f'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}'
        response = requests.get(url)
        data = response.json()

        try:
            temperature_kelvin = data['main']['temp']
            temperature_celsius = kelvin_to_celsius(temperature_kelvin)
            temperature_fahrenheit = celsius_to_fahrenheit(temperature_celsius)
            weather_description = data['weather'][0]['description']
            icon = data['weather'][0]['icon']
            feels_like_kelvin = data['main']['feels_like']
            feels_like_celsius = kelvin_to_celsius(feels_like_kelvin)
            feels_like_fahrenheit = celsius_to_fahrenheit(feels_like_celsius)
            pressure = data['main']['pressure']
            visibility = data.get('visibility', 'N/A')
            wind_speed = data['wind']['speed']
            measurement_time = unix_timestamp_to_beijing_time(data['dt'])
            name = data.get('name')

            formatted_data = {
                'temperatureCelsius': temperature_celsius,
                'temperatureFahrenheit': temperature_fahrenheit,
                'description': weather_description,
                'feels_like_celsius' : feels_like_celsius,
                'feels_like_fahrenheit' : feels_like_fahrenheit,
                'pressure': pressure,
                'visibility': visibility,
                'wind_speed': wind_speed,
                'measurement_time': measurement_time,
                'name' : name,
                'icon' : icon
            }
            return JsonResponse(formatted_data)

        except KeyError as e:
            # 如果返回的数据结构与预期不符，处理异常情况
            error_message = f"KeyError: {str(e)}"
            return JsonResponse({'error': error_message, 'code': 'data_structure_mismatch'}, status=200)

def get_coordinates_by_city(request):
    if request.method == 'GET':
        city = request.GET.get('city')

        url = f'https://nominatim.openstreetmap.org/search?q={city}&format=json'
        try:
            response = requests.get(url)
            # 确保响应状态码为200
            if response.status_code == 200:
                data = response.json()

                if data:
                    # 如果查询到了数据，返回第一个结果的经纬度
                    lat = float(data[0]['lat'])
                    lon = float(data[0]['lon'])
                    return JsonResponse({'lat': lat, 'lon': lon})
                else:
                    # 如果没有查询到数据，返回一个错误消息
                    return JsonResponse({'error': 'Unable to find the city'}, status=404)
            else:
                # 如果响应状态码不是200，返回一个错误消息
                return JsonResponse({'error': 'External API error'}, status=response.status_code)
        except Exception as e:
            # 捕获任何其他异常，返回一个错误消息
            return JsonResponse({'error': f'Server Internal Error: {str(e)}'}, status=500)

    # 如果请求方法不是GET，返回一个错误消息
    return JsonResponse({'error': 'Request method not supported'}, status=405)



def kelvin_to_celsius(kelvin):
    return kelvin - 273.15

def celsius_to_fahrenheit(celsius):
    return celsius * 9/5 + 32

def unix_timestamp_to_beijing_time(timestamp):
    utc_time = datetime.utcfromtimestamp(timestamp)
    beijing_time = utc_time + timedelta(hours=8)  # 北京时间比 UTC 时间快8小时
    return beijing_time.strftime('%Y-%m-%d %H:%M:%S')
