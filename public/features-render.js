// Renders the Agent Harness Runtime overview + full feature list from
// GET /api/features, and wires each feature's "Ask AI" / "Generate Icon"
// buttons to pre-fill (not auto-submit) the AI panels below.

async function renderFeatures() {
  const container = document.getElementById("features");
  try {
    const res = await fetch("/api/features");
    const { overview, features } = await res.json();

    document.getElementById("ov-icon").textContent = overview.icon;
    document.getElementById("ov-tagline").textContent = overview.tagline;
    document.getElementById("ov-summary").textContent = overview.summary;

    features.forEach((feature) => {
      const card = document.createElement("div");
      card.className = "feature-card";

      const icon = document.createElement("div");
      icon.className = "feature-icon";
      icon.textContent = feature.icon;
      card.appendChild(icon);

      const body = document.createElement("div");
      body.className = "feature-body";
      body.innerHTML =
        `<div class="feature-name">${feature.name}</div>` +
        `<p class="feature-desc">${feature.desc}</p>` +
        `<p class="feature-detail">${feature.detail}</p>`;
      card.appendChild(body);

      const actions = document.createElement("div");
      actions.className = "feature-actions";

      const askBtn = document.createElement("button");
      askBtn.textContent = "Ask AI";
      askBtn.addEventListener("click", () => {
        document.getElementById("chat-prompt").value =
          `In 2-3 sentences, explain the "${feature.name}" feature of DigitalOcean Agent Harness Runtime and give one concrete use case.`;
        document.getElementById("chat-prompt").scrollIntoView({ behavior: "smooth", block: "center" });
      });

      const iconBtn = document.createElement("button");
      iconBtn.textContent = "Generate Icon";
      iconBtn.addEventListener("click", () => {
        document.getElementById("image-prompt").value =
          `A clean, modern flat icon representing "${feature.name}" (${feature.desc}), ocean-blue and rust-orange color palette, minimalist, on a white background`;
        document.getElementById("image-prompt").scrollIntoView({ behavior: "smooth", block: "center" });
      });

      actions.appendChild(askBtn);
      actions.appendChild(iconBtn);
      card.appendChild(actions);

      container.appendChild(card);
    });
  } catch (err) {
    container.textContent = "Could not load feature list.";
  }
}

renderFeatures();
