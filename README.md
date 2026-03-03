# 🥋 TH Data Dojo

> Interactive examples of Tomorrow Health's data stack, built to help anyone on the team understand how our data flows, where it lives, and how it powers decisions.

**[→ View the live site](https://charliehahn-th.github.io/th-data-dojo)**

---

## What is this?

The Data Dojo is a collection of interactive, visual examples that demystify our data platform. No SQL required. No prior data experience needed. Just click around and learn.

Think of it as a living playbook: part documentation, part hands-on training ground.

---

## 🗂 What's inside

### 🍽️ Data Stack Tour
An animated, step-by-step walkthrough of how data moves from raw sources to real decisions at Tomorrow Health.

Covers: `Sources → Extract → Warehouse → Transform → Observability → BI → Reverse ETL → Decisions`

**[→ Open the Data Stack Tour](https://charliehahn-th.github.io/th-data-dojo/data-stack-tour)**

---

## 🥋 The Dojo Philosophy

| Belt | What it means |
|------|--------------|
| ⬜ White | You understand how data stack works and how key metrics are defined |
| 🟡 Yellow | You can confidently find answers using existing dashboards and reports |
| 🟠 Orange | You can slice, dice, and manipulate data within existing reports to answer questions not already summarized |
| 🟢 Green | You can recognize when something in the data doesn’t look right and raise the right questions |
| 🔵 Blue | You can create new analyses, write SQL, or use AI tools to answer complex questions independently |

---

## 🛠 Our Stack

| Layer | Tool |
|-------|------|
| Sources | TH Portal · AWS Connect · Partner APIs |
| Extract & Load | Fivetran · AWS Lambda · Airflow |
| Warehouse | Snowflake |
| Transform | dbt |
| Observability | Metaplane |
| BI | Sigma |
| Reverse ETL | Hightouch |
| Ops Apps | Salesforce · HubSpot |

---

## 🤝 Contributing

Have an idea for a new example? Open a PR or drop a note in `#askdata` on Slack.

Good candidates for future additions:
- [ ] How a dbt model gets built
- [ ] How Metaplane catches a bad sync
- [ ] How Hightouch pushes data to Hubspot
- [ ] Snowflake schema explorer

---

## 📬 Questions?

Reach out to the Data team in **#askdata** on Slack.
