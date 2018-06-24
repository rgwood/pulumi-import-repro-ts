"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qs = require("qs");
const uuid = require("uuid");
function testFunc(req, res) {
    console.log('in testFunc');
    let random = uuid.v4();
    console.log(`random: ${random}`);
    let qsResult = qs.parse('hello=world');
    res.status(200).json(qsResult);
}
exports.testFunc = testFunc;
//# sourceMappingURL=lambda.js.map