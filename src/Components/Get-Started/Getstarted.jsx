// src/appwrite/contactService.js
import { Client, Databases, ID } from "appwrite";
import conf from "../conf/conf"; // make sure conf has your project, database ID

const client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

const databases = new Databases(client);

export async function submitContactForm({ name, email, message }) {
  try {
    return await databases.createDocument(
      conf.appwriteDatabaseId, // your database ID
      conf.appwriteCollectionId, // your collection ID for contact messages
      ID.unique(),
      { name, email, message }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
}
