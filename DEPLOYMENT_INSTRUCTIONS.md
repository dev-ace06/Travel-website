# Deployment Instructions for Travel Adventures Website

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository: `travel-adventures-website`
4. Add a description: "A modern, responsive travel website built with HTML, CSS, and JavaScript"
5. Make sure the repository is set to **Public** (required for GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these files)
7. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

Run these commands in your terminal (replace `YOUR_USERNAME` with your actual GitHub username):

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/travel-adventures-website.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait a few minutes for GitHub to build and deploy your site
8. Your website will be available at: `https://YOUR_USERNAME.github.io/travel-adventures-website`

## Step 4: Verify Deployment

1. Visit your live website URL
2. Test all pages (Home, About, Contact)
3. Test the contact form (it won't actually send emails, but should show validation)
4. Test responsiveness on different screen sizes
5. Check that all images load properly

## Step 5: Update Repository (if needed)

If you make any changes to your website:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically rebuild and deploy your updated website.

## Troubleshooting

### If GitHub Pages doesn't work:
1. Check that your repository is public
2. Ensure you selected the correct branch (main) and folder (/)
3. Wait 5-10 minutes for the initial deployment
4. Check the "Actions" tab in your repository for any build errors

### If images don't load:
- The website uses Unsplash images which should work fine
- If you want to use local images, add them to your repository and update the CSS

### If the contact form doesn't work:
- This is expected - it's a demo form that shows validation but doesn't actually send emails
- For a real website, you'd need a backend service

## Final Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Website is live and accessible
- [ ] All pages work correctly
- [ ] Website is responsive
- [ ] Contact form shows validation
- [ ] All images load properly

## Your Live Website URL

Once deployed, your website will be available at:
`https://YOUR_USERNAME.github.io/travel-adventures-website`

Replace `YOUR_USERNAME` with your actual GitHub username.