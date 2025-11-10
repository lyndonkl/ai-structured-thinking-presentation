# Example 1: Market Sizing with Fermi Estimation

## Conversation Recording for Scrollytelling Presentation

---

## USER'S INITIAL QUESTION

**User:** I want to build an interactive chatbot that will help people during their weight loss journey, particularly by motivating them and encouraging them to stick to their diet plan. I want to understand the total estimated market size and understand the estimated resources we would need on the team.

---

## SKILL ACTIVATION & CLARIFICATION

**Assistant:** Excellent question! Let me work through this using the Fermi estimation methodology. I'll need to clarify a few things first to give you a solid estimate.

### Step 1: Clarify the Question and Define Metric

**Clarifying questions:**

1. **Geographic scope**: Are you targeting US market initially, or global?
2. **Market definition**: Are we estimating TAM (Total Addressable Market - everyone who could theoretically use this), SAM (Serviceable Addressable Market - realistic segment you can reach), or SOM (Serviceable Obtainable Market - what you can capture in 1-2 years)?
3. **Business model**: What's your expected pricing model? (subscription, freemium, one-time purchase, free with ads?)
4. **Product scope for team estimation**: Are we building MVP (6 months), or full-featured product (18 months)? What platforms (iOS, Android, web)?
5. **Team composition question**: Are you asking for just engineering, or full team (eng, design, product, data science, content)?

While you think about those, let me start with some initial decomposition thinking:

#### Initial Decomposition Ideas:

**For Market Size:**
- Path 1 (Top-down): US population → % overweight/obese → % actively trying to lose weight → % willing to use AI chatbot → ARPU
- Path 2 (Bottom-up): Weight loss app market size → % who would use chatbot feature → Monetization rate
- Path 3 (Analogous): Compare to existing apps like Noom, MyFitnessPal, WW (Weight Watchers)

**For Team Resources:**
- Engineers (mobile, backend, ML/AI, infrastructure)
- Product/Design
- Content creators (nutrition, motivation, behavioral psychology)
- Data scientists (personalization, engagement models)
- QA/DevOps

What are your answers to the clarifying questions?

---

## USER'S ANSWERS

**User provided:**
1. Geographic scope: Are you targeting US market initially, or global?
   **Answer: US Market**

2. Market definition: Are we estimating TAM (Total Addressable Market - everyone who could theoretically use this), SAM (Serviceable Addressable Market - realistic segment you can reach), or SOM (Serviceable Obtainable Market - what you can capture in 1-2 years)?
   **Answer: We are estimating SAM**

3. Business model: What's your expected pricing model? (subscription, freemium, one-time purchase, free with ads?)
   **Answer: Free with ads**

4. Product scope for team estimation: Are we building MVP (6 months), or full-featured product (18 months)? What platforms (iOS, Android, web)?
   **Answer: Web only, MVP in six months**

5. Team composition question: Are you asking for just engineering, or full team (eng, design, product, data science, content)?
   **Answer: Asking for engineering, design, product and data science**

---

## FERMI ESTIMATION PROCESS

### Step 2: Decompose into Estimable Components

I'll tackle both questions with clear decomposition paths.

#### MARKET SIZE (SAM) DECOMPOSITION

For the US market with a free/ad-supported model:
1. US adult population
2. → % overweight/obese (potential users)
3. → % actively trying to lose weight (intent)
4. → % willing to use digital tools (tech adoption)
5. → % who would specifically use AI chatbot (channel preference)
6. → Revenue per user (ad-supported model)

#### TEAM RESOURCES DECOMPOSITION

For web-only MVP in 6 months:
- Engineering roles: Frontend, Backend, AI/ML, DevOps
- Design: UX/UI designer
- Product: Product manager
- Data Science: Analytics/personalization

---

### Step 3: Estimate Components Using Anchors

#### MARKET SIZE ESTIMATION

**1. US Adult Population:** ~260 million adults (18+)

**2. % Overweight/Obese:** CDC data shows ~70% of US adults are overweight or obese
- 260M × 0.70 = **~182 million people**

**3. % Actively Trying to Lose Weight:** Not everyone who's overweight is actively dieting. Studies show ~45% of Americans report trying to lose weight in a given year.
- 182M × 0.45 = **~82 million people**

**4. % Willing to Use Digital Tools:** Not everyone wants digital solutions - some prefer in-person programs, books, or no structured approach. Digital health adoption is growing but still selective. Estimate ~35% would consider digital tools.
- 82M × 0.35 = **~29 million people**

**5. % Who Would Use AI Chatbot Specifically:** This requires:
   - Being comfortable with chatbots (younger demographics more comfortable)
   - Wanting motivation/accountability vs just tracking
   - Preferring asynchronous support vs live coaching
   - Trust in AI for health advice

   Estimate ~20-22% of digital tool users would use an AI chatbot.
- 29M × 0.22 = **~6.4 million users** ← This is your SAM

**6. Revenue per User (Ad-Supported):**
- Free apps with engaged users typically generate $1-5 per user per year
- Weight loss users are valuable (health/wellness advertisers pay premium)
- Estimate: **$3 per user per year**

**SAM REVENUE = 6.4M users × $3/user = ~$19-20M per year**

---

#### TEAM RESOURCES ESTIMATION

For a **web-only MVP in 6 months**, let me break down by role:

**ENGINEERING (4-5 people):**

1. **Frontend Engineers (2):**
   - Build responsive web app
   - Chat interface, onboarding flows, dashboard
   - Web-only simplifies scope vs mobile
   - 2 engineers for velocity and coverage

2. **Backend Engineers (1-2):**
   - API development, user auth, data storage
   - Integration with LLM APIs (OpenAI/Anthropic)
   - Webhook handling, notifications
   - 1-2 engineers (modern frameworks accelerate development)

3. **AI/ML Engineer (1):**
   - Prompt engineering for motivation/diet coaching
   - RAG implementation for nutrition knowledge
   - Personalization logic, A/B testing
   - Using existing LLM APIs, not training models from scratch

4. **DevOps/Infrastructure (0.5 FTE):**
   - Part-time or contractor for MVP
   - CI/CD, hosting (Vercel/Railway/AWS), monitoring
   - Modern platforms make this easier for MVP

**DESIGN (1 person):**
- UX/UI designer for web interface
- User research for motivation patterns
- Brand identity, visual design
- Chat interface is relatively constrained

**PRODUCT (1 person):**
- Product manager for requirements, prioritization
- Define "motivation" features to build
- User stories, roadmap, coordination

**DATA SCIENCE:**
- Covered by AI/ML engineer for MVP (prompt engineering is priority)
- Separate analytics role not critical until post-MVP

**TOTAL TEAM: 6-7 people**
- 4-5 Engineers (2 frontend, 1-2 backend, 1 AI/ML, 0.5 DevOps)
- 1 Designer
- 1 Product Manager

---

### Step 4: Bound with Upper/Lower Limits

#### MARKET SIZE BOUNDS

**Optimistic (Upper Bound):**
- 50% actively dieting (vs 45%) = 91M
- 45% digital adoption (vs 35%) = 41M
- 30% chatbot preference (vs 22%) = 12M users
- $5 ad revenue/user (vs $3)
- **Upper: 12M users × $5 = $60M/year**

**Pessimistic (Lower Bound):**
- 40% actively dieting (vs 45%) = 73M
- 25% digital adoption (vs 35%) = 18M
- 15% chatbot preference (vs 22%) = 2.7M users
- $1.50 ad revenue/user (vs $3)
- **Lower: 2.7M users × $1.50 = $4M/year**

**SAM RANGE: $4M - $60M/year, central estimate ~$19M**

#### TEAM SIZE BOUNDS

**Lean MVP (Lower Bound): 4-5 people**
- 1 full-stack engineer (frontend + backend)
- 1 AI/ML engineer
- 1 designer (part-time/contract)
- 1 product manager
- Shared DevOps (contractor)

**Full-Featured MVP (Upper Bound): 8-9 people**
- 2 frontend engineers
- 2 backend engineers
- 1 AI/ML engineer
- 1 separate data scientist
- 1 designer
- 1 product manager
- 1 dedicated DevOps

**TEAM RANGE: 4-9 people, central estimate 6-7 people**

**Budget Check:**
6-7 people × $150k loaded cost × 0.5 years = **$450-525k for 6 months**

---

### Step 5: Calculate and Sanity-Check

#### MARKET SIZE SANITY CHECK

Let me validate against known companies in the space:

- **MyFitnessPal**: ~200M registered users globally, ~$200M revenue (ads + premium)
- **Noom**: ~50M downloads, ~$400M revenue (subscription, higher ARPU)
- **WW (Weight Watchers)**: ~4M subscribers, ~$1B revenue (premium)

**Sanity check:** ✓ Our SAM of 6.4M US users is reasonable - smaller than MyFitnessPal's global base but we're more focused (AI chatbot for motivation vs general tracking). The $3 ad ARPU is conservative vs subscription models.

#### TEAM SIZE SANITY CHECK

- Comparable to typical seed-stage startup team
- Industry rule of thumb: 5-8 people for moderate complexity MVP
- Cost of $450-525k for 6 months is reasonable seed budget
- Enough specialization without over-staffing

**Sanity check:** ✓ Passes

---

### Step 6: Triangulate with Alternate Path

#### MARKET SIZE TRIANGULATION

**Alternative approach (bottom-up from app market):**
- US weight loss market: ~$5-7B annually
- Digital/app portion: ~$1-2B (excluding in-person programs)
- Free/ad-supported model share: ~10-15% = $100-300M
- AI chatbot as subset: ~10-20% = **$10-60M**

**Comparison:** Original estimate $4-60M vs Triangulation $10-60M
✓ Ranges overlap significantly, central estimates same order of magnitude ($19M vs $30M)

#### TEAM SIZE TRIANGULATION

**Alternative approach (feature-based estimation):**

Core MVP features:
1. User onboarding & profile (2 weeks, 2 people)
2. Chat interface (3 weeks, 2 people)
3. AI prompt engineering (6 weeks, 1-2 people)
4. Diet plan tracking (3 weeks, 2 people)
5. Motivation/check-ins (4 weeks, 2 people)
6. Analytics dashboard (2 weeks, 1-2 people)
7. Infrastructure (ongoing, 0.5 people)
8. Design system (ongoing, 1 person)
9. Product management (ongoing, 1 person)

Peak concurrent workload: **6-8 people**

**Comparison:** Original estimate 6-7 people vs Feature-based 6-8 people
✓ Strong alignment

---

## FINAL ESTIMATES

### MARKET SIZE (SAM - US Market)
- **Target Users:** 6-7 million people
- **Revenue Potential:** $19-20M per year (central estimate)
- **Range:** $4M - $60M per year
- **Key Assumption:** $3/user/year in ad revenue for engaged weight loss audience

### TEAM RESOURCES (6-Month Web MVP)
- **Team Size:** 6-7 people (central estimate)
- **Composition:**
  - **Engineering (4-5):** 2 Frontend, 1-2 Backend, 1 AI/ML, 0.5 DevOps
  - **Design (1):** UX/UI designer
  - **Product (1):** Product manager
- **Budget:** ~$450-525k for 6 months
- **Range:** 4-5 people (lean) to 8-9 people (full-featured)

### KEY INSIGHTS

1. **Market is substantial but competitive:** 6-7M potential users is meaningful, but you'll need strong differentiation (AI motivation/personalization) to capture market share from established players like MyFitnessPal, Noom.

2. **Ad-supported model limits revenue:** At $3 ARPU, you need significant scale to be viable. Consider hybrid model (freemium with premium features) to increase ARPU to $10-30.

3. **Team size is lean but achievable:** 6-7 people is appropriate for MVP, but plan for growth post-launch (customer support, content creators for nutrition advice, ML engineers for personalization).

4. **Web-first strategy reduces complexity:** Mobile apps would require 2-3 additional engineers. Web-first is smart for MVP validation.

---

## FOLLOW-UP QUESTION: UNIT ECONOMICS

**User:** Can you explore the unit economics of this? I am concerned about whether the above fee structure covers spend on llm inference at the full scale of users we estimate.

---

## UNIT ECONOMICS DEEP DIVE

### LLM INFERENCE COST ESTIMATION

#### Step 1: Estimate User Engagement Pattern

For a weight loss motivation chatbot, let's estimate typical user behavior:

**Daily Active Usage:**
- **Messages per user per day:** 5-10 messages
  - Morning check-in (1-2 messages)
  - Meal logging/questions (2-3 messages)
  - Evening reflection/motivation (1-2 messages)
  - Ad-hoc questions (1-2 messages)

  Let's use **7 messages per day** as central estimate

**Activity Rate:**
- Not all users will be daily active
- Weight loss programs have high early engagement, then drop-off
- Estimate **40% of users active on any given day** (aggressive engagement for free app)
- Average user active **~150 days per year** (out of 365 days)

**Active messages per user per year:**
7 messages/day × 150 active days = **~1,050 messages per user per year**

---

#### Step 2: Estimate Tokens Per Interaction

**Input tokens per message (user → AI):**
- User message: "I'm feeling unmotivated today, had a donut at work"
- Average user message: 10-30 words = **50-100 tokens**
- Context window (previous messages for continuity): **200-500 tokens**
- System prompt (instructions, user profile, diet plan): **500-1,000 tokens**

**Total input per message:** ~750-1,600 tokens, let's use **1,000 tokens per message**

**Output tokens per message (AI → user):**
- AI response: Motivation, tips, questions
- Average response: 50-150 words = **100-300 tokens**

**Total output per message:** **200 tokens per message** (central estimate)

**Per message cost breakdown:**
- Input: 1,000 tokens
- Output: 200 tokens

---

#### Step 3: Estimate Cost Per Token (Current LLM Pricing)

Using current API pricing as of early 2025:

**OpenAI GPT-4o (most likely model for this use case):**
- Input: $2.50 per 1M tokens = **$0.0000025 per token**
- Output: $10.00 per 1M tokens = **$0.000010 per token**

**Anthropic Claude 3.5 Sonnet:**
- Input: $3.00 per 1M tokens = **$0.000003 per token**
- Output: $15.00 per 1M tokens = **$0.000015 per token**

Let's use **GPT-4o pricing** (slightly cheaper and commonly used):

**Cost per message:**
- Input cost: 1,000 tokens × $0.0000025 = **$0.0025**
- Output cost: 200 tokens × $0.000010 = **$0.0020**
- **Total per message: $0.0045**

---

#### Step 4: Calculate Annual LLM Cost Per User

**Messages per user per year:** 1,050 messages
**Cost per message:** $0.0045

**Annual LLM cost per user = 1,050 × $0.0045 = $4.73**

---

### UNIT ECONOMICS COMPARISON

| Metric | Amount |
|--------|--------|
| **Revenue** (ad-supported) | $3.00/user/year |
| **LLM Inference Cost** | $4.73/user/year |
| **Gross Margin** | **-$1.73/user/year** ❌ |

#### **PROBLEM: You're losing $1.73 per user on LLM costs alone!**

This doesn't even include:
- Infrastructure (hosting, database, storage): ~$0.50-1.00/user/year
- Customer support: ~$0.25-0.50/user/year
- Engineering/team costs amortized: ~$10-20/user/year at 6M users

**Total cost per user: ~$17-27/user/year**
**Revenue per user: $3/user/year**

**You're upside down by ~$14-24 per user annually.**

---

### BOUNDS: Optimistic & Pessimistic Scenarios

#### OPTIMISTIC SCENARIO (Lower Costs)
- Lower engagement: 3 messages/day × 100 active days = 300 messages/year
- Smaller context window: 500 input tokens per message
- Cost per message: $0.0025
- **Annual LLM cost: 300 × $0.0025 = $0.75/user/year** ✓ Profitable!

#### PESSIMISTIC SCENARIO (Higher Costs)
- Higher engagement: 10 messages/day × 200 active days = 2,000 messages/year
- Larger context: 1,500 input tokens per message
- Claude pricing: $0.006 per message
- **Annual LLM cost: 2,000 × $0.006 = $12/user/year** ❌ Even worse!

---

### SANITY CHECK AGAINST REAL WORLD

**Noom** (AI-based weight loss coaching):
- Charges **$60-70/month** (~$700/year)
- Why so expensive? LLM costs + human coaches + content
- Even with high ARPU, they supplement AI with human coaches

**Replika** (AI companion chatbot):
- Charges **$70/year** for premium
- Higher engagement than weight loss app (daily emotional support)
- LLM costs are significant portion of their COGS

**Your model at $3/user/year is ~200x cheaper than Noom and ~23x cheaper than Replika.**

This confirms: **Ad-supported alone won't work for LLM-heavy product.**

---

### SOLUTIONS TO FIX UNIT ECONOMICS

#### Option 1: **Hybrid Freemium Model** ⭐ (Recommended)
- **Free tier:** 5 messages/day, basic features
  - 5 msg/day × 150 days = 750 msg/year × $0.0045 = $3.38 cost
  - Ad revenue $3 + Premium upgrades = Break-even on free tier

- **Premium tier ($5-10/month = $60-120/year):**
  - Unlimited messages
  - Advanced features (meal planning, grocery lists, progress tracking)
  - No ads
  - **Target: 10-15% conversion rate**
  - Blended ARPU: ($3 × 85%) + ($60 × 15%) = $11.55/user
  - **Gross margin: $11.55 - $4.73 = $6.82/user** ✓ Profitable!

#### Option 2: **Reduce LLM Usage (Optimize Inference)**
- **Cache system prompts** (reduce repeated context): Save 30-50% on input tokens
- **Smaller models for simple queries:** Use GPT-4o-mini ($0.15/1M in, $0.60/1M out) for routine check-ins
  - GPT-4o-mini is ~10x cheaper
  - Reserve GPT-4o for complex nutrition questions
- **Async processing:** Batch daily summaries instead of real-time responses
- **Rule-based responses:** Handle simple queries ("log meal", "show progress") without LLM

**Optimized cost:** ~$2.00/user/year (vs $4.73)
**Margin with ads:** $3 - $2 = $1/user ✓ Break-even, but thin margins

#### Option 3: **Increase Ad Revenue**
- **Target niche advertisers:** Health supplements, fitness gear, meal delivery (premium CPMs)
- **Sponsored content:** Integrate ads into chat flow ("Try HelloFresh for easy meal prep")
- **Affiliate revenue:** Commission on product recommendations
- **Target $8-10/user/year** (aggressive but possible with engaged health/wellness audience)

**Margin:** $8 - $4.73 = $3.27/user ✓ Workable

#### Option 4: **Hybrid Human + AI**
- AI for most interactions ($4.73/user/year)
- Human nutritionist/coach for 1-2 weekly check-ins (async)
- Charge premium: $20-30/month
- **Use AI to reduce human coach workload** (AI handles 90% of messages)

---

### RECOMMENDED STRATEGY

**Phase 1 (MVP - First 6 months):**
- Launch with **freemium model:**
  - Free: 5 messages/day (test retention, engagement)
  - Premium: $7/month ($84/year) for unlimited + features
- **Aggressively optimize LLM costs:**
  - Use GPT-4o-mini for 70% of messages
  - Cache system prompts
  - Target $2/user/year on free tier
- **Monetization mix:**
  - Ads on free tier: $3/user/year
  - Premium conversion: Target 10% → Blended ARPU $11/user/year

**Phase 2 (Post-MVP growth):**
- Increase premium features to drive conversion to 15-20%
- Add affiliate/sponsored content for additional revenue
- Scale economies: At 100k+ users, negotiate better LLM pricing (volume discounts)

---

### FINAL UNIT ECONOMICS (Recommended Model)

#### FREE TIER (85% of users):
- **LLM cost:** $2.00/user/year (optimized)
- **Ad revenue:** $3.00/user/year
- **Margin:** $1.00/user/year ✓

#### PREMIUM TIER (15% of users):
- **LLM cost:** $8.00/user/year (unlimited usage)
- **Revenue:** $84/user/year ($7/month)
- **Margin:** $76/user/year ✓

#### BLENDED ECONOMICS (6.4M users at scale):
- **Blended revenue:** ($3 × 85%) + ($84 × 15%) = **$15.15/user/year**
- **Blended cost:** ($2 × 85%) + ($8 × 15%) = **$2.90/user/year**
- **Gross margin:** $15.15 - $2.90 = **$12.25/user/year**
- **Total gross profit:** 6.4M users × $12.25 = **$78M/year** ✓

**After infrastructure, team, growth costs:** Still need $50-60M annual revenue to break even on full org (sales, marketing, support)

---

## KEY TAKEAWAY FROM UNIT ECONOMICS ANALYSIS

**The original $3/user/year ad-only model is NOT viable.** LLM inference costs ($4.73/user) exceed revenue, and that's before infrastructure, support, and team costs.

**You MUST implement:**
1. Freemium with premium tier ($7-10/month)
2. LLM cost optimization (smaller models, caching, batching)
3. Target 10-15% premium conversion

**With these changes, unit economics become healthy:** ~$12/user gross margin enables sustainable growth.

---

## USER RESPONSE

**User:** This satisfies my concern. I am ready to move on to the next example.

---

**END OF EXAMPLE 1 RECORDING**
