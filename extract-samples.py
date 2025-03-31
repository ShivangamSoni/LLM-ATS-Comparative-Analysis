import json
import random

input_path = "./LED/led"
output_name = "LED"

datasets = ["bigpatent", "cnn", "multi-news", "reddit"]

samples_per_file = 10
combined_samples = []

for dataset in datasets:
    file_path = f"{input_path}-{dataset}-summaries.json"
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    num_samples = min(samples_per_file, len(data))
    selected_samples = random.sample(data, num_samples)

    for sample in selected_samples:
        sample["dataset"] = dataset

    combined_samples.extend(selected_samples)

random.shuffle(combined_samples)

output_file = f"./Extracted-Samples/{output_name}-samples.json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(combined_samples, f, indent=4, ensure_ascii=False)

print(f"✅ Successfully created {output_file} with {len(combined_samples)} samples.")
