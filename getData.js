var axios = require("axios");

axios
    .get(
        "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata"
    )
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
