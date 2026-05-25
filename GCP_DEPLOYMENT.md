# Dental World - GCP Deployment Architecture & Instructions

This document outlines the production-ready deployment strategy for the Dental World application on Google Cloud Platform (GCP).

## Architecture Overview

The system uses a containerized, decoupled architecture:
1. **Frontend**: Next.js 15 (standalone build) hosted on **Google Cloud Run**.
2. **Backend**: Django & Gunicorn hosted on **Google Cloud Run**.
3. **Database**: PostgreSQL hosted on **Google Cloud SQL**.
4. **Media & Static Storage**: Google Cloud Storage (GCS) for Django media uploads and static files.
5. **Load Balancer**: GCP External HTTP(S) Load Balancer to route traffic (`/api/*` to Backend, `/*` to Frontend) and manage SSL certificates.

---

## Step 1: Database Setup (Cloud SQL)

1. Navigate to **SQL** in the GCP Console.
2. Create a new **PostgreSQL 15** instance.
3. Configure the instance with a private IP if VPC peering is set up, or a public IP restricted to authorized networks.
4. Create a database named `dentalworld` and a user `dentaluser` with a strong password.

---

## Step 2: Build & Push Docker Images (Artifact Registry)

1. Enable the **Artifact Registry API**.
2. Create a repository:
   ```bash
   gcloud artifacts repositories create dental-repo --repository-format=docker --location=us-central1
   ```
3. Authenticate Docker:
   ```bash
   gcloud auth configure-docker us-central1-docker.pkg.dev
   ```
4. Build and push the **Backend**:
   ```bash
   cd backend
   docker build -t us-central1-docker.pkg.dev/YOUR_PROJECT_ID/dental-repo/backend:latest .
   docker push us-central1-docker.pkg.dev/YOUR_PROJECT_ID/dental-repo/backend:latest
   ```
5. Build and push the **Frontend**:
   *(Make sure `NEXT_PUBLIC_API_URL` is set in your `.env.production` before building)*
   ```bash
   cd frontend
   docker build -t us-central1-docker.pkg.dev/YOUR_PROJECT_ID/dental-repo/frontend:latest .
   docker push us-central1-docker.pkg.dev/YOUR_PROJECT_ID/dental-repo/frontend:latest
   ```

---

## Step 3: Deploy to Cloud Run

### 1. Deploy the Backend
```bash
gcloud run deploy dental-backend \
  --image us-central1-docker.pkg.dev/YOUR_PROJECT_ID/dental-repo/backend:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --add-cloudsql-instances YOUR_PROJECT_ID:us-central1:YOUR_SQL_INSTANCE_NAME \
  --set-env-vars DB_HOST=/cloudsql/YOUR_PROJECT_ID:us-central1:YOUR_SQL_INSTANCE_NAME,DB_NAME=dentalworld,DB_USER=dentaluser,DB_PASSWORD=YOUR_PASSWORD,DJANGO_SETTINGS_MODULE=core.settings
```

*Note: After the initial deployment, you must run migrations. You can do this by executing a temporary Cloud Run job or connecting via Cloud SQL Proxy locally.*

### 2. Deploy the Frontend
```bash
gcloud run deploy dental-frontend \
  --image us-central1-docker.pkg.dev/YOUR_PROJECT_ID/dental-repo/frontend:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## Step 4: Configure the Load Balancer & Domain

To serve both frontend and backend under the same domain (e.g., `www.dentalworldhyd.com`):

1. Go to **Network Services -> Load balancing**.
2. Create an **HTTP(S) Load Balancer**.
3. **Backend Configuration**:
   - Create a backend service for the **Next.js Frontend** Cloud Run service.
   - Create a backend service for the **Django Backend** Cloud Run service.
4. **Host and Path Rules**:
   - Route `/*` to the Frontend backend service.
   - Route `/api/*` and `/admin/*` to the Django backend service.
5. **Frontend Configuration**:
   - Set up an HTTPS frontend with a Google-managed SSL certificate for your domain.

---

## Step 5: Static & Media Files

In a production Django environment, you must use an external storage bucket for user-uploaded media and static files.
1. Create a **Google Cloud Storage (GCS)** bucket (e.g., `dentalworld-media`).
2. Update your `requirements.txt` to include `django-storages[google]`.
3. Update `backend/core/settings.py` to use `GSBoto3Storage` for `DEFAULT_FILE_STORAGE` and `STATICFILES_STORAGE`.

> [!IMPORTANT]
> **Environment Variables**: Ensure `SECRET_KEY` is completely random in production, and `DEBUG=False`. Configure `ALLOWED_HOSTS` to include your exact domain name.
