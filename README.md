# Cook Bot API
[Deployed Link]()
## CookBot is a full-stack application utilizing OpenAI's API in order to build users recipe cards that they can save to their profiles based on their input. Ideally, the user will provide a list of ingredients of items they already have, and the OpenAI will query the request and return an object that the user can view based on the parameters set in the display modal.

**Added Features and Refactored Code**
1. Demo Account - I added demo account to user doesn't have to input personal information to view the functionality of the web application.
2. Recipe Image - AI generated images from OpenAI API only lasts for ONE hour. Instead of displaying no image after one hour, I added a feature to check the time stamp of the AI generated image. If two hours have elapsed from creation, web application will display a default image (spoon and fork image).

> **NOTE:** This is a forked repository of my team project that was developed with 2 other teammates. See below for old version of code/repository.
* [Old CookBotAI APP](https://github.com/CookBotAI/cook-bot-app)

## Getting Started

### Requirements

For this application to work, cookbot-ai-api (back-end) also needs to be installed. GitHub repository located here: 
[CookBot AI APP](https://github.com/cleecoloma/cookbot-ai-app)

### Node

Install Node and NPM

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

$ node --version
v0.10.24

$ npm --version
1.3.21

### Install

1. git clone https://github.com/cleecoloma/cookbot-ai-app.git
2. cd cookbot-ai-app
3. npm install

### Configure app

```text
OPEN_AI_URL={OpenAI Chat Completion Endpoint}
OPEN_AI_IMAGE_URL={OpenAI Image Generation Endpoint}
MONGODB_URL={MongoDB Atlas Cluster Connection String}
JWKS_URI={Auth0 JSON Web Key Set}
OPENAI_API_KEY={OpenAI API Key}
```

### Start app

npm run dev (development mode)
npm run build (production mode)


## Architecture
![figma wireframe image](https://github.com/CookBotAI/cook-bot-app/assets/53655406/e47ceb9f-bb96-458f-921f-59c713052e38)

### See link below for Database Schema Diagram
[Invision Whiteboard](https://codepeoples.invisionapp.com/freehand/Code-301-Project-WSprYFpy9?inviteToken=022587-dfbf0397de430aaecb044f49649ae883)

## Language and Tools
> Language: JavaScript, HTML5, CSS3
> Tools: VScode, Git, GitHub, MongoDB, Express, React, Node, OpenAI API, Axios, Bootstrap, Trello, Mongoose

## Team members
1. Anthony Cunningham
2. David Danilchik

