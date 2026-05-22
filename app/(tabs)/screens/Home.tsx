import React, { useEffect, useState } from "react"; // Added useState and useEffect
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const flashSales = [
  {
    id: 1,
    name: "Fresh Pork Belly",
    price: "₱280/kg",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f",
  },
  {
    id: 2,
    name: "Chicken Wings",
    price: "₱180/kg",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
  },
];

const HomeScreen: React.FC = () => {
  // --- REAL-TIME TIMER LOGIC START ---
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Set target to 2 hours, 15 mins, 45 seconds from now for demonstration
    const targetTime = new Date().getTime() + (2 * 60 * 60 * 1000) + (15 * 60 * 1000) + (45 * 1000);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("00 : 00 : 00");
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format with leading zeros
      const h = hours < 10 ? `0${hours}` : hours;
      const m = minutes < 10 ? `0${minutes}` : minutes;
      const s = seconds < 10 ? `0${seconds}` : seconds;

      setTimeLeft(`${h} : ${m} : ${s}`);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  // --- REAL-TIME TIMER LOGIC END ---

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        {/* TOP SEARCH AREA */}
        <View style={styles.searchContainer}>
          <View style={styles.searchRow}>
            <TextInput
              style={styles.search}
              placeholder="Search meat products..."
              placeholderTextColor="#777"
            />
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.topIcon}>🛒</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.topIcon}>💬</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.contentWrapper}>
          <ImageBackground
            source={{ uri: "https://images.unsplash.com/photo-1603048297172-c92544798d5a" }}
            style={styles.heroSection}
            imageStyle={{ borderRadius: 20 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.heroTitle}>One Stop Meatshop</Text>
              <Text style={styles.heroSubtitle}>
                Fresh • Clean • Affordable Meat Products
              </Text>
              <TouchableOpacity
                style={styles.heroButton}
                onPress={() => Alert.alert("Welcome", "Start shopping now!")}
              >
                <Text style={styles.heroButtonText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* FLASH SALES */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>⚡ Flash Sales</Text>
              <View style={styles.timerBox}>
                {/* Dynamically display the timeLeft state */}
                <Text style={styles.timerText}>{timeLeft || "00 : 00 : 00"}</Text>
              </View>
            </View>

            <Text style={styles.saleEnds}>
              Ends soon! Don't miss out.
            </Text>

            {flashSales.map((item) => (
              <View key={item.id} style={styles.flashCard}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.flashImage}
                  resizeMode="cover"
                />
                <View style={styles.flashInfo}>
                  <Text style={styles.flashName}>{item.name}</Text>
                  <Text style={styles.flashOldPrice}>₱350/kg</Text>
                  <Text style={styles.flashPrice}>{item.price}</Text>
                  <TouchableOpacity
                    style={styles.buyButton}
                    onPress={() => Alert.alert("Added", `${item.name} added to cart`)}
                  >
                    <Text style={styles.buyButtonText}>Buy Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* WHY CHOOSE US */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Why Choose Us?</Text>
            <View style={styles.whyCard}>
              <Text style={styles.whyEmoji}>🥩</Text>
              <View>
                <Text style={styles.whyTitle}>Fresh Meat Everyday</Text>
                <Text style={styles.whyText}>We provide freshly delivered meat daily.</Text>
              </View>
            </View>
            <View style={styles.whyCard}>
              <Text style={styles.whyEmoji}>🚚</Text>
              <View>
                <Text style={styles.whyTitle}>Fast Delivery</Text>
                <Text style={styles.whyText}>Quick and safe delivery to your doorstep.</Text>
              </View>
            </View>
            <View style={styles.whyCard}>
              <Text style={styles.whyEmoji}>💰</Text>
              <View>
                <Text style={styles.whyTitle}>Affordable Prices</Text>
                <Text style={styles.whyText}>Budget-friendly prices with quality products.</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🛍️</Text>
          <Text style={styles.navText}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔔</Text>
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

// STYLES REMAIN UNCHANGED
const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: "#8c2a2a" },
  container: { flex: 1, marginTop: 35 },
  searchContainer: { backgroundColor: "#8c2a2a", paddingTop: 15, paddingHorizontal: 15, paddingBottom: 25, borderTopLeftRadius: 35, borderTopRightRadius: 35 },
  searchRow: { flexDirection: "row", alignItems: "center" },
  search: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 15, height: 48, borderRadius: 12 },
  iconButton: { marginLeft: 10, backgroundColor: "#ffffff25", width: 48, height: 48, borderRadius: 12, justifyContent: "center", alignItems: "center" },
  topIcon: { fontSize: 22, color: "#fff" },
  contentWrapper: { backgroundColor: "#f5f5f5", borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 15 },
  heroSection: { height: 240, justifyContent: "center", marginBottom: 20 },
  overlay: { backgroundColor: "rgba(0,0,0,0.45)", flex: 1, borderRadius: 20, justifyContent: "center", padding: 20 },
  heroTitle: { color: "#fff", fontSize: 30, fontWeight: "bold" },
  heroSubtitle: { color: "#fff", marginTop: 10, fontSize: 15, width: "80%" },
  heroButton: { backgroundColor: "#D32F2F", marginTop: 20, padding: 12, borderRadius: 10, width: 140, alignItems: "center" },
  heroButtonText: { color: "#fff", fontWeight: "bold" },
  section: { backgroundColor: "#fff", padding: 15, borderRadius: 18, marginBottom: 20 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },
  sectionTitle: { fontSize: 20, fontWeight: "bold" },
  timerBox: { backgroundColor: "#D32F2F", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  timerText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  saleEnds: { color: "#777", marginBottom: 15, fontSize: 13 },
  flashCard: { flexDirection: "row", backgroundColor: "#fafafa", borderRadius: 15, marginBottom: 15, overflow: "hidden", borderWidth: 1, borderColor: "#eee", minHeight: 160 },
  flashImage: { width: 120, height: "100%" },
  flashInfo: { flex: 1, padding: 15, justifyContent: "space-between" },
  flashName: { fontSize: 18, fontWeight: "bold" },
  flashOldPrice: { textDecorationLine: "line-through", color: "#999", marginTop: 5 },
  flashPrice: { color: "#2E7D32", marginVertical: 8, fontWeight: "bold" },
  buyButton: { backgroundColor: "#D32F2F", padding: 10, borderRadius: 8, alignItems: "center", width: 110 },
  buyButtonText: { color: "#fff", fontWeight: "bold" },
  whyCard: { flexDirection: "row", alignItems: "center", marginBottom: 18 },
  whyEmoji: { fontSize: 38, marginRight: 15 },
  whyTitle: { fontSize: 17, fontWeight: "bold" },
  whyText: { color: "#666", marginTop: 3, width: "90%" },
  navbar: { position: "absolute", bottom: 0, width: "100%", backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-around", paddingVertical: 12, borderTopWidth: 1, borderColor: "#ddd" },
  navItem: { alignItems: "center" },
  navIcon: { fontSize: 22 },
  navText: { fontSize: 12, color: "#777", marginTop: 3 },
  navActive: { fontSize: 12, color: "#D32F2F", fontWeight: "bold", marginTop: 3 },
});