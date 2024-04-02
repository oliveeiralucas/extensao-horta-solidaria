import React from 'react'

import FullScreenImagePE from '@/pages/projetoExtensao/FullScreenImagePE'

const ProjetoExtensao: React.FC = () => {
  return (
    <>
      <FullScreenImagePE imageUrl="/projetoExtensaoBackground.jpg" />
      <div>
        <main className="bg-white pb-16 pt-8 antialiased lg:pb-24 lg:pt-16">
          <div className="mx-auto flex max-w-screen-xl justify-between px-4 ">
            <article className="mx-auto w-full max-w-2xl">
              <header className="mb-8 lg:mb-12">
                <h1
                  id="projeto-extensao"
                  className="mb-6 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-8 lg:text-3xl"
                >
                  Projeto de Extensão
                </h1>
              </header>
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">O que é?</h2>
                <p className="py-4">
                  O projeto de extensão integrado à grade curricular do Centro
                  Universitário Filadélfia - UniFil visa ajudar o corpo social
                  sem fins lucrativos, proporcionando uma valiosa experiência
                  prática aos estudantes na criação de um aplicativo. Ele é
                  dividido em quatro unidades curriculares, onde os alunos serão
                  avaliados individualmente.
                </p>
                <p className="py-4">
                  Para mais informações sobre como a avaliação é feita, acesse o{' '}
                  <a
                    className="text-green-500"
                    href="https://docs.google.com/document/d/169PibmynKCcZhM1oKnCRAR10SbHl01TeWkopNKGw3MU/edit#heading=h.9512hjsqn9fc"
                  >
                    Projeto de Extensão - Orientações de Práticas de Extensão
                  </a>
                  . Este blog foi criado para acompanhar o projeto Horta
                  Solidária, onde serão compartilhadas atualizações e outros
                  assuntos relacionados ao seu desenvolvimento.
                </p>
                <p className="py-4">
                  O projeto está em conformidade com a legislação vigente,
                  incluindo a Lei 13.005 de 2014, que estabelece diretrizes para
                  políticas públicas educacionais, e a Resolução CNE/CES 07 de
                  dezembro de 2018, que torna a extensão uma disciplina
                  obrigatória em todos os cursos de graduação.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  DISCIPLINA DE EXTENSÃO
                </h2>
                <p>
                  Para cada Unidade Curricular (Práticas de extensão I, II, III
                  e IV), será atribuída uma nota referente às atividades de
                  extensão realizadas pelo aluno, avaliados individualmente. O
                  projeto deverá ser finalizado após o aluno cumprir todas as
                  quatro Unidades Curriculares de Práticas de Extensão. A
                  atividade contempla na implementação de um aplicativo com
                  conteúdos específicos de análise de sistemas, banco de dados e
                  desenvolvimento do projeto, compartilhado publicamente, para
                  usufruto do corpo social.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  ORIENTAÇÕES GERAIS DO PROJETO
                </h2>
                <ul className="mb-4 list-disc pl-8">
                  <li>
                    Individualmente ou em grupos de até 5 alunos os estudantes
                    poderão desenvolver um projeto que resolva um determinado
                    problema da sociedade.
                  </li>
                  <li>
                    O aplicativo poderá ser em qualquer formato (Web, apk e
                    etc…). Evite efetuar requisições a servidores. Qualquer
                    dependência do projeto (importações) deve ser considerada
                    sua disponibilidade.
                  </li>
                  <li>
                    É recomendado o uso de ferramentas geradoras de sites
                    estáticos como os listados em{' '}
                    <a
                      href="https://jamstack.org/generators"
                      className="text-blue-500 underline"
                    >
                      jamstack.org/generators
                    </a>
                    .
                  </li>
                  <li>
                    Também é recomendado o uso de extensões ou plugins para
                    sites estáticos conhecidos como Serverless plugins (
                    <a
                      href="https://disqus.com"
                      className="text-blue-500 underline"
                    >
                      disqus.com
                    </a>
                    ).
                  </li>
                </ul>
                <h3 className="mb-2 text-xl font-semibold">Você deve:</h3>
                <ul className="list-disc pl-8">
                  <li>
                    Solicitar acesso ao Oracle Cloud, parceiro da UniFil, para
                    que consiga hospedar seu projeto. A solicitação ocorrerá
                    inserindo o e-mail na planilha. O envio dos lotes para o
                    processamento são de no máximo 3 semanas e além do prazo de
                    criação sob os termos de Serviço da Oracle Cloud.
                  </li>
                  <li>
                    O projeto deve estar disponível na Oracle Cloud, sendo a
                    gestão da conta da responsabilidade do aluno e o suporte sob
                    os termos de serviço da Oracle Cloud.
                  </li>
                  <li>
                    Registrar um endereço de domínio gratuitamente via parceiro
                    GitHub e fazer uso no aplicativo.
                  </li>
                  <li>
                    Se escolhido desenvolvimento de App móvel, deve ser
                    publicado em ao menos um das publicadoras de apps, como
                    Amazon App (Android), Google Play Store (Android) ou App
                    Store (IOS). A publicação ocorrerá sob os termos da
                    plataforma escolhida.
                  </li>
                  <li>
                    Publicar em{' '}
                    <a
                      href="https://apps.unifil.tech"
                      className="text-blue-500 underline"
                    >
                      apps.unifil.tech
                    </a>{' '}
                    (por nossa conta) e gerar relatório de impacto no modelo.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  ENTREGA E AVALIAÇÃO
                </h2>
                <ol className="mb-4 list-decimal pl-8">
                  <li>
                    <strong>1ª Entrega:</strong> Ao final da unidade curricular
                    Práticas de Extensão I (B1 e B2). O grupo deverá gravar um
                    vídeo de no máximo 10 minutos apresentando todas as etapas
                    implementadas no aplicativo até o momento. A apresentação,
                    deve-se conter: a apresentação do site do projeto que
                    contenha: os integrantes do grupo, a referência ao projeto
                    de extensão, o relato e a descrição da startup e a logo da
                    instituição. Uma breve explicação sobre o tema, a
                    apresentação do diagrama de Caso de Uso, Telas do App e o
                    MVP (Produto Viável Mínimo), Modelagem do Banco de Dados
                    (DER). Esses arquivos devem estar no GitHub do projeto. O
                    vídeo da apresentação deverá ser publicado no youtube por
                    meio de um link não listado e enviado no Classroom da
                    unidade curricular de Práticas de Extensão I.
                  </li>
                  <li>
                    <strong>2ª Entrega:</strong> Final da unidade curricular
                    Práticas de Extensão II (B3 e B4). Diagrama da UML
                    (Sequência) e a implementação. O projeto deverá estar
                    disponível no GitHub do repositório do projeto. Em
                    continuidade e conclusão do projeto, o grupo deverá gravar
                    outro vídeo de no máximo 10 minutos apresentando o projeto
                    finalizado e funcionando. Na apresentação, deve-se conter
                    uma breve explicação sobre o tema, a apresentação dos
                    diagramas de Caso de Uso, etc. e o aplicativo rodando. O
                    vídeo da apresentação deverá ser publicado no youtube por
                    meio de um link não listado e enviado no Classroom da
                    unidade curricular de Práticas de Extensão II. A entrega
                    final e a aprovação será concluída, após a hospedagem do
                    aplicativo no Servidor Oracle e a entrega do relatório de
                    impacto na sociedade.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  CONSIDERAÇÕES FINAIS
                </h2>
                <p>
                  As avaliações serão realizadas pelos coordenadores do projeto
                  e os professores do colegiado dos cursos Superiores de Ciência
                  da Computação e Engenharia de Software desta instituição.
                </p>
              </section>
            </article>
          </div>
        </main>
      </div>
    </>
  )
}

export default ProjetoExtensao
