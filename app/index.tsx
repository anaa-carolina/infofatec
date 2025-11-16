import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>
      {/* Cabeçalho Moderno */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Fatec Cotia</Text>
          <Text style={styles.headerSubtitle}>Centro Paula Souza</Text>
        </View>
        <View style={styles.headerDecoration} />
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <View style={styles.aboutHeader}>
          <Ionicons name="information-circle" size={24} color="#d00" />
          <Text style={styles.aboutTitle}>Sobre a Instituição</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>Cursos</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>+320</Text>
            <Text style={styles.statLabel}>Vagas</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Gratuito</Text>
          </View>
        </View>

        <Text style={styles.aboutText}>
          Instituição pública de ensino superior com cursos em Ciências de
          Dados, Comércio Exterior, Desenvolvimento de Software, Design de
          Produto, Gestão Empresarial e Gestão da Produção Industrial.
        </Text>

        <View style={styles.highlightBox}>
          <Ionicons name="calendar-outline" size={18} color="#d00" />
          <Text style={styles.highlightText}>Vestibular 2x por ano</Text>
        </View>
      </View>

      {/* Notícias */}
      <View style={styles.newsHeader}>
        <Text style={styles.newsTitle}>Notícias Recentes</Text>
        <View style={styles.newsBadge}>
          <Text style={styles.newsBadgeText}>3 novas</Text>
        </View>
      </View>

      {/* Cards Modernos */}
      <View style={styles.cardList}>
        {/* Card 1 */}
        <View style={styles.card}>
          <View style={styles.cardImageContainer}>
            <Image
              source={{
                uri: "https://www.totvs.com/wp-content/uploads/2023/04/tecnologias-digitais.jpg",
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardBadge}>
              <Text style={styles.cardBadgeText}>EVENTO</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIconWrapper}>
                <Ionicons name="calendar" size={18} color="#d00" />
              </View>
              <Text style={styles.cardDate}>20 de Novembro</Text>
            </View>
            <Text style={styles.cardTitle}>Semana de Tecnologia</Text>
            <Text style={styles.cardDescription}>
              Palestras, workshops e maratonas de programação abertas ao
              público.
            </Text>
            <TouchableOpacity
              style={styles.cardFooter}
              onPress={() => router.push("/cultura?noticia=semana-tecnologia")}
            >
              <Text style={styles.cardLink}>Saiba mais</Text>
              <Ionicons name="arrow-forward" size={16} color="#d00" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <View style={styles.cardImageContainer}>
            <Image
              source={{
                uri: "https://blog.fecap.br/wp-content/uploads/FECAP-mercado-de-trabalho-em-tecnologia.jpg",
              }}
              style={styles.cardImage}
            />
            <View style={[styles.cardBadge, styles.cardBadgePartnership]}>
              <Text style={styles.cardBadgeText}>PARCERIA</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIconWrapper}>
                <Ionicons name="briefcase" size={18} color="#d00" />
              </View>
              <Text style={styles.cardDate}>Novembro 2025</Text>
            </View>
            <Text style={styles.cardTitle}>Novas Parcerias Empresariais</Text>
            <Text style={styles.cardDescription}>
              Convênios firmados com empresas da região para estágios e projetos
              conjuntos.
            </Text>
            <TouchableOpacity
              style={styles.cardFooter}
              onPress={() =>
                router.push("/cultura?noticia=parcerias-empresariais")
              }
            >
              <Text style={styles.cardLink}>Saiba mais</Text>
              <Ionicons name="arrow-forward" size={16} color="#d00" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <View style={styles.cardImageContainer}>
            <Image
              source={{
                uri: "https://www.fatec.edu.br/adamantina/wp-content/uploads/sites/10/2019/12/download-4.jpg",
              }}
              style={styles.cardImage}
            />
            <View style={[styles.cardBadge, styles.cardBadgeVestibular]}>
              <Text style={styles.cardBadgeText}>VESTIBULAR</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIconWrapper}>
                <Ionicons name="school" size={18} color="#d00" />
              </View>
              <Text style={styles.cardDate}>Até 10 de Dezembro</Text>
            </View>
            <Text style={styles.cardTitle}>Inscrições Abertas 2026</Text>
            <Text style={styles.cardDescription}>
              Cursos nas áreas de TI, Gestão e Logística. Não perca o prazo!
            </Text>
            <TouchableOpacity
              style={styles.cardFooter}
              onPress={() => router.push("/cultura?noticia=vestibular-2026")}
            >
              <Text style={styles.cardLink}>Inscreva-se</Text>
              <Ionicons name="arrow-forward" size={16} color="#d00" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Espaçamento final */}
      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f5f5f7",
  },
  container: {
    paddingBottom: 100,
  },

  // Header Moderno
  header: {
    backgroundColor: "#d00",
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
    position: "relative",
    overflow: "hidden",
  },
  headerContent: {
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.85)",
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  headerDecoration: {
    position: "absolute",
    right: -40,
    top: -40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },

  // About Section
  aboutSection: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  aboutHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: -0.3,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fafafa",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "800",
    color: "#d00",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  aboutText: {
    fontSize: 15,
    color: "#4a4a4a",
    lineHeight: 22,
    marginBottom: 16,
  },
  highlightBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff5f5",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: "#d00",
    gap: 10,
  },
  highlightText: {
    fontSize: 14,
    color: "#d00",
    fontWeight: "600",
  },

  // News Header
  newsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 16,
  },
  newsTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: -0.3,
  },
  newsBadge: {
    backgroundColor: "#d00",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  newsBadgeText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },

  // Cards Modernos
  cardList: {
    paddingHorizontal: 20,
    gap: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginBottom: 16,
  },
  cardImageContainer: {
    position: "relative",
    height: 160,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e8e8e8",
  },
  cardBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#d00",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  cardBadgePartnership: {
    backgroundColor: "#0066cc",
  },
  cardBadgeVestibular: {
    backgroundColor: "#00a86b",
  },
  cardBadgeText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  cardBody: {
    padding: 20,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 8,
  },
  cardIconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#fff5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  cardDate: {
    fontSize: 13,
    color: "#666",
    fontWeight: "600",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
    letterSpacing: -0.2,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  cardLink: {
    fontSize: 14,
    color: "#d00",
    fontWeight: "600",
  },
  bottomSpacer: {
    height: 20,
  },
});
