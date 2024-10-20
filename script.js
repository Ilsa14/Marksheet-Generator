document.getElementById("marksheetForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const studentName = document.getElementById("studentName").value;
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    const subject4 = parseFloat(document.getElementById("subject4").value);

    // Calculate total and percentage
    const totalMarks = subject1 + subject2 + subject3 + subject4;
    const percentage = (totalMarks / 400) * 100;

    // Determine grade
    let grade;
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else {
        grade = "D";
    }

    // Display the result
    const resultDiv = document.getElementById("marksheetResult");
    resultDiv.innerHTML = `
        <h2>Marksheet</h2>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Total Marks:</strong> ${totalMarks}/400</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
});
