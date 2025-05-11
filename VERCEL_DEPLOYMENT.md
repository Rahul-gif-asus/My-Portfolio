# Deploying Your Portfolio to Vercel

This guide will help you deploy your portfolio application to Vercel.

## Prerequisites

1. A [Vercel](https://vercel.com) account
2. Your repository pushed to GitHub, GitLab, or Bitbucket

## Deployment Steps

### 1. Set Up Vercel Project

1. Log in to Vercel and click "New Project"
2. Import your repository
3. Configure the project:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 2. Set Environment Variables

Add the following environment variables in the Vercel project settings:

- `DATABASE_URL`: Your PostgreSQL connection string
- `NODE_ENV`: Set to `production`

### 3. Deploy

Click "Deploy" and wait for the build process to complete.

## Vercel Configuration

The project includes a `vercel.json` file with the following configuration:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api"
    },
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ],
  "functions": {
    "api/**/*.js": {
      "memory": 1024,
      "maxDuration": 10
    }
  },
  "env": {
    "NODE_ENV": "production"
  }
}
```

This configuration:
- Specifies build and output settings
- Sets up routing so that API requests go to your server
- Configures serverless functions
- Sets environment variables

## Database Configuration

You need to provision a PostgreSQL database that's accessible from Vercel's hosting environment. Options include:

- [Neon](https://neon.tech/) (recommended, serverless)
- [Supabase](https://supabase.com/)
- [Railway](https://railway.app/)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)

After setting up your database, add the connection string to the Vercel environment variables.

## Troubleshooting

If you encounter deployment issues:

1. Check the build logs in Vercel
2. Ensure all environment variables are correctly set
3. Make sure your database is accessible from Vercel's hosting environment
4. Check for any issues with your API routes

## Project Structure for Vercel

Your project is now structured to work well with Vercel:

```
- api/
  - index.js      # Serverless function entry point
- dist/           # Built files (created during build)
  - public/       # Static assets
  - *.js          # Server code
- vercel.json     # Vercel configuration
``` 