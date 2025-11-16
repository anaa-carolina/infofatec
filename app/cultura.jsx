import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, router } from "expo-router";

export default function Cultura() {
  const params = useLocalSearchParams();
  const noticiaId = params.noticia;

  // Dados das notícias
  const noticias = {
    "semana-tecnologia": {
      id: "semana-tecnologia",
      titulo: "Semana de Tecnologia",
      data: "20 de Novembro",
      icone: "calendar",
      badge: "Evento",
      badgeColor: "#d00",
      conteudo: [
        {
          subtitulo: "O que é?",
          texto: "A Semana de Tecnologia da Fatec Cotia é um evento anual que reúne estudantes, professores e profissionais da área de tecnologia para compartilhar conhecimento e experiências. É uma oportunidade única para aprender sobre as últimas tendências em desenvolvimento de software, ciência de dados e inovação tecnológica."
        },
        {
          subtitulo: "Programação",
          texto: "O evento contará com palestras ministradas por profissionais renomados do mercado, workshops práticos de programação em diversas linguagens, maratonas de programação com premiações para os melhores times, e sessões de networking para conectar estudantes com empresas parceiras."
        },
        {
          subtitulo: "Como Participar",
          texto: "As inscrições são gratuitas e abertas ao público em geral. Estudantes da Fatec Cotia têm prioridade nas vagas limitadas dos workshops. Para se inscrever, acesse o site da Fatec Cotia ou procure a secretaria acadêmica. Os participantes receberão certificado de presença."
        },
        {
          subtitulo: "Local e Horário",
          texto: "O evento acontecerá no campus da Fatec Cotia, das 8h às 18h. Haverá coffee break pela manhã e à tarde, além de sorteios de brindes ao longo do dia. Não perca essa oportunidade de ampliar seus conhecimentos e fazer networking!"
        }
      ]
    },
    "parcerias-empresariais": {
      id: "parcerias-empresariais",
      titulo: "Novas Parcerias Empresariais",
      data: "Novembro 2025",
      icone: "briefcase",
      badge: "Parceria",
      badgeColor: "#0066cc",
      conteudo: [
        {
          subtitulo: "Sobre as Parcerias",
          texto: "A Fatec Cotia firmou novos convênios estratégicos com empresas líderes da região metropolitana de São Paulo. Essas parcerias têm como objetivo proporcionar aos alunos experiências práticas no mercado de trabalho, alinhando a formação acadêmica com as demandas reais do setor produtivo."
        },
        {
          subtitulo: "Empresas Parceiras",
          texto: "Entre as empresas parceiras estão startups de tecnologia, indústrias de transformação, empresas de logística e comércio exterior. Cada parceria foi desenhada para atender às especificidades dos seis cursos oferecidos pela instituição, garantindo oportunidades em todas as áreas de formação."
        },
        {
          subtitulo: "Oportunidades para Estudantes",
          texto: "Os convênios incluem vagas de estágio remunerado, programas de trainee, projetos conjuntos de pesquisa e desenvolvimento, visitas técnicas, palestras com profissionais do mercado e possibilidade de efetivação após a conclusão do curso. Os estudantes terão acesso a tecnologias de ponta e metodologias utilizadas no mercado."
        },
        {
          subtitulo: "Como se Candidatar",
          texto: "Os estudantes interessados devem manter o cadastro atualizado no sistema da Fatec e ficar atentos aos comunicados da coordenação de cada curso. As vagas serão divulgadas por e-mail e nos murais da faculdade. É importante ter bom desempenho acadêmico e participar ativamente das atividades da instituição."
        }
      ]
    },
    "vestibular-2026": {
      id: "vestibular-2026",
      titulo: "Inscrições Abertas para o Vestibular 2026",
      data: "Até 10 de Dezembro",
      icone: "school",
      badge: "Vestibular",
      badgeColor: "#00a86b",
      conteudo: [
        {
          subtitulo: "Sobre o Vestibular",
          texto: "O Vestibular da Fatec Cotia é a porta de entrada para cursos superiores gratuitos de excelência. O processo seletivo é realizado duas vezes ao ano e oferece 320 vagas distribuídas entre os seis cursos da instituição. A prova é elaborada pelo Centro Paula Souza e avalia conhecimentos gerais e específicos."
        },
        {
          subtitulo: "Cursos Disponíveis",
          texto: "São oferecidos cursos nas áreas de Tecnologia da Informação (Ciências de Dados e Desenvolvimento de Software Multiplataforma), Gestão (Gestão Empresarial e Gestão da Produção Industrial), Negócios (Comércio Exterior) e Design (Design de Produto). Todos os cursos são tecnólogos com duração de 3 anos."
        },
        {
          subtitulo: "Como se Inscrever",
          texto: "As inscrições devem ser realizadas exclusivamente pela internet, no site do Vestibular da Fatec. É necessário pagar uma taxa de inscrição (com isenção disponível para candidatos de baixa renda). O candidato pode escolher até duas opções de curso, em ordem de preferência. A prova será realizada em data única para todos os cursos."
        },
        {
          subtitulo: "Preparação e Dicas",
          texto: "Recomenda-se estudar as provas anteriores disponíveis no site da Fatec, focar em disciplinas como Português, Matemática, Inglês e conhecimentos gerais. A Fatec Cotia oferece cursinho preparatório gratuito para candidatos interessados. Fique atento aos prazos e não deixe para a última hora!"
        }
      ]
    }
  };

  // Se houver um ID de notícia, mostrar detalhes
  if (noticiaId && noticias[noticiaId]) {
    const noticia = noticias[noticiaId];
    
    return (
      <ScrollView 
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header com botão de voltar - AQUI ESTÁ A MUDANÇA */}
        <View style={styles.detailHeader}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.push('/cultura')}
          >
            <Ionicons name="arrow-back" size={24} color="#d00" />
          </TouchableOpacity>
          <View style={styles.detailHeaderContent}>
            <View style={[styles.detailBadge, { backgroundColor: noticia.badgeColor }]}>
              <Text style={styles.detailBadgeText}>{noticia.badge.toUpperCase()}</Text>
            </View>
          </View>
        </View>

        {/* Conteúdo da notícia */}
        <View style={styles.detailContent}>
          <View style={styles.detailTitleSection}>
            <View style={styles.detailIconWrapper}>
              <Ionicons name={noticia.icone} size={24} color="#d00" />
            </View>
            <Text style={styles.detailDate}>{noticia.data}</Text>
          </View>
          
          <Text style={styles.detailTitle}>{noticia.titulo}</Text>

          {noticia.conteudo.map((secao, index) => (
            <View key={index} style={styles.contentSection}>
              <Text style={styles.contentSubtitle}>{secao.subtitulo}</Text>
              <Text style={styles.contentText}>{secao.texto}</Text>
            </View>
          ))}

          {/* Botão de compartilhar */}
          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-social" size={20} color="#d00" />
            <Text style={styles.shareButtonText}>Compartilhar Notícia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  // Lista de notícias
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Ionicons name="newspaper" size={32} color="#d00" />
          <Text style={styles.headerTitle}>Notícias</Text>
        </View>
      </View>

      <View style={styles.newsContainer}>
        {Object.values(noticias).map((noticia) => (
          <TouchableOpacity
            key={noticia.id}
            style={styles.newsCard}
            onPress={() => router.push(`/cultura?noticia=${noticia.id}`)}
          >
            <View style={styles.newsCardHeader}>
              <View style={styles.newsIconWrapper}>
                <Ionicons name={noticia.icone} size={20} color="#d00" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.newsDate}>{noticia.data}</Text>
                <Text style={styles.newsTitle}>{noticia.titulo}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#999" />
            </View>
            <View style={[styles.newsCardBadge, { backgroundColor: noticia.badgeColor }]}>
              <Text style={styles.newsCardBadgeText}>{noticia.badge}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1a1a1a",
    letterSpacing: -0.5,
  },
  newsContainer: {
    padding: 20,
    gap: 16,
  },
  newsCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  newsCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  newsIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  newsDate: {
    fontSize: 13,
    color: "#666",
    fontWeight: "600",
    marginBottom: 4,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: -0.2,
  },
  newsCardBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  newsCardBadgeText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  // Estilos para detalhes da notícia
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
  detailDate: {
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
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#fff5f5",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ffe0e0",
  },
  shareButtonText: {
    fontSize: 16,
    color: "#d00",
    fontWeight: "600",
  },
});