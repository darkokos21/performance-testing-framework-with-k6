export const config = {
  baseUrl: __ENV.BASE_URL || "https://reqres.in/api",
  stages: {
    load: [
      { duration: "1m", target: 50 },
      { duration: "3m", target: 50 },
      { duration: "1m", target: 0 },
    ],
    stress: [
      { duration: "2m", target: 20 },
      { duration: "3m", target: 200 },
      { duration: "2m", target: 0 },
    ],
    spike: [
      { duration: "10s", target: 200 },
      { duration: "30s", target: 0 }
    ],
    soak: [
      { duration: "10m", target: 50 },
    ]
  },
  thresholds: {
    http_req_duration: ["p(95)<500"],
    http_req_failed: ["rate<0.02"]
  }
};
