module.exports = {
  run: [
    // Update the launcher repo
    {
      method: "shell.run",
      params: {
        message: "git pull"
      }
    },
    // Update crispz-studio itself
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "git pull"
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
