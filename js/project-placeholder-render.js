import { projectData } from './project-data.js';

const container = document.getElementById("project-list");

if (projectData && container) {
  Object.entries(projectData).forEach(([id, project]) => {
    const projectEl = document.createElement("div");
    projectEl.className = `project-container ${project.alignment}`;
    
    projectEl.innerHTML = `
      <div class="project-text sticky glass-card">
        <h3>${project.title}</h3>
        <p>${project.short_description}</p>
        <a href="project.html?id=${id}" class="btn-secondary">View Project</a>
      </div>
      <div class="project-media">
        <img src="${project.gif}" alt="${project.title} Gameplay" />
      </div>
    `;

    container.appendChild(projectEl);
  });
}