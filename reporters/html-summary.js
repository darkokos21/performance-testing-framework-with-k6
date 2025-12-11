import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
        "results/summary.html": htmlReport(data),
        "results/summary.json": JSON.stringify(data)
    };
}
