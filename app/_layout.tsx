import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          height: 70,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
        tabBarActiveTintColor: "#dd1e1eff",
        tabBarInactiveTintColor: "#999",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "index":
              iconName = "home";
              break;
            case "cultura":
              iconName = "color-palette";
              break;
            case "educacao":
              iconName = "book";
              break;
            case "empregos":
              iconName = "briefcase";
              break;
            case "seguranca":
              iconName = "shield-checkmark";
              break;
            case "perfil":
              iconName = "person-circle";
              break;
            default:
              iconName = "ellipse";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="cultura"
        options={{
          title: "Cultura",
          tabBarLabel: "Cultura",
        }}
      />
      <Tabs.Screen
        name="educacao"
        options={{
          title: "Educação",
          tabBarLabel: "Educação",
        }}
      />
      <Tabs.Screen
        name="empregos"
        options={{
          title: "Empregos",
          tabBarLabel: "Empregos",
        }}
      />
      <Tabs.Screen
        name="seguranca"
        options={{
          title: "Segurança",
          tabBarLabel: "Segurança",
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarLabel: "Perfil",
        }}
      />
    </Tabs>
  );
}
