import { projectData, projectOrder } from "./project-data.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const project = data[id];
const index = projectOrder.indexOf(id);

const container = document.getElementById("project-content");

if (project) {
  const techTags = project.tech
    .map(tag => `<span class="tag">${tag}</span>`)
    .join("");

  const actionList = project.actions
    .map(action => `<li>${action}</li>`)
    .join("");

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
      <div class="tech-section">
        <h3>Tech Used:</h3>
        <div class="tools-tags">
          ${techTags}
        </div>
      </div>
      <br>
      <div class="actions-section">
        <h3>What I Did:</h3>
        <ul class="action-list">
          ${actionList}
        </ul>
      </div>
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
} else {
  container.innerHTML = `
    <section class="project-detail">
      <h1>Project Not Found</h1>
      <p>Sorry, we couldn't find the project you're looking for.</p>
      <a href="index.html" class="btn-secondary">Back to Projects</a>
    </section>
  `;
}