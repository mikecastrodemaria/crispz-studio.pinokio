module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        env: { },
        path: "app",
        message: [
          "python app.py"
        ],
        on: [{
          // Capture the local Gradio URL (e.g. http://127.0.0.1:7860)
          "event": "/(http:\\/\\/[0-9.:]+)/",
          "done": true
        }]
      }
    },
    {
      // Expose the captured URL to pinokio.js (Open Web UI menu item)
      method: "local.set",
      params: {
        url: "{{input.event[1]}}"
      }
    }
  ]
}
