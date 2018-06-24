import { Request, Response } from "@pulumi/cloud";
import * as qs from "qs";
import * as uuid from 'uuid';

export function testFunc(req: Request, res: Response): void {
    console.log('in testFunc');

    let random = uuid.v4();
    console.log(`random: ${random}`);

    let qsResult = qs.parse('hello=world');
    res.status(200).json(qsResult);
}