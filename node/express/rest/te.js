const fetch = require("node-fetch");
fetch('http://127.0.0.1:8890/rest/query')
    .then(response => response.json())
    .then(data => {console.log(data)})

