# Portfolio Project — Compacted Context

> **Purpose:** Single source of truth for all Claude conversations on this project.  
> Read this file first. It replaces reading all individual vault notes.  
> Last updated: 2026-06-25

---

## 1. Who Is This For

**Prasidh Shetty** — UX/UI Designer  
- Location: Detroit / Dearborn, Michigan  
- Email: prasidhshetty783@gmail.com  
- LinkedIn: https://www.linkedin.com/in/prasidh-shetty-b4a69518b/  
- Instagram (photography): https://www.instagram.com/shots_by_spicy/  
- Resume (Drive): https://drive.google.com/file/d/1aeK-V5MZxcIEKLDyCdHhhyPp7kLAhvk8/view  
- Tagline: "UX/UI Designer blending engineering logic with user-centered empathy to craft intuitive digital experiences."  
- 2+ years industry experience; pursuing M.S. Human Centered Design @ University of Michigan, Dearborn  

**Experience:**  
1. Jr. UX & UI Designer — Studio Vitamin-D — Nov 2023 – Jul 2025  
2. UX/UI Designer (Intern) — Ogee Studio — Jun 2023 – Nov 2023  

**Skills chips:** UX Design · UI Design · Product Design · Consulting · Design Systems · Design Sprint · Interaction Design · User Testing · Usability Testing · UX Research · No-Code · Photography  

**Tools:** Figma, Figjam, Miro, Framer, Adobe Lightroom, Canva, Catia, Blender  

---

## 2. Project Overview

**Goal:** Personal portfolio website showcasing UX/UI case studies + photography.  
**Source:** Content scraped from `prasidhshettyportfolio.framer.website` (original Framer site).  
**What Was Built:** A fully custom static HTML/CSS/JS site — NOT Framer.  
**Location:** `D:\Claude Code Projects\Portfolio\`  

---

## 3. Website Files (Phase 1 — Complete)

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, marquee, selected work ×4, about, skills, experience, photography |
| `work.html` | Full case studies listing (6 projects + Groc Genie "Coming Soon") |
| `mobile-lms.html` | Case study — upGrad Mobile LMS |
| `media-production.html` | Case study — Showrunnr |
| `nova-ai.html` | Case study — Nova AI (in-car co-pilot) |
| `noteloom.html` | Case study — NoteLoom (AI notetaker) |
| `dealer-sales.html` | Case study — Asian Paints / My Awaaz |
| `port-operations.html` | Case study — Wallenius Wilhelmsen / 2W Tally |
| `styles.css` | Full design system (CSS variables, dark/light theme, typography, components) |
| `script.js` | Scroll reveal animations, theme toggle, mobile nav, marquee |
| `Prasidh-Shetty-Resume.pdf` | Linked in nav bar |
| `download-images.ps1` | PowerShell script to pull Framer CDN images locally |

---

## 4. Design Language

- **Color scheme:** Dark mode default (near-black `#0d0d0d`); light mode toggle available  
- **Accent:** Warm cream / off-white `#f5f0e8`; amber highlights  
- **Typography:** Hahmlet (serif, editorial headlines) + Satoshi (clean sans body)  
- **Animations:** CSS reveal-on-scroll via IntersectionObserver; staggered delays (`d1`–`d4`)  
- **Layout:** Fluid CSS grid, max-width containers, responsive at mobile breakpoints  
- **Components:** Nav (logo + links + theme toggle + burger), hero (2-col grid + portrait frame + badge), marquee, project list cards, about section, skills chips, experience timeline, photography gallery, footer  

---

## 5. All Case Studies

### A. NoteLoom — AI Notetaker
- **Type:** Masters Project | **Thumb:** `7xmcBBQALfX38yEYyZZWSvCUUig.png`
- **Timeline:** Oct–Dec 2025 | **Team:** 6 members | **Role:** UX Researcher & Designer
- **Core problem:** Fragmented study tools → cognitive overload for college students
- **Solution:** Centralized AI-powered note-taking, summarization, active recall platform
- **Key result:** SUS score 78.5 → 97.5 across 3 test rounds; 100% task completion in rounds 2 & 3
- **3 Pillars:** Automation, Organization, Transparency
- **Images (DOM order):** `7xmcBBQALfX38yEYyZZWSvCUUig.png`, `iTnNnNA3XIjTZNsZy9LrzJUt9Y8.png`, `CzmpMcmOpE2z4h6aRHeBJQXHe5M.png`, `yD4WFqmb2h7ar5bYVXXkAT2s.png`, `xFfhtlPS7VNwB4ECiGRiKPA5Ln4.png`, `cviM2gyWhm8pbTvcwB3f2z6ABKY.png`, `FUnUBNB5IZCrX94kUJVjngs3mE.png`, `NLPMmfjFMpdNCEQQ0EXoUiGY0QY.png`, `lhzJdFkdxnflyFnBM9vsxjJU.png`, `TZDdg1veCmJZijl0nN6K5CKJww.png`, `XM0WsvQd6NdNsO3s8SvZJZIHM7E.png`, `lYHn2gHGPDa6IMCHGx0AOQjgWwc.png`

### B. Nova AI — In-Car Co-Pilot
- **Type:** Masters Project | **Thumb:** `nuR4hS2fZYth4HQ4zvdkcQAMe4.png`
- **Timeline:** Oct–Dec 2025 | **Team:** 4 members | **Role:** UX Researcher & Designer
- **Core problem:** IVIS systems increase driver distraction and cognitive load
- **Solution:** Proactive AI co-pilot with predictive assistance, explainable AI, multimodal feedback
- **Key result:** SUS 85.83; 9 participants; 100% task completion; "Wizard of Oz" test method
- **Design highlights:** Dark-mode default, color-coded urgency (Green/Yellow/Red), voice+visual sync
- **Images (DOM order):** `SaR2SnwoaOcF7ThpM59tFTziLk.png`, `Vmley6oYrxVp9JnqMEmpEO9ZGmI.png`, `0LOIpgrPzWSsvFRrVER7yvtPM.png`, `CimDCSO0hVljFYm9Va5jKFgsW4.png`, `CjAlojJNB8zt42wrHhWGMOzg8to.png`, `JWcohkbvmxf22tHd72BOCNF4U0.png`, `yXMz7CB2C9sjIaWcrMdnwPus6DE.png`, `8pb5XXEZvOsT1RRahKST1Kq5Ko.png`, `4zLlpNinDDEmlb9IRaiAQP0R0.png`, `8PBYOcvxW0i5dWGWgED5fqN40.jpg`, `KagqpLE65XijJmSyRwv7dheDJeM.png`, `hmMcexd46kYcBmtywk2o1qJW2U.png`

### C. Educational Transformation: Mobile LMS
- **Type:** Professional Project | **Client:** upGrad | **Thumb:** `qUuaT7anQWJj0mjtXxD2zrGDXk.png`
- **Timeline:** Jun 2023 – Feb 2024 | **Role:** Lead UX & UI Designer
- **Core problem:** Desktop-only LMS; poor UI; no micro-interactions; multiple login apps
- **Solution:** Mobile-first app with unified login, learning dashboard, offline downloads, bite-sized Shorts
- **Key features:** Continue Learning, Revamped Calendar, Shorts, Refer & Earn, Distraction-Free Mode
- **Images (DOM order):** `ZSetw0WSnoxATY68xPgthYM.png`, `neaiVeO3uACuBcs0I7SvBUDQ.jpeg`, `yVNiwEh4zNzXfdo5LDXkpeDLCY.png`, `9xaCQMCHkm9GrDTQRUsYaMBoAo.png`, `8Khy7816SOu4n0nrqCUcICSElY.png`, `NxLBCCEqu49H3yzWYiu8H0CQA.png`, `CvnTixcVRZQyJQwOYC5PcrqwywI.png`, `CHaA7NjFOE11TJtq954WKjhyJU.png`, `HmOchJeiYGj6CMOkmTEkwrO6KR4.png`, `1cHvyrQIJUC8Fzpi1VdJuyoRFwk.png`, `6cKBy22L5Dmp2UTQ73mgpeKbhXg.png`, `xZpvRftThg4R35IhSuGKmVrbmk.png`, `OIkQpgdlcWgenIxdIE7qwqvA0.png`

### D. Media Production and Planning Tool
- **Type:** Professional Project | **Client:** Showrunnr | **Thumb:** `1irKxx9qHiXU2OSpq6Neja5Yvc.png`
- **Timeline:** Aug 2024 – Jul 2025 | **Role:** UX & UI Designer | **Industry:** Film & Production
- **Core problem:** Scattered tools/manual processes → miscommunication, delays, budget issues
- **Solution:** Two apps — Production Planning app + Reservation Management app; unified platform
- **Two personas:** Cameron Williamson (Line Producer) + Wade Warren (Lighting/Props Rental)
- **Images (DOM order):** `1irKxx9qHiXU2OSpq6Neja5Yvc.png`, `Xfqilrny217HLjGxUVJXlTp26y4.png`, `JknUx9q1IfbNVUWqBwQMB0yX71E.png`, `OdVyEt8XONLPVBkyQ6mVvs4BOA.png`, `sPfSZdAxlO5HUazbbUJMqWDpt0.png`

### E. Empowering Dealers with Seamless Sales Management (My Awaaz)
- **Type:** Professional Project | **Client:** Asian Paints | **Thumb:** `A2iaxkZKWXPpil0WbJ4WvNP6I.png`
- **Timeline:** Aug–Oct 2024 | **Role:** UX & UI Designer | **Industry:** E-commerce
- **Core problem:** Complex sales metrics + rewards transparency; varying digital literacy among dealers
- **Solution:** Clean dealer portal — simplified nav, intuitive dashboard, invoice table, responsive design
- **Images (DOM order):** `6BotCZbBO2A3JtjzEq1ToHgmNA.png`, `IQAzE0O0ZkcQWbxP9QN1fmqHVQI.png`, `nJTirRkweYpCFBtNo2qHlJkwhA.jpg`, `eKBtS0qs0eZzfKV8MiZJTp5MoBE.png`, `dD1qia1bX6vAslLmeV6xuPAJeP8.png`, `wsca90ZEw2dM60Nrd2wpLynQ.png`, `3Swoxzec2ReofKmzbLkwONOkk.png`, `81JkIO8qTvHesDurKQake1md740.png`, `179cajjBhbHIvBldVFtrpYqijE0.png`

### F. Port Operations and Logistics Tool (2W Tally Scanner)
- **Type:** Professional Project | **Client:** Wallenius Wilhelmsen | **Thumb:** `4b7OkHvadtaZtKhURr7DR2eso.png`
- **Timeline:** Jan–Jul 2025 | **Role:** Lead UX & UI Designer | **Industry:** Logistics & Supply Chain
- **Core problem:** Slow/fragmented manual processes for tracking voyages, loading/unloading at ports
- **Solution:** Secure scanning app with Smart Port Hub, Barcode Create, Issue Hub, AI Chatbot (Port Assistant)
- **Persona:** Michael Basi, Age 40, Cargo Handler
- **Images (by section):** Hero `4b7OkHvadtaZtKhURr7DR2eso.png`, Persona `uE0W2VPFdsrZlJycGASvfpIuKc.jpeg`, Wireframes `PaXN3jcDKRcXB2oG72HVtLw0Bg.png`, Design System `WPuhwI7wVhggtku2b01aySRjazg.png`, Vision `DdEJTfMBxPKOniH10fooKz96jbA.png`, `zB6FR8niLb4ge6Q7YllgB59rMo.png`, Features `5YOze8DzXjAtD8MP7MUGM1UuHo.png`, `AWh2Hxp8HcvlZXrfJC4ZP3D4s.png`, Extras `GEj0vLOzoaOkzQX1ODKFAnevIc.png`, `dWKK3XxqbxFwnps7q9Owae2cQKo.png`, `0PDuc8mEpvuCC6SLhUMi3RkK8I.png`, Conclusion `fEkitGPVMN2ht94w6YBaD72zZTQ.png`

### G. Groc Genie (Coming Soon)
- **Type:** Masters Project | No page yet
- **Description:** AI-powered food inventory manager — track groceries, reduce food waste, smarter shopping decisions

---

## 6. Homepage — Selected Work (4 shown)
1. Educational Transformation: Mobile LMS (Professional)
2. Media Production and Planning Tool (Professional)
3. Nova AI (Masters)
4. NoteLoom (Masters)
+ "View All Projects" → work.html

---

## 7. Image CDN
All images: `https://framerusercontent.com/images/<FILENAME>?scale-down-to=1024`

Homepage portrait: `dVeHFJa9e56pfi5yclxB2OnnPMI.jpg`  
Photography gallery: `6tdlCWu5rLJCDBCgVURhTuVFrA4.jpg`, `0c1XdZhzLxm8AiNm9qjDbvF7wtY.jpg`, `2JhKWyJ2SElL3Hi5QCzx2IdPQHU.jpg`, `doNka5XIGk0l4mioRC9JH8uCSns.jpg`, `iH3PJMbKiL3fDyZdsHeYLwO5IM.jpg`, `37sPZxfhImzHQvinJACsKNgtY0k.jpg`, `tnDRr4iNDn9OqNyZVktgQbF4g0.jpg`

---

## 8. Navigation Structure
`PRASIDH.` logo → index.html  
Nav links: Work → work.html · About → index.html#about · Experience → index.html#experience · Resume (PDF, new tab) · GitHub → github.com/prasidhshetty783-prog · LinkedIn  
Theme toggle (dark ↔ light) · Mobile burger menu  

---

## 9. What's Next (Phase 2 — TBD)
- Possible: Groc Genie case study page when ready
- Possible: Deploy to custom domain
- Possible: Performance / accessibility audit
- Possible: Add contact form

---

## 10. How to Continue Work in a New Conversation

1. Read this file (`context.md`) — it has everything
2. If touching a specific case study, also read its vault note for full details
3. If touching images, reference Section 7 above or [[Image Manifest]]
4. The vault notes (`01 - Homepage.md`, case study files) are the deep source; this file is the quick summary
