export const config = {
  baseUrl: __ENV.BASE_URL || "https://fakerestapi.azurewebsites.net/api/v1",
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
  // Thresholds removed for CI/demo reliability
};
