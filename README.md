# Chat-Bot Backend

Repository for backend of interactive chat with automated answers.

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
├── package.json
├── package-lock.json
├── README.md
├── routes
│   ├── firstOptions.js
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
