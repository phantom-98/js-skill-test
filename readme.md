# Project details

This is a simple client/server program to understand your basic skills on both client and server as well as your presentation skills. You are free to use any UI frameworks you are comfortable with. You need to demonstrate your skills in NodeJS and client side js. Client javascript has to be clean JS or JQuery. You cannot use any other framework. Server side is nodejs server.

## client side
1. create 50 * 80 grid matrix where each element is clickable..
2. by default element color should be green.
3. when user click to element, it sould switch color from green to red and from red to green. You basically toggle the colors.
4. make undo button in client(for example if we click the button 15 times, it will reset last 15 changes on map)

## server side
make nodejs server, which will allow different users to draw together on this grid.
which mean that if some user doing some operation, it will send same command using socket to another members and they will see it in real time.
when new guests come online(no need user management), they will get last mapping.
all "users" will be guests, so user management is not required.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

### Start project

```bash
npm start
```

After server is started, open localhost:5000 on the various browsers and tabs.

## More

