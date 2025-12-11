import { config } from "../config.js";
import { GET } from "../utils.js";

export const options = {
  stages: config.stages.load,
  thresholds: config.thresholds,
  tags: { test_type: "load" }
};

export default function () {
  GET(`${config.baseUrl}/health`);
}
