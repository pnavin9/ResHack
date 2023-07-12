/**
 * Converts the input data into a structured output format for generating PDF.
 * @param {Object} input - The input data object.
 * @returns {Object} - The converted output data object.
 */
export const convertData = (input) => {
  const output = {};

  const personalData = JSON.parse(input.personal_information);
  output.Name = personalData.name;
  output.LastName = personalData.last_name;
  output.EmailAddress = personalData.email_address;
  output.PhoneNumber = personalData.phone_number;
  output.LinkedIn = personalData.linkedin_url;

  const jobData = JSON.parse(input.job_title);
  output.JobTitle = jobData;

  const careerObj = JSON.parse(input.career_objective);
  output.Summary = careerObj;

  const skillsData = JSON.parse(input.skills);
  output.Skills = skillsData;

  const educationData = JSON.parse(input.education);
  output.Education = educationData.map((item) => ({
    SchoolName: item.school_name,
    Year: item.passing_year,
    Description: item.description,
  }));

  const workData = JSON.parse(input.experience);
  output.Experience = workData.map((item) => ({
    CompanyName: item.company_name,
    Year: item.passing_year,
    Description: item.responsibilities,
  }));

  const achievementData = JSON.parse(input.achievements);
  output.Achievements = achievementData.map((item) => ({
    Type: item.field,
    Description: item.awards,
  }));

  return output;
};
