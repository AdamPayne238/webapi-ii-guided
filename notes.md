# routing notes

[ client ]== make a request to an==[ api]==sends a response back to the== [ client ]

what is the interface for the web API?

-URI (Uniform Resource Identifier),
-URL (Universal Resource Locator),
-Endpoint (very related to a URI),
-HTTP(network protocol, a set rules for communication)

REST(ish)

'REpresentational State Transfer, a set of guidelines for web API'

-everything is a 'Resource'
-single URI per resource ex: 'http://web23.com/channels'
-use HTTP METHODS to perform operations on resources.

|non REST           |REST             |
|;------------------|:----------------|
|/listAllChannels   | GET /channels   |
|/createChannel     | POST /channels  |
|/updateChannel     | PUT /channels   |
|/deleteChannel     | Delete /channels|
|/findChannel?id=123| GET /channels/123


## Query String

