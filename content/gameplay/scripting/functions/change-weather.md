---
title: ChangeWeather
aliases:
  - ChangeWeather
  - Change Weather
description: Changes the weather in the specified region right now.
---
ChangeWeather, RegionID, TypeEnum

ChangeWeather, “West Gash”, 4

Changes the weather in the specified region right now. The weather will begin transitioning immediately. It will reselect a new weather on the next weather update (12 hours).

The weather type enum are as follows:

```
0  Clear
1  Cloudy
2  Foggy
3  Overcast
4  Rain
5  Thunder
6  Ash
7  Blight
```

## See also:
[[mod-region|ModRegion]], RegionID, clear\_var, cloudy\_var, foggy\_var, overcast\_var, rain\_var, thunder\_var, ash\_var, blight\_var  
GetCurrentWeather  
