document.addEventListener("DOMContentLoaded", () => {
  const teamMembers = document.querySelectorAll("li");

  teamMembers.forEach(member => {
    member.addEventListener("click", () => {
      alert(`Hallo von ${member.textContent}! 👋`);
    });
  });
});
