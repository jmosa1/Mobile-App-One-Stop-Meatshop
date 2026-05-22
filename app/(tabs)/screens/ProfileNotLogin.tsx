import React, { useState } from "react";
import {
  Alert,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileNotLogin = () => {

  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>

      {/* HEADER */}
      <View style={styles.fixedTopSection}>

        <Text style={styles.headerTitle}>
          👤 Accounts
        </Text>

        <View style={styles.topWhiteSection}>

          <Text style={styles.sectionTitle}>
            Welcome Guest
          </Text>

        </View>

      </View>

      {/* CONTENT */}
      <View style={styles.notLoginContainer}>

        <Text style={styles.bigIcon}>
          🔒
        </Text>

        <Text style={styles.loginTitle}>
          Login Required
        </Text>

        <Text style={styles.loginText}>
          Please login to access your
          account details, track orders,
          and order history.
        </Text>

        {/* LOGIN BUTTON */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => setLoginModal(true)}
        >

          <Text style={styles.loginButtonText}>
            Login Account
          </Text>

        </TouchableOpacity>

        {/* REGISTER BUTTON */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => setRegisterModal(true)}
        >

          <Text style={styles.registerButtonText}>
            Register Account
          </Text>

        </TouchableOpacity>

      </View>

      {/* LOGIN MODAL */}
      <Modal
        visible={loginModal}
        animationType="slide"
        transparent
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalContainer}>

            <Text style={styles.modalTitle}>
              Login Account
            </Text>

            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#777"
            />

            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#777"
            />

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setLoginModal(false);
                Alert.alert(
                  "Login",
                  "Login successful."
                );
              }}
            >

              <Text style={styles.modalButtonText}>
                Login
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setLoginModal(false)}
            >

              <Text style={styles.closeText}>
                Cancel
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>

      {/* REGISTER MODAL */}
      <Modal
        visible={registerModal}
        animationType="slide"
        transparent
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalContainer}>

            <Text style={styles.modalTitle}>
              Register Account
            </Text>

            <TextInput
              placeholder="Full Name"
              style={styles.input}
              placeholderTextColor="#777"
            />

            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#777"
            />

            <TextInput
              placeholder="Age"
              keyboardType="numeric"
              style={styles.input}
              placeholderTextColor="#777"
            />

            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#777"
            />

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setRegisterModal(false);
                Alert.alert(
                  "Register",
                  "Account created successfully."
                );
              }}
            >

              <Text style={styles.modalButtonText}>
                Register
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setRegisterModal(false)}
            >

              <Text style={styles.closeText}>
                Cancel
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>

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
          <Text style={styles.navIcon}>🔔</Text>
          <Text style={styles.navText}>
            Notifications
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.activeNavIcon}>👤</Text>
          <Text style={styles.activeNavText}>
            Profile
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default ProfileNotLogin;

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
    fontSize: 70,
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

  modalOverlay: {
    flex: 1,
    backgroundColor: "#00000070",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 25,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 52,
    marginBottom: 15,
    color: "#222",
  },

  modalButton: {
    backgroundColor: "#8c2a2a",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 5,
  },

  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  closeText: {
    textAlign: "center",
    marginTop: 18,
    color: "#777",
    fontWeight: "600",
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
    color: "#DF32F2F",
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