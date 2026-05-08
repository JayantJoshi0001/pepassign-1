export type JobDepartment = "Marketing" | "Sales" | "Product" | "Finance" | "Human Resource";

export type JobOpening = {
  id: string;
  title: string;
  department: JobDepartment;
  role: string;
  location: string;
  experience: string;
  details: string;
};

export type DepartmentTab = {
  label: string;
  key: "all" | JobDepartment;
  count: number;
};

export const departmentTabs: DepartmentTab[] = [
  { label: "All (16)", key: "all", count: 16 },
  { label: "Marketing Department (05)", key: "Marketing", count: 5 },
  { label: "Sales Department (06)", key: "Sales", count: 6 },
  { label: "Product Engineering (03)", key: "Product", count: 3 },
  { label: "Finance Department (01)", key: "Finance", count: 1 },
  { label: "Human Resources (01)", key: "Human Resource", count: 1 },
];

export const roleFilters = [
  "Product Designer",
  "Growth Marketing Lead",
  "UX Researcher",
  "Software Engineer",
  "Data Analyst",
];

export const jobOpenings: JobOpening[] = [
  {
    id: "job-01",
    title: "Growth Marketing Lead",
    department: "Marketing",
    role: "Growth Marketing Lead",
    location: "India  |  Hybrid, Part-time",
    experience: "2-4 years in content writing, preferably for digital platforms",
    details:
      "Pepagora is seeking a talented and experienced Content Writer to create engaging, high-quality content across various digital platforms. The ideal candidate will be responsible for ensuring consistency in voice and tone, while aligning content with Pepagora's brand guidelines and SEO strategy. This is an exciting opportunity for a motivated individual with a passion for write eye for detail.",
  },
  {
    id: "job-02",
    title: "Content Strategy Manager",
    department: "Marketing",
    role: "Growth Marketing Lead",
    location: "Bengaluru, India",
    experience: "4+ years in B2B brand/content",
    details:
      "Build a strategic editorial engine and partner with design and growth teams to translate product value into high-conversion narratives.",
  },
  {
    id: "job-03",
    title: "Performance Marketing Specialist",
    department: "Marketing",
    role: "Growth Marketing Lead",
    location: "Hybrid / Delhi NCR",
    experience: "2-4 years in paid channels",
    details:
      "Scale paid search and social with strong experimentation discipline, cohort analysis, and weekly optimization against CAC and pipeline goals.",
  },
  {
    id: "job-04",
    title: "Enterprise Account Executive",
    department: "Sales",
    role: "Software Engineer",
    location: "Mumbai, India",
    experience: "5+ years in B2B SaaS sales",
    details:
      "Drive enterprise pipeline from prospecting through closure while coordinating technical and commercial stakeholders.",
  },
  {
    id: "job-05",
    title: "Sales Development Representative",
    department: "Sales",
    role: "UX Researcher",
    location: "Pune, India",
    experience: "1-3 years in SDR/BDR roles",
    details:
      "Generate qualified opportunities through outbound motions and intelligent account research.",
  },
  {
    id: "job-06",
    title: "Channel Partnerships Manager",
    department: "Sales",
    role: "Growth Marketing Lead",
    location: "Remote",
    experience: "4+ years in partner/channel sales",
    details:
      "Create and expand channel programs that unlock market reach and measurable revenue.",
  },
  {
    id: "job-07",
    title: "Senior Product Designer",
    department: "Product",
    role: "Product Designer",
    location: "Bengaluru, India",
    experience: "4-7 years in product design",
    details:
      "Design multi-sided marketplace experiences with strong systems thinking and rapid iteration.",
  },
  {
    id: "job-08",
    title: "Product Analyst",
    department: "Product",
    role: "Data Analyst",
    location: "Remote / India",
    experience: "2-4 years in product analytics",
    details:
      "Translate product behavior data into actionable roadmap insights with PM and engineering teams.",
  },
  {
    id: "job-09",
    title: "Finance Operations Lead",
    department: "Finance",
    role: "Data Analyst",
    location: "Gurugram, India",
    experience: "5+ years in finance ops",
    details:
      "Own budgeting rhythms, reporting systems, and unit economics visibility across teams.",
  },
  {
    id: "job-10",
    title: "Talent Acquisition Partner",
    department: "Human Resource",
    role: "UX Researcher",
    location: "Remote / India",
    experience: "3-6 years in startup hiring",
    details:
      "Partner with business teams to design hiring processes and recruit high-ownership talent.",
  },
  {
    id: "job-11",
    title: "People Success Manager",
    department: "Human Resource",
    role: "Software Engineer",
    location: "Bengaluru, India",
    experience: "4+ years in people operations",
    details:
      "Shape onboarding, engagement, and growth frameworks that help teams do their best work.",
  },
];
