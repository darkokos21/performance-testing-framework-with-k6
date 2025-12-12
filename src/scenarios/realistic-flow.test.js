import http from "k6/http";
import { check, sleep } from "k6";
import { config } from "../config.js";


let users;
try {
    users = JSON.parse(open('../test-data/users.json'));
} catch (err) {
    console.error("Failed to load users.json:", err);
    users = [];
}

export const options = {
  stages: [
    { duration: "30s", target: 20 },
    { duration: "1m", target: 20 },
    { duration: "30s", target: 0 }
  ],
  tags: { test_type: "realistic_flow" }
};

export default function () {
  // Sanity check: ensure users array exists and is not empty
  if (!Array.isArray(users) || users.length === 0) {
    console.error("Users array is empty or not loaded! Check ../test-data/users.json");
    return; // skip this iteration safely
  }

  // pick a random user safely
  const randomIndex = Math.floor(Math.random() * users.length);
  const user = users[randomIndex];

  // double-check user object
  if (!user || !user.email) {
    console.warn("Selected user is invalid, skipping iteration.");
    return;
  }

  // login (only successful for eve.holt@reqres.in)
  let loginRes;
  if (user.email === "eve.holt@reqres.in") {
      loginRes = http.post(`${config.baseUrl}/login`, JSON.stringify({
          email: user.email,
          password: user.password
      }), { headers: { "Content-Type": "application/json" }});

      check(loginRes, {
          "login success": (r) => r.status === 200,
          "token present": (r) => r.json("token") !== undefined
      });
  } else {
      console.warn(`Skipping login check for user ${user.email} (ReqRes demo API limitation)`);
  }

  // list users
  const listRes = http.get(`${config.baseUrl}/users?page=1`);
  check(listRes, { "list users OK": (r) => r.status === 200 });

  const usersList = listRes.json("data");
  if (!usersList || usersList.length === 0) {
    console.warn("No users returned from list endpoint. Skipping single user fetch.");
    return;
  }

  // get a single user
  const randomUserIndex = Math.floor(Math.random() * usersList.length);
  const randomUser = usersList[randomUserIndex];
  const singleRes = http.get(`${config.baseUrl}/users/${randomUser.id}`);
  check(singleRes, { "single user OK": (r) => r.status === 200 });

  // create user
  const createRes = http.post(`${config.baseUrl}/users`, JSON.stringify({
    name: "Automation Bot",
    job: "QA Performance"
  }), { headers: { "Content-Type": "application/json" }});
  check(createRes, { "create user OK": (r) => r.status === 201 || r.status === 200});

  sleep(1);
}