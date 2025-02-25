FROM public.ecr.aws/bitnami/node:18.20.2-debian-12-r6

RUN apt-get update

# Database Configuration
ENV PGHOST=''
ENV PGPORT=''
ENV PGUSER=''
ENV PGPASSWORD=''
ENV PGDATABASE=''

ENV S3_BUCKET_NAME=''
ENV REGION='us-east-1'

# Redis Configuration
ENV REDIS_CACHE_HOST_ENDPOINT=''
ENV DEFAULT_CACHE_TTL='3600'

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build Next.js application
ENV NODE_ENV=production
ENV NEXT_PUBLIC_APP_ENV=production
RUN npm run build

# Expose port 80
EXPOSE 80

# Start Next.js
ENV PORT=80
CMD ["node", "node_modules/.bin/next", "start", "-p", "80"]
