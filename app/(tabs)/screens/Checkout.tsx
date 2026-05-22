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
    name: "Chicken Breast",
    price: 280,
    qty: 1,
    weight: "1kg",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=800",
  },
];

const CheckoutScreen = () => {

  const [cartItems, setCartItems] =
    useState(initialCart);

  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  const [address, setAddress] =
    useState("Block 10, Makati City");

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
      (total, item) =>
        total + item.price * item.qty,
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

        <View style={styles.bottomRow}>

          <Text style={styles.productPrice}>
            ₱{item.price}
          </Text>

          <View style={styles.quantityRow}>

            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() =>
                decreaseQty(item.id)
              }
            >
              <Text style={styles.qtyButtonText}>
                −
              </Text>
            </TouchableOpacity>

            <Text style={styles.qtyText}>
              {item.qty}
            </Text>

            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() =>
                increaseQty(item.id)
              }
            >
              <Text style={styles.qtyButtonText}>
                +
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <View style={styles.topHeaderRow}>

          <TouchableOpacity
            style={styles.backButton}
          >
            <Text style={styles.backIcon}>
              ❮
            </Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Checkout
          </Text>

          <TouchableOpacity
            style={styles.cartIconButton}
          >
            <Text style={styles.headerIcon}>
              🛒
            </Text>
          </TouchableOpacity>

        </View>

      </View>

      {/* CURVED BODY */}
      <View style={styles.curvedBody} />

      {/* CONTENT */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingTop: 10,
          paddingBottom: 260,
        }}
        ListFooterComponent={
          <View style={styles.bottomSection}>

            {/* PAYMENT METHOD */}
            <View style={styles.sectionCard}>

              <Text style={styles.sectionTitle}>
                Payment Method
              </Text>

              {/* COD */}
              <TouchableOpacity
                style={[
                  styles.paymentOption,
                  paymentMethod ===
                    "Cash on Delivery" &&
                    styles.selectedOption,
                ]}
                onPress={() =>
                  setPaymentMethod(
                    "Cash on Delivery"
                  )
                }
              >

                <View style={styles.radioOuter}>
                  {paymentMethod ===
                    "Cash on Delivery" && (
                    <View
                      style={
                        styles.radioInner
                      }
                    />
                  )}
                </View>

                <Text
                  style={styles.paymentIcon}
                >
                  💵
                </Text>

                <View>
                  <Text
                    style={
                      styles.paymentTitle
                    }
                  >
                    Cash on Delivery
                  </Text>

                  <Text
                    style={
                      styles.paymentSubtitle
                    }
                  >
                    Pay when order arrives
                  </Text>
                </View>

              </TouchableOpacity>

              {/* GCASH */}
              <TouchableOpacity
                style={[
                  styles.paymentOption,
                  paymentMethod ===
                    "GCash" &&
                    styles.selectedOption,
                ]}
                onPress={() =>
                  setPaymentMethod(
                    "GCash"
                  )
                }
              >

                <View style={styles.radioOuter}>
                  {paymentMethod ===
                    "GCash" && (
                    <View
                      style={
                        styles.radioInner
                      }
                    />
                  )}
                </View>

                <Text
                  style={styles.paymentIcon}
                >
                  📱
                </Text>

                <View>
                  <Text
                    style={
                      styles.paymentTitle
                    }
                  >
                    GCash
                  </Text>

                  <Text
                    style={
                      styles.paymentSubtitle
                    }
                  >
                    Fast online payment
                  </Text>
                </View>

              </TouchableOpacity>

            </View>

            {/* ADDRESS */}
            <View style={styles.sectionCard}>

              <Text style={styles.sectionTitle}>
                Delivery Address
              </Text>

              {/* HOME */}
              <TouchableOpacity
                style={[
                  styles.addressOption,
                  address ===
                    "Block 10, Makati City" &&
                    styles.selectedOption,
                ]}
                onPress={() =>
                  setAddress(
                    "Block 10, Makati City"
                  )
                }
              >

                <View style={styles.radioOuter}>
                  {address ===
                    "Block 10, Makati City" && (
                    <View
                      style={
                        styles.radioInner
                      }
                    />
                  )}
                </View>

                <View style={{ flex: 1 }}>
                  <Text
                    style={
                      styles.addressName
                    }
                  >
                    Home
                  </Text>

                  <Text
                    style={
                      styles.addressText
                    }
                  >
                    Block 10, Makati City
                  </Text>
                </View>

              </TouchableOpacity>

              {/* OFFICE */}
              <TouchableOpacity
                style={[
                  styles.addressOption,
                  address ===
                    "Dasmariñas Village" &&
                    styles.selectedOption,
                ]}
                onPress={() =>
                  setAddress(
                    "Dasmariñas Village"
                  )
                }
              >

                <View style={styles.radioOuter}>
                  {address ===
                    "Dasmariñas Village" && (
                    <View
                      style={
                        styles.radioInner
                      }
                    />
                  )}
                </View>

                <View style={{ flex: 1 }}>
                  <Text
                    style={
                      styles.addressName
                    }
                  >
                    Office
                  </Text>

                  <Text
                    style={
                      styles.addressText
                    }
                  >
                    Dasmariñas Village
                  </Text>
                </View>

              </TouchableOpacity>

            </View>

          </View>
        }
      />

      {/* PAYMENT SUMMARY */}
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

        <View style={styles.totalRow}>

          <Text style={styles.totalLabel}>
            Total Payment
          </Text>

          <Text style={styles.totalValue}>
            ₱{total}
          </Text>

        </View>

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() =>
            Alert.alert(
              "Order Placed",
              `Payment: ${paymentMethod}\nAddress: ${address}`
            )
          }
        >

          <Text
            style={styles.checkoutButtonText}
          >
            Place Order
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  header: {
    backgroundColor: "#8c2a2a",
    paddingTop: 55,
    paddingBottom: 70,
    paddingHorizontal: 20,
  },

  topHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#ffffff20",
    justifyContent: "center",
    alignItems: "center",
  },

  backIcon: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  cartIconButton: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#ffffff20",
    justifyContent: "center",
    alignItems: "center",
  },

  headerIcon: {
    fontSize: 20,
  },

  curvedBody: {
    height: 35,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: -35,
  },

  cartCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 14,
    marginBottom: 15,
    flexDirection: "row",
    elevation: 2,
  },

  productImage: {
    width: 90,
    height: 90,
    borderRadius: 18,
  },

  itemInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "space-between",
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

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  productPrice: {
    color: "#8c2a2a",
    fontSize: 18,
    fontWeight: "bold",
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  qtyButton: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: "#8c2a2a",
    justifyContent: "center",
    alignItems: "center",
  },

  qtyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  qtyText: {
    marginHorizontal: 12,
    fontWeight: "bold",
    fontSize: 15,
  },

  bottomSection: {
    marginTop: 5,
    marginBottom: 20,
  },

  sectionCard: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 18,
    marginBottom: 16,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 15,
  },

  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 18,
    padding: 15,
    marginBottom: 12,
  },

  addressOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 18,
    padding: 15,
    marginBottom: 12,
  },

  selectedOption: {
    backgroundColor: "#fff7f7",
  },

  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#8c2a2a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#8c2a2a",
  },

  paymentIcon: {
    fontSize: 24,
    marginRight: 14,
  },

  paymentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },

  paymentSubtitle: {
    color: "#777",
    marginTop: 3,
  },

  addressName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },

  addressText: {
    color: "#666",
    marginTop: 4,
    lineHeight: 20,
  },

  checkoutContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",

    backgroundColor: "#fff",

    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,

    padding: 20,

    elevation: 20,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
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
    marginBottom: 10,
  },

  summaryLabel: {
    color: "#777",
    fontSize: 15,
  },

  summaryValue: {
    color: "#222",
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 14,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  totalValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8c2a2a",
  },

  checkoutButton: {
    backgroundColor: "#8c2a2a",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 22,
  },

  checkoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

});