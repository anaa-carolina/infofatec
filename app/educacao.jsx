import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, router } from "expo-router";

export default function Educacao() {
  const params = useLocalSearchParams();
  const cursoId = params.curso;

  // Dados dos cursos
  const cursos = {
    "ciencias-dados": {
      id: "ciencias-dados",
      titulo: "Ciências de Dados",
      periodo: "Noturno - 3 anos",
      icone: "analytics",
      badge: "Tecnologia",
      badgeColor: "#9333ea",
      conteudo: [
        {
          subtitulo: "Sobre o Curso",
          texto:
            "O curso de Ciências de Dados forma profissionais capacitados para coletar, processar, analisar e interpretar grandes volumes de dados. O tecnólogo em Ciências de Dados domina técnicas de machine learning, inteligência artificial, estatística e programação para transformar dados em insights estratégicos para empresas e organizações.",
        },
        {
          subtitulo: "Áreas de Atuação",
          texto:
            "O profissional pode atuar como Cientista de Dados, Analista de Dados, Engenheiro de Machine Learning, Analista de Business Intelligence, Especialista em Big Data, Consultor em Analytics. Trabalha em empresas de tecnologia, bancos, consultorias, e-commerce, saúde, indústria e todos os setores que lidam com grandes volumes de dados.",
        },
        {
          subtitulo: "Grade Curricular",
          texto:
            "O curso abrange disciplinas como Programação em Python e R, Estatística e Probabilidade, Machine Learning, Deep Learning, Big Data e Cloud Computing, Visualização de Dados, Banco de Dados SQL e NoSQL, Análise Preditiva, Processamento de Linguagem Natural, Ética e Privacidade de Dados. Inclui projetos práticos e trabalho de conclusão de curso.",
        },
        {
          subtitulo: "Mercado de Trabalho",
          texto:
            "A área de Ciências de Dados está em alta expansão com salários atrativos. Profissionais são muito requisitados no mercado atual. Média salarial inicial entre R$ 4.000 a R$ 7.000, podendo chegar a R$ 15.000+ com experiência. Oportunidades em empresas nacionais e multinacionais, startups e possibilidade de trabalho remoto internacional.",
        },
      ],
    },
    "comercio-exterior": {
      id: "comercio-exterior",
      titulo: "Comércio Exterior",
      periodo: "Noturno - 3 anos",
      icone: "globe",
      badge: "Negócios",
      badgeColor: "#0891b2",
      conteudo: [
        {
          subtitulo: "Sobre o Curso",
          texto:
            "O curso de Comércio Exterior forma profissionais especializados em operações de importação e exportação, logística internacional, legislação aduaneira e estratégias de negócios globais. O tecnólogo domina processos alfandegários, câmbio, acordos comerciais internacionais e gestão de cadeias de suprimentos globais.",
        },
        {
          subtitulo: "Áreas de Atuação",
          texto:
            "O profissional pode atuar como Analista de Comércio Exterior, Coordenador de Importação/Exportação, Despachante Aduaneiro, Consultor em Negócios Internacionais, Trader, Analista de Logística Internacional. Trabalha em trading companies, empresas multinacionais, portos, aeroportos, empresas de logística, consultorias e órgãos governamentais.",
        },
        {
          subtitulo: "Grade Curricular",
          texto:
            "O curso inclui disciplinas como Legislação Aduaneira, Logística Internacional, Gestão de Operações Portuárias, Marketing Internacional, Negociação Internacional, Câmbio e Finanças Internacionais, Acordos Comerciais, Incoterms, Drawback, Siscomex, Inglês para Negócios, Gestão de Riscos Internacionais e Compliance.",
        },
        {
          subtitulo: "Mercado de Trabalho",
          texto:
            "O Brasil é um grande player no comércio internacional, com demanda constante por profissionais qualificados. Média salarial inicial entre R$ 3.500 a R$ 6.000, podendo chegar a R$ 12.000+ em cargos de gestão. Excelentes oportunidades em empresas exportadoras/importadoras, portos de Santos e outros, e multinacionais.",
        },
      ],
    },
    "desenvolvimento-software": {
      id: "desenvolvimento-software",
      titulo: "Desenvolvimento de Software Multiplataforma",
      periodo: "Noturno - 3 anos",
      icone: "code-slash",
      badge: "Tecnologia",
      badgeColor: "#d00",
      conteudo: [
        {
          subtitulo: "Sobre o Curso",
          texto:
            "O curso de Desenvolvimento de Software Multiplataforma forma programadores full-stack capacitados para criar aplicações web, mobile e desktop. O tecnólogo domina as principais linguagens de programação, frameworks modernos, arquitetura de software, DevOps e metodologias ágeis para desenvolver sistemas completos e escaláveis.",
        },
        {
          subtitulo: "Áreas de Atuação",
          texto:
            "O profissional pode atuar como Desenvolvedor Full-Stack, Desenvolvedor Front-end, Desenvolvedor Back-end, Desenvolvedor Mobile, Arquiteto de Software, DevOps Engineer, Tech Lead. Trabalha em empresas de tecnologia, startups, bancos, consultorias, agências digitais, ou como freelancer e empreendedor tech.",
        },
        {
          subtitulo: "Grade Curricular",
          texto:
            "O curso abrange disciplinas como Lógica de Programação, Estrutura de Dados, Programação Orientada a Objetos, Desenvolvimento Web (HTML, CSS, JavaScript, React), Desenvolvimento Mobile (React Native, Flutter), Back-end (Node.js, Java, Python), Banco de Dados, API REST, Cloud Computing, DevOps, Git, Metodologias Ágeis e Engenharia de Software.",
        },
        {
          subtitulo: "Mercado de Trabalho",
          texto:
            "Área com maior demanda no mercado de TI brasileiro. Média salarial inicial entre R$ 4.000 a R$ 7.500, podendo ultrapassar R$ 20.000+ para desenvolvedores sênior. Mercado aquecido com muitas vagas, benefícios atrativos, possibilidade de trabalho remoto, projetos internacionais e alto potencial de crescimento na carreira.",
        },
      ],
    },
    "design-produto": {
      id: "design-produto",
      titulo: "Design de Produto",
      periodo: "Noturno - 3 anos",
      icone: "color-palette",
      badge: "Design",
      badgeColor: "#ec4899",
      conteudo: [
        {
          subtitulo: "Sobre o Curso",
          texto:
            "O curso de Design de Produto forma profissionais capacitados para criar e desenvolver produtos inovadores, funcionais e esteticamente atraentes. O tecnólogo domina técnicas de design thinking, prototipagem, modelagem 3D, ergonomia, materiais e processos produtivos, integrando criatividade, tecnologia e sustentabilidade no desenvolvimento de produtos.",
        },
        {
          subtitulo: "Áreas de Atuação",
          texto:
            "O profissional pode atuar como Designer de Produtos, Designer Industrial, Designer de Móveis, Designer de Embalagens, Modelador 3D, Especialista em UX/UI de Produtos Físicos, Consultor em Inovação. Trabalha em indústrias, escritórios de design, startups de hardware, empresas de brinquedos, automobilística, móveis e como designer autônomo.",
        },
        {
          subtitulo: "Grade Curricular",
          texto:
            "O curso inclui disciplinas como Desenho Técnico, Modelagem 3D (CAD), Prototipagem Rápida, Design Thinking, Ergonomia, Materiais e Processos de Fabricação, Sustentabilidade no Design, História do Design, Metodologia de Projeto, Renderização e Apresentação, Design de Embalagens, Inovação e Empreendedorismo em Design.",
        },
        {
          subtitulo: "Mercado de Trabalho",
          texto:
            "Mercado em crescimento com foco em inovação e sustentabilidade. Média salarial inicial entre R$ 3.000 a R$ 5.500, podendo chegar a R$ 12.000+ com especialização e experiência. Oportunidades em indústrias diversas, escritórios de design renomados, startups de hardware e possibilidade de carreira internacional ou como designer independente.",
        },
      ],
    },
    "gestao-empresarial": {
      id: "gestao-empresarial",
      titulo: "Gestão Empresarial",
      periodo: "Noturno - 3 anos",
      icone: "briefcase",
      badge: "Gestão",
      badgeColor: "#0066cc",
      conteudo: [
        {
          subtitulo: "Sobre o Curso",
          texto:
            "O curso de Gestão Empresarial forma profissionais capacitados para gerenciar empresas e organizações de diversos portes e segmentos. O tecnólogo domina técnicas de planejamento estratégico, gestão de pessoas, finanças, marketing, operações e empreendedorismo, preparado para tomar decisões estratégicas e liderar equipes.",
        },
        {
          subtitulo: "Áreas de Atuação",
          texto:
            "O profissional pode atuar como Gestor Empresarial, Administrador, Consultor de Negócios, Analista de Gestão, Coordenador de Projetos, Empreendedor, Gestor de RH, Analista de Marketing, Analista Financeiro. Trabalha em empresas de todos os setores, consultorias, instituições financeiras, ONGs, órgãos públicos ou abrindo seu próprio negócio.",
        },
        {
          subtitulo: "Grade Curricular",
          texto:
            "O curso abrange disciplinas como Administração Geral, Planejamento Estratégico, Gestão de Pessoas, Gestão Financeira, Marketing e Vendas, Logística e Operações, Empreendedorismo, Contabilidade Gerencial, Direito Empresarial, Gestão de Projetos, Business Intelligence, Liderança e Comportamento Organizacional, Inovação e Sustentabilidade.",
        },
        {
          subtitulo: "Mercado de Trabalho",
          texto:
            "Área com amplo espectro de oportunidades em todos os setores da economia. Média salarial inicial entre R$ 3.500 a R$ 6.000, podendo ultrapassar R$ 15.000+ em cargos de gerência e diretoria. Excelente base para empreendedorismo, possibilidade de crescimento em grandes corporações e flexibilidade para atuar em diversos segmentos.",
        },
      ],
    },
    "gestao-producao-industrial": {
      id: "gestao-producao-industrial",
      titulo: "Gestão da Produção Industrial",
      periodo: "Noturno - 3 anos",
      icone: "construct",
      badge: "Gestão",
      badgeColor: "#f59e0b",
      conteudo: [
        {
          subtitulo: "Sobre o Curso",
          texto:
            "O curso de Gestão da Produção Industrial forma profissionais especializados em planejar, organizar e controlar processos produtivos industriais. O tecnólogo domina técnicas de manufatura enxuta, controle de qualidade, logística industrial, gestão de custos e otimização de processos, preparado para aumentar a produtividade e eficiência das operações.",
        },
        {
          subtitulo: "Áreas de Atuação",
          texto:
            "O profissional pode atuar como Supervisor de Produção, Coordenador de PCP (Planejamento e Controle da Produção), Analista de Processos, Gestor de Qualidade, Analista de Logística Industrial, Coordenador de Manutenção, Especialista em Lean Manufacturing. Trabalha em indústrias de diversos segmentos, consultorias industriais e órgãos de certificação.",
        },
        {
          subtitulo: "Grade Curricular",
          texto:
            "O curso inclui disciplinas como Planejamento e Controle da Produção, Gestão da Qualidade, Lean Manufacturing, Logística Industrial, Manutenção Industrial, Gestão de Custos Industriais, Segurança do Trabalho, Automação Industrial, Processos de Fabricação, Supply Chain, Six Sigma, Gestão de Projetos Industriais e Sustentabilidade na Indústria.",
        },
        {
          subtitulo: "Mercado de Trabalho",
          texto:
            "Forte demanda em regiões industriais como Cotia e região metropolitana de São Paulo. Média salarial inicial entre R$ 4.000 a R$ 6.500, podendo chegar a R$ 14.000+ em cargos de gestão. Excelentes oportunidades em indústrias de diversos setores, especialmente automotivo, farmacêutico, alimentício, metalúrgico e químico.",
        },
      ],
    },
  };

  // Se houver um ID de curso, mostrar detalhes
  if (cursoId && cursos[cursoId]) {
    const curso = cursos[cursoId];

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header com botão de voltar */}
        <View style={styles.detailHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push("/educacao")}
          >
            <Ionicons name="arrow-back" size={24} color="#d00" />
          </TouchableOpacity>
          <View style={styles.detailHeaderContent}>
            <View
              style={[
                styles.detailBadge,
                { backgroundColor: curso.badgeColor },
              ]}
            >
              <Text style={styles.detailBadgeText}>
                {curso.badge.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>

        {/* Conteúdo do curso */}
        <View style={styles.detailContent}>
          <View style={styles.detailTitleSection}>
            <View style={styles.detailIconWrapper}>
              <Ionicons name={curso.icone} size={24} color="#d00" />
            </View>
            <Text style={styles.detailPeriodo}>{curso.periodo}</Text>
          </View>

          <Text style={styles.detailTitle}>{curso.titulo}</Text>

          {curso.conteudo.map((secao, index) => (
            <View key={index} style={styles.contentSection}>
              <Text style={styles.contentSubtitle}>{secao.subtitulo}</Text>
              <Text style={styles.contentText}>{secao.texto}</Text>
            </View>
          ))}

          {/* Botão de inscrição */}
          <TouchableOpacity
            style={styles.enrollButton}
            onPress={() =>
              Linking.openURL("https://www.cps.sp.gov.br/fatec/vestibular/")
            }
          >
            <Ionicons name="school" size={20} color="#fff" />
            <Text style={styles.enrollButtonText}>
              Inscreva-se no Vestibular
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  // Lista de cursos
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Ionicons name="school" size={32} color="#d00" />
          <Text style={styles.headerTitle}>Cursos</Text>
        </View>
        <Text style={styles.headerSubtitle}>6 cursos tecnólogos gratuitos</Text>
      </View>

      <View style={styles.coursesContainer}>
        {Object.values(cursos).map((curso) => (
          <TouchableOpacity
            key={curso.id}
            style={styles.courseCard}
            onPress={() => router.push(`/educacao?curso=${curso.id}`)}
          >
            <View style={styles.courseCardHeader}>
              <View
                style={[
                  styles.courseIconWrapper,
                  { backgroundColor: curso.badgeColor + "15" },
                ]}
              >
                <Ionicons
                  name={curso.icone}
                  size={24}
                  color={curso.badgeColor}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.coursePeriodo}>{curso.periodo}</Text>
                <Text style={styles.courseTitle}>{curso.titulo}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#999" />
            </View>
            <View
              style={[
                styles.courseCardBadge,
                { backgroundColor: curso.badgeColor },
              ]}
            >
              <Text style={styles.courseCardBadgeText}>{curso.badge}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Card informativo */}
      <View style={styles.infoCard}>
        <Ionicons name="information-circle" size={24} color="#d00" />
        <View style={{ flex: 1 }}>
          <Text style={styles.infoCardTitle}>Vestibular 2026</Text>
          <Text style={styles.infoCardText}>
            Inscrições abertas até 10 de dezembro. Processo seletivo com 320
            vagas.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f7",
  },
  header: {
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1a1a1a",
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 15,
    color: "#666",
    fontWeight: "500",
  },
  coursesContainer: {
    padding: 20,
    gap: 16,
  },
  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  courseCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  courseIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  coursePeriodo: {
    fontSize: 13,
    color: "#666",
    fontWeight: "600",
    marginBottom: 4,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: -0.2,
  },
  courseCardBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  courseCardBadgeText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  infoCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 16,
    gap: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#d00",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  infoCardText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },

  // Estilos para detalhes do curso
  detailHeader: {
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff5f5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  detailHeaderContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  detailBadgeText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  detailContent: {
    padding: 24,
  },
  detailTitleSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  detailIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#fff5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  detailPeriodo: {
    fontSize: 15,
    color: "#666",
    fontWeight: "600",
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  contentSection: {
    marginBottom: 24,
  },
  contentSubtitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#d00",
    marginBottom: 12,
    letterSpacing: -0.2,
  },
  contentText: {
    fontSize: 15,
    color: "#4a4a4a",
    lineHeight: 24,
    textAlign: "justify",
  },
  enrollButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#d00",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 16,
    shadowColor: "#d00",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  enrollButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
  },
});
