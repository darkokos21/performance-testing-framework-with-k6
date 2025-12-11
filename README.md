# **k6 Performance Testing Framework**

A complete, scalable, production-ready **Performance Testing Automation Framework** built using **k6**, designed for QA Automation, SRE, and DevOps workflows.

This framework includes:

✔ Load Testing  
✔ Stress Testing  
✔ Spike Testing  
✔ Soak Testing  
✔ Realistic end-to-end business scenario (Login → Users → Single User → Create)  
✔ Config-driven architecture  
✔ Threshold-based performance validation (SLAs)  
✔ Data-driven testing  
✔ Docker support  
✔ GitHub Actions CI integration  
✔ Automated HTML + JSON reporting with graphs

---

# 📁 **Project Structure**
```
performance-testing-framework-k6/
│
├── src/
│   ├── config.js
│   ├── utils.js
│   ├── scenarios/
│   │   ├── load.test.js
│   │   ├── stress.test.js
│   │   ├── spike.test.js
│   │   ├── soak.test.js
│   │   ├── realistic-flow.test.js
│   └── test-data/
│       └── users.json
│
├── results/
│   ├── summary.json
│   ├── summary.html
│
├── reporters/
│   └── html-summary.js
│
├── .github/workflows/
│   └── k6-performance-tests.yml
│
├── docker-compose.yml
├── package.json
├── .gitignore
└── README.md
```

---

# 🚀 **Tech Stack**
- **k6**
- JavaScript ES6 modules
- GitHub Actions CI
- Docker
- HTML reporting (k6-reporter)
- JSON metrics export

---

# ⚙️ **Configuration (src/config.js)**
The framework defaults to a publicly accessible testing API:

```
https://reqres.in/api
```

You can override it:
```
BASE_URL=https://myapp.com/api k6 run src/scenarios/load.test.js
```

---

# 🧪 **Test Scenarios Included**

## **1. Load Test**
Simulates expected traffic levels.

## **2. Stress Test**
Pushes the system beyond normal limits.

## **3. Spike Test**
Instant jump in traffic to detect instability.

## **4. Soak Test**
Long-duration steady load to check memory leaks + degradation.

## **5. Realistic Flow Test (NEW)**
A real-world multi-step user flow:

- Login
- Fetch list of users
- Fetch a single user
- Create a user
- Validate responses + token usage

This scenario shows **production-like user behavior** and represents a strong addition to your portfolio.

---

# 🔥 **Realistic Scenario File**
`src/scenarios/realistic-flow.test.js`

This test performs:
- Data-driven login using random users from `users.json`
- Dynamic extraction of token
- Dependent API calls
- Multiple checks
- Thresholds
- Response time validations

---

# 📊 **HTML Reporting (NEW)**

The framework generates:

- **summary.html** → Complete performance test report with charts
- **summary.json** → Raw k6 metrics for analysis or dashboards

Generated automatically through:

### `reporters/html-summary.js`
This uses **k6-reporter** to produce:

✔ Response time graphs  
✔ Latency distribution  
✔ Request rate  
✔ Failure rate  
✔ Endpoint-level breakdown  
✔ Performance trends

### Example run:
```
k6 run src/scenarios/realistic-flow.test.js
```
HTML + JSON reports will appear in the `results/` folder.

---

# 🤖 **GitHub Actions CI Integration**
The pipeline:

- Installs k6
- Runs performance tests
- Generates reports
- Uploads them as downloadable CI artifacts

This is essential for:
- Continuous performance monitoring
- Demonstrating your CI/CD skills

---

# 🐳 **Docker Support**
Run tests inside Docker via:
```
docker-compose up
```

---

# 📌 **Running Tests**

### Load Test:
```
k6 run src/scenarios/load.test.js
```

### Stress Test:
```
k6 run src/scenarios/stress.test.js
```

### Spike Test:
```
k6 run src/scenarios/spike.test.js
```

### Soak Test:
```
k6 run src/scenarios/soak.test.js
```

### Realistic Flow Test:
```
k6 run src/scenarios/realistic-flow.test.js
```

### Override Base URL:
```
BASE_URL=https://api.myapp.com k6 run src/scenarios/load.test.js
```

---

# 🎯 **Why This Project Stands Out**
This framework demonstrates:

✔ Real-world performance engineering skills  
✔ Understanding of load, stress, spike, and soak principles  
✔ Use of config-driven & modular architecture  
✔ Multiple stages + thresholds (SLAs)  
✔ Data-driven performance testing  
✔ Token-based authentication flow  
✔ CI automation with GitHub Actions  
✔ Automated HTML report generation  
✔ Dockerized execution  
✔ Professional project structure

This is **far above a typical QA portfolio project** and reflects modern DevOps + QA Automation expectations.

---

# 📬 **Future Enhancements (Optional)**
If needed, you can later extend the project with:

- Grafana + InfluxDB dashboards
- Performance trend comparison across builds
- Distributed execution
- Multiple environment profiles
- WebSockets or gRPC performance tests

---

# 🙌 **Contributions & Contact**
Feel free to open issues or contribute with additional scenarios or integrations.

---

# 📄 License
MIT License.

