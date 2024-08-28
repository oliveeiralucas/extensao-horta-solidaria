import React from 'react'
import {
  AiFillBank,
  AiFillCode,
  AiFillSafetyCertificate,
  AiFillSchedule,
  AiFillSetting,
  AiFillTool
} from 'react-icons/ai'

interface FeatureCardProps {
  icon: JSX.Element
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-green-100 text-xl text-green-600 md:size-16">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl">
        {title}
      </h3>
      <p className="text-sm text-gray-700 md:text-base">{description}</p>
    </div>
  )
}

const FeatureDisplay: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 p-5 md:p-20">
      <div className="mb-8 text-center lg:mb-16">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-black md:text-4xl">
          Facilitando a Jardinagem Comunitária com Tecnologia
        </h2>
        <p className="text-lg text-black md:text-xl">
          Nosso projeto é dedicado a apoiar hortas comunitárias, fornecendo
          ferramentas e recursos inovadores para gerenciar insumos, doações,
          áreas cultivadas, e também para educar e capacitar os horticultores.
        </p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 md:gap-10 md:space-y-0 lg:grid-cols-3">
        <FeatureCard
          icon={<AiFillSetting />}
          title="Gestão de Recursos"
          description="Gerencie e aloque recursos, como sementes, fertilizantes e ferramentas de forma eficiente para otimizar a produtividade da horta."
        />
        <FeatureCard
          icon={<AiFillBank />}
          title="Rastreamento de Doações"
          description="Mantenha o controle das doações recebidas, garantindo transparência e prestação de contas no apoio à comunidade."
        />
        <FeatureCard
          icon={<AiFillCode />}
          title="Educação e Treinamento"
          description="Acesse materiais educacionais e programas de treinamento para aprimorar habilidades e conhecimentos em horticultura."
        />
        <FeatureCard
          icon={<AiFillSafetyCertificate />}
          title="Conformidade e Segurança"
          description="Assegure-se de estar em conformidade com regulamentos e padrões de segurança para criar um ambiente de jardinagem seguro e saudável."
        />
        <FeatureCard
          icon={<AiFillSchedule />}
          title="Design Colaborativo"
          description="Colabore com outros membros da comunidade para projetar e planejar layouts de horta para uso otimizado de espaço e recursos."
        />
        <FeatureCard
          icon={<AiFillTool />}
          title="Automação de Tarefas"
          description="Automatize tarefas repetitivas, como horários de rega e controle de pragas, para simplificar a manutenção da horta."
        />
      </div>
    </section>
  )
}

export default FeatureDisplay
