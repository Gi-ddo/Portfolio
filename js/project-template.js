import { projectData, projectOrder } from "./project-data.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const project = data[id];
const index = projectOrder.indexOf(id);

const container = document.getElementById("project-content");

if (project) {
  container.innerHTML = `
  ${index > 0
    ? `<button class="nav-arrow left" id="prevBtn" title="Previous Project">
    <i class="fa-solid fa-arrow-left"></i>
    </button>`
    : ""}

    ${index < projectOrder.length - 1
    ? `<button class="nav-arrow right" id="nextBtn" title="Next Project">
    <i class="fa-solid fa-arrow-right"></i>
    </button>`
  : ""}


    <section class="project-detail">
      <h1>${project.title}</h1>
      <img src="${project.gif}" alt="${project.title} gameplay" class="project-gif"/>
      <p>${project.description}</p>
      <p><strong>Tech Used:</strong> ${project.tech.join(", ")}</p>
      <a href="${project.link}" class="btn-secondary" target="_blank">Play / View</a>

      
    </section>
  `;

  // Add click handlers after DOM insertion
  if (index > 0) {
    document.getElementById("prevBtn").addEventListener("click", () => {
      const prevId = projectOrder[index - 1];
      window.location.href = `project.html?id=${prevId}`;
    });
  }

  if (index < projectOrder.length - 1) {
    document.getElementById("nextBtn").addEventListener("click", () => {
      const nextId = projectOrder[index + 1];
      window.location.href = `project.html?id=${nextId}`;
    });
  }
}