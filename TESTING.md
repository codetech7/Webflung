# Manual Testing Instructions for GitHub Pages Deployment

## Prerequisites

Before running the deployment test, GitHub Pages MUST be manually enabled in the repository settings.

### Enable GitHub Pages (One-Time Setup):

1. Go to https://github.com/codetech7/Webflung/settings/pages
2. Under **"Build and deployment"**:
   - Set **Source** to "GitHub Actions"
3. Click **Save** if the button appears
4. Wait a few moments for the settings to apply

## Test Procedure

Once Pages is enabled, follow these steps to test the deployment:

### Method 1: Trigger via Push to Main (Recommended for Final Test)

1. Merge this PR to the `main` branch
2. Go to the Actions tab: https://github.com/codetech7/Webflung/actions
3. Watch the "Deploy to GitHub Pages" workflow run
4. Wait for the workflow to complete successfully (green checkmark)
5. Visit the deployed site at: `https://codetech7.github.io/Webflung/`
6. Verify the site loads correctly

### Method 2: Manual Workflow Dispatch (Quick Test)

1. Go to Actions tab: https://github.com/codetech7/Webflung/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select the branch (main or this PR branch)
5. Click "Run workflow"
6. Wait for completion
7. Visit the deployed site

### Method 3: Test from Current PR Branch

1. Go to Actions tab: https://github.com/codetech7/Webflung/actions
2. Find the latest workflow run for this branch
3. If it shows "failure" or "action_required", click "Re-run all jobs"
4. If Pages is now enabled, it should succeed
5. Check the workflow logs for success
6. Visit the deployed site

## Expected Results

✅ **Success Indicators:**
- Workflow shows green checkmark (success status)
- All steps complete without errors
- "Deploy to GitHub Pages" step shows deployment URL
- Site is accessible at the GitHub Pages URL
- Site content displays correctly (ConsultPro consultation site)

❌ **Failure Indicators:**
- "Get Pages site failed" error → Pages not enabled yet
- "Resource not accessible" error → Permissions issue
- "404 Not Found" on site → Deployment didn't complete

## Troubleshooting

### If workflow still fails with "Get Pages site failed"
- Double-check that Pages is enabled in settings
- Ensure "GitHub Actions" is selected as the source (not "Deploy from a branch")
- Wait a few minutes after enabling Pages and try again

### If workflow requires approval
- This is expected for the `github-pages` environment on first use
- Click "Review deployments" and approve
- The workflow will then proceed

### If site shows 404
- Wait 2-3 minutes after successful deployment
- GitHub Pages caching can delay updates
- Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Verification Checklist

After a successful deployment, verify:

- [ ] Homepage loads at the GitHub Pages URL
- [ ] Navigation works (Home, Services, About, etc.)
- [ ] All sections display correctly
- [ ] Forms are visible and styled properly
- [ ] No console errors in browser developer tools
- [ ] Site is mobile-responsive
- [ ] Multilanguage selector appears and functions

## Additional Notes

- The workflow is configured to run automatically on every push to `main`
- Manual workflow dispatch is available for testing
- Deployment typically takes 30-60 seconds to complete
- The site URL will be: `https://codetech7.github.io/Webflung/`

For more details, see [DEPLOYMENT.md](./DEPLOYMENT.md)
