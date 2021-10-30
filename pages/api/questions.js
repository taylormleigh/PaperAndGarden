import { connectToDatabase } from "./_connector";
import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  await connectToDatabase();
  const client = await clientPromise
  const db = client.db("PaperGarden");
  const movies = await db
    .collection("Questions")
    .find({})
    .sort({ metacritic: -1 })
    // .limit(20)
    .toArray();
  res.json(movies);
};

