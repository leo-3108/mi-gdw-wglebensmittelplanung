# Proof of Concept

Umgebung zum Testen der erforderlichen APIs.

**Verwendete APIs:**

- Places API (Angeboten von der HERE REST API) - https://developer.here.com/develop/rest-apis \
  _Get global information on 150 million parks, businesses, attractions and more, including addresses, categories and contact info._

- Routing API (Angeboten von der HERE REST API) - https://developer.here.com/develop/rest-apis \
  _Complete complex journeys more efficiently with advanced routing algorithms including truck routing, large scale matrix routing and traffic-enabled routing. Get accurate ETAs and routing instructions in over 108 languages._


```js
{
  app_id: 'hDr78BRUEK7XFKrLIm2j',
  app_code: '7eGjD8JcxivXumb6wdzvig'
}
```

- Weather API (Angeboten von OpenWeatherMap) - https://openweathermap.org \
  _Access current weather data for any location including over 200,000 cities_

```js
{
  API_Key: 'fa05354691c1ad9808f0381d24e2af5d'
}
```

# Restriktionen

HERE API:
- Transactions: 250.000 per month
- 2.5 GB Data transfer per month
- 5 GB Database Storage per month

OpenWeatherMap:
- Calls per Minute: 60
