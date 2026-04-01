# Base image
FROM node:22

# Working directory
WORKDIR /krishnam_ui_garden_build_checks

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Build Storybook
RUN npm run build-storybook

# Install serve globally
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Serve Storybook
CMD ["serve", "-s", "storybook-static"]