module.exports = {
  run: [
    // Force-update the launcher repo to exactly match its origin (main)
    {
      method: "shell.run",
      params: {
        message: [
          "git fetch origin",
          "git reset --hard origin/main"
        ]
      }
    },
    // Force-update crispz-studio (app) to exactly match its origin (main)
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "git fetch origin",
          "git reset --hard origin/main"
        ]
      }
    },
    // Refresh dependencies (in case requirements changed)
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r requirements.txt",
          "uv pip install -r requirements-extra.txt"
        ]
      }
    }
  ]
}
