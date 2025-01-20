document.addEventListener("DOMContentLoaded", () => {
    const programDropdown = document.getElementById("program");
    const courseDropdown = document.getElementById("course");

    // Courses based on the program
    const courses = {
        UG: ["Artificial Intelligence and Machine Learning", ,
            "Computer Science & Engineering",
            "Computer Science Engineering (Data Science)"],

        PG: ["Master of Business Administration",
            "Master of Computer Applications"
        ]
    };

    // Update courses when program changes
    programDropdown.addEventListener("change", () => {
        const selectedProgram = programDropdown.value;

        // Clear existing options
        courseDropdown.innerHTML = '<option value="">Select Course</option>';

        // Populate courses based on the selected program
        if (courses[selectedProgram]) {
            courses[selectedProgram].forEach((course) => {
                const option = document.createElement("option");
                option.value = course;
                option.textContent = course;
                courseDropdown.appendChild(option);
            });
        }
    });
});
