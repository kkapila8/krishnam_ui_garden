# UI Component Library - Assignment 12

## 📌 Overview
This project is a React-based UI Component Library built using Storybook.  
It demonstrates reusable UI components, testing, and Docker deployment.

---

## 🚀 Technologies Used
- React
- TypeScript
- Storybook
- Styled-Components
- Jest & Testing Library
- Docker
- Nginx

---

## 🧩 Components Included
- Button
- Label
- Text
- Card
- Dropdown
- RadioButton
- Img

---

## 🎨 Features
- All components are reusable and responsive
- Styled using styled-components
- Each component has:
  - Default state
  - Disabled state (greyed out + not-allowed cursor)
- Storybook controls for dynamic props
- Unit testing for each component

---

## 🧪 Running Locally

### Install dependencies
npm install

### Run React App
npm start

### Run Storybook
npm run storybook

👉 Open in browser:  
http://localhost:6006

---

## 🐳 Running with Docker

### Build Docker Image
docker build -t krishnam_ui_garden .

### Run Container
docker run -p 8083:80 krishnam_ui_garden

👉 Open in browser:  
http://localhost:8083

---

## 📂 Project Structure
src/
 └── components/
      └── ComponentName/
           ├── Component.tsx
           ├── Component.types.tsx
           ├── Component.stories.tsx
           ├── Component.test.tsx
           └── index.ts

---

## 🎯 Learning Outcomes Achieved
- Created reusable UI components
- Implemented Storybook for visualization
- Added unit tests for validation
- Used Docker for production deployment
- Optimized build process

---

## 👨‍💻 Author
Krishnam Kapila