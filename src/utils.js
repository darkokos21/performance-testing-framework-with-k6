import http from "k6/http";
import { check, sleep } from "k6";

export function GET(endpoint) {
  const res = http.get(endpoint);
  check(res, { "status is 200": r => r.status === 200 });
  sleep(1);
  return res;
}

export function POST(endpoint, payload) {
  const headers = { headers: { "Content-Type": "application/json" }};
  const res = http.post(endpoint, JSON.stringify(payload), headers);
  check(res, { "status is 201": r => r.status === 201 });
  sleep(1);
  return res;
}
