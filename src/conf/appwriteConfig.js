import { Client,Account,ID,Databases } from "appwrite";
 const client = new Client()
  client 
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("68bb2a7a00193552954c")
  
  export const account =  new Account(client);
  export const database = new Databases(client);
  export{ID,Client};