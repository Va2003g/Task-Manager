// import React from 'react'

// async function FetchTask() {
//     try {
//       setLoading(true);
//       const user = auth.currentUser;
//       if (!user) {
//         // throw new Error("No authenticated user");
//         // naviagte to login
//         setLoading(false)
//         return;
//       }

//       const queryForFindingUser = query(
//         collection(db, "UserData"),
//         where("email", "==", user.email)
//       );
//       const queryResult = await getDocs(queryForFindingUser);

//       if (queryResult.empty) {
//         // throw new Error("User not found");
//         //login page
//         setLoading(false)
//         return;
//       }
//       //single user data
//       let userId;
//       queryResult.forEach((doc) => {
//         userId = doc.id;
//       });

//       const queryForFindingTask = query(
//         collection(db, "Tasks"),
//         where("userId", "==", userId)
//       );
//       const taskQueryResult = await getDocs(queryForFindingTask);

//       const data = [];
//       taskQueryResult.forEach((doc) => {

//         data.push(doc.data());
//       });
//       setTaskData(data);
//       setFilteredData(data);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//     }
//     console.log("taskData", taskData);
//   }

// export default FetchTask
