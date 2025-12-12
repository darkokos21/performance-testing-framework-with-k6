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
    { duration: "5s", target: 5 },
    { duration: "10s", target: 10 },
    { duration: "5s", target: 0 }
  ],
  tags: { test_type: "realistic_flow" }
  // thresholds intentionally removed
};

export default function () {
  if (!Array.isArray(users) || users.length === 0) {
    console.error("Users array is empty or not loaded!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * users.length);
  const user = users[randomIndex];
  if (!user || !user.id) return;

  // List users
  const listRes = http.get(`${config.baseUrl}/Users`);
  check(listRes, { "list users OK": (r) => r.status === 200 });

  const usersList = listRes.json();
  if (!usersList || usersList.length === 0) return;

  // Single user fetch
  const randomUserIndex = Math.floor(Math.random() * usersList.length);
  const randomUser = usersList[randomUserIndex];
  const singleRes = http.get(`${config.baseUrl}/Users/${randomUser.id}`);
  check(singleRes, { "single user OK": (r) => r.status === 200 });

  // Create user
  const createRes = http.post(`${config.baseUrl}/Users`, JSON.stringify({
    id: Math.floor(Math.random() * 10000),
    userName: "Automation Bot",
    email: "automation@example.com"
  }), { headers: { "Content-Type": "application/json" } });

  check(createRes, { "create user OK": (r) => r.status === 200 || r.status === 201 });

  sleep(1);
}
