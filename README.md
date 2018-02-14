# drimsher-api  
Express API & Backend for an app that I'm working in.  
  
Current endpoints:  

```GET /api/v1/post/random```  
Get a random post.  
Example response:  
```json 
{
    "status": true,
    "post": {
        "id": 2,
        "date": "2018-02-14T19:45:48.735Z",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. /n Ut enim ad minim veniam, quis nostrud exercitation"
    }
}
```

```GET /api/v1/post/id/:id```  
Get a random post.  
Needs an id parameter
Example response:  
```json 
{
    "status": true,
    "post": {
        "id": 2,
        "date": "2018-02-14T19:45:48.735Z",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. /n Ut enim ad minim veniam, quis nostrud exercitation"
    }
}
```

```POST /api/v1/post```  
Publish a post.  
Example response:  
```json 
{
    "status": true,
    "id": 2
}
```
