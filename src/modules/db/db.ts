import { MongoClient, MongoError, MongoCallback, MongosOptions } from 'mongodb';

export class Connection {

    connection!: MongoClient;
    connected: boolean = false;
    
    connect(url: string): Promise<MongoClient> {
        return new Promise<MongoClient>((resolve: Function, reject: Function) => {
            MongoClient.connect(url, {}, (error: MongoError, client: MongoClient) => {
                if(!!error) {
                    reject(error);
                    return;
                }
                this.connection = client;
                this.connected = true;
                resolve(client);
            });
        });
    }

    disconnect(): boolean {
        this.connection.close();
        this.connected = false;
        return true;
    }
}