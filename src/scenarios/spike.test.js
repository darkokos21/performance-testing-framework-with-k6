import { config } from "../config.js";
import { GET } from "../utils.js";

export const options = {
  stages: config.stages.spike,
  thresholds: config.thresholds,
  tags: { test_type: "spike" }
};

export default function () {
  GET(`${config.baseUrl}/items`);
}
