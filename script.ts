(() => {
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumeOutput = document.getElementById("resume-output") as HTMLElement;
  const resumeContainer = document.getElementById("resume") as HTMLElement;
  const user_role = document.getElementById("role") as HTMLInputElement;
  const user_internship = document.getElementById(
    "internship"
  ) as HTMLInputElement;
  const user_tech = document.getElementById("tech") as HTMLInputElement;
  const uni = document.getElementById("university") as HTMLInputElement;
  const degree = document.getElementById("degree") as HTMLInputElement;
  const year = document.getElementById("year") as HTMLInputElement;
  const certificate = document.getElementById(
    "certificate"
  ) as HTMLInputElement;

  const toggleSkillsButton = document.getElementById(
    "toggle-skills"
  ) as HTMLButtonElement;
  const skillsSection = document.getElementById("skills") as HTMLInputElement;

  function generateResume(event: Event) {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement)
      .value;
    const contact_number = (
      document.getElementById("number") as HTMLInputElement
    ).value;
    const profilePic = (
      document.getElementById("profile-pic") as HTMLInputElement
    ).value;
    const education = (
      document.getElementById("education") as HTMLTextAreaElement
    ).value;
    const skills = skillsSection.value;
    const experience = (
      document.getElementById("experience") as HTMLTextAreaElement
    ).value;

    const contact_email = `Email: ${contact} `;
    const contact_html = `Contact Number: ${contact_number}`;
    // const user_internship_work = `Internship: ${user_internship.value}`;
    const user_internship_work = `Internship: ${user_internship.value}`;
    const user_role_work = `Role: ${user_role.value}`;
    const user_tech_work = `Worked on Technologies: ${user_tech.value}`;
    const user_degree = `Degree: ${degree.value}`;
    const user_uni = `University: ${uni.value}`;
    const user_year = `Passing Year: ${year.value}`;
    const user_certificate = `Certificate: ${certificate.value}`;

    resumeContainer.innerHTML = `
        <div class="profile">
            ${
              profilePic
                ? `<img src="${profilePic}" alt="${name}" class="profile-pic">`
                : ""
            }
            <h1>${name}</h1>
            <p>${contact_email}</p>
            <p> ${contact_html}</p>

        </div>
        <div class="education">
            <h2>Education</h2>
            <p>${education}</p>
            <p>${user_uni}</p>
            <p>${user_degree}</p>
            <p>${user_year}</p>
            <p>${user_certificate}</p>


        </div>
        <div class="skills" id="skills-section">
            <h2>Skills</h2>
            <p>${skills
              .split(",")
              .map((skill) => `<span>${skill.trim()}</span>`)
              .join(", ")}</p>
              <p>${skills} </p>
        </div>
        <div class="experience">
            <h2>Work Experience</h2>
             <p> ${user_internship_work} </p>
             <p> ${user_role_work} </p> 
            <p>${user_tech_work}</p>
            <p>${experience}</p>
        </div>
    `;

    resumeOutput.classList.remove("hidden");
  }

  form.addEventListener("submit", generateResume);

  toggleSkillsButton.addEventListener("click", () => {
    const skillsSection = document.getElementById(
      "skills-section"
    ) as HTMLElement;
    if (
      skillsSection.style.display === "none" ||
      !skillsSection.style.display
    ) {
      skillsSection.style.display = "block";
      toggleSkillsButton.textContent = "Hide Skills";
    } else {
      skillsSection.style.display = "none";
      toggleSkillsButton.textContent = "Show Skills";
    }
  });
})();
