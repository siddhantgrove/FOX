// import { Client, Databases, ID } from "appwrite";
// import conf from "../../conf/conf.js"; // make sure your conf file has your Appwrite project info

// const client = new Client()
//   .setEndpoint(conf.appwriteUrl)
//   .setProject(conf.appwriteProjectId);

// const databases = new Databases(client);

// export const submitContactForm = async ({ name, email, message }) => {
//   try {
//     const response = await databases.createDocument(
//       conf.appwriteDatabaseId, // your database id
//       conf.contactCollectionId, // your collection id for contact messages
//       ID.unique(),
//       { name, email, message }
//     );
//     return response;
//   } catch (error) {
//     console.error("Error submitting contact form:", error);
//     throw error;
//   }
// };
import { Client, Databases, ID } from "appwrite";
import conf from "../../conf/conf.js";

const client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

const databases = new Databases(client);

export async function submitContactForm(formData) {
  try {
    const response = await databases.createDocument(
      conf.appwriteDatabaseId,
  conf.appwriteContactCollectionId, 
      ID.unique(),
   formData
    );
    console.log("✅ Contact form submitted:", response);
    return response;
  } catch (err) {
    console.error("❌ Error submitting contact form:", JSON.stringify(err, null, 2));
    throw err;
  }
}
