// DigitalOcean M.A.R.S. — Agent Harness Runtime feature catalog.
//
// Source: internal DO Slack announcements (#announcements, #atv-do-open-discussion,
// #marketing-and-comms-public), Private Preview (Aug 2026) -> Public Preview
// launch Sept 22, 2026. This is pre-GA / recently-launched product info —
// treat as internal reference content, not a public marketing asset, until
// GA messaging is finalized.
//
// Agent Harness Runtime is one of the two M.A.R.S. products (the other being
// Action Gateway). This app is scoped to Harness Runtime only.

export const OVERVIEW = {
  name: "Agent Harness Runtime",
  icon: "🛰️",
  tagline: "The managed execution environment where AI agents run, persist, and scale.",
  summary:
    "Agent Harness Runtime gives every agent session a dedicated, isolated, resumable " +
    "sandbox — so you don't have to provision VMs, manage containers, or build your own " +
    "pause/resume plumbing to run Claude Code, Codex CLI, or a custom agent in the cloud.",
};

export const FEATURES = [
  {
    name: "Multi-framework support",
    icon: "🧩",
    desc: "Runs Claude Code, Codex CLI, OpenCode, LangGraph, and Hermes today; CrewAI support is planned.",
    detail: "Bring a custom agent too — package it as a standard OCI container image and the harness runs it like any supported framework.",
  },
  {
    name: "Firecracker microVM isolation",
    icon: "🧱",
    desc: "Agent-generated code executes inside dedicated, hardware-isolated microVMs.",
    detail: "Each session gets its own microVM boundary, so one agent's generated code can't touch another session's filesystem, memory, or network path.",
  },
  {
    name: "Sub-second sessions",
    icon: "⚡",
    desc: "Sessions start in under a second and resume from pause in roughly 200ms.",
    detail: "No cold-start container pulls or VM boot waits in the interactive path — the harness keeps sessions warm and resumable.",
  },
  {
    name: "Human approval gates",
    icon: "✋",
    desc: "Configurable approval checkpoints for destructive, irreversible, or high-cost actions.",
    detail: "Define which actions need a human sign-off (e.g. force-push, delete, spend over a threshold) before the agent is allowed to execute them.",
  },
  {
    name: "Native GitHub integration",
    icon: "🐙",
    desc: "OAuth-based repo cloning, branching, committing, and opening PRs.",
    detail: "No personal access tokens to manage — connect once via OAuth and the harness handles clone/branch/commit/PR as part of the agent's workflow.",
  },
  {
    name: "Pause, resume, and handoff",
    icon: "🔁",
    desc: "Move a session across devices or hand it off to a teammate mid-task.",
    detail: "A session's full state travels with it — start on your laptop, pause, and resume on another machine or in another person's account.",
  },
  {
    name: "Checkpoint and fork API",
    icon: "🌱",
    desc: "Branch new work from any point in a prior session.",
    detail: "Roll back to a checkpoint and fork a new session from it — useful for trying multiple approaches from the same starting state without re-running setup.",
  },
  {
    name: "Port forwarding",
    icon: "🔌",
    desc: "Preview agent-created services from your local machine.",
    detail: "If an agent stands up a dev server inside its sandbox, forward the port and preview it in your own browser without deploying anywhere.",
  },
  {
    name: "Webhooks & scheduled runs",
    icon: "⏰",
    desc: "Trigger agent executions on events or a schedule, not just interactively.",
    detail: "Kick off a session from a webhook (e.g. a new GitHub issue) or on a cron-style schedule for recurring agent work.",
  },
  {
    name: "Single agents.yaml config",
    icon: "📄",
    desc: "One file configures harness, compute shape, budget, tools, and secrets.",
    detail: "Define the runtime, resource size, spend limits, tool access, and secret references for a session declaratively, checked into your repo alongside the code.",
  },
];
