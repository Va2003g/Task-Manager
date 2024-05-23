import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from ".././Backend";

async function FetchTask(id) {
  try {
    const queryForFindingTask = query(
      collection(db, "Tasks"),
      where("userId", "==", id)
    );
    const taskQueryResult = await getDocs(queryForFindingTask);

    const data = [];
    taskQueryResult.forEach((doc) => {
      data.push({id:doc.id,...doc.data()});
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}

export { FetchTask };
