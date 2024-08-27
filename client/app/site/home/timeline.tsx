import React from 'react'

interface TimelineItemProps {
  title: string
  date: string
  description: string
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  description
}) => {
  return (
    <div className="relative col-span-12 space-y-4 px-4 before:bg-gray-300 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:-left-3 sm:before:bottom-0 sm:before:top-2 sm:before:w-0.5 md:space-y-12">
      <hr className="md:hidden" />
      <div className="sm:before:size-4 flex flex-col before:bg-green-600 sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:rounded-full">
        <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
        <time className="mt-2 text-xs uppercase tracking-wide text-gray-600 md:mt-0">
          {date}
        </time>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  )
}

const Timeline: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-white py-16 lg:px-8">
      <div className="container mx-auto max-w-5xl pb-12 md:px-4">
        <div className="mx-4 grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center before:mx-auto before:mb-5 before:block before:h-3 before:w-24 before:rounded-md before:bg-green-600 sm:text-left sm:before:mx-0 md:mb-14">
              <h3 className="text-3xl font-semibold">Cronograma</h3>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-600">
                futuras implementações
              </span>
            </div>
          </div>
          <div className="relative col-span-12 space-y-6 px-4 sm:col-span-5">
            <TimelineItem
              title={'Definição do Escopo e Planejamento Inicial'}
              date={'Fev 2024'}
              description={
                'Reunião inicial para definir o escopo do projeto, identificar requisitos e elaborar um plano de ação detalhado'
              }
            />
            <TimelineItem
              title={'Desenvolvimento do Protótipo da Plataforma'}
              date={'Mar 2024'}
              description={
                'Início do desenvolvimento do protótipo da plataforma, incluindo interface de usuário básica e funcionalidades principais'
              }
            />
            <TimelineItem
              title={'Testes e Feedback do Protótipo'}
              date={'Mai 2024'}
              description={
                'Conclusão do protótipo inicial e início dos testes de usabilidade com os membros da comunidade. Coleta de feedback para refinamento'
              }
            />
          </div>
          <div className="relative col-span-12 space-y-6 px-4 sm:col-span-4">
            <TimelineItem
              title={'Implementação de Recursos Adicionais'}
              date={'Jul 2024'}
              description={
                'Adição de recursos avançados, como rastreamento de doações, materiais educacionais e automação de tarefas. Integração de feedback dos testes'
              }
            />
            <TimelineItem
              title={'Finalização e Preparação para Lançamento'}
              date={'Out 2024'}
              description={
                'Últimas correções de bugs, polimento da interface do usuário e preparação para o lançamento oficial da plataforma de apoio à jardinagem comunitária'
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
