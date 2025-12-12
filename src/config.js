export const config = {
  baseUrl: __ENV.BASE_URL || "https://reqres.in/api",
  stages: {
    load: [
      { duration: "5s", target: 10 },
      { duration: "5s", target: 0 },
    ],
    stress: [
      { duration: "5s", target: 20 },
      { duration: "10s", target: 50 },
      { duration: "5s", target: 0 },
    ],
    spike: [
      { duration: "2s", target: 1 },
      { duration: "1s", target: 50 },
      { duration: "5s", target: 1 },
    ],
    soak: [
      { duration: "10s", target: 10 },
    ],
  },
  thresholds: {
    http_req_duration: ["p(95)<800"],
    http_req_failed: ["rate<0.05"]
  },
};
