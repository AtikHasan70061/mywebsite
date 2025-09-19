// Generate 1500 students
const classes = [1,2,3,4,5,6,7,8,9,10];
const sections = ["A","B","C"];
const bloodGroups = ["A+","A-","B+","B-","O+","O-","AB+","AB-"];
const locations = ["Dhaka","Chittagong","Khulna","Rajshahi","Barishal"];
const hobbies = ["Reading","Drawing","Football","Music","Coding","Swimming","Dancing","Singing"];

let students = [];
let studentId = 1;

classes.forEach(cls=>{
    sections.forEach(sec=>{
        for(let roll=1; roll<=50; roll++){
            let name = `Student${studentId}`;
            let age = 6 + cls;
            let blood = bloodGroups[Math.floor(Math.random()*bloodGroups.length)];
            let location = locations[Math.floor(Math.random()*locations.length)];
            let hobby = hobbies[Math.floor(Math.random()*hobbies.length)];

            students.push({
                id: `C${cls}${sec}${roll}`,
                name: name,
                age: age,
                bloodGroup: blood,
                location: location,
                hobby: hobby,
                class: cls,
                section: sec,
                roll: roll
            });

            studentId++;
        }
    });
});

// DOM Elements
const classSelect = document.getElementById('classSelect');
const sectionSelect = document.getElementById('sectionSelect');
const studentRoll = document.getElementById('studentRoll');
const showBtn = document.getElementById('showStudent');
const studentResult = document.getElementById('studentResult');
const searchName = document.getElementById('searchName');
const searchResult = document.getElementById('searchResult');

// Show student by class/section/roll
showBtn.addEventListener('click', ()=>{
    const cls = parseInt(classSelect.value);
    const sec = sectionSelect.value;
    const roll = parseInt(studentRoll.value);

    if(!cls){
        studentResult.innerHTML = "<p style='color:red;'>Please select a class</p>";
        return;
    }
    if(!sec){
        studentResult.innerHTML = "<p style='color:red;'>Please select a section</p>";
        return;
    }
    if(isNaN(roll) || roll<1 || roll>50){
        studentResult.innerHTML = "<p style='color:red;'>Invalid Roll Number! Enter 1-50</p>";
        return;
    }

    const student = students.find(s=>s.class===cls && s.section===sec && s.roll===roll);
    if(student){
        studentResult.innerHTML = `<p><strong>${student.name}</strong><br>
        Age: ${student.age}<br>
        Blood Group: ${student.bloodGroup}<br>
        Location: ${student.location}<br>
        Hobby: ${student.hobby}<br>
        Class: ${student.class}, Section: ${student.section}, Roll: ${student.roll}<br>
        <a href="student-detail.html?id=${student.id}">View Full Detail</a></p>`;
    } else {
        studentResult.innerHTML = "<p style='color:red;'>Student not found!</p>";
    }
});

// Search by name
searchName.addEventListener('input', ()=>{
    const term = searchName.value.toLowerCase();
    const filtered = students.filter(s=>s.name.toLowerCase().includes(term));
    if(filtered.length===0){
        searchResult.innerHTML = "<p>No student found</p>";
        return;
    }
    let html = "";
    filtered.forEach(s=>{
        html += `<p><a href="student-detail.html?id=${s.id}"><strong>${s.name}</strong></a> - Class ${s.class}${s.section}, Roll ${s.roll}</p>`;
    });
    searchResult.innerHTML = html;
});
