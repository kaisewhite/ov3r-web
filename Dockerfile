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
# OpenAI Configuration
ENV OPENAI_API_KEY=''
ENV OPEN_AI_MODEL_NAME='gpt-3.5-turbo'

# Redis Configuration
ENV REDIS_CACHE_HOST_ENDPOINT=''
ENV DEFAULT_CACHE_TTL='3600'

# App Configuration
ENV NODE_ENV='dev'
ENV PORT='5005'

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build Next.js application
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000
EXPOSE 80

# Start Next.js
CMD ["npm", "start"]
