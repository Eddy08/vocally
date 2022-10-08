import clientPromise from "../../lib/mongodb";
import circularJson from "circular-json";
export default async (req, res) => {
  try {
    console.log("Req", req.body);
    let data = req.body;
    const client = await clientPromise;
    const db = client.db("users");

    const users = await db
      .collection("userdetails")
      .find({ email: data.email })
      .toArray();

    if (users.length > 0) {
      let msg =
        "User with email id " +
        users[0].email +
        " and name " +
        users[0].name +
        " already Exists!!";
      res.json(msg);
      return msg;
    } else {
      try {
        const newUser = await db.collection("userdetails").insertOne(data);
        console.log("new user -> ", newUser);
        if (newUser.acknowledged === true) {
          let msg =
            "Sent an Email to " + data.name + " with emailID " + data.email;

          res.json(msg);
          return msg;
        } else throw error("Some Error Occured");
      } catch (e) {
        console.error(e);
      }
    }
  } catch (e) {
    console.error(e);
  }
};
