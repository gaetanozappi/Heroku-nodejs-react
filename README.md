# Heroku: NodeJs - ReactJs

[![github home](https://img.shields.io/badge/gaetanozappi-heroku--nodejs--react-blue.svg?style=flat-square)](https://github.com/gaetanozappi/heroku-nodejs-react)
[![github issues](https://img.shields.io/github/issues/gaetanozappi/heroku-nodejs-react.svg?style=flat-square)](https://github.com/gaetanozappi/heroku-nodejs-react/issues)

## Local Development

### Run the API Server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```


### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```
