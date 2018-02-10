'use strict';

import { Connection } from './modules/index'
import { MongoClient } from '../node_modules/@types/mongodb/index';

let dataConnection = new Connection();

dataConnection.connect('mongodb://localhost:27017').then((connection: MongoClient) => {
    console.log('connection succesful');
    connection.close()
})