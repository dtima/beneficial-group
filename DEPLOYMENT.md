# 🚀 Netlify Deployment Guide

## Overview

This guide provides instructions for deploying the Beneficial Solutions LLC website to Netlify with Next.js 15.

## ✅ Current Configuration

### Build Settings

- **Build Command**: `pnpm run build`
- **Publish Directory**: `.next`
- **Node Version**: 18.20.8

### Environment Variables

No environment variables are required for basic deployment.

## 🔧 Netlify Configuration

The project includes a `netlify.toml` file with the following configuration:

```toml
[build]
  command = "pnpm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18.20.8"
  NPM_FLAGS = "--version"
  NPM_VERSION = "10.8.2"

[[redirects]]
  from = "/*"
  to = "/.netlify/functions/___netlify-handler"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/favicon.ico"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[functions]
  directory = ".netlify/functions"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[dev]
  command = "pnpm run dev"
  port = 3000
  publish = ".next"
  targetPort = 3000
```

## 📋 Deployment Steps

### 1. Connect Repository

1. Go to Netlify Dashboard
2. Click "New site from Git"
3. Connect to GitHub repository: `dtima/beneficial-group`
4. Select branch: `main`

### 2. Configure Build Settings

- **Build command**: `pnpm run build`
- **Publish directory**: `.next`
- **Node version**: 18.20.8

### 3. Deploy

Click "Deploy site" and wait for the build to complete.

## 🔍 Troubleshooting

### Common Issues

#### Issue: "Deploy directory 'dist' does not exist"

**Solution**: Ensure publish directory is set to `.next`, not `dist`

#### Issue: Build fails with dependency errors

**Solution**:

1. Clear build cache in Netlify
2. Ensure Node.js version is 18.20.8
3. Check that all dependencies are in `package.json`

#### Issue: Dynamic routes not working

**Solution**: The `netlify.toml` includes proper redirects for dynamic routes

### Performance Optimization

The site is optimized for:

- **Core Web Vitals**: LCP, FID, CLS, TTFB
- **Bundle Size**: 212 kB (Excellent)
- **Static Generation**: 5/5 pages optimized
- **Image Optimization**: WebP/AVIF formats

## 🛡️ Security Features

- **Content Security Policy**: Configured
- **HTTPS Enforcement**: HSTS headers
- **XSS Protection**: Enabled
- **Frame Protection**: X-Frame-Options: DENY
- **Privacy Protection**: Permissions-Policy configured

## 📊 Monitoring

The site includes:

- **Performance Monitoring**: Real-time Core Web Vitals tracking
- **Error Boundaries**: Comprehensive error handling
- **Analytics API**: `/api/analytics/performance` endpoint

## 🌐 Internationalization

- **Languages**: English and French
- **Routing**: `/[locale]/` pattern
- **Translation**: next-intl integration

## 📞 Support

For deployment issues:

1. Check Netlify build logs
2. Verify `netlify.toml` configuration
3. Ensure all dependencies are installed
4. Contact development team if issues persist

---

**Status**: ✅ Production Ready
**Last Updated**: December 2024
**Version**: Next.js 15.4.3
