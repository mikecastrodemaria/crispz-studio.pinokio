# crispz-studio.pinokio

1-click [Pinokio](https://pinokio.computer) launcher for
**[crispz-studio](https://github.com/mikecastrodemaria/crispz-studio)** — a Z-Image
txt2img + upscaler/detailer studio (Fooocus-style, 100% local).

## What it does

Installs and launches crispz-studio in one click:

- **Install** — clones `mikecastrodemaria/crispz-studio` into `app/`, creates a
  venv, installs PyTorch (CUDA cu128 on NVIDIA / ROCm / MPS / CPU) + the project
  requirements (`requirements.txt` + `requirements-extra.txt`).
- **Start** — runs `python app.py` and opens the Gradio Web UI.
- **Update** — `git pull` on the launcher and on the app, refreshes deps.
- **Reset** — removes `app/` (and its venv) to reinstall from scratch.

## Features (crispz-studio)

txt2img · ESRGAN + Z-Image refine upscale · single-file/Civitai models +
checkpoint/LoRA switching · 277 styles (search + previews) · Describe / Improve
prompt & **Vision Mix** (Ollama) · Remove BG · Reframe / outpaint · Face Swap ·
CLI + persistent server. See the app repo for full docs.

## Requirements

- [Pinokio](https://pinokio.computer) installed.
- An NVIDIA GPU is recommended (RTX 5090 / Blackwell → cu128). CPU/AMD/Apple also
  supported by the torch installer, but generation will be slow without CUDA.
- First generation downloads the Z-Image Turbo model from Hugging Face (~12 GB),
  cached afterwards.

## Optional: Face Swap & Ollama

- **Face Swap** needs extra deps + an inswapper model — see the app's
  `requirements-faceswap.txt` and README (not installed by default).
- **Describe / Improve / Vision Mix** need a local [Ollama](https://ollama.com)
  with a vision model (e.g. `llava`, `qwen-vl`).

## Notes

- `app/`, `env/` and `logs/` are gitignored (created at install time).
- Local user config (`config.txt`) and models stay inside `app/` and are not
  tracked by this launcher repo.
