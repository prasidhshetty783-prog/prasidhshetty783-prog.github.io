# Nova AI — In-Car Co-Pilot

**Type:** Masters Project · **Cover/thumb:** `nuR4hS2fZYth4HQ4zvdkcQAMe4.png`

## Hero
**Nova — Redefining The Relationship Between Driver & Vehicle.** Nova AI is an intelligent IVIS co-pilot designed to bridge the gap between high-tech automation and road safety. By transforming the In-Vehicle Infotainment System (IVIS) into a proactive partner, Nova uses predictive assistance and context-aware interactions to slash cognitive load. From preempting mechanical failures to adaptive rerouting, Nova ensures that while the car gets smarter, the driver stays focused on the road.

## Meta
- Role: UX Researcher & Designer
- Industry: Automobile
- Team Size: 4 members
- Timeline: Oct 2025 – Dec 2025

## Problem Statement
Driver interaction with IVIS systems increases distraction and cognitive workload. Complex navigation demands sustained attention; delayed responses to accidents or mechanical failures can be life-threatening. AI assistants offer predictive assistance, context-aware interaction, automated emergency detection, and adaptive rerouting.
- **Cognitive Load** — drivers bombarded with non-essential data → "glance fatigue", lane deviation, delayed braking.
- **Trust & Transparency** — sudden reroutes or flags without context → system abandonment or distrust.
- **Context Information** — "Engine has some issue" shown only as an icon is stressful and hard to interpret.

## UX Road Map (3-phase UCD)
- Aug–Sep — Empathize Phase
- Oct–Nov — Ideation & Prototype Phase
- Nov–Dec — Testing Phase

## Empathize Phase
Synthesized from user surveys, observational task analysis, and 15 research articles on AI trust, cognitive workload, and multimodal ergonomics.

**Primary Research Question:** How might an AI-assisted IVIS be designed to improve safety, usability, trust, and human-AI collaboration while minimizing driver distraction?
Sub-questions:
- What multimodal input combinations (voice, visual, haptic) best minimize cognitive load during navigation?
- How does explainable AI (XAI) feedback influence driver trust and situational awareness?
- How can real-time anomaly detection stay sensitive without excessive false alarms?

## Secondary Research (15 articles → 3 insights)
1. **Latency & Reliability** — multimodal sensing needs sub-5-second processing for emergencies.
2. **Human-in-the-loop** — automated actions (e.g. emergency calling) require a confirm/cancel loop for driver agency.
3. **Information Density** — audio-first alerts are critical for major traffic changes to prevent visual glance fatigue.

## User Survey (26 responses, drivers 18+)
1. **The "Why" Matters** — drivers need trusted AI guidance with simple explanations alongside route suggestions.
2. **Multimodal Clarity** — strong demand for combined audio + visual reroute alerts.
3. **Control and Goals** — motivated by saving time and avoiding stress; want fastest/safest/fairest route options.
4. **Key Pain Points** — delayed traffic updates, inaccurate ETAs, intrusive alerts, abrupt unfamiliar reroutes without reasoning.

## Observational Task Analysis (2 drivers)
- **Navigation & Route Management** — users type before a trip, switch to voice while moving. *Observation:* most dangerous cognitive spike occurs evaluating/changing routes mid-trip → need low-effort, transparent rerouting.
- **Communication Friction** — voice assistants fail to recognize contact names (esp. with emojis), forcing manual scrolling. *Observation:* vibrations cause misclicks, increasing distraction.
- **Environment & Media Controls** — touchscreen taps for climate/media pull eyes off the road. *Observation:* drivers prefer tactile steering-wheel buttons or reliable voice over deep touch menus.

## Affinity Diagram
4 categories: Goals, Motivations, Needs, Pain Points.

## User Persona
Three personas guiding 3 core pillars: Automation, Organization, Transparency.

## Ideation & Prototyping Phase
Insights → low-fi wireframes → hi-fi prototype. Focus on explainable AI and progressive disclosure to reduce cognitive load via multimodal interactions.

**Low-fidelity Wireframe** — strict information hierarchy to minimize visual travel time; "Zones of Reach" framework.
1. **Persistent Control Panel** — climate, music, volume anchored as a persistent layer, not buried in sub-menus.
2. **Proximity-Based Layout** — highly interactive widgets (navigation) on the left for closest reach in high-stress moments.
3. **Dedicated AI Information Zone** — consistent area for AI alerts/explanations appearing from the right, training the driver's eye.

**High-fidelity Prototype** — communicate urgency/context in under a second without fatigue or night-glare.
1. **Dark-Mode Default** — high-contrast palette to minimize cabin glare and eye strain.
2. **Color-Coded Urgency** — Green = standard reroutes; Yellow = predictive mechanical warnings (e.g. tire pressure); Red = critical emergencies (collision).
3. **Multimodal Feedback** — visuals synchronized with voice; screen highlights exactly what the AI says aloud.

## User Testing Phase
Controlled driving simulations with the hi-fi prototype.
- **Scenarios:** (1) minor accident detection, (2) adaptive rerouting due to traffic, (3) mechanical diagnosis.
- **Method:** "Wizard of Oz" (instructor imitates the AI); think-aloud + usability questionnaire + SUS.
→ **SUS 85.83 · 9 participants · 100% task completion**

## Key Findings
1. **Explainability is a Trust-Builder** — a brief "why" (e.g. "Accident ahead") reduced frustration vs generic "rerouting" alerts.
2. **Multimodal Redundancy** — voice prompts + HUD color overlays improved situational awareness without raising workload.
3. **Human-AI Collaboration** — "Shared Control" (AI suggests, human confirms) preferred over full automation in high-stakes events.

## Conclusion
NOVA AI shifts infotainment from a passive interface to a proactive co-pilot. Prioritizing transparency and multimodal collaboration reduced cognitive load while maintaining driver safety and agency.

## Future Improvements
1. **On-Road Validation** — move from simulation to real-world testing.
2. **Advanced Personalization** — adapt to individual "alert thresholds" and driving styles.
3. **Eye-Tracking Integration** — refine information density based on driver gaze during alerts.

## Image order (DOM)
`SaR2SnwoaOcF7ThpM59tFTziLk.png`, `Vmley6oYrxVp9JnqMEmpEO9ZGmI.png`, `0LOIpgrPzWSsvFRrVER7yvtPM.png`, `CimDCSO0hVljFYm9Va5jKFgsW4.png`, `CjAlojJNB8zt42wrHhWGMOzg8to.png`, `JWcohkbvmxf22tHd72BOCNF4U0.png`, `yXMz7CB2C9sjIaWcrMdnwPus6DE.png`, `8pb5XXEZvOsT1RRahKST1Kq5Ko.png`, `4zLlpNinDDEmlb9IRaiAQP0R0.png`, `8PBYOcvxW0i5dWGWgED5fqN40.jpg`, `KagqpLE65XijJmSyRwv7dheDJeM.png`, `hmMcexd46kYcBmtywk2o1qJW2U.png`
