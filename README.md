# Welcome to gotoAndBot

This test assignment for **gotoAndPlay**


## Setup

All packages are installed using yarn so I would recommend using yarn to follow yarn.lock file

    git clone https://github.com/riiwo/gotoAndBot.git
    cd gotoAndBot
    yarn install
    yarn start
    
## Sample usage
|Input|Expected output  |
|--|--|
|Hi!|Hello! (Or something similar)|
|How old are you?|I was created **x**(number) days ago|
|2 + 2 * 4 / 2|2+2*4/2 = 6|
|What time is it in New York|It is **x**(time)|
|Time in Finland|It is **x**(time)|
|Time in London|It is **x**(time)|
|Time in Mexico|It is<br> **04:14:22** in Mexico City<br> **04:14:22** in Cancun<br> **04:14:22** in Merida<br> **04:14:22** in Monterrey<br> **04:14:22** in Matamoros<br> **03:14:22** in Mazatlan<br> **03:14:22** in Chihuahua<br> **03:14:22** in Ojinaga<br> **02:14:22** in Hermosillo<br> **02:14:22** in Tijuana<br> **02:14:22** in Santa Isabel<br> **04:14:22** in Bahia Banderas |
|What time is it?|It is **x**(time) right now.|
|EUR to USD|1 EUR is **x**(number) USD at the moment|
|How many EUR is 130 USD|130 USD is **x**(number) EUR at the moment|
|Weather in New York?|Weather in **New York**: Clouds. Temperature is **x**(number) degrees Celcius. Humidity is **y**(number)% and wind blows **z**(number)m/s|
|How is the weather in Tartu?|Weather in **Tartu**: Clouds. Temperature is **x**(number) degrees Celcius. Humidity is **y**(number)% and wind blows **z**(number)m/s|

### Notes

 - For weather and currency, there are used public API's, these might go down any time.
