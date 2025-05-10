const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const project = projectData[id];

const container = document.getElementById("project-content");

if (project) {
  container.innerHTML = `
    <section class="project-detail">
      <h1>${project.title}</h1>
      <img src="${project.gif}" alt="${project.title} gameplay" class="project-gif"/>
      <p>${project.description}</p>
      <p><strong>Tech Used:</strong> ${project.tech.join(", ")}</p>
      <a href="${project.link}" class="btn-secondary" target="_blank">Play / View</a>
    </section>
  `;
} else {
  container.innerHTML = `<p style="padding: 2rem;">Project not found.</p>`;
}
