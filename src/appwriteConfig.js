import { Client, Account } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66096c3b3bc982041468');

export const account = new Account(client);

export default client;