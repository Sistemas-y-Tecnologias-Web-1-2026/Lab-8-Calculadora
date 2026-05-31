import githubLogo from '../github.webp'

export default function GitHubLink() {
  return (
    <a
      className="project-link"
      href="https://github.com/Sistemas-y-Tecnologias-Web-1-2026/Lab-8-Calculadora"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Abrir el repositorio del proyecto en GitHub"
    >
      <img className="project-link__icon" src={githubLogo} alt="" aria-hidden="true" />
    </a>
  )
}