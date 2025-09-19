// Same student array
const classesD = [1,2,3,4,5,6,7,8,9,10];
const sectionsD = ["A","B","C"];
const bloodGroups = ["A+","A-","B+","B-","O+","O-","AB+","AB-"];
const locations = ["Dhaka","Chittagong","Khulna","Rajshahi","Barishal"];
const hobbies = ["Reading","Drawing","Football","Music","Coding","Swimming","Dancing","Singing"];

let studentsD = [];
let studentIdD = 1;

classesD.forEach(cls=>{
    sectionsD.forEach(sec=>{
        for(let roll=1; roll<=50; roll++){
            let name = `Student${studentIdD}`;
            let age = 6 + cls;
            let blood = bloodGroups[Math.floor(Math.random()*bloodGroups.length)];
            let location = locations[Math.floor(Math.random()*locations.length)];
            let hobby = hobbies[Math.floor(Math.random()*hobbies.length)];

            studentsD.push({
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

            studentIdD++;
        }
    });
});

// Get student ID from URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const detailResult = document.getElementById('detailResult');

if(id){
    const student = studentsD.find(s=>s.id===id);
    if(student){
        detailResult.innerHTML = `<p><strong>${student.name}</strong><br>
        ID: ${student.id}<br>
        Age: ${student.age}<br>
        Blood Group: ${student.bloodGroup}<br>
        Location: ${student.location}<br>
        Hobby: ${student.hobby}<br>
        Class: ${student.class}, Section: ${student.section}, Roll: ${student.roll}</p>`;
    } else {
        detailResult.innerHTML = "<p style='color:red;'>Student not found!</p>";
    }
}else{
    detailResult.innerHTML = "<p style='color:red;'>No student selected</p>";
}
