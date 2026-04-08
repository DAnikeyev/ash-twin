# ash-twin

A personal projects hub — a single-page Blazor Web App on .NET 10 that showcases deployed side projects.

## Features

- **Linteum** card — clickable, opens [linteum.ash-twin.com](https://linteum.ash-twin.com)
- **Coming Soon** card — placeholder for the next project
- Footer with Telegram, email and GitHub contact links
- Dark warm color palette (`#9E4A2C` / `#C6A36D`)

## Tech Stack

- [.NET 10](https://dotnet.microsoft.com/) — Blazor Web App (interactive server rendering)
- Docker — containerized, single image

## Getting Started

### Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)  **or** [Docker](https://www.docker.com/)

### Run locally (dotnet)

```bash
cd AshTwin
dotnet run
```

Open <http://localhost:5001> in your browser.

### Run with Docker

```bash
# Build the image
docker build -t ash-twin .

# Start the container — app is available on host port 5001
docker run -p 5001:5001 ash-twin
```

Open <http://localhost:5001> in your browser.

## Project Structure

```
ash-twin/
├── AshTwin/                   # Blazor Web App project
│   ├── Components/
│   │   ├── Layout/
│   │   │   └── MainLayout.razor   # Shell with footer
│   │   └── Pages/
│   │       └── Home.razor         # Landing page with cards
│   ├── wwwroot/
│   │   └── app.css                # Custom styles & color scheme
│   └── Program.cs
├── Dockerfile
└── README.md
```

## Contact

- Telegram: [@DmitryAnikeyev](https://t.me/DmitryAnikeyev)
- Email: [DmitryAnikeyev@gmail.com](mailto:DmitryAnikeyev@gmail.com)
- GitHub: [DAnikeyev/ash-twin](https://github.com/DAnikeyev/ash-twin)

## License

[MIT](LICENSE)
