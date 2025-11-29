import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const COURSES = [
  {
    id: "desenvolvimento-software",
    nome: "Desenvolvimento de Software Multiplataforma",
    color: "#d00",
    icon: "code",
  },
  {
    id: "gestao-empresarial",
    nome: "Gestão Empresarial",
    color: "#0066cc",
    icon: "briefcase",
  },
  {
    id: "gestao-producao-industrial",
    nome: "Gestão da Produção Industrial",
    color: "#f59e0b",
    icon: "construct",
  },
  {
    id: "design-produto",
    nome: "Design de Produto",
    color: "#ec4899",
    icon: "color-palette",
  },
  {
    id: "logistica",
    nome: "Logística",
    color: "#10b981",
    icon: "cube",
  },
  {
    id: "recursos-humanos",
    nome: "Gestão de Recursos Humanos",
    color: "#8b5cf6",
    icon: "people",
  },
];

const QUESTIONS = [
  {
    id: 1,
    texto: "Qual matéria da escola você mais gostava?",
    respostas: [
      {
        texto: "Matemática ou Física",
        scores: {
          "desenvolvimento-software": 25,
          "gestao-empresarial": 10,
          "gestao-producao-industrial": 20,
          "design-produto": 5,
        },
      },
      {
        texto: "História ou Geografia",
        scores: {
          "desenvolvimento-software": 5,
          "gestao-empresarial": 25,
          "gestao-producao-industrial": 10,
          "design-produto": 10,
        },
      },
      {
        texto: "Artes ou Educação Física",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 10,
          "gestao-producao-industrial": 10,
          "design-produto": 25,
        },
      },
      {
        texto: "Português ou Línguas",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 20,
          "gestao-producao-industrial": 15,
          "design-produto": 20,
        },
      },
    ],
  },
  {
    id: 2,
    texto: "No seu tempo livre, o que você costuma fazer?",
    respostas: [
      {
        texto: "Assistir séries, filmes ou jogar videogame",
        scores: {
          "desenvolvimento-software": 20,
          "gestao-empresarial": 10,
          "gestao-producao-industrial": 10,
          "design-produto": 15,
        },
      },
      {
        texto: "Ler artigos, notícias ou aprender coisas novas online",
        scores: {
          "desenvolvimento-software": 15,
          "gestao-empresarial": 20,
          "gestao-producao-industrial": 15,
          "design-produto": 10,
        },
      },
      {
        texto: "Desenhar, fotografar ou criar conteúdo visual",
        scores: {
          "desenvolvimento-software": 5,
          "gestao-empresarial": 10,
          "gestao-producao-industrial": 10,
          "design-produto": 30,
        },
      },
      {
        texto: "Sair com amigos, socializar ou fazer esportes",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 25,
          "gestao-producao-industrial": 15,
          "design-produto": 15,
        },
      },
    ],
  },
  {
    id: 3,
    texto: "Quando você tem um problema, como geralmente reage?",
    respostas: [
      {
        texto: "Analiso dados e informações antes de decidir",
        scores: {
          "desenvolvimento-software": 20,
          "gestao-empresarial": 15,
          "gestao-producao-industrial": 20,
          "design-produto": 10,
        },
      },
      {
        texto: "Paro e respiro para pensar com clareza",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 20,
          "gestao-producao-industrial": 25,
          "design-produto": 10,
        },
      },
      {
        texto: "Confio na minha intuição e criatividade",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 10,
          "gestao-producao-industrial": 10,
          "design-produto": 25,
        },
      },
      {
        texto: "Peço ajuda e consulto outras pessoas",
        scores: {
          "desenvolvimento-software": 5,
          "gestao-empresarial": 25,
          "gestao-producao-industrial": 15,
          "design-produto": 15,
        },
      },
    ],
  },
  {
    id: 4,
    texto: "O que você considera mais importante em uma profissão?",
    respostas: [
      {
        texto: "Utilidade - saber que faz diferença no mundo",
        scores: {
          "desenvolvimento-software": 20,
          "gestao-empresarial": 15,
          "gestao-producao-industrial": 20,
          "design-produto": 20,
        },
      },
      {
        texto: "Estabilidade - rotina previsível e segura",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 25,
          "gestao-producao-industrial": 30,
          "design-produto": 10,
        },
      },
      {
        texto: "Liberdade - flexibilidade para fazer do seu jeito",
        scores: {
          "desenvolvimento-software": 25,
          "gestao-empresarial": 10,
          "gestao-producao-industrial": 10,
          "design-produto": 25,
        },
      },
      {
        texto: "Reconhecimento - ser valorizado pelo que faz",
        scores: {
          "desenvolvimento-software": 20,
          "gestao-empresarial": 25,
          "gestao-producao-industrial": 15,
          "design-produto": 20,
        },
      },
    ],
  },
  {
    id: 5,
    texto: "Como você se sente diante de novas tecnologias?",
    respostas: [
      {
        texto: "Fascinado e sempre querendo aprender mais",
        scores: {
          "desenvolvimento-software": 30,
          "gestao-empresarial": 15,
          "gestao-producao-industrial": 15,
          "design-produto": 15,
        },
      },
      {
        texto: "Confortável em usar, mas sem necessidade de dominar",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 25,
          "gestao-producao-industrial": 20,
          "design-produto": 15,
        },
      },
      {
        texto: "Prefiro coisas mais tangíveis e práticas",
        scores: {
          "desenvolvimento-software": 5,
          "gestao-empresarial": 10,
          "gestao-producao-industrial": 30,
          "design-produto": 10,
        },
      },
      {
        texto: "Vejo como ferramenta para expressar ideias",
        scores: {
          "desenvolvimento-software": 15,
          "gestao-empresarial": 10,
          "gestao-producao-industrial": 10,
          "design-produto": 30,
        },
      },
    ],
  },
  {
    id: 6,
    texto: "Em qual ambiente você se sentiria mais produtivo?",
    respostas: [
      {
        texto: "Em casa, em um escritório, ou um local tranquilo",
        scores: {
          "desenvolvimento-software": 25,
          "gestao-empresarial": 15,
          "gestao-producao-industrial": 15,
          "design-produto": 20,
        },
      },
      {
        texto: "Em um escritório estruturado com rotina clara",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 30,
          "gestao-producao-industrial": 25,
          "design-produto": 10,
        },
      },
      {
        texto: "Em um espaço criativo e com pessoas ao redor",
        scores: {
          "desenvolvimento-software": 15,
          "gestao-empresarial": 15,
          "gestao-producao-industrial": 10,
          "design-produto": 30,
        },
      },
      {
        texto: "Não importa muito, desde que tenha liberdade",
        scores: {
          "desenvolvimento-software": 20,
          "gestao-empresarial": 15,
          "gestao-producao-industrial": 15,
          "design-produto": 15,
        },
      },
    ],
  },
  {
    id: 7,
    texto: "Se pudesse escolher um projeto para trabalhar, qual seria?",
    respostas: [
      {
        texto: "Algo que ninguém fez antes, quebra paradigmas",
        scores: {
          "desenvolvimento-software": 25,
          "gestao-empresarial": 15,
          "gestao-producao-industrial": 15,
          "design-produto": 25,
        },
      },
      {
        texto: "Otimizar e melhorar o que já existe",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 20,
          "gestao-producao-industrial": 30,
          "design-produto": 10,
        },
      },
      {
        texto: "Algo com impacto social ou ambiental",
        scores: {
          "desenvolvimento-software": 20,
          "gestao-empresarial": 20,
          "gestao-producao-industrial": 20,
          "design-produto": 20,
        },
      },
      {
        texto: "Um projeto que me dê poder de decisão e liderança",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 30,
          "gestao-producao-industrial": 20,
          "design-produto": 10,
        },
      },
    ],
  },
  {
    id: 8,
    texto: "Como você aprende melhor?",
    respostas: [
      {
        texto: "Fazendo - aprendendo na prática",
        scores: {
          "desenvolvimento-software": 20,
          "gestao-empresarial": 15,
          "gestao-producao-industrial": 25,
          "design-produto": 20,
        },
      },
      {
        texto: "Observando e imitando",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 20,
          "gestao-producao-industrial": 15,
          "design-produto": 25,
        },
      },
      {
        texto: "Estudando e entendendo a teoria",
        scores: {
          "desenvolvimento-software": 25,
          "gestao-empresarial": 20,
          "gestao-producao-industrial": 15,
          "design-produto": 10,
        },
      },
      {
        texto: "Conversando e trocando ideias",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 25,
          "gestao-producao-industrial": 15,
          "design-produto": 20,
        },
      },
    ],
  },
  {
    id: 9,
    texto: "Qual dessas pessoas você mais admira?",
    respostas: [
      {
        texto: "Empreendedores e inovadores que criam coisas novas",
        scores: {
          "desenvolvimento-software": 25,
          "gestao-empresarial": 20,
          "gestao-producao-industrial": 15,
          "design-produto": 25,
        },
      },
      {
        texto: "Líderes que inspiram e motivam equipes",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 30,
          "gestao-producao-industrial": 20,
          "design-produto": 10,
        },
      },
      {
        texto: "Especialistas respeitados em sua área",
        scores: {
          "desenvolvimento-software": 25,
          "gestao-empresarial": 15,
          "gestao-producao-industrial": 20,
          "design-produto": 15,
        },
      },
      {
        texto: "Criadores e artistas que influenciam cultura",
        scores: {
          "desenvolvimento-software": 10,
          "gestao-empresarial": 10,
          "gestao-producao-industrial": 10,
          "design-produto": 30,
        },
      },
    ],
  },
  {
    id: 10,
    texto: "Se tivesse que descrever seu maior desafio pessoal, seria...?",
    respostas: [
      {
        texto: "Manter a paciência com tarefas repetitivas",
        scores: {
          "desenvolvimento-software": 15,
          "gestao-empresarial": 15,
          "gestao-producao-industrial": 25,
          "design-produto": 15,
        },
      },
      {
        texto: "Aceitar críticas ou falhas no processo",
        scores: {
          "desenvolvimento-software": 15,
          "gestao-empresarial": 15,
          "gestao-producao-industrial": 15,
          "design-produto": 25,
        },
      },
      {
        texto: "Delegar tarefas e confiar em outras pessoas",
        scores: {
          "desenvolvimento-software": 15,
          "gestao-empresarial": 25,
          "gestao-producao-industrial": 20,
          "design-produto": 10,
        },
      },
      {
        texto: "Manter-se organizado e cumprir prazos",
        scores: {
          "desenvolvimento-software": 25,
          "gestao-empresarial": 20,
          "gestao-producao-industrial": 20,
          "design-produto": 15,
        },
      },
    ],
  },
];

export default function Teste() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    "desenvolvimento-software": 0,
    "gestao-empresarial": 0,
    "gestao-producao-industrial": 0,
    "design-produto": 0,
  });
  const [completed, setCompleted] = useState(false);
  const [started, setStarted] = useState(false);
  const [answersHistory, setAnswersHistory] = useState([]);

  const handleAnswer = (selectedScores) => {
    const newScores = { ...scores };
    Object.keys(selectedScores).forEach((courseId) => {
      newScores[courseId] += selectedScores[courseId];
    });
    setScores(newScores);
    setAnswersHistory([...answersHistory, selectedScores]);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      const lastAnswer = answersHistory[currentQuestion - 1];
      const newScores = { ...scores };

      Object.keys(lastAnswer).forEach((courseId) => {
        newScores[courseId] -= lastAnswer[courseId];
      });

      setScores(newScores);
      setAnswersHistory(answersHistory.slice(0, -1));
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculatePercentages = () => {
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    return Object.keys(scores).reduce((acc, courseId) => {
      let percentage =
        total > 0 ? Math.round((scores[courseId] / total) * 100) : 0;
      // Garante que valores negativos sejam exibidos como 0
      acc[courseId] = Math.max(percentage, 0);
      return acc;
    }, {});
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScores({
      "desenvolvimento-software": 0,
      "gestao-empresarial": 0,
      "gestao-producao-industrial": 0,
      "design-produto": 0,
    });
    setCompleted(false);
    setStarted(false);
    setAnswersHistory([]);
  };

  // Tela de introdução
  if (!started) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="#d00" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Teste Vocacional</Text>
        </View>

        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View style={styles.introContainer}>
            <View style={styles.iconWrapper}>
              <Ionicons name="compass" size={64} color="#d00" />
            </View>

            <Text style={styles.introTitle}>Descubra Sua Vocação</Text>

            <View style={styles.descriptionCard}>
              <View style={styles.descriptionSection}>
                <Text style={styles.sectionTitle}>O que é?</Text>
                <Text style={styles.sectionText}>
                  O Teste Vocacional é uma ferramenta interativa que ajuda você
                  a identificar qual dos nossos cursos se alinha melhor com seus
                  interesses, habilidades e perfil profissional.
                </Text>
              </View>

              <View style={styles.descriptionSection}>
                <Text style={styles.sectionTitle}>Como funciona?</Text>
                <Text style={styles.sectionText}>
                  Você responderá 10 perguntas sobre seus interesses, pontos
                  fortes, preferências e estilo de trabalho. Com base em suas
                  respostas, o teste calculará sua compatibilidade com cada um
                  dos nossos 4 cursos oferecidos.
                </Text>
              </View>

              <View style={styles.descriptionSection}>
                <Text style={styles.sectionTitle}>O que você receberá?</Text>
                <View style={styles.benefitsList}>
                  <View style={styles.benefitItem}>
                    <Ionicons name="checkmark-circle" size={20} color="#d00" />
                    <Text style={styles.benefitText}>
                      Resultado detalhado de compatibilidade
                    </Text>
                  </View>
                  <View style={styles.benefitItem}>
                    <Ionicons name="checkmark-circle" size={20} color="#d00" />
                    <Text style={styles.benefitText}>
                      Recomendações personalizadas
                    </Text>
                  </View>
                  <View style={styles.benefitItem}>
                    <Ionicons name="checkmark-circle" size={20} color="#d00" />
                    <Text style={styles.benefitText}>
                      Insights sobre sua vocação
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.infoBox}>
                <Ionicons name="information-circle" size={20} color="#0066cc" />
                <Text style={styles.infoText}>
                  Leva apenas 5-10 minutos para completar. Seja honesto em suas
                  respostas para obter os melhores resultados!
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.startButton}
              onPress={() => setStarted(true)}
            >
              <Text style={styles.startButtonText}>Iniciar Teste</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  // Tela do teste
  if (!completed) {
    const question = QUESTIONS[currentQuestion];
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setStarted(false)}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="#d00" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Teste Vocacional</Text>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%`,
                },
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            Pergunta {currentQuestion + 1} de {QUESTIONS.length}
          </Text>

          <Text style={styles.questionText}>{question.texto}</Text>

          <View style={styles.answersContainer}>
            {question.respostas.map((resposta, index) => (
              <TouchableOpacity
                key={index}
                style={styles.answerButton}
                onPress={() => handleAnswer(resposta.scores)}
              >
                <Text style={styles.answerText}>{resposta.texto}</Text>
                <Ionicons name="arrow-forward" size={20} color="#d00" />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.navigationContainer}>
            {currentQuestion > 0 && (
              <TouchableOpacity
                style={[styles.navButton, styles.prevButton]}
                onPress={handlePreviousQuestion}
              >
                <Ionicons name="chevron-back" size={20} color="#d00" />
                <Text style={styles.prevButtonText}>Pergunta Anterior</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }

  // Tela de resultado
  const percentages = calculatePercentages();
  const sortedCourses = COURSES.sort(
    (a, b) => percentages[b.id] - percentages[a.id]
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#d00" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Resultado</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>
            Sua compatibilidade com os cursos:
          </Text>
        </View>

        {COURSES.map((course) => {
          const coursePercentage = percentages[course.id] || 0;
          return (
            <View key={course.id} style={styles.courseResultCard}>
              <View style={styles.courseResultHeader}>
                <View
                  style={[
                    styles.courseResultIcon,
                    { backgroundColor: course.color + "20" },
                  ]}
                >
                  <Ionicons name={course.icon} size={24} color={course.color} />
                </View>
                <View style={styles.courseResultInfo}>
                  <Text style={styles.courseResultName}>{course.nome}</Text>
                  <Text style={styles.courseResultPercentage}>
                    {coursePercentage}% de compatibilidade
                  </Text>
                </View>
              </View>

              <View style={styles.progressBarContainer}>
                <View style={styles.barBackground}>
                  <View
                    style={[
                      styles.barFill,
                      {
                        width:
                          coursePercentage > 0 ? `${coursePercentage}%` : "0%",
                        backgroundColor: course.color,
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
          );
        })}

        <View style={styles.recommendationBox}>
          <View style={styles.recommendationHeader}>
            <Ionicons name="star" size={20} color="#f59e0b" />
            <Text style={styles.recommendationTitle}>Top Recomendação</Text>
          </View>
          <Text style={styles.recommendationText}>
            Com base nas suas respostas, você tem maior compatibilidade com:
          </Text>
          <View style={styles.topCourseCard}>
            <View
              style={[
                styles.topCourseIcon,
                { backgroundColor: sortedCourses[0].color + "20" },
              ]}
            >
              <Ionicons
                name={sortedCourses[0].icon}
                size={28}
                color={sortedCourses[0].color}
              />
            </View>
            <View style={styles.topCourseInfo}>
              <Text style={styles.topCourseName}>{sortedCourses[0].nome}</Text>
              <Text
                style={[
                  styles.topCoursePercentage,
                  { color: sortedCourses[0].color },
                ]}
              >
                {percentages[sortedCourses[0].id]}%
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={() => {
              router.push("/educacao");
            }}
          >
            <Ionicons name="book" size={20} color="#fff" />
            <Text style={styles.buttonText}>Ver Cursos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonSecondary]}
            onPress={handleReset}
          >
            <Ionicons name="refresh" size={20} color="#d00" />
            <Text style={[styles.buttonText, { color: "#d00" }]}>
              Refazer Teste
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff5f5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1a1a1a",
    letterSpacing: -0.5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  introContainer: {
    alignItems: "center",
  },
  iconWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#fff5f5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  introTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: 24,
    textAlign: "center",
    letterSpacing: -0.5,
  },
  descriptionCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  descriptionSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#d00",
    marginBottom: 8,
    letterSpacing: -0.2,
  },
  sectionText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
    textAlign: "justify",
  },
  benefitsList: {
    gap: 12,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  benefitText: {
    fontSize: 14,
    color: "#4a4a4a",
    fontWeight: "500",
    flex: 1,
    paddingTop: 2,
  },
  infoBox: {
    flexDirection: "row",
    backgroundColor: "#e3f2fd",
    borderRadius: 12,
    padding: 16,
    gap: 12,
    alignItems: "flex-start",
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#0066cc",
  },
  infoText: {
    fontSize: 13,
    color: "#0066cc",
    fontWeight: "500",
    flex: 1,
    lineHeight: 20,
  },
  startButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#d00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: "100%",
    shadowColor: "#d00",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  progressBar: {
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    marginBottom: 12,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#d00",
    borderRadius: 3,
  },
  progressText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "600",
    marginBottom: 24,
  },
  questionText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 24,
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  answersContainer: {
    gap: 12,
    marginBottom: 24,
  },
  answerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: "#f0f0f0",
  },
  answerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    flex: 1,
  },
  navigationContainer: {
    marginTop: 24,
    marginBottom: 40,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  prevButton: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#d00",
  },
  prevButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#d00",
  },
  resultCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#d00",
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  courseResultCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  courseResultHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  courseResultIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  courseResultInfo: {
    flex: 1,
  },
  courseResultName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  courseResultPercentage: {
    fontSize: 13,
    fontWeight: "600",
    color: "#d00",
  },
  progressBarContainer: {
    gap: 8,
  },
  barBackground: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 4,
  },
  actionsContainer: {
    gap: 12,
    marginTop: 24,
    marginBottom: 24,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonPrimary: {
    backgroundColor: "#d00",
  },
  buttonSecondary: {
    backgroundColor: "#fff5f5",
    borderWidth: 2,
    borderColor: "#d00",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  recommendationBox: {
    backgroundColor: "#fffbf0",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: "#f59e0b",
  },
  recommendationHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#d97706",
    letterSpacing: -0.3,
  },
  recommendationText: {
    fontSize: 14,
    color: "#92400e",
    fontWeight: "500",
    marginBottom: 16,
    lineHeight: 20,
  },
  topCourseCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    gap: 12,
    borderWidth: 2,
    borderColor: "#fcd34d",
  },
  topCourseIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  topCourseInfo: {
    flex: 1,
  },
  topCourseName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  topCoursePercentage: {
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
});
