# CAVAS Alumni Page

This project hosts the CAVAS Labs Alumni website.

## 🌐 Live Website
https://your-vercel-url.vercel.app/alumni

## 📥 Submission Flow
Alumni submit their details using the Google Form. Submissions are reviewed before being added to the website.

---

## ➕ How to Add a New Alumni Entry

1. Open `data/alumni.json`

2. Add a new entry like this:

```json
{
  "name": "John Doe",
  "affiliation": "UB CSE MS Student",
  "role": "Research Assistant",
  "duration": "Jan 2024 – Dec 2024",
  "work": "Worked on perception and sensor fusion using ROS2",
  "current": "Software Engineer at XYZ",
  "impact": "CAVAS helped me build strong system integration skills",
  "linkedin": "https://linkedin.com/in/johndoe",
  "image": "/images/john.jpeg"
}
```
3. Add the image to:
```
public/images/
```
