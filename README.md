# Login and Register 

## working video

https://github.com/iamgauravbisht/loginandsignup/assets/97449434/5289a059-bcf5-47c8-8421-2a8025a084c9


## how to start the server

1. install dependencies:
   ```bash
     npm i
   ```
2. start the server:
   ```bash
     node index.js
   ```
   
## Routes

1. Register route : go to /v1/auth/register, make a post request with { username, password, firstName, lastName } in json format, in response it will send you a successfull message and your auth token
   ``` bash
   {
    message: "User created successfully",
    token: token,
    }
   ```
3. Login route : go to /v1/auth/login, make a post request with { username, password } in json format, in response it will send you a your auth token
   ``` bash
   {
    message: "Login successful",
    token: token,
    }
   ```


