# Sowpay Mart - India's Rewards Platform

## About Sowpay Mart

Sowpay Mart is India's leading rewards platform launching in Haryana. We connect smart shoppers with local businesses, allowing customers to earn SMP points on every purchase and convert them into real rewards and cashback.

## Project Setup

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation & Development

Follow these steps to get started:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd sowpay-mart-website

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Build for Production

```sh
npm run build
npm run preview
```

## Deployment Guide

### Deploy to Hostinger

#### Prerequisites
- Hostinger account with hosting plan
- FTP/SFTP credentials from Hostinger
- Node.js environment (if supported by your hosting)

#### Method 1: Using Hostinger File Manager (Recommended for Static Builds)

1. **Build your project locally:**
```sh
npm run build
```
This creates a `dist` folder with optimized production files.

2. **Connect to Hostinger:**
   - Log in to your Hostinger account
   - Go to **File Manager**
   - Navigate to `public_html` folder

3. **Upload the build files:**
   - Open the `dist` folder from your local machine
   - Upload all files from `dist` to `public_html`
   - Make sure `index.html` is in the root of `public_html`

4. **Configure .htaccess (Important for React Router):**
   Create a `.htaccess` file in `public_html` with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures all routes redirect to `index.html` for React Router to work properly.

#### Method 2: Using FTP/SFTP

1. **Build the project:**
```sh
npm run build
```

2. **Get FTP credentials:**
   - From Hostinger dashboard, get FTP username, password, and server address

3. **Use FTP client (FileZilla, WinSCP, etc.):**
   - Connect using your credentials
   - Navigate to `public_html`
   - Upload contents of `dist` folder

4. **Add .htaccess file** (same as Method 1)

#### Method 3: Using Git (If Hostinger supports Node.js)

1. **Initialize Git repository:**
```sh
git init
git add .
git commit -m "Initial commit"
```

2. **Push to Hostinger** (if they support Git deployment):
   - Follow Hostinger's Git deployment guide
   - Set deployment branch to `main`

3. **Deploy via Hostinger Dashboard:**
   - The build will run automatically on push

### Environment Variables (if needed)

Create a `.env` file in the root:
```
VITE_API_URL=https://api.sowpaymart.com
```

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Blank page after deployment | Ensure `.htaccess` is correctly set up in `public_html` |
| 404 errors on routes | Add the `.htaccess` rewrite rules |
| CSS/JS not loading | Check file paths in `index.html` - may need to adjust base path |
| CORS errors | Configure CORS headers on your backend API |

### Performance Optimization

- The `dist` folder is already optimized with minified CSS/JS
- Hostinger usually handles gzip compression automatically
- Consider enabling caching in Hostinger's caching settings

### After Deployment

1. Test all routes work correctly
2. Check Console for any errors (F12)
3. Test on mobile devices
4. Monitor Hostinger dashboard for any issues

## Technologies Used

This project is built with:

- **Vite** - Next generation frontend tooling
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - High-quality component library
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── App.tsx         # Main app component
```

## Features

- 🛍️ Smart rewards on every purchase
- 💰 Convert SMP points to cashback
- 🏪 Partner with local businesses
- 📱 Mobile-first design
- ⚡ Lightning-fast performance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is proprietary and owned by Sowpay Mart Pvt Ltd.
"# sowpay-app" 
"# sowpay-app" 
