import * as pulumi from "@pulumi/pulumi";
import * as cloud from "@pulumi/cloud-aws";

// Importing like this fails at Pulumi deploy-time with a serialization error
//import * as lambda from "./lambda";

let endpoint = new cloud.HttpEndpoint("hello-world");

endpoint.get("/", (req, res) => {
    // importing like this fails at runtime with "hello-world4c238266] Error: Cannot find module 'qs'"
    const lambda = require('./bin/lambda');
     
    lambda.testFunc(req, res);
});

exports.endpoint = endpoint.publish().url;