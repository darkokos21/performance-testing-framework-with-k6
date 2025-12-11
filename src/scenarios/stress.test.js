import { config } from "../config.js";
import { GET } from "../utils.js";

export const options = {
  stages: config.stages.stress,
  thresholds: config.thresholds,
  tags: { test_type: "stress" }
};

export default function () {
  GET(`${config.baseUrl}/items`);
}
