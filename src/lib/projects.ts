import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  year: string;
  role: string;
  cover: string;
  discipline: string;
  context: string;
  problem: string;
  solution: string;
  stack: string[];
  results: { label: string; value: string }[];
  gallery: string[];
  next?: string;
};

export const projects: Project[] = [
  {
    slug: "Bahia Secreta",
    title: "Minha Bahia Secreta",
    tagline: "Minha Bahia Secreta é uma experiência digital criada para revelar os destinos, praias e experiências do extremo sul da Bahia. O projeto une design e desenvolvimento web para transformar uma identidade regional em uma presença online mais moderna, organizada e imersiva",
    client: "Minha Bahia Secreta",
    year: "2026",
    role: "Design & Full Stack",
    cover: project1,
    discipline: "Website institucional · CMS · Arquitetura responsiva",
    context:
      "Minha Bahia Secreta nasceu com a proposta de revelar destinos, praias e experiências do extremo sul da Bahia, transformando a riqueza natural da região em uma experiência digital mais atrativa para visitantes.",
    problem:
      "A presença digital existente não transmitia a identidade do projeto: a navegação era limitada, a apresentação dos destinos pouco explorada e faltava uma estrutura capaz de organizar conteúdos, experiências e futuras expansões.",
    solution:
   "Desenvolvi uma nova experiência digital com foco em narrativa visual e descoberta. A plataforma foi reorganizada com uma interface moderna, navegação intuitiva e uma estrutura preparada para apresentar destinos, hospedagens e experiências de forma mais envolvente.",
    stack: ["Next.js", "TypeScript", "Sanity", "Framer Motion", "Vercel"],
    results: [
      { label: "Tempo médio na página", value: "+184%" },
      { label: "Contatos qualificados", value: "3,2x" },
      { label: "Publicação sem dev", value: "100%" },
    ],
    gallery: [project1, project2],
    next: "estuario-labs",
  },
  {
    slug: "estuario-labs",
    title: "Estuário Labs",
    tagline: "Design system e aplicação SaaS para uma consultoria de dados oceanográficos.",
    client: "Estuário Labs",
    year: "2024",
    role: "Product Engineer",
    cover: project2,
    discipline: "SaaS · Design System",
    context:
      "A Estuário desenvolve modelos preditivos para portos e operações costeiras. O produto interno havia crescido sem consistência visual nem padrões de interação.",
    problem:
      "Cada tela era uma ilha: componentes duplicados, inconsistências tipográficas e uma curva de aprendizado alta para novos clientes B2B.",
    solution:
      "Desenhei um design system tokenizado, migrei a base para uma arquitetura modular e reescrevi os fluxos críticos com foco em leitura de dados densos — tabelas, gráficos e comparativos.",
    stack: ["React", "TypeScript", "Radix", "D3", "tRPC", "PostgreSQL"],
    results: [
      { label: "Redução em bugs de UI", value: "−62%" },
      { label: "Tempo de onboarding", value: "−45%" },
      { label: "NPS interno", value: "72" },
    ],
    gallery: [project2, project3],
    next: "farol-clinica",
  },
  {
    slug: "farol-clinica",
    title: "Farol Clínica",
    tagline: "Portal de agendamento e prontuário para uma clínica multidisciplinar em Alcobaça.",
    client: "Clínica Farol",
    year: "2024",
    role: "Full Stack Lead",
    cover: project3,
    discipline: "Produto digital · Saúde",
    context:
      "Uma clínica com oito especialidades operava agenda em planilhas e prontuário em papel. A recepção era o gargalo de toda a operação.",
    problem:
      "Faltava um sistema único que respeitasse o ritmo do consultório, integrasse convênios e fosse simples o bastante para profissionais sem afinidade com tecnologia.",
    solution:
      "Construí um portal com agenda inteligente, prontuário estruturado, integração com convênios e um app leve para os pacientes acompanharem seus atendimentos.",
    stack: ["Remix", "Node.js", "Prisma", "PostgreSQL", "Twilio"],
    results: [
      { label: "Redução no tempo de recepção", value: "−58%" },
      { label: "No-show mensal", value: "−31%" },
      { label: "Atendimentos/mês", value: "+2.400" },
    ],
    gallery: [project3, project4],
    next: "coral-commerce",
  },
  {
    slug: "coral-commerce",
    title: "Coral Commerce",
    tagline: "E-commerce headless para uma marca de moda praia autoral do Nordeste.",
    client: "Coral Studio",
    year: "2023",
    role: "Full Stack",
    cover: project4,
    discipline: "E-commerce · Headless",
    context:
      "A Coral produzia coleções curtas, quase artesanais, e queria uma loja que respirasse a mesma sofisticação do produto físico, sem os limites de temas prontos.",
    problem:
      "As plataformas fechadas engessavam o storytelling da marca, prejudicavam a performance mobile e limitavam a personalização das páginas de coleção.",
    solution:
      "Migrei a loja para uma arquitetura headless com editorial na home, páginas de coleção como lookbooks e checkout rápido, mantendo Shopify apenas como back-end de estoque e pagamentos.",
    stack: ["Next.js", "Shopify Storefront", "Sanity", "Stripe"],
    results: [
      { label: "Conversão mobile", value: "+118%" },
      { label: "LCP médio", value: "1,1s" },
      { label: "Ticket médio", value: "+37%" },
    ],
    gallery: [project4, project1],
    next: "porto-atelie",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
