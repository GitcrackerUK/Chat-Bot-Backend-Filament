# Chat-Bot Backend

Repository for backend of interactive chat with automated answers.
App has basic functionality like express server which runs and handles two routes with set of responses accordingly to request.
Routes and responses:

-   Route '/' "welcome" sends greetings and 5 options to choose from
-   Route '/firstOptions' handles response of first set of options and creates new possible branches

#### Requirments

-   demonstrate your approach to module reuse and structure.
-   provide an HTTP based API that includes authentication and logging.
-   demonstrates options for different response types.

#### Stack/dependencies used in project:

-   node.js
-   express.js
-   nodemon (dev)
-   cors
-   path
-   mongoose
-   passport
-   passport-local
-   errorhandler
-   express-session
-   express-jwt
-   jsonwebtoken
-   morgan

#### Directory

```
.
├── config
│   └── passport.js
├── models
│   └── User.model.js
├── package.json
├── package-lock.json
├── README.md
├── routes
│   ├── firstOptions.js
│   ├── User.js
│   └── welcome.js
├── server.js
└── store.js
```

##### To run project locally, pull repository:

```
git pull https://github.com/GitcrackerUK/Chat-Bot-Backend-Filament.git
```

##### Install dependencies

```
npm install
```

##### Run server

```
node server.js
```

#### To Do:

-   authentication and logging
    -   install dependencies
        -   path
        -   passport
        -   session
        -   mongoose
        -   errorHandler
    -   create folders with files for authentication:
        -   config
        -   models
        -   routes
-   create route to handle user input
    -   create object with key words
    -   create functionality to filter user input for keyword
    -   create functionality to respond accordingly to keyword
-   create visual road map of interaction with bot and possible routes accordingly to requests.
-   <s> create server</s>
-   <s>choose customer like recruitment, retail, transport to use as set of rules for bot</s>
