import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'

interface TeamMemberProps {
  name: string
  role: string
  description: string
  avatarSrc: string
  githubLink: string
  InstagramLink: string
  LinkedinLink?: string
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  avatarSrc,
  githubLink,
  InstagramLink,
  LinkedinLink,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 text-center shadow-md">
      <div>
        <img
          className="mt-6 max-h-32 rounded-full"
          src={avatarSrc}
          alt={name + ' Avatar'}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold tracking-tight text-gray-900">
          <p>{name}</p>
        </h3>
        <span className="text-gray-500">{role}</span>
        <p className="mb-4 mt-2 font-light text-gray-500">{description}</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href={githubLink}>
              <AiFillGithub className="size-5 text-gray-500 hover:text-gray-900" />
            </Link>
          </li>
          {LinkedinLink && (
            <li>
              <Link href={LinkedinLink}>
                <AiFillLinkedin className="size-5 text-gray-500 hover:text-gray-900" />
              </Link>
            </li>
          )}
          <li>
            <Link href={InstagramLink}>
              <AiFillInstagram className="size-5 text-gray-500 hover:text-gray-900" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const Team: React.FC = () => {
  return (
    <section className="w-full bg-white">
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
            name="Lucas Rezende de Sales"
            role="Tech Lead"
            description="Entusiasta da programação web"
            avatarSrc="rezende-selfie.png"
            InstagramLink="https://www.instagram.com/lucas.rezendes_/"
            githubLink="https://github.com/LucasRezendeUnifill"
          />
          <TeamMember
            name="Lucas Oliveira"
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
        </div>
      </div>
    </section>
  )
}

export default Team
