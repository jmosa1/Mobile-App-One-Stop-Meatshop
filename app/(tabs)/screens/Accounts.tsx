import React, { useState } from "react";
import {
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const isLoggedIn = true;

const ProfileScreen = () => {

  const [faqModalVisible, setFaqModalVisible] = useState(false);
  const [accountModalVisible, setAccountModalVisible] = useState(false);

  const [fullName, setFullName] = useState(
    "Cookies and Cream Super Extra Long Name Example"
  );

  const [email, setEmail] = useState(
    "verylongemailaddresssample@gmail.com"
  );

  const [phone, setPhone] = useState("09123456789");

  const [gender, setGender] = useState("Male");

  // DYNAMIC ADDRESSES
  const [selectedAddress, setSelectedAddress] = useState(0);

  const [addresses, setAddresses] = useState([
    "Purok 1, Surigao City",
    "Barangay Mabua, Surigao City",
  ]);

  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Text>Login Required</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>

      {/* HEADER */}
      <View style={styles.fixedTopSection}>

        <View style={styles.headerRow}>

          <Text style={styles.headerTitle}>
            My Account
          </Text>

          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>

        </View>

        {/* PROFILE CARD */}
        <View style={styles.profileCard}>

          <View style={styles.profileRow}>

            {/* AVATAR */}
            <View style={styles.profileAvatar}>
              <Text style={styles.avatarText}>J</Text>
            </View>

            {/* INFO */}
            <View style={{ flex: 1 }}>

              <Text
                style={styles.profileName}
                numberOfLines={1}
              >
                {fullName}
              </Text>

              <Text
                style={styles.profileEmail}
                numberOfLines={1}
              >
                {email}
              </Text>

              {/* ACTIVE ADDRESS */}
              <View style={styles.joinBadge}>

                <Text
                  style={styles.joinText}
                  numberOfLines={1}
                >
                  {addresses[selectedAddress]}
                </Text>

              </View>

            </View>

          </View>

        </View>

        {/* STATS */}
        <View style={styles.statsContainer}>

          <TouchableOpacity style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statBox}>
            <Text style={styles.statNumber}>₱8,540</Text>
            <Text style={styles.statLabel}>Total Pays</Text>
          </TouchableOpacity>

       <TouchableOpacity style={styles.statBox}>


  <Text
    style={styles.joinedDate}
    numberOfLines={1}
  >
    May 10, 2026
  </Text>

  <Text style={styles.statLabel}>
    Joined Date
  </Text>

</TouchableOpacity>

        </View>

      </View>

      {/* CONTENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 330,
          paddingHorizontal: 15,
          paddingBottom: 100,
        }}
      >

        {/* MY ORDERS */}
        <Text style={styles.sectionHeader}>
          My Orders
        </Text>

        <View style={styles.orderStatusContainer}>

          <TouchableOpacity style={styles.orderStatusBox}>
            <Text style={styles.orderIcon}>💳</Text>
            <Text style={styles.orderLabel}>To Pay</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.orderStatusBox}>
            <Text style={styles.orderIcon}>📦</Text>
            <Text style={styles.orderLabel}>Packed</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.orderStatusBox}>
            <Text style={styles.orderIcon}>🚚</Text>
            <Text style={styles.orderLabel}>Shipping</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.orderStatusBox}>
            <Text style={styles.orderIcon}>✅</Text>
            <Text style={styles.orderLabel}>Completed</Text>
          </TouchableOpacity>

        </View>

        {/* SERVICES */}
        <Text style={styles.sectionHeader}>
          Support and Services
        </Text>

        {/* ACCOUNT DETAILS */}
        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => setAccountModalVisible(true)}
        >

          <Text style={styles.menuIcon}>👤</Text>

          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>
              Account Details
            </Text>

            <Text style={styles.menuSubtitle}>
              Update personal information
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>

        </TouchableOpacity>
<TouchableOpacity
  style={styles.menuCard}
  onPress={() =>
    Alert.alert(
      "Admin Reply",
      "Redirecting to Messages..."
    )
  }
>

  <Text style={styles.menuIcon}>💬</Text>

  <View style={styles.menuContent}>
    <Text style={styles.menuTitle}>
      Admin Reply
    </Text>

    <Text style={styles.menuSubtitle}>
      Redirect to messages support
    </Text>
  </View>

  <Text style={styles.arrow}>›</Text>

</TouchableOpacity>

        {/* FAQ */}
        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => setFaqModalVisible(true)}
        >

          <Text style={styles.menuIcon}>❓</Text>

          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>
              FAQ
            </Text>

            <Text style={styles.menuSubtitle}>
              Frequently asked questions
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>

        </TouchableOpacity>

        {/* LOGOUT */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() =>
            Alert.alert("Logout", "Logged out successfully")
          }
        >

          <Text style={styles.logoutText}>
            Logout
          </Text>

        </TouchableOpacity>

      </ScrollView>

      {/* NAVBAR */}
      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
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
          <Text style={styles.activeNavIcon}>👤</Text>
          <Text style={styles.activeNavText}>Profile</Text>
        </TouchableOpacity>

      </View>

      {/* ACCOUNT MODAL */}
      <Modal
        visible={accountModalVisible}
        transparent={true}
        animationType="slide"
      >

        <View style={styles.modalOverlay}>

          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.modalContainer}>

              <Text style={styles.modalTitle}>
                👤 Account Details
              </Text>

              {/* NAME */}
              <TextInput
                value={fullName}
                onChangeText={setFullName}
                placeholder="Full Name"
                style={styles.messageInput}
              />

              {/* EMAIL */}
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                style={styles.messageInput}
              />

              {/* PHONE */}
              <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder="Phone Number"
                style={styles.messageInput}
              />

              {/* ADDRESS SECTION */}
              <Text style={styles.genderTitle}>
                Delivery Addresses
              </Text>

              {addresses.map((item, index) => (

                <View
                  key={index}
                  style={styles.addressCard}
                >

                  <TouchableOpacity
                    style={styles.addressRadioRow}
                    onPress={() => setSelectedAddress(index)}
                  >

                    <View style={styles.radioOuter}>
                      {selectedAddress === index && (
                        <View style={styles.radioInner} />
                      )}
                    </View>

                    <View style={{ flex: 1 }}>

                      <Text style={styles.addressLabel}>
                        Address {index + 1}
                      </Text>

                      <TextInput
                        value={item}
                        onChangeText={(text) => {

                          const updatedAddresses = [...addresses];
                          updatedAddresses[index] = text;

                          setAddresses(updatedAddresses);

                        }}
                        placeholder={`Enter Address ${index + 1}`}
                        multiline={true}
                        style={styles.addressInputCard}
                      />

                      {/* REMOVE BUTTON */}
                      {addresses.length > 1 && (
                        <TouchableOpacity
                          style={styles.removeButton}
                          onPress={() => {

                            const updatedAddresses =
                              addresses.filter(
                                (_, i) => i !== index
                              );

                            setAddresses(updatedAddresses);

                            if (
                              selectedAddress >=
                              updatedAddresses.length
                            ) {
                              setSelectedAddress(0);
                            }

                          }}
                        >

                          <Text style={styles.removeButtonText}>
                            Remove Address
                          </Text>

                        </TouchableOpacity>
                      )}

                    </View>

                  </TouchableOpacity>

                </View>

              ))}

              {/* ADD ADDRESS */}
              <TouchableOpacity
                style={styles.addAddressButton}
                onPress={() => {

                  setAddresses([
                    ...addresses,
                    "",
                  ]);

                }}
              >

                <Text style={styles.addAddressText}>
                  + Add New Address
                </Text>

              </TouchableOpacity>

              {/* GENDER */}
              <Text style={styles.genderTitle}>
                Select Gender
              </Text>

              <View style={styles.genderContainer}>

                {/* MALE */}
                <TouchableOpacity
                  style={[
                    styles.genderButton,
                    gender === "Male" &&
                      styles.genderButtonActive,
                  ]}
                  onPress={() => setGender("Male")}
                >

                  <Text
                    style={[
                      styles.genderButtonText,
                      gender === "Male" &&
                        styles.genderButtonTextActive,
                    ]}
                  >
                    ♂ Male
                  </Text>

                </TouchableOpacity>

                {/* FEMALE */}
                <TouchableOpacity
                  style={[
                    styles.genderButton,
                    gender === "Female" &&
                      styles.genderButtonActive,
                  ]}
                  onPress={() => setGender("Female")}
                >

                  <Text
                    style={[
                      styles.genderButtonText,
                      gender === "Female" &&
                        styles.genderButtonTextActive,
                    ]}
                  >
                    ♀ Female
                  </Text>

                </TouchableOpacity>

              </View>

              {/* SAVE */}
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setAccountModalVisible(false);

                  Alert.alert(
                    "Success",
                    "Account updated successfully"
                  );
                }}
              >

                <Text style={styles.modalButtonText}>
                  Save Changes
                </Text>

              </TouchableOpacity>

              {/* CLOSE */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() =>
                  setAccountModalVisible(false)
                }
              >

                <Text style={styles.closeButtonText}>
                  Close
                </Text>

              </TouchableOpacity>

            </View>

          </ScrollView>

        </View>

      </Modal>

      {/* FAQ MODAL */}
      <Modal
        visible={faqModalVisible}
        transparent={true}
        animationType="slide"
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalContainer}>

            <Text style={styles.modalTitle}>
              ❓ Frequently Asked Questions
            </Text>

            <Text style={styles.faqQuestion}>
              • How long is delivery?
            </Text>

            <Text style={styles.faqAnswer}>
              Usually 1-3 days depending on location.
            </Text>

            <Text style={styles.faqQuestion}>
              • What payment methods are accepted?
            </Text>

            <Text style={styles.faqAnswer}>
              Cash on Delivery and GCash.
            </Text>

            <Text style={styles.faqQuestion}>
              • Can I cancel my order?
            </Text>

            <Text style={styles.faqAnswer}>
              Yes, before shipping confirmation.
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setFaqModalVisible(false)}
            >

              <Text style={styles.closeButtonText}>
                Close
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>

    </SafeAreaView>
  );
};

export default ProfileScreen;

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
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 18,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  settingsButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 10,
    borderRadius: 12,
  },

  settingsIcon: {
    fontSize: 18,
  },

  profileCard: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    borderRadius: 25,
    padding: 18,
    elevation: 4,
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileAvatar: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: "#8c2a2a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  avatarText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },

  profileEmail: {
    color: "#777",
    marginTop: 4,
    fontSize: 13,
  },

  joinBadge: {
    marginTop: 10,
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: "flex-start",
    maxWidth: 220,
  },

  joinText: {
    color: "#555",
    fontWeight: "600",
    fontSize: 12,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 18,
  },


joinedDate: {
  fontSize: 15,
  fontWeight: "bold",
  color: "#8c2a2a",
}
,
  statBox: {
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 18,
    paddingVertical: 15,
    alignItems: "center",
  },

  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8c2a2a",
  },

  statLabel: {
    color: "#666",
    marginTop: 5,
    fontSize: 12,
  },

  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 14,
    marginTop: 10,
  },

  orderStatusContainer: {
    backgroundColor: "#fff",
    borderRadius: 22,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  orderStatusBox: {
    alignItems: "center",
  },

  orderIcon: {
    fontSize: 26,
    marginBottom: 6,
  },

  orderLabel: {
    fontSize: 12,
    color: "#555",
  },

  menuCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  menuIcon: {
    fontSize: 28,
    marginRight: 15,
  },

  menuContent: {
    flex: 1,
  },

  menuTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },

  menuSubtitle: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },

  arrow: {
    fontSize: 28,
    color: "#999",
  },

  logoutButton: {
    backgroundColor: "#D32F2F",
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 10,
  },

  logoutText: {
    color: "#fff",
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
    borderColor: "#eee",
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

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalContainer: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 25,
    padding: 20,
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },

  messageInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginTop: 15,
    height: 50,
  },

  genderTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginTop: 22,
    marginBottom: 10,
  },

  addressCard: {
    backgroundColor: "#fafafa",
    borderRadius: 18,
    padding: 14,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },

  addressRadioRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  addressLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222",
    marginLeft: 10,
    marginBottom: 8,
  },

  addressInputCard: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingTop: 12,
    minHeight: 80,
    textAlignVertical: "top",
    marginLeft: 10,
  },

  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#8c2a2a",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#8c2a2a",
  },

  addAddressButton: {
    backgroundColor: "#FCEAEA",
    borderWidth: 1,
    borderColor: "#8c2a2a",
    borderStyle: "dashed",
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 15,
  },

  addAddressText: {
    color: "#8c2a2a",
    fontWeight: "bold",
    fontSize: 15,
  },

  removeButton: {
    backgroundColor: "#FFE5E5",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
    marginLeft: 10,
  },

  removeButtonText: {
    color: "#D32F2F",
    fontWeight: "bold",
  },

  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },

  genderButton: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },

  genderButtonActive: {
    backgroundColor: "#8c2a2a",
    borderColor: "#8c2a2a",
  },

  genderButtonText: {
    color: "#555",
    fontWeight: "bold",
    fontSize: 15,
  },

  genderButtonTextActive: {
    color: "#fff",
  },

  modalButton: {
    backgroundColor: "#8c2a2a",
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 25,
  },

  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  closeButton: {
    backgroundColor: "#eee",
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 12,
  },

  closeButtonText: {
    color: "#333",
    fontWeight: "bold",
  },

  faqQuestion: {
    fontWeight: "bold",
    color: "#222",
    marginTop: 12,
  },

  faqAnswer: {
    color: "#666",
    marginTop: 5,
    lineHeight: 22,
  },

});