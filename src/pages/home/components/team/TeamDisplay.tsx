import React from 'react'

import TeamMember from './TeamMember'

const Team: React.FC = () => {
  return (
    <section className="w-full bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Nosso time
          </h2>
          <p className="font-light text-gray-500 sm:text-xl lg:mb-16">
            Conheça um pouco mais dos responsáveis por tornar esse projeto
            realidade
          </p>
        </div>
        <div className="mb-6 grid place-content-center gap-8 md:grid-cols-3 lg:mb-16">
          <TeamMember
            name="Dirceu aparecido da silva Junior"
            role="Tech Lead"
            description="entusiasta da programação web"
            avatarSrc="https://avatars.githubusercontent.com/u/108402999?v=4"
            InstagramLink="https://instagram.com/junior_gbc"
            githubLink="https://github.com/junior-slv"
            LinkedinLink="https://www.linkedin.com/in/djuniors/"
          />
          <TeamMember
            name="Lucas oliveira"
            role="FrontEnd Development"
            description="Futuro desenvolvedor e estudante de engenharia de software na UniFil em Londrina."
            avatarSrc="https://avatars.githubusercontent.com/u/124714081?v=4"
            InstagramLink="https://instagram.com/oliveeiralucas"
            githubLink="https://github.com/oliveeiralucas"
            LinkedinLink="https://www.linkedin.com/in/oliveeiralucas"
          />
          <TeamMember
            name="Lucas Pinheiro Fernandes"
            role="Desenvolvedor Full Stack"
            description="Dominando a arte do código"
            avatarSrc="https://avatars.githubusercontent.com/u/124714182?v=4"
            InstagramLink="https://instagram.com/p1nheiros"
            githubLink="https://github.com/p1nheiros"
            LinkedinLink="https://www.linkedin.com/in/pinheiros-dev"
          />
          <TeamMember
            name="Lucas oliveira"
            role="FrontEnd Development in Exactus"
            description="Futuro desenvolvedor e estudante de engenharia de software na UniFil em Londrina."
            avatarSrc="https://avatars.githubusercontent.com/u/124714081?v=4"
            InstagramLink="https://instagram.com/oliveeiralucas"
            githubLink="https://github.com/oliveeiralucas"
            LinkedinLink="https://www.linkedin.com/in/oliveeiralucas"
          />
          <TeamMember
            name="Lucas oliveira"
            role="FrontEnd Development in Exactus"
            description="Futuro desenvolvedor e estudante de engenharia de software na UniFil em Londrina."
            avatarSrc="https://avatars.githubusercontent.com/u/124714081?v=4"
            InstagramLink="https://instagram.com/oliveeiralucas"
            githubLink="https://github.com/oliveeiralucas"
            LinkedinLink="https://www.linkedin.com/in/oliveeiralucas"
          />
        </div>
      </div>
    </section>
  )
}

export default Team
