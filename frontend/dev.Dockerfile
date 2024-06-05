FROM node:22-alpine3.19

WORKDIR /next-app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN corepack enable && \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then pnpm install; \
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi
RUN npm install -g next react-hook-form @hookform/resolvers zod
COPY . .

CMD \
  if [ -f yarn.lock ]; then yarn dev; \
  elif [ -f package-lock.json ]; then npm run dev; \
  elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
  else npm run dev; \
  fi
