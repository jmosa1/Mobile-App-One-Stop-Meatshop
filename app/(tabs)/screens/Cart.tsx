import React, { useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const initialCart = [
  {
    id: "1",
    name: "Premium Beef",
    price: 450,
    qty: 2,
    weight: "1kg",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800",
  },
  {
    id: "2",
    name: "Fresh Pork Belly",
    price: 320,
    qty: 1,
    weight: "1kg",
    image:
      "https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=800",
  },
  {
    id: "3",
    name: "Fresh Pork Belly",
    price: 320,
    qty: 1,
    weight: "1kg",
    image:
      "https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=800",
  },
];

const CartScreen = () => {

  const [cartItems, setCartItems] = useState(initialCart);

  const increaseQty = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
  }, [cartItems]);

  const deliveryFee = 60;
  const total = subtotal + deliveryFee;

  const renderItem = ({ item }: any) => (
    <View style={styles.cartCard}>

      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
      />

      <View style={styles.itemInfo}>

        <Text
          style={styles.productName}
          numberOfLines={1}
        >
          {item.name}
        </Text>

        <Text style={styles.productWeight}>
          {item.weight}
        </Text>

        <Text style={styles.productPrice}>
          ₱{item.price}
        </Text>

        <View style={styles.quantityRow}>

          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => decreaseQty(item.id)}
          >
            <Text style={styles.qtyButtonText}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qtyText}>
            {item.qty}
          </Text>

          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => increaseQty(item.id)}
          >
            <Text style={styles.qtyButtonText}>+</Text>
          </TouchableOpacity>

        </View>

      </View>

      <Text style={styles.totalItemPrice}>
        ₱{item.price * item.qty}
      </Text>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <View style={styles.topHeaderRow}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() =>
              Alert.alert("Back")
            }
          >
            <Text style={styles.backIcon}>❮</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            My Cart
          </Text>

          <TouchableOpacity style={styles.cartIconButton}>
            <Text style={styles.headerIcon}>🛒</Text>
          </TouchableOpacity>

        </View>

      </View>

      {/* WHITE CURVED BODY */}
      <View style={styles.curvedBody} />

      {/* CART LIST */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
          paddingBottom: 270,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>

            <Text style={styles.emptyIcon}>
              🛒
            </Text>

            <Text style={styles.emptyTitle}>
              Your cart is empty
            </Text>

            <Text style={styles.emptySubtitle}>
              Add fresh meat products now.
            </Text>

          </View>
        }
      />

      {/* CHECKOUT */}
      <View style={styles.checkoutContainer}>

        <Text style={styles.summaryTitle}>
          Payment Summary
        </Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>
            Subtotal
          </Text>

          <Text style={styles.summaryValue}>
            ₱{subtotal}
          </Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>
            Delivery Fee
          </Text>

          <Text style={styles.summaryValue}>
            ₱{deliveryFee}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>
            Total
          </Text>

          <Text style={styles.totalValue}>
            ₱{total}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() =>
            Alert.alert(
              "Checkout",
              "Proceeding to checkout"
            )
          }
        >

          <Text style={styles.checkoutButtonText}>
            Checkout
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  /* HEADER */
  header: {
    backgroundColor: "#8c2a2a",

    paddingTop: 55,
    paddingBottom: 70,
    paddingHorizontal: 18,

    overflow: "hidden",
  },

  topHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

backButton: {
  width: 44,
  height: 44,
  borderRadius: 14,
  backgroundColor: "#ffffff25",

  justifyContent: "center",
  alignItems: "center",
},

backIcon: {
  color: "#fff",
  fontSize: 26,
  fontWeight: "bold",

  lineHeight: 26,
  textAlign: "center",

  marginTop: -2,
},

  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  cartIconButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#ffffff25",
    justifyContent: "center",
    alignItems: "center",
  },

  headerIcon: {
    fontSize: 22,
    color: "#fff",
  },

  /* WHITE CURVE */
  curvedBody: {
    backgroundColor: "#f5f5f5",

    height: 35,

    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,

    marginTop: -35,
    marginBottom: -2,
  },

  /* CART CARD */
  cartCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 14,
    marginBottom: 15,

    flexDirection: "row",
    alignItems: "center",

    elevation: 2,
  },

  productImage: {
    width: 90,
    height: 90,
    borderRadius: 18,
    backgroundColor: "#eee",
  },

  itemInfo: {
    flex: 1,
    marginLeft: 14,
  },

  productName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222",
  },

  productWeight: {
    color: "#777",
    marginTop: 4,
  },

  productPrice: {
    color: "#8c2a2a",
    fontWeight: "bold",
    marginTop: 8,
    fontSize: 16,
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  qtyButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#8c2a2a",
    justifyContent: "center",
    alignItems: "center",
  },

  qtyButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  qtyText: {
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: "bold",
  },

  totalItemPrice: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },

  /* CHECKOUT */
  checkoutContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",

    backgroundColor: "#fff",

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    padding: 20,

    elevation: 20,
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 15,
  },

  summaryRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 6,
},

  summaryLabel: {
    color: "#666",
    fontSize: 15,
  },

  summaryValue: {
    color: "#222",
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 12,
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  totalValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8c2a2a",
  },

  checkoutButton: {
    backgroundColor: "#8c2a2a",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 20,
  },

  checkoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  /* EMPTY */
  emptyContainer: {
    marginTop: 120,
    alignItems: "center",
  },

  emptyIcon: {
    fontSize: 70,
  },

  emptyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#222",
  },

  emptySubtitle: {
    color: "#777",
    marginTop: 8,
  },

});