import liseuPhoto from '@/assets/images/employees/web/liseu-portrait.jpg'
import liaraPhoto from '@/assets/images/employees/web/liara-portrait.jpg'
import lucasPhoto from '@/assets/images/employees/web/lucas-portrait.jpg'

export interface TeamMember {
  name: string
  firstName: string
  role: string
  oab?: string
  paragraphs: [string, string]
  image: string
  imageAlt: string
  whatsappPhone: string
}

export const team: TeamMember[] = [
  {
    name: 'Liseu Massinhan Levy',
    firstName: 'Liseu',
    role: 'Sócio-proprietário',
    paragraphs: [
      'Liseu acompanha pessoas que sofreram acidentes de trânsito, de trabalho, esportivos ou domésticos. A orientação cobre cada etapa para que o cliente receba as indenizações e os benefícios a que tem direito.',
      'O atendimento começa pela escuta do caso. Em seguida, a assessoria organiza a documentação e conduz o pedido de seguro e de previdência com transparência e agilidade.',
    ],
    image: liseuPhoto,
    imageAlt: 'Liseu Massinhan Levy, sócio-proprietário da LC Assessoria',
    whatsappPhone: '5542998468326',
  },
  {
    name: 'Liara Levy Carneiro',
    firstName: 'Liara',
    role: 'Assessoria de Seguros e Previdência',
    paragraphs: [
      'Liara recebe o cliente no primeiro contato e organiza as informações do caso para a equipe seguir com clareza. O atendimento inclui seguros e benefícios previdenciários ligados a acidentes.',
      'Ela explica o caminho do pedido, do que reunir até o acompanhamento do processo, para que o cliente conte com orientação em cada etapa.',
    ],
    image: liaraPhoto,
    imageAlt: 'Liara Levy Carneiro, da equipe da LC Assessoria',
    whatsappPhone: '5542998468323',
  },
  {
    name: 'Lucas Rafael Borba Carneiro Junior',
    firstName: 'Lucas',
    role: 'Advogado',
    oab: 'OAB/PR 119184',
    paragraphs: [
      'Lucas responde pela análise jurídica dos casos de acidente acompanhados pela LC Assessoria. O trabalho é identificar o direito à indenização e aos benefícios previdenciários e orientar o cliente em cada etapa.',
      'O acompanhamento inclui a leitura do caso, a orientação sobre documentos e o encaminhamento do pedido, com linguagem direta e presença próxima.',
    ],
    image: lucasPhoto,
    imageAlt: 'Lucas Rafael Borba Carneiro Junior, advogado da LC Assessoria, OAB/PR 119184',
    whatsappPhone: '5542998468323',
  },
]
