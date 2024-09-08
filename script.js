(function () {
    var form = document.getElementById("resume-form");
    var resumeOutput = document.getElementById("resume-output");
    var resumeContainer = document.getElementById("resume");
    var user_role = document.getElementById("role");
    var user_internship = document.getElementById("internship");
    var user_tech = document.getElementById("tech");
    var uni = document.getElementById("university");
    var degree = document.getElementById("degree");
    var year = document.getElementById("year");
    var certificate = document.getElementById("certificate");
    var toggleSkillsButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills");
    function generateResume(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var contact = document.getElementById("contact")
            .value;
        var contact_number = document.getElementById("number").value;
        var profilePic = document.getElementById("profile-pic").value;
        var education = document.getElementById("education").value;
        var skills = skillsSection.value;
        var experience = document.getElementById("experience").value;
        var contact_email = "Email: ".concat(contact, " ");
        var contact_html = "Contact Number: ".concat(contact_number);
        // const user_internship_work = `Internship: ${user_internship.value}`;
        var user_internship_work = "Internship: ".concat(user_internship.value);
        var user_role_work = "Role: ".concat(user_role.value);
        var user_tech_work = "Worked on Technologies: ".concat(user_tech.value);
        var user_degree = "Degree: ".concat(degree.value);
        var user_uni = "University: ".concat(uni.value);
        var user_year = "Passing Year: ".concat(year.value);
        var user_certificate = "Certificate: ".concat(certificate.value);
        resumeContainer.innerHTML = "\n        <div class=\"profile\">\n            ".concat(profilePic
            ? "<img src=\"".concat(profilePic, "\" alt=\"").concat(name, "\" class=\"profile-pic\">")
            : "", "\n            <h1>").concat(name, "</h1>\n            <p>").concat(contact_email, "</p>\n            <p> ").concat(contact_html, "</p>\n\n        </div>\n        <div class=\"education\">\n            <h2>Education</h2>\n            <p>").concat(education, "</p>\n            <p>").concat(user_uni, "</p>\n            <p>").concat(user_degree, "</p>\n            <p>").concat(user_year, "</p>\n            <p>").concat(user_certificate, "</p>\n\n\n        </div>\n        <div class=\"skills\" id=\"skills-section\">\n            <h2>Skills</h2>\n            <p>").concat(skills
            .split(",")
            .map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); })
            .join(", "), "</p>\n              <p>").concat(skills, " </p>\n        </div>\n        <div class=\"experience\">\n            <h2>Work Experience</h2>\n             <p> ").concat(user_internship_work, " </p>\n             <p> ").concat(user_role_work, " </p> \n            <p>").concat(user_tech_work, "</p>\n            <p>").concat(experience, "</p>\n        </div>\n    ");
        resumeOutput.classList.remove("hidden");
    }
    form.addEventListener("submit", generateResume);
    toggleSkillsButton.addEventListener("click", function () {
        var skillsSection = document.getElementById("skills-section");
        if (skillsSection.style.display === "none" ||
            !skillsSection.style.display) {
            skillsSection.style.display = "block";
            toggleSkillsButton.textContent = "Hide Skills";
        }
        else {
            skillsSection.style.display = "none";
            toggleSkillsButton.textContent = "Show Skills";
        }
    });
})();
