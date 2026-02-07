# GitHub Pages Deployment Guide

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Initial Setup

Before the first deployment can succeed, GitHub Pages must be manually enabled in the repository settings:

### Steps to Enable GitHub Pages:

1. Go to your repository on GitHub
2. Click on **Settings**
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Click **Save**

### After Enabling Pages:

Once Pages is enabled with GitHub Actions as the source:
- The workflow will run automatically on every push to the `main` branch
- You can also manually trigger the workflow from the Actions tab
- The site will be deployed to: `https://<username>.github.io/<repository-name>/`

## Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`):
- Checks out the repository
- Configures GitHub Pages
- Uploads the site content as an artifact
- Deploys to GitHub Pages

## Troubleshooting

### "Get Pages site failed" error
This means GitHub Pages is not enabled or not configured to use GitHub Actions as the source. Follow the setup steps above.

### "Resource not accessible by integration" error
This means the workflow token doesn't have sufficient permissions. Ensure:
- The workflow has `pages: write` permission (already configured)
- Pages is enabled in repository settings
- The `github-pages` environment exists and is approved if required

## Testing Deployments

You can test the deployment workflow by:
1. Making a change to the repository
2. Pushing to the `main` branch
3. Checking the Actions tab to see the workflow run
4. Visiting your Pages URL once the deployment completes successfully
