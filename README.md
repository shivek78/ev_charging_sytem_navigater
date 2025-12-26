# ⚡ EV Charging System Navigator

<div align="center">



[![GitHub stars](https://img.shields.io/github/stars/shivek78/ev_charging_sytem_navigater?style=for-the-badge)](https://github.com/shivek78/ev_charging_sytem_navigater/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/shivek78/ev_charging_sytem_navigater?style=for-the-badge)](https://github.com/shivek78/ev_charging_sytem_navigater/network)
[![GitHub issues](https://img.shields.io/github/issues/shivek78/ev_charging_sytem_navigater?style=for-the-badge)](https://github.com/shivek78/ev_charging_sytem_navigater/issues)
[![GitHub license](https://img.shields.io/github/license/shivek78/ev_charging_sytem_navigater?style=for-the-badge)](LICENSE)

</div>

## 📖 Overview

The EV Charging System Navigator is a modern web application designed to help Electric Vehicle owners easily find and navigate charging stations. Built with Next.js and leveraging advanced mapping technologies, it offers an intuitive interface for searching, filtering, and viewing detailed information about charging points. With robust user authentication, a customizable theme, and a rich set of UI components, this application provides a seamless experience for managing your EV charging needs.

## ✨ Features

-   🎯 **Interactive EV Charging Station Map:** Visualize charging stations using Google Maps, with rich markers and navigation capabilities provided by `@react-google-maps/api` and `mapbox-gl`.
-   🔐 **Robust User Authentication:** Secure user registration, login, and session management powered by NextAuth.js and `bcryptjs` for password hashing.
-   📱 **Dynamic & Responsive UI:** Crafted with accessible and customizable components from Radix UI and Headless UI, ensuring a consistent experience across devices.
-   🌓 **Theming Support:** Seamlessly switch between light and dark modes for personalized viewing, managed by `next-themes`.
-   🔍 **Advanced Search & Filtering:** (Implied by navigator purpose and UI components) Efficiently locate charging stations based on various criteria.
-   🔔 **Toast Notifications:** Informative and non-intrusive system feedback using `sonner` for a better user experience.
-   📝 **Schema-based Form Validation:** Ensures data integrity and provides helpful user feedback with `zod` for robust validation.
-   💾 **Data Persistence with Prisma ORM:** Manages application data efficiently through an ORM, providing a flexible and type-safe database layer.

## 🖥️ Screenshots
<img width="1784" height="929" alt="Screenshot 2025-12-26 233517" src="https://github.com/user-attachments/assets/dc8e405f-0b85-4135-bb33-6cbcfc5aec60" />
<img width="1823" height="817" alt="Screenshot 2025-12-26 233546" src="https://github.com/user-attachments/assets/3f5d1998-d2ce-44e5-b18d-77b7b430b1b1" />


## 🛠️ Tech Stack

**Frontend:**
![Next.js](https://img.shields.io/badge/Next.js-Black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Google Maps Platform](https://img.shields.io/badge/Google_Maps_Platform-4285F4?style=for-the-badge&logo=google-maps&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)
![Headless UI](https://img.shields.io/badge/Headless_UI-161618?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Backend:**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-F6259F?style=for-the-badge&logo=next-auth&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-A5A5A5?style=for-the-badge&logo=github&logoColor=white)

**Database:**
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) <!-- Assumed, but compatible with other SQL DBs -->

**Tools:**
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)

## 🚀 Quick Start

Follow these steps to get the EV Charging System Navigator up and running on your local machine.

### Prerequisites
-   Node.js (v18.x or higher)
-   npm or pnpm (pnpm is used by `pnpm-lock.yaml`, but `package-lock.json` also exists for npm)
-   A PostgreSQL, MySQL, SQLite, or other database compatible with Prisma (e.g., PostgreSQL for this setup)
-   Google Maps Platform API Key

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/shivek78/ev_charging_sytem_navigater.git
    cd ev_charging_sytem_navigater
    ```

2.  **Install dependencies**
    ```bash
    # Using pnpm (recommended if pnpm-lock.yaml is preferred)
    pnpm install

    # Or using npm
    # npm install
    ```

3.  **Environment setup**
    Create a `.env` file in the root directory by copying the example. If `.env.example` is not present, create `.env` manually.
    ```bash
    cp .env.example .env # If .env.example exists
    ```
    Configure your environment variables in `.env`:

    | Variable              | Description                                                                                                     | Default           | Required |
    |-----------------------|-----------------------------------------------------------------------------------------------------------------|-------------------|----------|
    | `DATABASE_URL`        | Connection string for your database (e.g., `postgresql://user:password@host:port/database?schema=public`).      | `""`              | Yes      |
    | `NEXTAUTH_SECRET`     | A random string used for hashing tokens and signing cookies. Generate with `openssl rand -base64 32`.           | `""`              | Yes      |
    | `NEXTAUTH_URL`        | The base URL of your application (e.g., `http://localhost:3000` for development).                               | `http://localhost:3000` | Yes      |
    | `GOOGLE_MAPS_API_KEY` | Your Google Maps Platform API key, required for loading maps and associated services.                           | `""`              | Yes      |

4.  **Database setup**
    Initialize your Prisma database and run migrations. Ensure your `DATABASE_URL` in `.env` is correctly configured before running these commands.
    ```bash
    npx prisma db push # Pushes the schema to the database (for initial setup)
    npx prisma generate # Generates Prisma client based on your schema
    ```
    If you have existing migrations:
    ```bash
    npx prisma migrate dev --name init # Apply any pending migrations
    ```

5.  **Start development server**
    ```bash
    pnpm run dev
    # Or
    # npm run dev
    ```

6.  **Open your browser**
    Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
ev_charging_sytem_navigater/
├── app/                  # Next.js App Router (pages, layouts, API routes)
│   ├── api/              # API routes (e.g., auth routes for NextAuth.js)
│   ├── (auth)/           # Authentication-related pages/layouts
│   ├── (main)/           # Main application pages/layouts
│   └── layout.tsx        # Root layout for the application
├── components/           # Reusable UI components (e.g., Shadcn/UI components)
│   ├── ui/               # Generic UI components (buttons, dialogs, etc.)
│   └── shared/           # Application-specific components
├── lib/                  # Utility functions, helper modules, database interactions
│   ├── auth.ts           # NextAuth.js configuration
│   ├── utils.ts          # General utility functions
│   └── db.ts             # Database client/connection setup (e.g., Prisma client)
├── public/               # Static assets (images, favicons, etc.)
├── middleware.ts         # Next.js middleware for authentication/routing logic
├── next.config.mjs       # Next.js configuration file
├── postcss.config.mjs    # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies and scripts
├── package-lock.json     # npm lock file
├── pnpm-lock.yaml        # pnpm lock file
└── .gitignore            # Files and directories to ignore in Git
```

## ⚙️ Configuration

### Environment Variables
As listed in the [Environment setup](#environment-setup) section, these variables are crucial for the application's functionality.

### Configuration Files
-   `next.config.mjs`: Configures Next.js specific settings, including image optimization, routing, and more.
-   `tailwind.config.ts`: Defines custom Tailwind CSS classes, themes, and plugins.
-   `postcss.config.mjs`: Configures PostCSS plugins, including `tailwindcss` and `autoprefixer`.
-   `eslint.config.mjs`: Manages ESLint rules for code quality and consistency.
-   `tsconfig.json`: TypeScript compiler options for the project.

## 🔧 Development

### Available Scripts
The following scripts are defined in `package.json` for development and build processes:

| Command         | Description                                     |
|-----------------|-------------------------------------------------|
| `pnpm run dev`  | Starts the development server.                  |
| `pnpm run build`| Creates a production build of the application.  |
| `pnpm run start`| Starts the production server after building.    |
| `pnpm run lint` | Runs ESLint to check for code quality issues.   |

### Development Workflow
Contributions and development typically involve:
1.  Cloning the repository and installing dependencies.
2.  Setting up environment variables and the database.
3.  Running `pnpm run dev` to start the development server.
4.  Making changes in `app/`, `components/`, and `lib/` directories.
5.  Ensuring code quality with `pnpm run lint`.

## 🧪 Testing

This project uses ESLint for static code analysis.
```bash
# Run linting checks
pnpm run lint
```
<!-- TODO: If unit/integration tests are added, provide commands here -->

## 🚀 Deployment

### Production Build
To create an optimized production build:
```bash
pnpm run build
```
This will generate the `out` or `.next` directory with the compiled application.

### Deployment Options
This Next.js application can be deployed to various platforms:
-   **Vercel:** The easiest way to deploy Next.js applications. Connect your GitHub repository and Vercel handles the build and deployment process automatically.
-   **Netlify:** Similar to Vercel, Netlify offers continuous deployment from GitHub.
-   **Docker:** If a `Dockerfile` were present, it could be containerized and deployed to any Docker-compatible environment (e.g., AWS ECS, Kubernetes).
-   **Node.js Server:** The built application can be hosted on any server running Node.js by executing `pnpm run start` after the build.

## 🤝 Contributing

We welcome contributions to the EV Charging System Navigator! Please consider:
-   Forking the repository.
-   Creating a new branch for your feature or bug fix.
-   Submitting a pull request with a clear description of your changes.

### Development Setup for Contributors
Follow the [Quick Start](#🚀-quick-start) guide to set up your local development environment. Ensure all `pnpm run lint` checks pass before submitting a pull request.

## 📄 License

This project is licensed under the [LICENSE_NAME](LICENSE) - see the LICENSE file for details. <!-- TODO: Add actual license name and file if available -->

## 🙏 Acknowledgments

-   **Next.js community** for the incredible framework.
-   **Google Maps Platform** for robust mapping solutions.
-   **Radix UI** and **Headless UI** for providing accessible and customizable UI components.
-   **Prisma team** for the powerful ORM.
-   **NextAuth.js** for simplified authentication.

## 📞 Support & Contact

-   🐛 Issues: [GitHub Issues](https://github.com/shivek78/ev_charging_sytem_navigater/issues)
-   Feel free to reach out to `shivek78` on GitHub for any questions or support.

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [shivek78](https://github.com/shivek78)

</div>
