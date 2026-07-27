let students = JSON.parse(localStorage.getItem("students")) || [];

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function displayStudents() {

    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach((student, index) => {

        table.innerHTML += `

<tr class="border-b hover:bg-gray-100">

<td class="p-4">${student.name}</td>

<td>${student.matric}</td>

<td>${student.department}</td>

<td>${student.level}</td>

<td>

<button
onclick="editStudent(${index})"
class="bg-yellow-500 text-white px-3 py-1 rounded">

Edit

</button>

<button
onclick="deleteStudent(${index})"
class="bg-red-600 text-white px-3 py-1 rounded ml-2">

Delete

</button>

</td>

</tr>

`;

    });

}

function addStudent() {

    const name = document.getElementById("name").value.trim();
    const matric = document.getElementById("matric").value.trim();
    const department = document.getElementById("department").value.trim();
    const level = document.getElementById("level").value;

    if (!name || !matric || !department || !level) {

        alert("Please complete all fields.");

        return;

    }

    students.push({
        name,
        matric,
        department,
        level
    });

    saveStudents();
    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("matric").value = "";
    document.getElementById("department").value = "";
    document.getElementById("level").value = "";

    alert("Student added successfully.");

}

function deleteStudent(index) {

    if (confirm("Delete this student?")) {

        students.splice(index, 1);

        saveStudents();

        displayStudents();

    }

}

function editStudent(index) {

    let newName = prompt("Enter new name:", students[index].name);

    if (newName) {

        students[index].name = newName;

        saveStudents();

        displayStudents();

    }

}

function searchStudent() {

    let input = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#studentTable tr");

    rows.forEach(row => {

        row.style.display =
            row.innerText.toLowerCase().includes(input)
            ? ""
            : "none";

    });

}

function exportCSV() {

    let csv = "Name,Matric,Department,Level\n";

    students.forEach(student => {

        csv += `${student.name},${student.matric},${student.department},${student.level}\n`;

    });

    const blob = new Blob([csv], { type: "text/csv" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "students.csv";

    link.click();

}

displayStudents();