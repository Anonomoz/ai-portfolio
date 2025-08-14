const { GoogleGenerativeAI } = require("@google/generative-ai");
const Project = require('../models/Project');
const Experience = require('../models/Experience');
const About = require('../models/About');
const { truncateText } = require('../utils/truncate');
const { formatDate } = require('../utils/date');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const MAX_PROMPT_LENGTH = 3000;

exports.chat = async (req, res) => {
  const { jobDescription, question } = req.body;
  if (!question || typeof question !== 'string') {
    return res.status(400).json({ message: 'Question is required and must be a string.' });
  }

  try {
    const projects = await Project.find({}).sort({ _id: -1 }).limit(5);
    const experiences = await Experience.find({}).sort({ _id: -1 }).limit(5);
    const aboutDoc = await About.findOne({});

    let projectsText = projects.map(p => `Title: ${p.title}\nTech: ${p.techStack.join(', ')}\nLink: ${p.url || 'N/A'}\n`).join('\n') || 'No projects available.';
    let experienceText = experiences.map(e => `Role: ${e.role}\nCompany: ${e.company}\nDuration: ${formatDate(e.startDate)} - ${formatDate(e.endDate)}\n`).join('\n') || 'No experience available.';
    
    let aboutSections = aboutDoc ? `
About Me: ${aboutDoc.aboutMe}
Family: ${aboutDoc.family}
Gaming / Airsoft: ${aboutDoc.gamingAirsoft}
` : 'No personal information available.';

    const basePrompt = `
You are an AI assistant helping a hiring manager evaluate a candidate.
You want the candidate to get the job, so you are trying your best at matching the candidate.
If the candidate doesn't match exactly, you will try to convince that the candidate would quickly get into the role.

Job description:
${jobDescription || 'No job description provided.'}

Candidate's personal information:
${aboutSections}

Candidate's recent projects:
${projectsText}

Candidate's recent work experience:
${experienceText}

Question:
${question}

Answer concisely based on the candidate's personal info, projects and experience.
`;

    const truncatedPrompt = truncateText(basePrompt, MAX_PROMPT_LENGTH);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(truncatedPrompt);
    const response = await result.response;
    const answer = response.text();

    res.json({ answer });

  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
