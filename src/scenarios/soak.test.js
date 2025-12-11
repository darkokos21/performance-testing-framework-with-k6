import { config } from "../config.js";
import { GET } from "../utils.js";

export const options = {
  stages: config.stages.soak,
  thresholds: config.thresholds,
  tags: { test_type: "soak" }
};

export default function () {
  GET(`${config.baseUrl}/metrics`);
}
