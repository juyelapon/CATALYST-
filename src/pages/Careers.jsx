import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  PenTool, 
  Smartphone, 
  LayoutGrid, 
  Briefcase as BriefcaseIcon 
} from 'lucide-react';
import WireframeOverlay from '../components/WireframeOverlay';
import JobApplicationModal from '../components/JobApplicationModal';

// Extracted asset
import briefcaseHero from '../assets/extracted/careers_briefcase.png';

const jobs = [
  {
    id: "j1",
    title: "WEB DESIGNER",
    department: "Design",
    iconType: "pen",
    salary: "Salary • $45,000 - $60,000 per year",
    experience: "Experience • 1+ year",
    deadline: "30/09/2025",
    jobType: "Full-Time",
    workplaceType: "Hybrid",
    skills: "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise."
  },
  {
    id: "j2",
    title: "MOBILE APP DEVELOPER",
    department: "Engineering",
    iconType: "mobile",
    salary: "Salary • $55,000 - $75,000 per year",
    experience: "Experience • 2+ years",
    deadline: "15/10/2025",
    jobType: "Full-Time",
    workplaceType: "Remote",
    skills: "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging."
  },
  {
    id: "j3",
    title: "DIGITAL MARKETING SPECIALIST",
    department: "Marketing",
    iconType: "grid",
    salary: "Salary • $50,000 - $65,000 per year",
    experience: "Experience • 3+ years",
    deadline: "20/11/2025",
    jobType: "Full-Time",
    workplaceType: "Hybrid",
    skills: "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise."
  },
  {
    id: "j4",
    title: "PROJECT MANAGER",
    department: "Management",
    iconType: "case",
    salary: "Salary • $60,000 - $80,000 per year",
    experience: "Experience • 5+ years",
    deadline: "05/12/2025",
    jobType: "Full-Time",
    workplaceType: "On-site",
    skills: "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies."
  }
];

export default function Careers() {
  const [department, setDepartment] = useState('All');
  const [experience, setExperience] = useState('All');
  const [jobType, setJobType] = useState('All');
  const [workplaceType, setWorkplaceType] = useState('All');
  const [keyword, setKeyword] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchKeyword = 
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.skills.toLowerCase().includes(keyword.toLowerCase());

      const matchDept = department === 'All' || job.department === department;
      const matchExp = experience === 'All' || job.experience.includes(experience);
      const matchType = jobType === 'All' || job.jobType === jobType;
      const matchWorkplace = workplaceType === 'All' || job.workplaceType === workplaceType;

      return matchKeyword && matchDept && matchExp && matchType && matchWorkplace;
    });
  }, [keyword, department, experience, jobType, workplaceType]);

  const renderJobIcon = (type) => {
    switch (type) {
      case 'pen':
        return <PenTool size={20} className="text-[#0084FF]" />;
      case 'mobile':
        return <Smartphone size={20} className="text-[#0084FF]" />;
      case 'grid':
        return <LayoutGrid size={20} className="text-[#0084FF]" />;
      case 'case':
      default:
        return <BriefcaseIcon size={20} className="text-[#0084FF]" />;
    }
  };

  const scrollToPositions = () => {
    const el = document.getElementById('open-positions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050608] text-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* 1. HERO BANNER */}
        <div className="relative rounded-3xl bg-[#0c0e14] border border-[#1b202c] p-8 sm:p-12 lg:p-16 mb-16 overflow-hidden">
          <WireframeOverlay />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left text */}
            <div className="lg:col-span-8 text-left space-y-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Build the Future with Us
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl">
                We're a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve meaningful problems.
              </p>
              <div>
                <button
                  onClick={scrollToPositions}
                  className="bg-[#0084FF] hover:bg-[#0074e0] text-white font-medium text-xs sm:text-sm px-7 py-3 rounded-xl transition shadow-[0_0_15px_rgba(0,132,255,0.35)] cursor-pointer"
                >
                  Explore Open Positions
                </button>
              </div>
            </div>

            {/* Right 3D illustration */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-52 sm:w-60 aspect-square flex items-center justify-center">
                <img
                  src={briefcaseHero}
                  alt="3D Executive Briefcase"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,132,255,0.25)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. FILTER BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-16 bg-[#0c0e14] border border-[#1b202c] p-4 rounded-2xl">
          <div className="flex flex-wrap items-center gap-3">
            {/* Departments */}
            <div className="relative">
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="appearance-none bg-[#12151e] border border-[#212737] rounded-xl px-4 py-2 pr-8 text-xs text-gray-300 font-medium focus:outline-none focus:border-[#0084FF] cursor-pointer"
              >
                <option value="All">Departments ▼</option>
                <option value="Design">Design</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Management">Management</option>
              </select>
              <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Experience */}
            <div className="relative">
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="appearance-none bg-[#12151e] border border-[#212737] rounded-xl px-4 py-2 pr-8 text-xs text-gray-300 font-medium focus:outline-none focus:border-[#0084FF] cursor-pointer"
              >
                <option value="All">Experience ▼</option>
                <option value="1+ year">1+ year</option>
                <option value="2+ years">2+ years</option>
                <option value="3+ years">3+ years</option>
                <option value="5+ years">5+ years</option>
              </select>
              <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Job Type */}
            <div className="relative">
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="appearance-none bg-[#12151e] border border-[#212737] rounded-xl px-4 py-2 pr-8 text-xs text-gray-300 font-medium focus:outline-none focus:border-[#0084FF] cursor-pointer"
              >
                <option value="All">Job Type ▼</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
              </select>
              <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Workplace Type */}
            <div className="relative">
              <select
                value={workplaceType}
                onChange={(e) => setWorkplaceType(e.target.value)}
                className="appearance-none bg-[#12151e] border border-[#212737] rounded-xl px-4 py-2 pr-8 text-xs text-gray-300 font-medium focus:outline-none focus:border-[#0084FF] cursor-pointer"
              >
                <option value="All">Workplace Type ▼</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
              <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Keyword Search */}
          <div className="relative flex-1 min-w-[200px] max-w-xs">
            <input
              type="text"
              placeholder="Search by keywords..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full bg-[#12151e] border border-[#212737] rounded-xl pl-4 pr-10 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#0084FF]"
            />
            <button 
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-[#0084FF] text-white flex items-center justify-center hover:bg-blue-600 transition"
              aria-label="Search"
            >
              <Search size={13} />
            </button>
          </div>
        </div>

        {/* 3. OPEN POSITIONS SECTION */}
        <section id="open-positions" className="mb-24 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-14">
            Open Positions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#0e1017] border border-[#1b202c] hover:border-blue-500/50 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Job Header: Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#141a29] border border-[#212b40] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {renderJobIcon(job.iconType)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                      {job.title}
                    </h3>
                  </div>

                  {/* Meta items */}
                  <div className="space-y-2 mb-6">
                    <div className="inline-block bg-[#12151f] border border-[#1f2536] text-gray-300 text-xs px-3 py-1.5 rounded-lg mr-2 mb-2">
                      {job.salary}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#12151f] border border-[#1f2536] text-gray-300 text-xs px-3 py-1.5 rounded-lg">
                        {job.experience}
                      </span>
                      <span className="bg-[#12151f] border border-[#1f2536] text-gray-300 text-xs px-3 py-1.5 rounded-lg">
                        Deadline • {job.deadline}
                      </span>
                    </div>
                  </div>

                  {/* Skills header & content */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                      SKILLS
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {job.skills}
                    </p>
                  </div>
                </div>

                {/* Apply Now button */}
                <div>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full bg-[#0084FF] hover:bg-[#0074e0] text-white text-xs sm:text-sm font-semibold py-3 rounded-xl transition shadow-[0_0_15px_rgba(0,132,255,0.3)] active:scale-98 cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16 bg-[#0c0e14] border border-[#1b202c] rounded-3xl p-8">
              <p className="text-gray-400 text-sm mb-4">No positions match your selected criteria.</p>
              <button
                onClick={() => {
                  setDepartment('All');
                  setExperience('All');
                  setJobType('All');
                  setWorkplaceType('All');
                  setKeyword('');
                }}
                className="bg-[#0084FF] hover:bg-blue-600 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {/* 4. READY TO DISCUSS BANNER */}
        <div className="relative rounded-3xl bg-[#0c0e14] border border-[#1b202c] p-8 sm:p-12 text-center overflow-hidden mb-12">
          <WireframeOverlay />
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              READY TO DISCUSS
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
              Your Product Needs With{' '}
              <span className="text-[#0084FF]">Catalyst Analytic</span> Experts?
            </h3>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block bg-[#0084FF] hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-xl transition shadow-[0_0_15px_rgba(0,132,255,0.35)]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <JobApplicationModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  );
}
