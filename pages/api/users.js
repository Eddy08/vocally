import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("users");

       const users = await db
           .collection("userdetails")
           .find({})
           .toArray();

       res.json(users);
   } catch (e) {
       console.error(e);
   }
};