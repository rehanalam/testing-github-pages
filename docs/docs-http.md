# 

Simple calculator API hosted on APIMATIC



## Base URL

The Base URL for this API is `http://examples.apimatic.io/apps/calculator`






# <a name="api_reference"></a>API Reference

* [Simple Calculator](#simple_calculator)

## <a name="simple_calculator"></a>![Endpoint Group: ](https://apidocs.io/img/class.png "Simple Calculator") Simple Calculator


### <a name="calculate"></a>![Endpoint: ](https://apidocs.io/img/method.png "Calculate") Calculate


**`GET`** `/{operation}`

> *Tags:*  ``` Skips Authentication ``` 

> Calculate



#### Path Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| operation | `operation` |  ``` Required ```  | The operator to apply on the variables | `"SUM"` | 

#### Query Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| x | `precision` |  ``` Required ```  | The LHS value | `33.7555728986653` | 
| y | `precision` |  ``` Required ```  | The RHS value | `33.7555728986653` | 

#### Responses
**200** 

Body (_precision_) 
```
33.7555728986653
```


**412** 

> Could not compute the requested calculation
Body (_CouldNotCompute_Error_) 
```
{
  "ServerMessage": "ServerMessage",
  "ServerCode": 33
}
```


[Back to API Reference](#api_reference)

