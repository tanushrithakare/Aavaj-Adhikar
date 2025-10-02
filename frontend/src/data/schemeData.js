export const schemeData = [
  {
    id: 1,
    name: "National Scholarship for Higher Education",
    category: "student",
    description: "Financial assistance for meritorious students from economically weaker sections for pursuing higher education.",
    benefit: "Up to ₹2 Lakh per year",
    ageRange: "18-25",
    deadline: "31st March 2024",
    area: "All India",
    eligibility: "eligible",
    applyLink: "https://scholarships.gov.in",
    details: {
      overview: "This scholarship aims to support students from economically weaker sections to pursue higher education without financial constraints. The scheme covers tuition fees, maintenance allowance, and other academic expenses.",
      keyFeatures: [
        "Covers tuition fees up to ₹1.5 Lakh",
        "Maintenance allowance of ₹50,000 per year",
        "Book grant of ₹5,000 annually",
        "One-time equipment allowance for technical courses"
      ],
      eligibility: {
        age: "Between 18-25 years",
        income: "Family income less than ₹8 Lakh per annum",
        education: "Minimum 75% in previous qualifying examination",
        other: "Must be enrolled in a recognized university/college"
      },
      benefits: [
        "Full tuition fee coverage",
        "Monthly maintenance allowance",
        "Book and equipment grants",
        "Travel allowance for distant learners",
        "Thesis preparation support for research scholars"
      ],
      documents: [
        "Aadhaar Card",
        "Income Certificate",
        "Previous year marksheet",
        "Admission proof",
        "Bank account details",
        "Caste certificate (if applicable)"
      ],
      applicationSteps: [
        {
          title: "Registration",
          description: "Create an account on the National Scholarship Portal with basic details and email verification."
        },
        {
          title: "Form Filling",
          description: "Fill the application form with personal, academic, and bank details accurately."
        },
        {
          title: "Document Upload",
          description: "Upload all required documents in specified formats and sizes."
        },
        {
          title: "Submission",
          description: "Review and submit the application. Note the application ID for future reference."
        },
        {
          title: "Verification",
          description: "Application will be verified by your institution and then by the department."
        }
      ]
    }
  },
  {
    id: 2,
    name: "PM Kisan Samman Nidhi Yojana",
    category: "farmer",
    description: "Direct income support to farmer families for cultivation and related expenses.",
    benefit: "₹6,000 per year in 3 installments",
    ageRange: "18+",
    deadline: "Ongoing",
    area: "All India",
    eligibility: "check-eligibility",
    applyLink: "https://pmkisan.gov.in",
    details: {
      overview: "Pradhan Mantri Kisan Samman Nidhi provides financial assistance to landholding farmer families across the country to support their agricultural activities and meet domestic needs.",
      keyFeatures: [
        "₹6,000 annual financial support",
        "Paid in 3 equal installments of ₹2,000",
        "Direct benefit transfer to bank accounts",
        "No middlemen involved"
      ],
      eligibility: {
        age: "No age limit for head of family",
        income: "All landholding farmer families",
        education: "No educational qualification required",
        other: "Must be a landholding farmer family as per land records"
      },
      benefits: [
        "Direct financial support for agricultural inputs",
        "Helps in purchasing seeds, fertilizers",
        "Supports irrigation needs",
        "Assists in crop insurance premiums"
      ],
      documents: [
        "Aadhaar Card",
        "Land ownership documents",
        "Bank account details",
        "Mobile number linked with Aadhaar",
        "Recent passport photo"
      ],
      applicationSteps: [
        {
          title: "Visit CSC Center",
          description: "Approach your nearest Common Service Center with required documents."
        },
        {
          title: "Document Verification",
          description: "CSC operator will verify your land records and documents."
        },
        {
          title: "Form Submission",
          description: "Fill the application form with help from CSC operator."
        },
        {
          title: "Biometric Authentication",
          description: "Complete Aadhaar authentication through biometric verification."
        },
        {
          title: "Application Finalization",
          description: "Receive application receipt and track status online."
        }
      ]
    }
  },
  {
    id: 3,
    name: "Mahila E-Haat",
    category: "women",
    description: "Digital platform for women entrepreneurs to showcase and sell their products.",
    benefit: "Zero investment online marketplace",
    ageRange: "18+",
    deadline: "Ongoing",
    area: "All India",
    eligibility: "eligible",
    applyLink: "https://mahilaehaat.org",
    details: {
      overview: "Mahila E-Haat is an initiative for women entrepreneurs to leverage technology for showcasing and selling their products directly to consumers without any initial investment.",
      keyFeatures: [
        "No registration fees",
        "Direct market access",
        "Payment gateway integration",
        "Logistics support available"
      ],
      eligibility: {
        age: "18 years and above",
        income: "No income criteria",
        education: "No educational qualification required",
        other: "Must be a woman entrepreneur with products/services to sell"
      },
      benefits: [
        "Free registration and listing",
        "Nationwide customer reach",
        "Secure payment processing",
        "Business promotion support",
        "Entrepreneurship training"
      ],
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Bank account details",
        "Product photographs",
        "Mobile number and email"
      ],
      applicationSteps: [
        {
          title: "Online Registration",
          description: "Register on Mahila E-Haat portal with basic details."
        },
        {
          title: "Profile Setup",
          description: "Create your seller profile with business information."
        },
        {
          title: "Product Listing",
          description: "Upload product images, descriptions, and pricing."
        },
        {
          title: "Document Upload",
          description: "Submit required documents for verification."
        },
        {
          title: "Start Selling",
          description: "Once approved, start receiving and fulfilling orders."
        }
      ]
    }
  },
  {
    id: 4,
    name: "Ayushman Bharat Yojana",
    category: "health",
    description: "Health insurance coverage for secondary and tertiary care hospitalization.",
    benefit: "₹5 Lakh coverage per family per year",
    ageRange: "All ages",
    deadline: "Ongoing",
    area: "All India",
    eligibility: "check-eligibility",
    applyLink: "https://pmjay.gov.in",
    details: {
      overview: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana provides health coverage up to ₹5 lakh per family per year for secondary and tertiary care hospitalization across empaneled hospitals.",
      keyFeatures: [
        "Cashless treatment",
        "Coverage for pre-existing diseases",
        "No restrictions on family size",
        "Wide network of hospitals"
      ],
      eligibility: {
        age: "No age limit",
        income: "Based on SECC 2011 data",
        education: "No educational qualification required",
        other: "Automatically eligible if family is in SECC database"
      },
      benefits: [
        "Coverage for hospitalization expenses",
        "Pre and post hospitalization coverage",
        "Day care procedures covered",
        "Transportation allowance for eligible cases"
      ],
      documents: [
        "Aadhaar Card",
        "Ration Card (if available)",
        "Mobile number",
        "Income certificate (if required)"
      ],
      applicationSteps: [
        {
          title: "Check Eligibility",
          description: "Verify eligibility on PMJAY portal using mobile number and Aadhaar."
        },
        {
          title: "Find Empaneled Hospital",
          description: "Locate nearby empaneled hospital for treatment."
        },
        {
          title: "Carry Documents",
          description: "Take required documents to the hospital for verification."
        },
        {
          title: "Cashless Treatment",
          description: "Receive cashless treatment after verification."
        },
        {
          title: "Claim Settlement",
          description: "Hospital directly claims from insurance company."
        }
      ]
    }
  },
  {
    id: 5,
    name: "Pradhan Mantri Shram Yogi Maan-Dhan",
    category: "labour",
    description: "Pension scheme for unorganized sector workers providing monthly pension after 60 years.",
    benefit: "₹3,000 monthly pension after 60 years",
    ageRange: "18-40",
    deadline: "Ongoing",
    area: "All India",
    eligibility: "eligible",
    applyLink: "https://maandhan.in",
    details: {
      overview: "This pension scheme provides monthly pension of ₹3,000 to unorganized sector workers after attaining 60 years of age in exchange for small monthly contributions during working age.",
      keyFeatures: [
        "Assured monthly pension",
        "Affordable contributions",
        "Government co-contribution",
        "Family pension in case of death"
      ],
      eligibility: {
        age: "Between 18-40 years",
        income: "Monthly income up to ₹15,000",
        education: "No educational qualification required",
        other: "Must be an unorganized sector worker"
      },
      benefits: [
        "₹3,000 monthly pension after 60 years",
        "Family pension to spouse",
        "Return of corpus to nominee in case of death",
        "Government matches 50% of contribution"
      ],
      documents: [
        "Aadhaar Card",
        "Savings Bank account",
        "Mobile number",
        "Income certificate (if required)"
      ],
      applicationSteps: [
        {
          title: "Visit CSC Center",
          description: "Approach nearest Common Service Center with documents."
        },
        {
          title: "Document Verification",
          description: "CSC operator verifies eligibility and documents."
        },
        {
          title: "Form Filling",
          description: "Fill application form with personal and bank details."
        },
        {
          title: "Aadhaar Authentication",
          description: "Complete biometric authentication."
        },
        {
          title: "Contribution Payment",
          description: "Pay first contribution and receive certificate."
        }
      ]
    }
  },
  {
    id: 6,
    name: "Startup India Seed Fund Scheme",
    category: "student",
    description: "Financial assistance for early-stage startups for prototype development and market entry.",
    benefit: "Up to ₹50 Lakh funding support",
    ageRange: "18-45",
    deadline: "30th April 2024",
    area: "All India",
    eligibility: "not-eligible",
    applyLink: "https://startupindia.gov.in",
    details: {
      overview: "The scheme provides financial assistance to early-stage startups for proof of concept, prototype development, product trials, market entry, and commercialization.",
      keyFeatures: [
        "Up to ₹50 Lakh funding",
        "Mentorship support",
        "Incubation support",
        "IPR facilitation"
      ],
      eligibility: {
        age: "Founders between 18-45 years",
        income: "No income criteria",
        education: "No specific educational qualification",
        other: "Startup must be DPIIT recognized and incorporated not more than 2 years ago"
      },
      benefits: [
        "Grant for prototype development",
        "Investment for market entry",
        "Mentorship from industry experts",
        "Incubation facility access",
        "IPR filing support"
      ],
      documents: [
        "DPIIT recognition certificate",
        "Company incorporation certificate",
        "Business plan",
        "Financial projections",
        "Founder details and Aadhaar"
      ],
      applicationSteps: [
        {
          title: "DPIIT Recognition",
          description: "Get your startup recognized by DPIIT first."
        },
        {
          title: "Prepare Business Plan",
          description: "Develop detailed business plan and financial projections."
        },
        {
          title: "Online Application",
          description: "Apply through Startup India portal with all documents."
        },
        {
          title: "Presentation",
          description: "Present your business idea to the evaluation committee."
        },
        {
          title: "Due Diligence",
          description: "Complete due diligence process and receive funding."
        }
      ]
    }
  }
]