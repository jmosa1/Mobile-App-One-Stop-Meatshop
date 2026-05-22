import React from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const NotificationNotLogin = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>

      {/* HEADER */}
      <View style={styles.fixedTopSection}>

        <Text style={styles.headerTitle}>
          🔔 Notifications
        </Text>

        <View style={styles.topWhiteSection}>

          <Text style={styles.sectionTitle}>
            Guest Notifications
          </Text>

        </View>

      </View>

      {/* CONTENT */}
      <View style={styles.notLoginContainer}>

        <Text style={styles.bigIcon}>
          🔔
        </Text>

        <Text style={styles.loginTitle}>
          Login Required
        </Text>

        <Text style={styles.loginText}>
          Please login to view your
          notifications, order updates,
          flash sales, and announcements.
        </Text>

        {/* LOGIN BUTTON */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() =>
            Alert.alert(
              "Login",
              "Redirecting to login screen."
            )
          }
        >

          <Text style={styles.loginButtonText}>
            Login Account
          </Text>

        </TouchableOpacity>

        {/* REGISTER BUTTON */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() =>
            Alert.alert(
              "Register",
              "Redirecting to register screen."
            )
          }
        >

          <Text style={styles.registerButtonText}>
            Register Account
          </Text>

        </TouchableOpacity>

      </View>

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

export default NotificationNotLogin;

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  fixedTopSection: {
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
    padding: 20,
      // FIX RED LINE
  marginBottom: -2,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },

  notLoginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  bigIcon: {
    fontSize: 75,
    marginBottom: 20,
  },

  loginTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
  },

  loginText: {
    textAlign: "center",
    color: "#666",
    marginTop: 10,
    lineHeight: 24,
    fontSize: 15,
  },

  loginButton: {
    backgroundColor: "#8c2a2a",
    marginTop: 25,
    width: "100%",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  registerButton: {
    backgroundColor: "#fff",
    marginTop: 15,
    width: "100%",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8c2a2a",
  },

  registerButtonText: {
    color: "#8c2a2a",
    fontWeight: "bold",
    fontSize: 15,
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