import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const products = [
  {
    id: "1",
    name: "Fresh Pork Belly",
    category: "Pork",
    description: "Fresh premium pork cuts daily.",
    price: "₱280/kg",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f",
  },

  {
    id: "2",
    name: "Chicken Wings",
    category: "Chicken",
    description: "Perfect for frying and grilling.",
    price: "₱180/kg",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
  },

  {
    id: "3",
    name: "Premium Beef",
    category: "Beef",
    description: "High-quality tender beef meat.",
    price: "₱420/kg",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
  },

  {
    id: "4",
    name: "Hotdog Pack",
    category: "Processed",
    description: "Delicious ready-to-cook hotdogs.",
    price: "₱120",
    image:
      "https://images.unsplash.com/photo-1612392062798-51b8e1f4f2de",
  },

  {
    id: "5",
    name: "Chicken Breast",
    category: "Chicken",
    description: "Healthy and fresh chicken breast.",
    price: "₱220/kg",
    image:
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db",
  },

  {
    id: "6",
    name: "Pork Ribs",
    category: "Pork",
    description: "Juicy pork ribs for grilling.",
    price: "₱320/kg",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1de7a36f1e7",
  },
];

const categories = [
  "All",
  "Beef",
  "Chicken",
  "Pork",
  "Processed",
];

const ProductScreen = () => {

  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchText, setSearchText] =
    useState("");

  const isLoggedIn = false;

  const requireLogin = () => {

    if (!isLoggedIn) {
      setLoginModal(true);
      return false;
    }

    return true;
  };

  const filteredProducts = products.filter((item) => {

    const matchCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchSearch =
      item.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

    return matchCategory && matchSearch;

  });

  return (
    <SafeAreaView style={styles.mainContainer}>

      {/* HEADER */}
      <View style={styles.fixedTopSection}>

        <Text style={styles.headerTitle}>
          🛍️ Products
        </Text>

        {/* SEARCH */}
        <View style={styles.searchContainer}>

          <View style={styles.searchRow}>

            <TextInput
              placeholder="Search products..."
              placeholderTextColor="#777"
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
            />

            {/* CART */}
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => requireLogin()}
            >

              <Text style={styles.topIcon}>
                🛒
              </Text>

            </TouchableOpacity>

            {/* MESSAGE */}
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => requireLogin()}
            >

              <Text style={styles.topIcon}>
                💬
              </Text>

            </TouchableOpacity>

          </View>

        </View>

        {/* CATEGORY */}
        <View style={styles.categoryWrapper}>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {

              const isActive =
                selectedCategory === item;

              return (
                <TouchableOpacity
                  style={
                    isActive
                      ? styles.activeCategory
                      : styles.categoryButton
                  }
                  onPress={() =>
                    setSelectedCategory(item)
                  }
                >

                  <Text
                    style={
                      isActive
                        ? styles.activeCategoryText
                        : styles.categoryText
                    }
                  >
                    {item}
                  </Text>

                </TouchableOpacity>
              );
            }}
          />

        </View>

      </View>

      {/* PRODUCTS */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 230,
          paddingHorizontal: 12,
          paddingBottom: 100,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>

            <Text style={styles.emptyText}>
              No products found
            </Text>

          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.productCard}>

            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
              resizeMode="cover"
            />

            <View style={styles.productInfo}>

              <Text style={styles.productName}>
                {item.name}
              </Text>

              <Text style={styles.productDescription}>
                {item.description}
              </Text>

              <Text style={styles.productPrice}>
                {item.price}
              </Text>

              {/* ADD TO CART */}
              <TouchableOpacity
                style={styles.cartButton}
                onPress={() => {

                  if (!requireLogin()) return;

                  Alert.alert(
                    "Added to Cart",
                    `${item.name} added successfully`
                  );

                }}
              >

                <Text style={styles.cartButtonText}>
                  Add to Cart
                </Text>

              </TouchableOpacity>

            </View>

          </View>
        )}
      />

      {/* LOGIN MODAL */}
      <Modal
        visible={loginModal}
        animationType="slide"
        transparent
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalContainer}>

            <Text style={styles.modalTitle}>
              Login First
            </Text>

            <TextInput
              placeholder="Email"
              placeholderTextColor="#777"
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#777"
              secureTextEntry
              style={styles.input}
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
              style={styles.registerSwitch}
              onPress={() => {
                setLoginModal(false);
                setRegisterModal(true);
              }}
            >

              <Text style={styles.registerSwitchText}>
                Create Account
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
              placeholderTextColor="#777"
              style={styles.input}
            />

            <TextInput
              placeholder="Email"
              placeholderTextColor="#777"
              style={styles.input}
            />

            <TextInput
              placeholder="Age"
              placeholderTextColor="#777"
              keyboardType="numeric"
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#777"
              secureTextEntry
              style={styles.input}
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
              style={styles.registerSwitch}
              onPress={() => {
                setRegisterModal(false);
                setLoginModal(true);
              }}
            >

              <Text style={styles.registerSwitchText}>
                Already have account?
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

          <Text style={styles.navIcon}>
            🏠
          </Text>

          <Text style={styles.navText}>
            Home
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Text style={styles.activeNavIcon}>
            🛍️
          </Text>

          <Text style={styles.activeNavText}>
            Products
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Text style={styles.navIcon}>
            🔔
          </Text>

          <Text style={styles.navText}>
            Notifications
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Text style={styles.navIcon}>
            👤
          </Text>

          <Text style={styles.navText}>
            Profile
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default ProductScreen;

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
    marginBottom: 15,
  },

  searchContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    height: 48,
    borderRadius: 12,
  },

  iconButton: {
    marginLeft: 10,
    backgroundColor: "#ffffff25",
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  topIcon: {
    fontSize: 22,
    color: "#fff",
  },

  categoryWrapper: {
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    overflow: "hidden",
  },

  activeCategory: {
    backgroundColor: "#D32F2F",
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  activeCategoryText: {
    color: "#fff",
    fontWeight: "bold",
  },

  categoryButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryText: {
    color: "#555",
    fontWeight: "600",
  },

  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    overflow: "hidden",
    marginTop: 15,
    elevation: 3,
  },

  productImage: {
    width: "100%",
    height: 140,
  },

  productInfo: {
    padding: 10,
  },

  productName: {
    fontSize: 15,
    fontWeight: "bold",
  },

  productDescription: {
    fontSize: 11,
    color: "#777",
    marginTop: 4,
    marginBottom: 6,
    minHeight: 32,
  },

  productPrice: {
    color: "#2E7D32",
    fontWeight: "bold",
    marginBottom: 10,
  },

  cartButton: {
    backgroundColor: "#43A047",
    paddingVertical: 9,
    borderRadius: 10,
    alignItems: "center",
  },

  cartButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  emptyContainer: {
    marginTop: 100,
    alignItems: "center",
    width: "100%",
  },

  emptyText: {
    fontSize: 18,
    color: "#777",
    fontWeight: "600",
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

  registerSwitch: {
    marginTop: 15,
    alignItems: "center",
  },

  registerSwitchText: {
    color: "#8c2a2a",
    fontWeight: "bold",
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