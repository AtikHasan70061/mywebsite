// Generate 100 faculty members
const facultyMembers = [];

for(let i = 1; i <= 100; i++) {
  facultyMembers.push({
    name: `Faculty Member ${i}`,
    position: i % 10 === 0 ? "Principal" : "Teacher",
    education: "M.Sc / M.Ed, University of Dhaka",
    specialization: i % 5 === 0 ? "Science" : i % 3 === 0 ? "Mathematics" : "English",
    experience: `${3 + (i % 15)} years`,
    photo: "placeholder.jpg" // common placeholder image
  });
}

// Select the container
const facultyGrid = document.getElementById("facultyGrid");

// Generate faculty cards
facultyMembers.forEach(member => {
  const card = document.createElement("div");
  card.classList.add("faculty-card");

  card.innerHTML = `
    <img src="${member.photo}" alt="${member.name}">
    <h3>${member.name}</h3>
    <p><strong>Position:</strong> ${member.position}</p>
    <p><strong>Education:</strong> ${member.education}</p>
    <p><strong>Specialization:</strong> ${member.specialization}</p>
    <p><strong>Experience:</strong> ${member.experience}</p>
  `;

  facultyGrid.appendChild(card);
});
