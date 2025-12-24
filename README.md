---

# ✨ Learning with Memories — Story Navbar (React + Tailwind)

A responsive **Story Navbar component** built using **React** and **Tailwind CSS**, focused on **clean component architecture**, **consistent UI**, and **maintainable data flow**.

This project demonstrates how a modular React structure can be used to build **scalable, reusable UI components** with attention to **design precision and code clarity**.

---

## 🚀 Overview

* Built with **React** and **Tailwind CSS**
* Modular, reusable component design
* Clear separation between data and UI
* Horizontally scrollable story layout
* Clean and consistent styling inspired by modern social platforms
   <img width="1470" height="784" alt="image" src="https://github.com/user-attachments/assets/6d58f6f0-f7e4-478a-9043-f919e86eb982" />
   <img width="1470" height="454" alt="image" src="https://github.com/user-attachments/assets/91659585-b63b-464b-a753-70eaf5da9947" />

---

## 🧩 Component Architecture

The project follows a **component-driven architecture**, ensuring clarity and scalability.

```
src/
│
├── database/
│   └── Story.js
│       # Story data source
│
├── components/
│   ├── Stories/
│   │   └── Story.jsx
│   │       # Reusable Story UI component
│   │
│   └── NavBar/
│       └── NavBar.jsx
│           # Story navigation container
│
├── App.jsx
└── main.jsx
```

---

## 🔄 Data Flow

The architecture ensures **predictable and maintainable data flow**:

```
Data Source → NavBar Component → Story Components
```

* Data is managed at the container level
* Presentation components remain stateless
* Explicit prop passing ensures clarity and control

---

## 🎨 UI & Design Focus

* Tailwind CSS utility-first styling
* Perfectly aligned circular story avatars
* Smooth horizontal scrolling
* Minimal, clean, modern UI
* Responsive across screen sizes

---

## 🖼️ Screenshots



<img width="1470" height="840" alt="image" src="https://github.com/user-attachments/assets/0a1bd8c9-9dfb-4b9f-9f4f-4881c10e6d38" />
<img width="1467" height="819" alt="image" src="https://github.com/user-attachments/assets/4d136cf1-9f97-40fc-a321-d24d06fa4350" />
<img width="1470" height="816" alt="image" src="https://github.com/user-attachments/assets/bc383fd7-a08c-41fd-88e5-0226c59eae8d" />
<img width="1470" height="814" alt="image" src="https://github.com/user-attachments/assets/8a6e8b99-b354-44b4-b1e8-1e3125d1f904" />
<img width="1463" height="814" alt="image" src="https://github.com/user-attachments/assets/961a154c-9c99-4550-8969-17bab6a7c7aa" />
<img width="1454" height="755" alt="image" src="https://github.com/user-attachments/assets/c31ecca3-62f9-47a6-8f3c-338af8e33864" />




---

## 🛠️ Tech Stack

* **React**
* **Tailwind CSS**
* **JavaScript (ES6+)**

---

## ▶️ Run Locally

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

---

## 🔮 Future Enhancements

* API-driven story data
* Story interaction and modal view
* Performance optimizations for large datasets
* Accessibility improvements

---

## 👤 Author

**Sumit Kumar**
CSE Undergraduate (3rd Year)
Focused on building **clean, scalable, and visually precise React applications**.

---

## 🧠 Project Philosophy

> **Clarity in structure leads to confidence in scale.**

This project reflects an emphasis on **code organization**, **UI consistency**, and **long-term maintainability**, rather than quick demos.

---
