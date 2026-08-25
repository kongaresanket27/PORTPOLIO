import { Project, Certification, SkillCategory, ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  name: "SANKET KONGARE",
  title: "Computer Science Engineering Student (2024 – 2028 Batch)",
  institution: "MIT Academy of Engineering (MITAOE), Alandi, Pune",
  year: "B.Tech Computer Science Engineering (2024 – 2028)",
  email: "kongaresanket27@gmail.com",
  phone: "+91 8275841327",
  location: "Alandi, Pune, Maharashtra - 412105",
  linkedinUrl: "https://linkedin.com/in/sanket-kongare",
  githubUrl: "https://github.com/kongaresanket27"
};

/**
 * DIRECT EMAILJS CONFIGURATION:
 * You can paste your keys directly between the quotes below!
 * When you sync to GitHub or deploy anywhere, it will work instantly out of the box.
 */
export const emailjsConfig = {
  serviceId: "service_txc3qrn",        // e.g. "service_xxxxxxx"
  mainTemplateId: "template_wnqyzqu",   // e.g. "template_main_xxxxxxx"
  templateId: "template_auctfrq",       // e.g. "template_xxxxxxx"
  publicKey: "Nafd-SH0itZbPCp7O",        // e.g. "public_key_xxxxxxx"
};

export const projects: Project[] = [
  {
    id: "agrofam-app",
    title: "AgroFam - Smart Agriculture Platform",
    subtitle: "JSX & Python Smart Farming Application",
    category: "software",
    techStack: ["JSX / React", "Python", "REST API", "SQL", "Data Analytics"],
    description: "An intelligent agricultural application designed to empower farmers with crop advisory, soil moisture insights, real-time weather analytics, and local market connectivity.",
    highlights: [
      "Dynamic JSX frontend with responsive user dashboard for crop disease detection and soil telemetry",
      "Python-driven analytics engine calculating optimal fertilizer application and crop rotation schedules",
      "Integrated marketplace connecting local farmers with agricultural suppliers and buyers directly"
    ],
    iconName: "Sprout",
    featured: true,
    detailedCaseStudy: {
      problem: "Farmers in rural areas lack accessible, data-driven tools for crop monitoring, market price visibility, and weather forecasting.",
      solution: "Developed AgroFam combining a clean React/JSX frontend with Python analytics services to provide actionable farming insights in simple local terms.",
      keyFeatures: [
        "Crop Health Diagnostic Helper",
        "Live Weather & Moisture Advisory",
        "Direct Farmer Marketplace Interface",
        "Yield & Cost Calculator"
      ],
      outcomes: "Demonstrated 25% reduction in resource wastage during testing simulations and improved market price visibility for local farmers."
    }
  },
  {
    id: "digital-auction-system",
    title: "Digital Auction System",
    subtitle: "Core Java Online Bidding Architecture",
    category: "software",
    techStack: ["Java", "OOP", "Multithreading", "Data Structures", "GUI / Swing"],
    description: "A robust Java-based auction platform enabling real-time bidding, item cataloging, dynamic price escalation, and automated winner declaration.",
    highlights: [
      "Concurrent bidding engine built using Java multithreading and synchronized bid queues",
      "Automated bid counter and real-time timer with instant highest-bidder notification",
      "Detailed seller logs and transaction summary reports generated post-auction"
    ],
    iconName: "Gavel",
    featured: true,
    detailedCaseStudy: {
      problem: "Manual auctions are restricted by physical location and lack automated real-time price monitoring and audit trails.",
      solution: "Engineered a multithreaded Digital Auction application in Java that handles concurrent bids safely without race conditions.",
      keyFeatures: [
        "Real-time Bid Escalation Engine",
        "Seller Item Listing Manager",
        "Thread-Safe Transaction Registry",
        "Automated Bidding Timer"
      ],
      outcomes: "Processed concurrent bid simulations seamlessly with zero state conflicts and instant notification feedback."
    }
  },
  {
    id: "asset-management-system",
    title: "Asset Management System",
    subtitle: "Enterprise Hardware & Resource Tracker",
    category: "software",
    techStack: ["Core Java", "SQL", "JDBC", "Database Design", "Relational Queries"],
    description: "An organizational resource management application developed using Core Java and SQL to track computer lab assets, maintenance schedules, and hardware allocation.",
    highlights: [
      "Relational SQL database schema designed for assets, maintenance logs, user check-outs, and department inventory",
      "Java JDBC integration supporting CRUD operations, asset search, and dynamic status filtering",
      "Automated alert flag for assets exceeding operational warranty or due for scheduled service"
    ],
    iconName: "Server",
    featured: true,
    detailedCaseStudy: {
      problem: "Educational institutions and IT labs struggle with lost hardware and untracked asset allocation across departments.",
      solution: "Created a centralized Java + SQL system for logging item check-in/out, service logs, and location mapping.",
      keyFeatures: [
        "Barcode/Asset Tag Search System",
        "Departmental Checkout & Returns Log",
        "SQL Relational Asset Ledger",
        "Maintenance Schedule Notifications"
      ],
      outcomes: "Reduced manual audit time by 60% and established clear accountability for lab hardware."
    }
  },
  {
    id: "quiz-conduction-app",
    title: "Quiz Conduction Application",
    subtitle: "Python Assessment & Evaluation Tool",
    category: "software",
    techStack: ["Python", "Tkinter / Desktop UI", "JSON / File I/O", "Data Structures"],
    description: "A Python application for creating, administering, and grading timed quizzes with question randomization, instant evaluation, and score reporting.",
    highlights: [
      "Flexible question bank management supporting multiple choice, true/false, and short answer formats",
      "Timed test execution with auto-submission upon countdown expiry",
      "Visual score breakdown with detailed answer explanations for students"
    ],
    iconName: "GraduationCap",
    featured: false,
    detailedCaseStudy: {
      problem: "Teachers need a simple, lightweight offline tool to conduct rapid classroom assessments without relying on heavy LMS platforms.",
      solution: "Built an intuitive Python application that parses structured question banks and handles automated grading instantly.",
      keyFeatures: [
        "Randomized Question Shuffling",
        "Live Countdown Timer Component",
        "Instant Automated Score Generator",
        "Exportable Class Performance CSV"
      ],
      outcomes: "Streamlined exam administration with 100% automated grading precision."
    }
  },
  {
    id: "blynk-iot-appliance-control",
    title: "Motion Detection & Appliance Control System",
    subtitle: "Smart Home Automation with Blynk IoT",
    category: "iot",
    techStack: ["Blynk IoT", "ESP8266 / NodeMCU", "PIR Motion Sensor", "Relay Modules", "Embedded C++"],
    description: "An IoT hardware and mobile application setup for smart home automation, remote appliance switching, and intrusion motion alerting via Blynk Cloud.",
    highlights: [
      "Real-time PIR sensor detection sending instant push notifications to mobile devices via Blynk API",
      "4-channel relay control permitting remote switching of lights, fans, and appliances over Wi-Fi",
      "Failsafe manual override switches synchronized bidirectionally with cloud status"
    ],
    hardwareComponents: ["NodeMCU ESP8266", "PIR Sensor HC-SR501", "4-Channel 5V Relay Board", "Blynk IoT App"],
    iconName: "Cpu",
    featured: true,
    detailedCaseStudy: {
      problem: "Traditional home electrical systems lack remote control and intrusion detection capabilities without expensive proprietary hubs.",
      solution: "Designed a low-cost, reliable IoT system combining microcontrollers with Blynk Cloud infrastructure for wireless control.",
      keyFeatures: [
        "Mobile App Relay Control",
        "Motion Alert Push Notifications",
        "Live Device Telemetry Feedback",
        "Low Latency Cloud Synchronization"
      ],
      outcomes: "Achieved sub-second response times for remote appliance toggling and dependable motion detection."
    }
  },
  {
    id: "digital-aqi-temp-pm-system",
    title: "Digital AQI, Temp & PM Measuring System",
    subtitle: "Environmental Air Quality Sensor Array & Analytics",
    category: "iot",
    techStack: ["IoT Sensors", "Microcontroller", "Python", "Power BI", "Data Analytics"],
    description: "A comprehensive environmental monitoring system combining custom hardware sensor arrays (MQ135, DHT11, Dust Sensor) with software analytics to measure and analyze air quality, temperature, and particulate matter (PM2.5/PM10).",
    highlights: [
      "Hardware sensor node capturing real-time Air Quality Index, Temperature, Humidity, and Particulate Dust levels",
      "Python data ingestion script logging environmental metrics to SQL and CSV data stores",
      "Interactive analytics dashboard visualizing hourly AQI trends, dangerous threshold alerts, and health impact reports"
    ],
    hardwareComponents: ["DHT11 Temp/Humidity", "MQ-135 Gas Sensor", "GP2Y1010AU0F Optical Dust Sensor", "Arduino / NodeMCU"],
    iconName: "Wind",
    featured: true,
    detailedCaseStudy: {
      problem: "Industrial and campus zones require continuous, granular monitoring of air pollution, microdust, and thermal comfort levels.",
      solution: "Built an integrated hardware-software solution that captures raw particulate and gas levels and translates them into understandable AQI metrics.",
      keyFeatures: [
        "Multi-parameter Sensor Ingestion",
        "Real-time PM2.5 & PM10 Calculation",
        "Interactive Air Quality Index Dashboard",
        "Environmental Danger Threshold Alarms"
      ],
      outcomes: "Deployed pilot monitoring station on campus providing live environmental readings updated every 10 seconds."
    }
  },
  {
    id: "hand-sanitiser-machine",
    title: "Sensor-Based Contactless Sanitiser Machine",
    subtitle: "Automated Hardware Hygiene Device",
    category: "iot",
    techStack: ["Infrared Sensors", "Transistor Driver", "DC Micro-pump", "Power Supply Circuit"],
    description: "A touchless, sensor-driven automatic sanitizer dispenser developed to enforce contactless hygiene protocols through precise infrared detection.",
    highlights: [
      "Infrared proximity sensor circuit detecting hands without physical contact",
      "Custom pump driver circuit delivering a calibrated 1.5ml mist dose per activation",
      "Low standby power consumption design optimized for continuous daily operation"
    ],
    hardwareComponents: ["IR Proximity Module", "5V Mini Submersible Water Pump", "TIP120 Transistor Driver", "Status LED"],
    iconName: "ShieldCheck",
    featured: false,
    detailedCaseStudy: {
      problem: "Manual hand sanitizer pumps act as high-touch surfaces for cross-contamination in public spaces.",
      solution: "Engineered a touchless dispensing mechanism that triggers a liquid pump only when a hand breaks the IR beam.",
      keyFeatures: [
        "Zero-Touch Infrared Triggering",
        "Calibrated Liquid Dose Control",
        "Low Battery & Fluid Indicator",
        "Compact Enclosure Design"
      ],
      outcomes: "Eliminated physical contact during sanitization with instant 0.2s activation latency."
    }
  },
  {
    id: "powerbi-tableau-dashboards",
    title: "Data Storyboarding & Dashboards",
    subtitle: "Business Intelligence using Power BI, Tableau & Orange",
    category: "data",
    techStack: ["Power BI (PL-300 Certified)", "Tableau", "Orange Data Mining", "DAX", "SQL"],
    description: "A portfolio of interactive data storyboards and executive dashboards analyzing business KPI metrics, customer review sentiment, and IoT sensor streams.",
    highlights: [
      "Microsoft Power BI PL-300 certified data models with custom DAX measures, time-intelligence, and interactive slicers",
      "Tableau storyboards highlighting regional sales trends and operational efficiency bottlenecks",
      "Orange Data Mining workflows for automated customer sentiment classification and cluster analysis"
    ],
    iconName: "BarChart3",
    featured: true,
    detailedCaseStudy: {
      problem: "Raw organizational data across sales, reviews, and IoT streams remains unused due to a lack of visual storytelling.",
      solution: "Applied advanced BI techniques in Power BI, Tableau, and Orange to transform complex datasets into interactive decision-making dashboards.",
      keyFeatures: [
        "Dynamic DAX Metric Cards",
        "Drill-Through Storytelling Panels",
        "Customer Review Sentiment Classifier",
        "Cross-Filtering Data Visualizations"
      ],
      outcomes: "Uncovered key revenue patterns and sentiment drivers across multi-source datasets with clear visual insights."
    }
  }
];

export const certifications: Certification[] = [
  {
    id: "power-bi-pl300",
    title: "Microsoft Power BI Data Analyst (PL-300)",
    issuer: "Microsoft Elevate & FICE",
    organizationLogo: "Microsoft",
    date: "March 30, 2026",
    certId: "FICE-MS-PL300-2026",
    category: "data",
    description: "20-Hour comprehensive certification on Microsoft Learn platform covering data transformation, DAX modeling, interactive report visualization, and dashboard deployment.",
    skillsLearned: ["Power BI Desktop", "DAX Formulas", "Data Modeling", "Power Query ETL", "Dashboard Design"],
    hoursOrCourses: "20 Learning Hours"
  },
  {
    id: "cisco-cybersecurity-internship",
    title: "Cisco AICTE Virtual Internship in Cybersecurity",
    issuer: "Cisco Networking Academy / AICTE / EduSkills",
    organizationLogo: "Cisco",
    date: "June - August 2025",
    certId: "STU681f99e3d06d71746901475",
    category: "cybersecurity",
    description: "Prestigious national virtual internship program focusing on network security architectures, threat mitigation, Packet Tracer topologies, and security protocols.",
    skillsLearned: ["Network Security", "Cisco Packet Tracer", "Threat Analysis", "Firewall Configuration", "Cyber Defense"],
    hoursOrCourses: "Virtual Internship Program"
  },
  {
    id: "js-essentials-2",
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy & MITAOE",
    organizationLogo: "Cisco",
    date: "July 25, 2026",
    certId: "7f91997a-b5e9-4f2b-ac55-769fbfec010b",
    category: "programming",
    description: "Advanced JavaScript course covering object-oriented programming in JS, asynchronous code, promises, closures, DOM manipulation, and modern ES6+ paradigms.",
    skillsLearned: ["Advanced JavaScript", "Asynchronous JS", "Promises & Async/Await", "OOP in JS", "DOM & Events"]
  },
  {
    id: "js-essentials-1",
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy & MITAOE",
    organizationLogo: "Cisco",
    date: "July 23, 2026",
    certId: "b270c4d1-231d-4144-b270-19a63b97e063",
    category: "programming",
    description: "Core JavaScript fundamentals including variables, control structures, function design, array methods, and browser scripting logic.",
    skillsLearned: ["JavaScript Core", "Data Types & Functions", "Control Flow", "Array Manipulation"]
  },
  {
    id: "iot-architectural-engineering",
    title: "IoT Architectural Engineering Pathway",
    issuer: "L&T EduTech",
    organizationLogo: "L&T",
    date: "2025",
    certId: "LTE/EI/1000",
    category: "iot",
    description: "Comprehensive pathway covering sensor communication, gateway protocols, microcontrollers, IoT cloud connectivity, and end-to-end IoT system design.",
    skillsLearned: ["IoT Architecture", "Sensor Networks", "Microcontrollers", "MQTT & Cloud IoT", "Embedded Systems"],
    hoursOrCourses: "8 Courses • 30 Learning Hours"
  },
  {
    id: "renewable-energy-iot",
    title: "Renewable Energy Technologies & Grid Integration",
    issuer: "L&T EduTech",
    organizationLogo: "L&T",
    date: "2025",
    certId: "LTE/EI/1000",
    category: "iot",
    description: "In-depth course pathway detailing renewable power systems, smart grid integration, sensor monitoring for energy efficiency, and grid analytics.",
    skillsLearned: ["Smart Grid Technologies", "Energy Monitoring", "Renewable Power Systems", "IoT Grid Integration"],
    hoursOrCourses: "11 Courses • 32 Learning Hours"
  },
  {
    id: "python-essentials-2",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy & OpenEDG Python Institute",
    organizationLogo: "Cisco",
    date: "April 20, 2025",
    certId: "OpenEDG-PY2-2025",
    category: "programming",
    description: "Intermediate to advanced Python certification covering OOP principles, inheritance, exception handling, string processing, and file processing.",
    skillsLearned: ["Python OOP", "Exception Handling", "File Operations", "Modules & Packages", "String Manipulation"]
  },
  {
    id: "python-essentials-1",
    title: "Python Essentials 1 (PCEP Prep)",
    issuer: "Cisco Networking Academy & OpenEDG Python Institute",
    organizationLogo: "Cisco",
    date: "April 08, 2025",
    certId: "Verified-PCEP-2025",
    category: "programming",
    description: "Fundamental Python programming certification verifying algorithmic problem solving, syntax fluency, and elementary data structure usage.",
    skillsLearned: ["Python Syntax", "Algorithms", "Lists & Dictionaries", "Control Flow"]
  },
  {
    id: "apply-ai-customer-reviews",
    title: "Apply AI: Analyze Customer Reviews",
    issuer: "Cisco Networking Academy & MITAOE",
    organizationLogo: "Cisco",
    date: "June 09, 2026",
    certId: "ab9264fe-7908-4bad-a273-55ff73c0ba7f",
    category: "ai",
    description: "Practical AI course application applying natural language processing and sentiment classification to analyze customer feedback at scale.",
    skillsLearned: ["Sentiment Analysis", "NLP Concepts", "Customer Analytics", "AI Pipeline Design"]
  },
  {
    id: "intro-modern-ai",
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy & MITAOE",
    organizationLogo: "Cisco",
    date: "June 09, 2026",
    certId: "9ba85d9b-48ac-407e-9a7a-c6bf9753fcd3",
    category: "ai",
    description: "Foundational overview of modern artificial intelligence methodologies, machine learning paradigms, neural networks, and generative AI systems.",
    skillsLearned: ["AI Fundamentals", "Machine Learning Basics", "Generative AI Principles", "Ethical AI"]
  },
  {
    id: "data-analytics-essentials",
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy & MITAOE",
    organizationLogo: "Cisco",
    date: "June 10, 2026",
    certId: "c0508db0-1c6e-4219-bc0f-2544adca3682",
    category: "data",
    description: "Core data analytics concepts including data collection, statistical summary, visualization best practices, and decision analysis.",
    skillsLearned: ["Data Analysis", "Statistical Summary", "Data Visualization", "Data Wrangling"]
  },
  {
    id: "cybersecurity-essentials",
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy & MITAOE",
    organizationLogo: "Cisco",
    date: "July 22, 2025",
    certId: "Cisco-CS-2025",
    category: "cybersecurity",
    description: "Essential training on network security principles, risk management, privacy protections, and defensive security measures.",
    skillsLearned: ["Security Essentials", "Data Privacy", "Network Defense", "Threat Vector Identification"]
  },
  {
    id: "intro-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy & MITAOE",
    organizationLogo: "Cisco",
    date: "June 30, 2025",
    certId: "Cisco-IntroCS-2025",
    category: "cybersecurity",
    description: "Foundational awareness of cybersecurity practices, digital safety, malware types, and cyber hygiene.",
    skillsLearned: ["Cyber Safety", "Malware Types", "Network Concepts", "Digital Ethics"]
  },
  {
    id: "packet-tracer",
    title: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy & MITAOE",
    organizationLogo: "Cisco",
    date: "June 24, 2025",
    certId: "Cisco-PT-2025",
    category: "cybersecurity",
    description: "Network simulation training using Cisco Packet Tracer to build, configure, and troubleshoot network topologies and routing protocols.",
    skillsLearned: ["Cisco Packet Tracer", "Network Topology Design", "IP Addressing & Subnetting", "Router & Switch Config"]
  },
  {
    id: "kali-linux-basics",
    title: "Introduction to Kali Linux Basics",
    issuer: "Simplilearn SkillUp",
    organizationLogo: "Simplilearn",
    date: "December 13, 2024",
    certId: "SL-KALI-2024",
    category: "cybersecurity",
    description: "Hands-on course introducing Kali Linux OS environment, command line utilities, basic security auditing tools, and shell navigation.",
    skillsLearned: ["Kali Linux OS", "Linux Terminal Commands", "Security Auditing Tools", "Bash Scripting Basics"]
  },
  {
    id: "anthropic-claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    organizationLogo: "Anthropic",
    date: "2025",
    certId: "ANTHROPIC-CLAUDE-101",
    category: "ai",
    description: "Official Anthropic certification covering core capabilities of Claude AI, model architectures, effective prompt framing, and practical AI workflow integration.",
    skillsLearned: ["Claude AI", "Prompt Engineering", "LLM Workflows", "AI Capabilities"]
  },
  {
    id: "anthropic-ai-students",
    title: "AI Fluency for Students",
    issuer: "Anthropic / UCC / Ringling College",
    organizationLogo: "Anthropic",
    date: "2025",
    certId: "ANTHROPIC-AIF-STUDENTS",
    category: "ai",
    description: "Official certification on leveraging generative AI tools effectively for academic research, problem-solving, synthesis, and creative engineering.",
    skillsLearned: ["AI Research", "Academic AI Ethics", "Generative AI", "Information Synthesis"]
  },
  {
    id: "anthropic-ai-nonprofits",
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic & GivingTuesday",
    organizationLogo: "Anthropic",
    date: "2025",
    certId: "ANTHROPIC-AIF-NONPROFITS",
    category: "ai",
    description: "Specialized training on applying AI technologies to amplify organizational impact, automate administrative workflows, and analyze social datasets.",
    skillsLearned: ["Social Impact AI", "Workflow Automation", "Nonprofit Analytics", "Ethical AI"]
  },
  {
    id: "anthropic-ai-frameworks",
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic / HEA / National Forum",
    organizationLogo: "Anthropic",
    date: "2025",
    certId: "ANTHROPIC-AIF-FOUNDATIONS",
    category: "ai",
    description: "Comprehensive foundational certification on AI governance frameworks, model behavior principles, risk management, and system evaluation.",
    skillsLearned: ["AI Governance", "Model Evaluation", "Foundational AI", "Risk Mitigation"]
  },
  {
    id: "jobready-employability",
    title: "JobReady: Employability Skills (Basic Level)",
    issuer: "Wadhwani Foundation & EduSkills",
    organizationLogo: "Wadhwani",
    date: "December 02, 2025",
    certId: "WF-EDUSKILLS-2025",
    category: "programming",
    description: "79 Hours of professional workplace preparation covering effective communication, problem solving, team collaboration, and professional ethics.",
    skillsLearned: ["Professional Communication", "Problem Solving", "Teamwork", "Workplace Skills"],
    hoursOrCourses: "79 Hours Training"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    categoryName: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 90, experience: "Cisco Certified • Advanced Scripting & Data Analytics", isPrimary: true },
      { name: "Java", level: 85, experience: "Core Java, Multithreading, OOP & Asset Management System", isPrimary: true },
      { name: "C++", level: 82, experience: "Data Structures, Algorithms & Hardware Microcontroller Programming", isPrimary: true },
      { name: "C Language", level: 80, experience: "System Programming, Pointers & Memory Management" },
      { name: "JavaScript / JSX", level: 85, experience: "React Frontends, ES6+, Web Apps (AgroFam)", isPrimary: true },
      { name: "SQL", level: 85, experience: "Relational Database Design, Queries & JDBC Integration", isPrimary: true }
    ]
  },
  {
    categoryName: "Data Analytics & Business Intelligence",
    icon: "LineChart",
    skills: [
      { name: "Microsoft Power BI", level: 92, experience: "PL-300 Certified • DAX, ETL & Interactive Reports", isPrimary: true },
      { name: "Tableau", level: 88, experience: "Visual Storyboards, Regional & KPI Analytics", isPrimary: true },
      { name: "Orange Data Mining", level: 85, experience: "Visual Machine Learning Workflows & Text Classification", isPrimary: true },
      { name: "SQL Queries & Modeling", level: 86, experience: "Complex Joins, Aggregations, Schema Design" },
      { name: "Data Storytelling", level: 90, experience: "Executive Dashboards & Insight Delivery" }
    ]
  },
  {
    categoryName: "IoT & Hardware Engineering",
    icon: "Cpu",
    skills: [
      { name: "Blynk IoT Platform", level: 88, experience: "Mobile App Control & Cloud Telemetry Integration", isPrimary: true },
      { name: "NodeMCU / ESP8266 & Arduino", level: 86, experience: "Wireless Sensor Nodes & Microcontroller Logic", isPrimary: true },
      { name: "Hardware Sensors & Actuators", level: 85, experience: "MQ135 Gas, DHT11, Dust Sensor, PIR, Relays" },
      { name: "AQI & PM Measuring Systems", level: 88, experience: "Hardware + Software Air Quality Analytics Stack" },
      { name: "L&T IoT Architectural Eng.", level: 85, experience: "L&T Pathway Certified • Smart Systems Architecture" }
    ]
  },
  {
    categoryName: "Cybersecurity & AI Technologies",
    icon: "Shield",
    skills: [
      { name: "Cisco Packet Tracer", level: 85, experience: "Cisco Certified • Topology Design & Network Subnetting" },
      { name: "Cybersecurity Essentials", level: 84, experience: "Cisco AICTE Virtual Internship Alumni" },
      { name: "Kali Linux Basics", level: 80, experience: "Simplilearn Certified • Terminal Security Tools" },
      { name: "Modern AI & Customer NLP", level: 85, experience: "Cisco NetAcad Certified • Sentiment Analysis" },
      { name: "Anthropic Claude & Prompt Eng.", level: 88, experience: "4x Anthropic AI Fluency Certified" }
    ]
  }
];
