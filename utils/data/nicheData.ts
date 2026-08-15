export interface NicheInfo {
  slug: string;
  title: string;
  heroBadge: string;
  headline: string;
  metaDescription: string;
  overview: string;
  benchmarks: {
    entry: string;
    mid: string;
    senior: string;
    expert: string;
    typicalAnnualGross: string;
  };
  deductions: Array<{
    title: string;
    description: string;
  }>;
  pricingStrategies: Array<{
    model: string;
    description: string;
    bestFor: string;
  }>;
  caseStudy: {
    title: string;
    scenario: string;
    grossRevenue: string;
    expenses: string;
    netProfit: string;
    seTax: string;
    fedTax: string;
    stateTax: string;
    netTakeHome: string;
    effectiveRate: string;
    keyTakeaway: string;
  };
  taxNuances: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  calculatorDefaults: {
    initialGrossRevenue: number;
    initialExpenses: number;
    initialDesiredTakeHome: number;
    initialBillableHours: number;
    initialWeeksWorked: number;
    initialStateTaxRate: number;
    initialProjectFee: number;
    initialDirectCosts: number;
  };
}

export const NICHE_DATA: Record<string, NicheInfo> = {
  "software-engineer": {
    slug: "software-engineer",
    title: "Software Engineer",
    heroBadge: "Engineering & Tech Contracting",
    headline: "Freelance Software Engineer Tax & Hourly Rate Calculator",
    metaDescription: "Calculate 1099 self-employment taxes, target developer hourly rates, and optimize project margins for freelance software engineers and cloud contractors.",
    overview: "Freelance software engineering, DevOps contracting, and technical architecture consulting command some of the highest billing rates in the modern knowledge economy. However, tech contractors face unique financial complexities: significant hardware and cloud infrastructure costs, high self-employment tax liabilities, contract-to-hire tradeoffs, and the dilemma between billing fixed-price sprints versus hourly time-and-materials. Setting the right baseline rate ensures you cover unpaid technical research, open-source maintenance, health coverage, and quarterly tax deposits.",
    benchmarks: {
      entry: "$50 – $75 / hr",
      mid: "$80 – $130 / hr",
      senior: "$140 – $220 / hr",
      expert: "$225 – $350+ / hr",
      typicalAnnualGross: "$130,000 – $260,000",
    },
    deductions: [
      {
        title: "Developer Hardware & Workstation",
        description: "High-spec laptops (MacBook Pro, ThinkPad), 4K external monitors, mechanical keyboards, ergonomic desks, and home lab servers under Section 179 expensing.",
      },
      {
        title: "Cloud Services & Developer Tooling",
        description: "AWS, GCP, Azure sandbox accounts, GitHub Enterprise, Vercel, Supabase, JetBrains IDE licenses, Docker subscriptions, and AI coding assistants (ChatGPT Plus, Copilot).",
      },
      {
        title: "Home Office & Fiber Internet",
        description: "Dedicated home development office space and the business portion of dedicated high-speed fiber internet used for deployment, video sprints, and code syncing.",
      },
      {
        title: "Continuous Technical Education",
        description: "AWS/GCP cloud certifications, O'Reilly subscriptions, specialized architecture courses, and engineering conference tickets (e.g., PyCon, AWS re:Invent).",
      },
    ],
    pricingStrategies: [
      {
        model: "Weekly / Sprint Retainers",
        description: "Clients book dedicated blocks of engineering time (e.g., $4,000 to $8,000 per week) with clear sprint deliverable milestones.",
        bestFor: "Full-stack development, MVP launches, and ongoing product refactors.",
      },
      {
        model: "Hourly Time & Materials",
        description: "Billing strictly for verified coding and pairing hours using automated time trackers (Harvest/Toggl) with pre-set weekly caps.",
        bestFor: "DevOps troubleshooting, bug fixing, and legacy code maintenance.",
      },
      {
        model: "Value-Based Architecture Pricing",
        description: "Fixed pricing pegged to economic impact (e.g., building a high-scale checkout system that increases enterprise revenue).",
        bestFor: "Principal systems architects, security auditors, and fractional CTOs.",
      },
    ],
    caseStudy: {
      title: "Senior Full-Stack Contractor Case Study",
      scenario: "Alex is a Senior React/Node engineer transitioning from a $140,000 W-2 salary to 1099 independent contracting. He aims to net $110,000 take-home after all federal and state taxes while working 32 billable hours/week across 48 weeks.",
      grossRevenue: "$168,000",
      expenses: "$18,500 (Hardware, SaaS, Home Office, Health Insurance)",
      netProfit: "$149,500",
      seTax: "$21,120",
      fedTax: "$18,380",
      stateTax: "$0 – $7,475 (depending on state)",
      netTakeHome: "$109,000 – $116,000",
      effectiveRate: "$109.38 / hr minimum floor rate",
      keyTakeaway: "To replicate a $140,000 salary with paid time off and health benefits, Alex must bill at least $110/hr across 1,536 annual billable hours.",
    },
    taxNuances: [
      "Tech contractors who cross $168,600 in net earnings stop paying the 12.4% Social Security portion, increasing marginal take-home.",
      "Contractors often benefit from forming an S-Corporation once net profits consistently surpass $100,000 to reduce self-employment tax via reasonable salary distributions.",
      "Dual W-2 and 1099 earners can offset Social Security wage caps from their W-2 employment against their 1099 SECA tax base.",
    ],
    faqs: [
      {
        question: "Should a freelance software engineer form an S-Corp or LLC?",
        answer: "A single-member LLC offers liability protection and pass-through taxation. When net profit surpasses $100k–$120k, electing S-Corp status can save thousands in self-employment taxes by splitting income between a reasonable W-2 salary and shareholder dividend distributions.",
      },
      {
        question: "How do I account for non-billable technical research?",
        answer: "Engineers spend 15% to 25% of their working hours learning new frameworks, debugging environment issues, and preparing proposals. Build this overhead into your rate multiplier so your billable hours fund your research time.",
      },
    ],
    calculatorDefaults: {
      initialGrossRevenue: 160_000,
      initialExpenses: 20_000,
      initialDesiredTakeHome: 105_000,
      initialBillableHours: 30,
      initialWeeksWorked: 48,
      initialStateTaxRate: 0.05,
      initialProjectFee: 12_000,
      initialDirectCosts: 2_500,
    },
  },

  "graphic-designer": {
    slug: "graphic-designer",
    title: "Graphic Designer",
    heroBadge: "Design & Creative Services",
    headline: "Freelance Graphic Designer & UI/UX Rate & Tax Calculator",
    metaDescription: "Calculate 1099 freelance tax liabilities, determine sustainable hourly and project rates, and budget design software write-offs for graphic designers.",
    overview: "Graphic designers, brand identity creators, and digital product designers operate in a fast-paced creative market. Between constant Adobe Creative Cloud subscriptions, high-resolution asset libraries, premium typography licenses, and hardware upgrades, overhead adds up quickly. Furthermore, creative scope creep is a major threat to profitability. Knowing your baseline hourly rate ensures you price project milestones with healthy profit margins.",
    benchmarks: {
      entry: "$35 – $55 / hr",
      mid: "$60 – $95 / hr",
      senior: "$100 – $160 / hr",
      expert: "$165 – $250+ / hr",
      typicalAnnualGross: "$75,000 – $150,000",
    },
    deductions: [
      {
        title: "Creative Software & Stock Subscriptions",
        description: "Adobe Creative Cloud All Apps, Figma Professional, Midjourney, Shutterstock, Envato Elements, Type Network font licensing, and Procreate.",
      },
      {
        title: "Specialized Display & Drawing Hardware",
        description: "Color-accurate 4K monitors (Apple Studio Display), Wacom Cintiq / iPad Pro drawing tablets, color calibrators, and DSLR cameras for portfolio capture.",
      },
      {
        title: "Portfolio Hosting & Self-Promotion",
        description: "Webflow, Squarespace, Readymag hosting, custom domains, printed leave-behind decks, business cards, and design competition entry fees.",
      },
      {
        title: "Professional Organizations & Inspiration",
        description: "AIGA memberships, design museum passes, typography specimen books, and tickets to design conferences like Adobe MAX or Config.",
      },
    ],
    pricingStrategies: [
      {
        model: "Package / Deliverable-Based Pricing",
        description: "Bundled pricing for clear asset packages (e.g. Brand Identity Suite including logo, typography guidelines, and social kit for $4,500).",
        bestFor: "Brand identity, packaging, and marketing collateral design.",
      },
      {
        model: "Monthly Creative Retainer",
        description: "A dedicated monthly allotment of design hours (e.g. 20 hours/month at $2,000/mo) for ongoing digital creative needs.",
        bestFor: "Marketing agencies, e-commerce stores, and active startups.",
      },
      {
        model: "Day Rates for Intensive Sprints",
        description: "Charging a flat daily fee ($800 – $1,500/day) for 100% focused design execution without distraction.",
        bestFor: "Fast turnaround UI designs, pitch deck design, and rapid prototypes.",
      },
    ],
    caseStudy: {
      title: "Brand Identity Designer Case Study",
      scenario: "Maya is a freelance brand identity designer targeting $75,000 net take-home pay. She bills an average of 25 hours per week across 46 weeks (taking 6 weeks off for creative recharge and holidays).",
      grossRevenue: "$118,000",
      expenses: "$14,200 (Adobe CC, Figma, Fonts, iPad Pro, Studio space)",
      netProfit: "$103,800",
      seTax: "$14,667",
      fedTax: "$11,250",
      stateTax: "$4,152 (at 4% state tax)",
      netTakeHome: "$73,731",
      effectiveRate: "$102.60 / hr minimum floor rate",
      keyTakeaway: "Because creative output requires intensive recovery and non-billable conceptualization, Maya's 25-hour billable week requires charging at least $105/hr.",
    },
    taxNuances: [
      "Font and digital asset licenses are 100% deductible business expenses in the year purchased.",
      "Physical sample prints and prototype materials should be categorized as direct project costs to evaluate true gross margin.",
      "Sales tax may apply to delivered digital artwork depending on your state's digital goods tax laws.",
    ],
    faqs: [
      {
        question: "How do I prevent scope creep from eroding my hourly rate?",
        answer: "Always specify exact revision rounds in your client agreement (e.g. 2 revisions included). Additional revisions should be billed at your standard hourly rate ($100+/hr) or as an add-on change order.",
      },
      {
        question: "Can I deduct my iPad Pro and Apple Pencil?",
        answer: "Yes, if used for client sketching, digital illustration, and design reviews, mobile tablets are fully deductible under Section 179.",
      },
    ],
    calculatorDefaults: {
      initialGrossRevenue: 110_000,
      initialExpenses: 15_000,
      initialDesiredTakeHome: 72_000,
      initialBillableHours: 25,
      initialWeeksWorked: 46,
      initialStateTaxRate: 0.05,
      initialProjectFee: 4_500,
      initialDirectCosts: 800,
    },
  },

  "consultant": {
    slug: "consultant",
    title: "Management Consultant",
    heroBadge: "Strategy & Advisory Services",
    headline: "Freelance Management & Strategy Consultant Rate Calculator",
    metaDescription: "Calculate estimated taxes, optimize advisory retainers, and determine required day and hourly rates for freelance management consultants.",
    overview: "Management consultants, fractional executives (CMO, CFO, COO), and organizational advisors sell high-leverage intellectual capital. Consulting economics differ significantly from production-heavy freelancing: engagements are typically retainer-based or value-priced rather than billed by the minute. However, significant travel, business development lunches, corporate insurance, and legal protections create substantial overhead that must be grossed up into your target pricing structure.",
    benchmarks: {
      entry: "$100 – $150 / hr",
      mid: "$175 – $275 / hr",
      senior: "$300 – $450 / hr",
      expert: "$500 – $1,000+ / hr",
      typicalAnnualGross: "$160,000 – $350,000+",
    },
    deductions: [
      {
        title: "Business Travel & Lodging",
        description: "Flights, high-speed rail, Uber/Lyft rideshares, and hotel accommodations for on-site executive client workshops and corporate strategy offsites.",
      },
      {
        title: "Client Business Meals (50% Deductible)",
        description: "Meals with prospective corporate clients, executive sponsors, and teaming partners where substantive business strategy is discussed.",
      },
      {
        title: "Errors & Omissions (E&O) & General Liability",
        description: "Professional indemnity and cyber liability insurance policies required by enterprise Master Services Agreements (MSAs).",
      },
      {
        title: "Proprietary Research & Industry Reports",
        description: "Subscriptions to Gartner, Forrester, Harvard Business Review, Bloomberg, and specialized industry data feeds.",
      },
    ],
    pricingStrategies: [
      {
        model: "Monthly Fractional Retainer",
        description: "Fixed recurring monthly fee ($5,000 to $15,000/month) for dedicated strategic oversight, executive coaching, and weekly team alignment.",
        bestFor: "Fractional executives and ongoing strategy advisors.",
      },
      {
        model: "Executive Day Rate",
        description: "A flat daily billing fee ($2,500 to $6,000/day) for high-stakes on-site workshops, restructuring sessions, and board facilitation.",
        bestFor: "Management workshops, keynote facilitation, and rapid audits.",
      },
      {
        model: "Phased Milestone Engagements",
        description: "Dividing large engagements into Diagnostic ($15k), Strategy Blueprint ($30k), and Implementation Support ($50k).",
        bestFor: "Organizational restructuring and digital transformation roadmaps.",
      },
    ],
    caseStudy: {
      title: "Fractional Strategy Advisor Case Study",
      scenario: "Marcus is a former Big 4 strategy consultant operating as an independent fractional COO. He works with 3 clients on $6,000/month retainers, delivering roughly 20 billable hours per week for 46 weeks a year.",
      grossRevenue: "$216,000",
      expenses: "$28,000 (Travel, E&O Insurance, Legal, Executive Co-working)",
      netProfit: "$188,000",
      seTax: "$23,520 (capped SS tax)",
      fedTax: "$27,450",
      stateTax: "$9,400 (at 5% state tax)",
      netTakeHome: "$127,630",
      effectiveRate: "$234.78 / hr effective rate",
      keyTakeaway: "With low billable hour volume (920 hrs/yr) and enterprise overhead, charging a premium effective rate ($235+/hr) is essential to achieve a $125k+ net take-home.",
    },
    taxNuances: [
      "Consulting activities are generally classified as 'Specified Service Trades or Businesses' (SSTB) under Section 199A, which phases out the 20% QBI deduction at higher taxable income thresholds ($191,950 Single / $383,900 Married in 2024).",
      "Travel expenses directly reimbursed by clients under an accountable plan are non-taxable and should not be counted as gross revenue.",
      "Solo 401(k) contributions allow consultants to shelter up to $69,000 of high-margin earnings from current-year federal taxes.",
    ],
    faqs: [
      {
        question: "How do I handle client travel expenses for tax purposes?",
        answer: "Have clients reimburse travel expenses directly against receipts under an accountable plan. If you bill a flat travel fee, it counts as gross revenue and you must deduct actual travel expenses on Schedule C.",
      },
      {
        question: "Is consulting subject to the SSTB QBI phaseout limit?",
        answer: "Yes, management and strategy consulting is a Specified Service Trade or Business (SSTB). The 20% QBI deduction begins phasing out once your taxable income crosses $191,950 for single filers or $383,900 for married filing jointly.",
      },
    ],
    calculatorDefaults: {
      initialGrossRevenue: 200_000,
      initialExpenses: 28_000,
      initialDesiredTakeHome: 120_000,
      initialBillableHours: 20,
      initialWeeksWorked: 46,
      initialStateTaxRate: 0.05,
      initialProjectFee: 18_000,
      initialDirectCosts: 3_000,
    },
  },

  "copywriter": {
    slug: "copywriter",
    title: "Copywriter & Content Strategist",
    heroBadge: "Writing & Content Creation",
    headline: "Freelance Copywriter Tax & Hourly Rate Calculator",
    metaDescription: "Model freelance copywriter taxes, convert per-word and per-project fees to hourly rate benchmarks, and calculate self-employment tax obligations.",
    overview: "Freelance copywriters, conversion specialists, and B2B technical writers are vital revenue drivers for businesses. However, writing is notorious for unpaid research time, editorial back-and-forth, and wide variance in pricing models (per-word vs per-article vs monthly retainer). Understanding your effective hourly rate protects you from low-paying content mill rates and positions you for high-ticket conversion copywriting.",
    benchmarks: {
      entry: "$30 – $50 / hr ($0.10 – $0.20 / word)",
      mid: "$55 – $90 / hr ($0.25 – $0.50 / word)",
      senior: "$100 – $175 / hr ($0.60 – $1.25 / word)",
      expert: "$180 – $300+ / hr (Conversion/Sales Page Specialists)",
      typicalAnnualGross: "$65,000 – $140,000",
    },
    deductions: [
      {
        title: "Writing & Editorial Software Tools",
        description: "Grammarly Business, Hemingway Editor, Clearscope, SurferSEO, Notion, Scrivener, Google Workspace, and specialized AI drafting tools.",
      },
      {
        title: "Books, Industry Newsletters & Research",
        description: "Direct-response copywriting books, paid Substack publications, Wall Street Journal subscriptions, and market research databases.",
      },
      {
        title: "Home Office & Ergonomic Setup",
        description: "Dedicated workspace deduction, noise-canceling headphones (Sony/Bose), mechanical keyboards, and ergonomic lumbar chairs.",
      },
      {
        title: "Marketing & Lead Generation",
        description: "LinkedIn Sales Navigator, cold outreach email verification tools, professional headshots, and personal website hosting.",
      },
    ],
    pricingStrategies: [
      {
        model: "Project-Based Asset Pricing",
        description: "Flat fee for high-converting sales assets (e.g. 5-part Email Welcome Sequence: $2,500; Long-form SaaS Landing Page: $4,000).",
        bestFor: "Direct-response and conversion copywriters.",
      },
      {
        model: "Monthly Content Retainer",
        description: "Predictable recurring monthly fee for a set content package (e.g. 4 in-depth B2B whitepapers/articles per month for $4,000/mo).",
        bestFor: "B2B SaaS and enterprise content marketing.",
      },
      {
        model: "Base Fee + Performance Royalty",
        description: "A lower upfront copy fee plus 2% to 5% of gross campaign sales generated by the sales letter or launch sequence.",
        bestFor: "Direct-to-consumer and info-product sales funnels.",
      },
    ],
    caseStudy: {
      title: "B2B SaaS Content Strategist Case Study",
      scenario: "Elena writes technical B2B articles and landing pages for cloud software companies. She aims to net $65,000 take-home pay working 26 billable writing hours per week across 47 weeks.",
      grossRevenue: "$102,000",
      expenses: "$11,500 (SEO tools, subscriptions, home office, health plan)",
      netProfit: "$90,500",
      seTax: "$12,787",
      fedTax: "$9,150",
      stateTax: "$3,620 (at 4% state tax)",
      netTakeHome: "$64,943",
      effectiveRate: "$83.47 / hr minimum target rate",
      keyTakeaway: "Elena must ensure her project fees reflect an $85+/hr floor. A 1,500-word article requiring 8 hours of research, interviews, and writing should never be priced below $680.",
    },
    taxNuances: [
      "Copywriting is an eligible trade for the full 20% Section 199A QBI deduction under qualifying income thresholds.",
      "Self-employed health insurance premiums can be deducted 100% on Form 1040 Schedule 1 without needing to itemize deductions.",
      "Quarterly estimated tax payments must be remitted on April 15, June 15, Sept 15, and Jan 15 to prevent late-payment penalties.",
    ],
    faqs: [
      {
        question: "Why should I transition away from per-word pricing?",
        answer: "Per-word pricing penalizes conciseness and speed. Charging per project or on retainer aligns client incentives with business results and allows you to earn a significantly higher effective hourly rate as your efficiency improves.",
      },
      {
        question: "Can I deduct my personal books and magazine subscriptions?",
        answer: "You can deduct books, trade publications, and research materials that directly relate to your client niches, marketing skill development, or copywriting craft.",
      },
    ],
    calculatorDefaults: {
      initialGrossRevenue: 95_000,
      initialExpenses: 12_000,
      initialDesiredTakeHome: 65_000,
      initialBillableHours: 26,
      initialWeeksWorked: 47,
      initialStateTaxRate: 0.04,
      initialProjectFee: 3_500,
      initialDirectCosts: 400,
    },
  },

  "digital-marketer": {
    slug: "digital-marketer",
    title: "Digital Marketer & Media Buyer",
    heroBadge: "Marketing & Growth Consulting",
    headline: "Freelance Digital Marketer & Media Buyer Tax Calculator",
    metaDescription: "Calculate self-employment taxes, manage ad-spend pass-through margins, and calculate target retainer pricing for freelance digital marketers.",
    overview: "Freelance digital marketers, performance media buyers (Meta/Google Ads), and SEO growth consultants manage substantial marketing investments. A critical financial danger in digital marketing is improperly treating client ad spend as gross business revenue—which can artificially inflate your perceived income and lead to massive bookkeeping errors. This calculator and guide walks you through pure margin calculations and rate setting.",
    benchmarks: {
      entry: "$45 – $70 / hr",
      mid: "$75 – $125 / hr",
      senior: "$130 – $200 / hr",
      expert: "$210 – $350+ / hr",
      typicalAnnualGross: "$90,000 – $200,000+",
    },
    deductions: [
      {
        title: "Marketing Intelligence & Analytics Tools",
        description: "Ahrefs, Semrush, SpyFu, Supermetrics, Triple Whale, Google Workspace, Zapier, and ad tracking dashboard software.",
      },
      {
        title: "Test Ad Spend & Creative Prototyping",
        description: "Small self-funded advertising campaigns run to test new ad formats, creative angles, or promote your own agency services.",
      },
      {
        title: "Client Pitch Decks & Data Visualizations",
        description: "Canva Pro, Looker Studio connectors, Slidebean, and custom reporting dashboard subscriptions.",
      },
      {
        title: "Marketing Conferences & Masterminds",
        description: "Traffic & Conversion Summit, Affiliate World, BrightonSEO, and paid digital growth mastermind memberships.",
      },
    ],
    pricingStrategies: [
      {
        model: "Base Management Fee + % of Ad Spend",
        description: "A fixed floor fee ($2,500/mo) plus 10% to 15% of monthly client media spend above a baseline threshold.",
        bestFor: "Paid search (Google Ads) and paid social (Meta/TikTok Ads) specialists.",
      },
      {
        model: "Monthly Growth Retainer",
        description: "Flat recurring advisory and execution fee ($3,500 to $8,000/mo) for end-to-end campaign management and weekly reporting.",
        bestFor: "Full-funnel growth marketers and SEO consultants.",
      },
      {
        model: "Audit & Strategy Sprint",
        description: "One-off comprehensive marketing audit ($2,000 to $5,000) identifying conversion leaks and wasted ad spend.",
        bestFor: "Lead generation audits and client acquisition entry points.",
      },
    ],
    caseStudy: {
      title: "Paid Acquisition Specialist Case Study",
      scenario: "Jordan manages Meta and Google Ads for 5 e-commerce clients, charging a $2,500/month flat retainer per client ($12,500/mo gross). He works 28 billable hours per week for 48 weeks.",
      grossRevenue: "$150,000",
      expenses: "$19,000 (SaaS tools, reporting connectors, home office, health plan)",
      netProfit: "$131,000",
      seTax: "$18,510",
      fedTax: "$15,200",
      stateTax: "$6,550 (at 5% state tax)",
      netTakeHome: "$90,740",
      effectiveRate: "$111.61 / hr minimum floor rate",
      keyTakeaway: "By maintaining 5 stable client retainers with low direct software costs, Jordan secures over $90k net take-home at an effective rate of $112/hr.",
    },
    taxNuances: [
      "CRITICAL: Never run client ad spend through your personal or business credit cards without a formal client billing portal. Client ad spend is not your revenue!",
      "Agency tools and reporting software shared across multiple clients are 100% tax-deductible operational overhead.",
      "Digital marketing qualifies for the 20% Section 199A QBI deduction as long as overall income remains within IRS statutory limits.",
    ],
    faqs: [
      {
        question: "How should I structure client ad spend for taxes?",
        answer: "Always have clients enter their own credit card details directly into the ad platform (Meta, Google, TikTok). This guarantees you only receive your pure management fee and prevents your 1099-K from over-reporting gross transaction volume.",
      },
      {
        question: "Can I deduct my own agency promotional ad campaigns?",
        answer: "Yes, 100% of money spent promoting your own freelance or consulting services on Google, LinkedIn, or Meta is deductible as an advertising expense on IRS Schedule C.",
      },
    ],
    calculatorDefaults: {
      initialGrossRevenue: 140_000,
      initialExpenses: 18_000,
      initialDesiredTakeHome: 88_000,
      initialBillableHours: 28,
      initialWeeksWorked: 48,
      initialStateTaxRate: 0.05,
      initialProjectFee: 7_500,
      initialDirectCosts: 1_200,
    },
  },

  "california-freelance": {
    slug: "california-freelance",
    title: "California Freelancer",
    heroBadge: "State-Specific Tax Suite",
    headline: "California Freelance Tax & Hourly Rate Calculator (2024–2025)",
    metaDescription: "Calculate California state income tax brackets (up to 13.3%), 15.3% federal self-employment tax, AB5 compliance rules, and required contractor hourly rates.",
    overview: "Freelancing in California offers incredible access to world-class tech, entertainment, and venture-backed clients—but it comes with the nation's steepest state income tax brackets (ranging up to 13.3% for top earners) and strict regulatory standards like Assembly Bill 5 (AB5). California independent contractors must price with extreme discipline to absorb state tax withholdings, mandatory local business taxes, and high living costs.",
    benchmarks: {
      entry: "$60 – $90 / hr",
      mid: "$95 – $150 / hr",
      senior: "$160 – $250 / hr",
      expert: "$260 – $400+ / hr",
      typicalAnnualGross: "$140,000 – $300,000+",
    },
    deductions: [
      {
        title: "California Franchise Tax Board (FTB) Deductions",
        description: "CA state tax allows deductions for ordinary and necessary business expenses, mirroring federal Schedule C categories with minor state-specific depreciation adjustments.",
      },
      {
        title: "California Home Office Space",
        description: "With high CA rent and property prices, calculating actual home office expenses (pro-rated rent, utilities, insurance) often yields significantly larger deductions than the $1,500 simplified method.",
      },
      {
        title: "Local City Business Taxes & Permits",
        description: "City of Los Angeles business tax, San Francisco Gross Receipts Tax, or local municipal registration fees are fully deductible on federal returns.",
      },
      {
        title: "High-Speed Internet & Tech Equipment",
        description: "Laptops, mobile plans, software suites, and ergonomic hardware fully expensed to offset both federal and California taxable income.",
      },
    ],
    pricingStrategies: [
      {
        model: "CA High-Cost Rate Multiplier",
        description: "Add a 25% to 35% premium over national baseline rates to offset California state taxes and regional overhead.",
        bestFor: "All California-based 1099 contractors and consultants.",
      },
      {
        model: "Value-Anchored Retainers",
        description: "Setting high-ticket retainers ($8,000 to $15,000/mo) for Silicon Valley, SF Bay Area, and LA enterprise clients.",
        bestFor: "Senior engineers, product designers, and executive advisors.",
      },
      {
        model: "Pass-Through Entity (PTE) Tax Election",
        description: "Electing California's AB 150 Pass-Through Entity Tax (9.3% flat rate) to bypass the federal $10,000 SALT deduction cap.",
        bestFor: "High-earning California S-Corporation and partnership owners.",
      },
    ],
    caseStudy: {
      title: "California Tech Contractor Case Study",
      scenario: "David is a freelance software architect living in San Francisco targeting $120,000 net take-home pay. He bills 30 hours per week across 48 weeks.",
      grossRevenue: "$195,000",
      expenses: "$24,000 (SF workspace, hardware, SaaS, health plan)",
      netProfit: "$171,000",
      seTax: "$22,250",
      fedTax: "$22,600",
      stateTax: "$13,680 (CA FTB progressive rate avg ~8%)",
      netTakeHome: "$112,470",
      effectiveRate: "$135.42 / hr minimum floor rate",
      keyTakeaway: "Due to California's $13,680 state tax bill, David must bill at least $136/hr—roughly $25/hr higher than an equivalent contractor in a zero-tax state like Texas or Florida.",
    },
    taxNuances: [
      "California does NOT conform to federal bonus depreciation rules; state returns require FTB Form 3885A adjustments for capitalized assets.",
      "The California annual LLC tax is a mandatory $800 minimum franchise tax, due by the 15th day of the 4th month of your tax year (waived for the 1st year for newly formed entities).",
      "California AB 150 allows eligible S-Corps and LLCs to pay a 9.3% elective pass-through entity tax to effectively deduct state taxes on their federal return.",
    ],
    faqs: [
      {
        question: "What is California AB5 and how does it affect freelancers?",
        answer: "AB5 codified the strict 'ABC Test' for worker classification in California. True freelancers must be free from client control, perform work outside the core of the client's usual business, and have an established independent trade. Many professions (writers, engineers, designers, consultants) have statutory exemptions under AB 2257.",
      },
      {
        question: "Do I have to pay the $800 California LLC Franchise Tax?",
        answer: "Yes, every registered LLC doing business in California must pay the annual $800 franchise tax to the FTB, regardless of whether you made a profit (the first year fee is waived for newly registered LLCs formed through 2024).",
      },
    ],
    calculatorDefaults: {
      initialGrossRevenue: 180_000,
      initialExpenses: 22_000,
      initialDesiredTakeHome: 110_000,
      initialBillableHours: 30,
      initialWeeksWorked: 48,
      initialStateTaxRate: 0.08,
      initialProjectFee: 15_000,
      initialDirectCosts: 2_500,
    },
  },

  "texas-freelance": {
    slug: "texas-freelance",
    title: "Texas Freelancer",
    heroBadge: "State-Specific Tax Suite",
    headline: "Texas Freelance Tax & Hourly Rate Calculator (0% State Tax)",
    metaDescription: "Calculate federal self-employment taxes, Texas franchise tax exemption thresholds, and pricing benchmarks for Texas-based independent contractors.",
    overview: "Operating as an independent contractor or solo entrepreneur in Texas provides a formidable tax advantage: 0% Texas state personal income tax. With no state income tax eroding your bottom line, a higher percentage of every invoiced dollar flows directly into your pocket. However, Texas freelancers must still navigate federal self-employment tax (15.3%), federal income tax brackets, high local property taxes, and Texas Franchise Tax reporting.",
    benchmarks: {
      entry: "$45 – $70 / hr",
      mid: "$75 – $120 / hr",
      senior: "$130 – $200 / hr",
      expert: "$210 – $325+ / hr",
      typicalAnnualGross: "$100,000 – $220,000",
    },
    deductions: [
      {
        title: "Federal Schedule C Deductions (100% Allowed)",
        description: "Because Texas has no state income tax return, all business expense tracking focuses on maximizing federal Form 1040 Schedule C write-offs.",
      },
      {
        title: "Home Office & Utility Write-Offs",
        description: "Air conditioning and electricity costs during hot Texas summers make utility expense deductions substantial under the actual expense method.",
      },
      {
        title: "Vehicle Mileage & Travel",
        description: "Given Texas's vast geography (Austin, Dallas, Houston, San Antonio), tracking business mileage at the standard IRS rate (67¢/mile in 2024) yields major deductions.",
      },
      {
        title: "Hardware, Software & Professional Services",
        description: "Computers, cameras, cloud hosting, CPA fees, and legal registration expenses fully deductible against federal gross profit.",
      },
    ],
    pricingStrategies: [
      {
        model: "National Rate Parity",
        description: "Charge market rates equivalent to national coastal benchmarks, keeping the extra 5% to 13% tax savings as net profit.",
        bestFor: "Remote software engineers, copywriters, and digital consultants.",
      },
      {
        model: "Regional Corporate Retainers",
        description: "Monthly retainers ($4,000 to $10,000/mo) for growing Texas tech, healthcare, and energy enterprise clients.",
        bestFor: "Management advisors, creative directors, and IT specialists.",
      },
      {
        model: "Project Milestone Billing",
        description: "Fixed scope deliverable packages structured with 50% upfront deposits and 50% on milestone completion.",
        bestFor: "Designers, agency owners, and technical contractors.",
      },
    ],
    caseStudy: {
      title: "Texas Remote Consultant Case Study",
      scenario: "Sarah is an Austin-based remote operations consultant targeting $95,000 net take-home pay. She bills 28 hours per week across 48 weeks a year.",
      grossRevenue: "$142,000",
      expenses: "$16,000 (Software, travel, home office, health plan)",
      netProfit: "$126,000",
      seTax: "$17,800",
      fedTax: "$14,100",
      stateTax: "$0.00 (0% Texas state income tax)",
      netTakeHome: "$94,100",
      effectiveRate: "$105.65 / hr minimum floor rate",
      keyTakeaway: "Thanks to Texas's 0% state income tax, Sarah keeps $94,100 of her $126k net profit—saving over $8,000/year compared to peers in California or New York.",
    },
    taxNuances: [
      "Texas has ZERO personal state income tax, meaning no state quarterly estimated tax vouchers are required.",
      "The Texas Franchise Tax exemption threshold is $2.47 million for the 2024–2025 biennium; solo freelancers earning under this threshold owe $0 in franchise tax (though a No Tax Due Information Report must still be filed).",
      "Sales tax may apply to certain data processing and information services in Texas at the state 6.25% + local rate.",
    ],
    faqs: [
      {
        question: "Do Texas freelancers have to pay the Texas Franchise Tax?",
        answer: "Most solo freelancers owe $0 in Texas Franchise Tax because the statutory exemption threshold is $2.47 million. However, registered Texas LLCs and corporations must still submit an annual 'No Tax Due Information Report' to the Texas Comptroller by May 15.",
      },
      {
        question: "How do I calculate quarterly estimated taxes in Texas?",
        answer: "Because Texas has no state income tax, you only need to submit federal quarterly estimated taxes (IRS Form 1040-ES) to the IRS on April 15, June 15, Sept 15, and Jan 15.",
      },
    ],
    calculatorDefaults: {
      initialGrossRevenue: 135_000,
      initialExpenses: 16_000,
      initialDesiredTakeHome: 92_000,
      initialBillableHours: 28,
      initialWeeksWorked: 48,
      initialStateTaxRate: 0.00,
      initialProjectFee: 8_000,
      initialDirectCosts: 1_000,
    },
  },
};
