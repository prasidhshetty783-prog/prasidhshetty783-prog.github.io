# Framer Agent Prompt Plan

How I'll drive Framer's built-in "Ask Framer" agent, in order. Each step = one prompt;
verify with a screenshot before moving on.

## Step 1 — Global identity (Home + nav + footer)
> Replace all placeholder identity across the site. The designer is **Prasidh Shetty**,
> a UX/UI Designer based in Detroit/Dearborn, Michigan. Change the name "Joseph Alexander"
> everywhere (nav logo, hero, footer) to "Prasidh Shetty". Hero headline: "Designing
> intuitive digital experiences." Hero subtext: "UX/UI Designer blending engineering
> logic with user-centered empathy. 2+ years of experience, currently pursuing a Master's
> in Human Centered Design at the University of Michigan, Dearborn." Update the contact
> email to prasidhshetty783@gmail.com, LinkedIn to the profile URL, and add an Instagram
> link (@shots_by_spicy). Nav items: Work, About, Experience, Contact, Resume.

## Step 2 — Home sections
- About statement (2 yrs, Figma+Framer, Master's HCD).
- "What I Do": Design (Figma, Figjam, Miro, Framer, Adobe Lightroom, Canva) + 3D (Catia, Blender).
- Skills chips (12).
- Experience: Studio Vitamin-D (Jr UX/UI, Nov 2023–Jul 2025), Ogee Studio (Intern, Jun 2023–Nov 2023), + M.S. HCD (ongoing).
- Photography "Captured Moments" with @shots_by_spicy link.

## Step 3 — Projects CMS
Replace the 4 placeholder projects with 6 (+ Groc Genie "coming soon"):
NoteLoom, Nova AI, Mobile LMS, Media Production, Dealer Sales, Port Operations.
Each: title, category (Masters/Professional), client, short description, thumbnail.

## Step 4 — Case study detail pages (per project, full depth)
Feed each [[Case Studies]] note: hero, meta, problem cards, research, personas, testing
rounds + SUS metrics, images, conclusion.

## Image strategy
Framer agent may accept CDN URLs (https://framerusercontent.com/images/...). If not,
images are uploaded manually or via `download-images.ps1` → drag into Framer assets.

## Guardrails
- Verify after every step with a screenshot.
- Never accept a change that breaks layout; ask the agent to revert if so.
- Do NOT publish until the whole site is reviewed and the user approves.
