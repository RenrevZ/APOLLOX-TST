# Use the Node.js LTS version
FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory in the container
WORKDIR /app

# Copy pnpm lockfile and package.json first (to leverage caching)
COPY pnpm-lock.yaml ./
COPY package.json ./

# Install dependencies using pnpm
RUN pnpm install --no-frozen-lockfile

# Copy the rest of the project
COPY . .

# Expose the Nuxt default port
EXPOSE 3000

# Start the Nuxt development server
CMD ["pnpm", "dev"]
