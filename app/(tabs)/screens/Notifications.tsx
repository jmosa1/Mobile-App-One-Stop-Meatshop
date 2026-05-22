import React from "react";
import {
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const notifications = [

  {
    id: "1",
    title: "Announcement",
    message: "Store will close early tomorrow for maintenance.",
    time: "Just now",
    icon: "📢",
    type: "announcement",
  },

  {
    id: "2",
    title: "Track Your Order",
    message: "Your Chicken Wings order is now being delivered.",
    time: "5 mins ago",
    icon: "🚚",
    type: "order",
  },

  {
    id: "3",
    title: "Payment Failed",
    message: "Your payment transaction was unsuccessful.",
    time: "12 mins ago",
    icon: "❌",
    type: "failed",
  },

  {
    id: "4",
    title: "Order Confirmed",
    message: "Fresh Pork Belly order confirmed successfully.",
    time: "20 mins ago",
    icon: "🛒",
    type: "order",
  },

  {
    id: "5",
    title: "Flash Sale",
    message: "Beef products now 30% OFF today only!",
    time: "1 hour ago",
    icon: "🔥",
    type: "flashsale",
  },

  {
    id: "6",
    title: "New Products Arrived",
    message: "Fresh seafood and premium beef just arrived.",
    time: "2 hours ago",
    icon: "📦",
    type: "product",
  },

];

const NotificationScreen = () => {

  const handlePress = (item: any) => {

    if (item.type === "order") {

      Alert.alert(
        "Track Order",
        "Your order is currently on the way."
      );

    } else if (item.type === "failed") {

      Alert.alert(
        "Payment Failed",
        "Please retry your payment transaction."
      );

    } else if (item.type === "flashsale") {

      Alert.alert(
        "Flash Sale",
        "Redirecting to flash sale products."
      );

    } else if (item.type === "product") {

      Alert.alert(
        "New Products",
        "Viewing newly arrived products."
      );

    } else {

      Alert.alert(
        item.title,
        item.message
      );

    }

  };

  return (
    <SafeAreaView style={styles.mainContainer}>

      {/* HEADER */}
      <View style={styles.fixedTopSection}>

        <Text style={styles.headerTitle}>
          🔔 Notifications
        </Text>

        {/* WHITE TOP */}
        <View style={styles.topWhiteSection}>

          <Text style={styles.sectionTitle}>
            Recent Notifications
          </Text>

        </View>

      </View>

      {/* NOTIFICATIONS */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 160,
          paddingHorizontal: 15,
          paddingBottom: 100,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.notificationCard}
            onPress={() => handlePress(item)}
          >

            {/* ICON */}
            <View style={styles.iconContainer}>
              <Text style={styles.notificationIcon}>
                {item.icon}
              </Text>
            </View>

            {/* CONTENT */}
            <View style={styles.notificationContent}>

              <View style={styles.rowBetween}>

                <Text style={styles.notificationTitle}>
                  {item.title}
                </Text>

                <Text style={styles.notificationTime}>
                  {item.time}
                </Text>

              </View>

              <Text style={styles.notificationMessage}>
                {item.message}
              </Text>

              {/* BUTTON */}
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handlePress(item)}
              >

                <Text style={styles.actionButtonText}>

                  {item.type === "order"
                    ? "Track Order"
                    : item.type === "failed"
                    ? "Retry Payment"
                    : item.type === "flashsale"
                    ? "Shop Now"
                    : item.type === "product"
                    ? "View Products"
                    : "View"}

                </Text>

              </TouchableOpacity>

            </View>

          </TouchableOpacity>
        )}
      />

      {/* NAVBAR */}
      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🛍️</Text>
          <Text style={styles.navText}>
            Products
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.activeNavIcon}>🔔</Text>
          <Text style={styles.activeNavText}>
            Notifications
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>
            Profile
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  fixedTopSection: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 999,
    backgroundColor: "#8c2a2a",
    paddingTop: 45,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  topWhiteSection: {
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingBottom: 18,
    paddingHorizontal: 15,

    // FIX RED LINE
  marginBottom: -2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  notificationCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 15,
    marginTop: 15,
    flexDirection: "row",
    elevation: 3,
  },

  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 15,
    backgroundColor: "#8c2a2a15",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  notificationIcon: {
    fontSize: 28,
  },

  notificationContent: {
    flex: 1,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    flex: 1,
  },

  notificationTime: {
    fontSize: 11,
    color: "#888",
    marginLeft: 10,
  },

  notificationMessage: {
    marginTop: 6,
    fontSize: 13,
    color: "#666",
    lineHeight: 20,
  },

  actionButton: {
    marginTop: 12,
    backgroundColor: "#8c2a2a",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },

  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  navItem: {
    alignItems: "center",
  },

  navIcon: {
    fontSize: 22,
    color: "#777",
  },

  activeNavIcon: {
    fontSize: 22,
    color: "#D32F2F",
  },

  navText: {
    fontSize: 12,
    color: "#777",
    marginTop: 3,
  },

  activeNavText: {
    fontSize: 12,
    color: "#D32F2F",
    marginTop: 3,
    fontWeight: "bold",
  },

});