# 🚀 CareerPilot AI

<p align="center">
  <img src="https://img.shields.io/badge/AI-Powered-8B5CF6?style=for-the-badge" alt="AI Powered" />
  <img src="https://img.shields.io/badge/React-TypeScript-3178C6?style=for-the-badge&logo=react&logoColor=white" alt="React and TypeScript" />
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/Google-Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Gemini" />
</p>

<h3 align="center">
  Your AI-Powered Career Companion 🎯
</h3>

<p align="center">
  An intelligent career development platform that helps students and aspiring professionals analyze their resumes, identify skill gaps, build personalized learning roadmaps, and prepare for interviews.
</p>

<p align="center">
  <a href="https://github.com/Atharva-Shinde19/CareerPilot-AI">
    <strong>Explore the Repository</strong>
  </a>
  &nbsp; • &nbsp;
  <a href="#-screenshots">Screenshots</a>
  &nbsp; • &nbsp;
  <a href="#-getting-started">Getting Started</a>
</p>

---

## 💡 About the Project

**CareerPilot AI** is an AI-powered career preparation platform built to make professional growth more structured, personalized, and measurable.

Instead of switching between multiple tools for resume improvement, learning resources, skill assessment, and interview preparation, users can manage their career development through a unified platform.

CareerPilot AI combines resume intelligence, AI-assisted learning roadmaps, skill-gap analysis, mock assessments, interview preparation, and career progress tracking to help users move closer to their target roles.

## ✨ Key Features

### 📄 AI Resume Analysis
- Upload PDF resumes for analysis.
- Evaluate resume structure and ATS-oriented compatibility.
- Extract relevant skills and identify missing keywords.
- Highlight strengths, weaknesses, and improvement opportunities.
- Generate actionable resume improvement recommendations.

### 🗺️ Personalized Career Roadmaps
- Generate AI-assisted learning roadmaps using Google Gemini.
- Organize learning into phases, skills, and topics.
- Discover learning resources through YouTube search links.
- Track progress across roadmap skills.
- Structure preparation around specific career goals.

### 🎯 Intelligent Skill Gap Analysis
- Identify skills relevant to a target job role.
- Compare existing skills with role-specific requirements.
- Highlight missing technologies and concepts.
- Turn skill gaps into actionable learning objectives.

### 📝 Mock Assessments
- Support technical and aptitude preparation workflows.
- Organize assessments by category and difficulty.
- Evaluate answers and track performance.
- Identify areas that need additional practice.

### 🤖 AI Mock Interview Preparation
- Prepare for technical, HR, and behavioral interviews.
- Practice questions relevant to target roles.
- Explore resume-based interview questions.
- Receive feedback and identify areas for improvement.

### 📊 Career Analytics Dashboard
- View career preparation progress.
- Monitor resume and skill development.
- Track assessment and interview performance.
- Review personalized career recommendations.

## 🖥️ Screenshots

Explore the CareerPilot AI interface below. Add your actual application screenshots to the `screenshots/` folder using the filenames shown here.

### 🏠 Dashboard

<p align="center">
  <img src="screenshots/dashboard.png" alt="CareerPilot AI Dashboard" width="100%" />
</p>

### 📄 Resume Analysis

<p align="center">
  <img src="screenshots/resume-analysis.png" alt="CareerPilot AI Resume Analysis" width="100%" />
</p>

### 🗺️ AI-Generated Career Roadmap

<p align="center">
  <img src="screenshots/career-roadmap.png" alt="CareerPilot AI Career Roadmap" width="100%" />
</p>

### 📊 Progress & Analytics

<p align="center">
  <img src="screenshots/analytics.png" alt="CareerPilot AI Analytics Dashboard" width="100%" />
</p>

> **Note:** These image paths are placeholders for your screenshots. Upload the corresponding image files before publishing the README, or remove any sections you have not captured yet.

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | React, TypeScript, Vite |
| Styling | Tailwind CSS |
| Backend | Python, FastAPI |
| Database | PostgreSQL |
| ORM | SQLAlchemy |
| Authentication | JWT |
| AI Integration | Google Gemini |
| Version Control | Git and GitHub |

## 🏗️ System Architecture

```text
                    ┌────────────────────────┐
                    │       User             │
                    └───────────┬────────────┘
                                │
                                ▼
                    ┌────────────────────────┐
                    │ React + TypeScript UI  │
                    │     Vite + Tailwind    │
                    └───────────┬────────────┘
                                │ HTTP / REST
                                ▼
                    ┌────────────────────────┐
                    │    FastAPI Backend     │
                    │ Authentication & APIs  │
                    └──────┬───────────┬─────┘
                           │           │
                ┌──────────▼───┐  ┌────▼────────────┐
                │ PostgreSQL   │  │ Google Gemini   │
                │ SQLAlchemy   │  │ AI Integration  │
                └──────────────┘  └─────────────────┘
```

## 📂 Project Structure

The following is an illustrative structure. Adjust the directory names to match your actual repository.

```text
CareerPilot-AI/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── database.py
│   │   └── main.py
│   └── requirements.txt
│
├── screenshots/
│   ├── dashboard.png
│   ├── resume-analysis.png
│   ├── career-roadmap.png
│   └── analytics.png
│
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

Follow these steps to run CareerPilot AI locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [PostgreSQL](https://www.postgresql.org/)
- Git
- A Google Gemini API key for AI-powered functionality

### 1. Clone the repository

```bash
git clone https://github.com/Atharva-Shinde19/CareerPilot-AI.git
cd CareerPilot-AI
```

### 2. Configure the backend

Open a terminal and navigate to the backend directory:

```bash
cd backend
python -m venv venv
```

Activate the virtual environment.

**Windows:**

```powershell
.\venv\Scripts\Activate.ps1
```

**macOS/Linux:**

```bash
source venv/bin/activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Configure your local environment variables using the names expected by your backend configuration. Start the FastAPI server using your actual application entry point.

For example, if your entry point is `app.main:app`:

```bash
uvicorn app.main:app --reload
```

The API documentation is typically available at:

`http://localhost:8000/docs`

### 3. Configure the frontend

Open a second terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal, typically:

`http://localhost:5173`

### 4. Configure environment variables

Create a local `.env` file in the appropriate backend directory and configure the required values.

Example:

```env
DATABASE_URL=your_database_connection_string
SECRET_KEY=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

Use the variable names required by your implementation. Configure PostgreSQL and any other required services before starting the application.

**Security:** Never commit `.env` files, API keys, database passwords, JWT secrets, or personal user data to GitHub.

## 🗺️ Development Roadmap

- [x] React and TypeScript frontend foundation
- [x] AI-assisted career roadmap generation
- [x] Roadmap phases, skills, topics, and learning resources
- [x] Resume analysis and ATS-oriented feedback
- [x] Skill-gap analysis workflows
- [x] Database-backed roadmap and progress persistence
- [ ] Complete mock assessment workflows
- [ ] Complete AI mock interview workflows
- [ ] Expand automated testing and error handling
- [ ] Production deployment and monitoring

> Roadmap checkboxes reflect the intended project status and should be kept aligned with the current implementation.

## 🔒 Security & Privacy

- Keep API credentials in environment variables.
- Never commit secrets or production database credentials.
- Validate uploaded files on the server.
- Protect authenticated endpoints with appropriate authorization.
- Avoid logging sensitive resume content or personal information.
- Use HTTPS and secure deployment settings in production.

## 🤝 Contributing

Contributions, ideas, and suggestions are welcome.

1. Fork this repository.
2. Create a feature branch.
3. Implement and test your changes.
4. Commit your changes with a descriptive message.
5. Open a pull request explaining your contribution.

## 👨‍💻 Author

**Atharva Shinde**

Computer Engineering Student | AI & Full-Stack Development

- GitHub: [@Atharva-Shinde19](https://github.com/Atharva-Shinde19)

## ⭐ Support

If you find CareerPilot AI interesting, consider giving the repository a ⭐ on GitHub.

Your feedback and contributions can help improve the project.

---

<p align="center">
  <strong>CareerPilot AI</strong><br/>
  Turning career goals into actionable learning journeys. 🚀
</p>
