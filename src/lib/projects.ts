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
    next: "RodriPages",
  },
  {
    slug: "RodriPages",
    title: "RodriPages",
    tagline: "Design system e aplicação SaaS para capitação de clientes e criação de páginas",
    client: "RodriPages",
    year: "2025",
    role: "Product Engineer",
    cover: project2,
    discipline: "SaaS · Design System",
    context:
      "",
    problem:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos..",
    solution:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    stack: ["React", "TypeScript", "Radix", "D3", "tRPC", "PostgreSQL"],
    results: [
      { label: "Redução em bugs de UI", value: "−62%" },
      { label: "Tempo de onboarding", value: "−45%" },
      { label: "NPS interno", value: "72" },
    ],
    gallery: [project2, project3],
    next: "proejeto3",
  },
  {
    slug: "Projeto3",
    title: "Prejeto3",
    tagline: "tagline",
    client: "Cliente",
    year: "ano",
    role: "Tecnologia",
    cover: project3,
    discipline: "Produto digital",
    context:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    problem:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    solution:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    stack: ["stacks"],
    results: [
      { label: "Redução no tempo de recepção", value: "−58%" },
      { label: "No-show mensal", value: "−31%" },
      { label: "Atendimentos/mês", value: "+2.400" },
    ],
    gallery: [project3, project4],
    next: "projeto4",
  },
  {
    slug: "projeto4",
    title: "projeto4",
    tagline: "tagline",
    client: "cliente",
    year: "ano",
    role: "role",
    cover: project4,
    discipline: "E-commerce · Headless",
    context:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos",
    problem:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos",
    solution:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos",
    stack: ["stacks"],
    results: [
      { label: "Conversão mobile", value: "+118%" },
      { label: "LCP médio", value: "1,1s" },
      { label: "Ticket médio", value: "+37%" },
    ],
    gallery: [project4, project1],
    next: "Minha Bahia Secreta",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
