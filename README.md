# LLM ATS Comparative Analysis

This repository contains the codebase and results for my M.Tech CSE Thesis titled **"Performance Evaluation of Deep Learning Models for Automatic Text Summarization"**. The study conducts a comparative analysis of various transformer-based models, evaluating them on both automatic metrics and human judgments.

---

## 📘 Overview

The primary objective of this research is to assess the capabilities of different Large Language Models (LLMs) in generating summaries. The evaluation encompasses:

-   **Automatic Metrics**: ROUGE, BLEU, METEOR & BERTScore
-   **Efficiency Metrics**: Inference Time and Memory Consumption
-   **Human Evaluation**: Assessing Fluency, Coherence, Informativeness, Relevance, and Factual Consistency

The models evaluated include:

-   BART
-   T5
-   FLAN-T5
-   GPT-2
-   LED

The datasets used for the evaluation include:

-   arXiv
-   BIGPatent
-   CNN/DailyMail
-   Multi-News
-   RedditTIFU

---

## 📁 Repository Structure

```

├── BART/                  # Code and outputs for BART model
├── T5/                    # Code and outputs for T5 model
├── FLAN-T5/               # Code and outputs for FLAN-T5 model
├── GPT2/                  # Code and outputs for GPT-2 model
├── LED/                   # Code and outputs for LED model
├── Results/               # Aggregated results and evaluation metrics
├── Extracted-Samples/     # Sample summaries for human evaluation
├── extract-samples.py     # Script to extract samples for evaluation
└── GoogleFormCreator.gs   # Google Apps Script for generating human evaluation forms
```

---

## 📊 Evaluation Metrics

### Automatic Metrics

-   **ROUGE**: Measures n-gram overlap between generated and reference summaries.
-   **BLEU**: Measures exact n-gram match between generated and reference summaries.
-   **METEOR**: Measures n-gram overlap but Considers synonymy and stemming.
-   **BERTScore**: Utilizes contextual embeddings for semantic similarity comparison.

### Efficiency Metrics

-   **Inference Time**: Measures the amount of time taken by the model for generating a single summary.
-   **Memory Consumption**: Measures the amount of Memory used by the model for generating each token.

### Human Evaluation Criteria

Summaries were assessed based on:

-   **Fluency**: Grammatical correctness and natural language flow.
-   **Coherence**: Logical consistency and organization.
-   **Informativeness**: Retention of key information.
-   **Relevance**: Focus on main points.
-   **Factual Consistency**: Accuracy with respect to the source content

Statistical significance of Human Evaluation Results was tested using the **Wilcoxon signed-rank test**.

---

## 📈 Results Summary

-   **FLAN-T5**: Achieved the highest scores in both automatic and human evaluations, balancing performance and computational efficiency.
-   **BART**: Demonstrated competitive performance with the lowest inference time and memory consumption, making it suitable for resource-constrained environments.
-   **T5**: Showed balanced performance across metrics.
-   **GPT-2**: Had moderate performance but higher computational costs.
-   **LED**: Excelled in summarizing longer documents but at the expense of higher resource usage.

---

## 🙌 Acknowledgments

This research was conducted as part of the M.Tech CSE Thesis work at **Shoolini University**. Special thanks to **Puneet Kapoor Sir** for his guidance and support.

---

## 🤝 Connect With Me

-   [Shivangam Soni](https://shivangam-soni.vercel.app/)
-   GitHub - [@ShivangamSoni](https://github.com/ShivangamSoni)
-   LinkedIn - [shivangam-soni](https://www.linkedin.com/in/shivangam-soni/)
-   ORCiD - [Shivangam Soni](https://orcid.org/0009-0002-3449-817X)
-   Instagram - [shivangam_soni](https://www.instagram.com/shivangam_soni/)
-   X - [ShivangamSoni](https://x.com/ShivangamSoni)
-   Threads - [@shivangam_soni](https://www.threads.net/@shivangam_soni)

---
