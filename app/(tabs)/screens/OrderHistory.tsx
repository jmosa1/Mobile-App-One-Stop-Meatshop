import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const OrderDetails = () => {

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >

        {/* HEADER */}
        <View style={styles.headerContainer}>

          <Text style={styles.headerTitle}>
            Order Details
          </Text>

          <Text style={styles.orderId}>
            #ORD-2026-001
          </Text>

        </View>

        {/* ORDER STATUS */}
        <View style={styles.statusCard}>

          <View style={styles.statusRow}>

            <View style={styles.statusCircle}>
              <Text style={styles.statusEmoji}>🚚</Text>
            </View>

            <View style={{ flex: 1 }}>

              <Text style={styles.statusTitle}>
                Shipping
              </Text>

              <Text style={styles.statusSubtitle}>
                Your order is on the way.
              </Text>

            </View>

          </View>

        </View>

        {/* PRODUCTS */}
        <Text style={styles.sectionTitle}>
          Ordered Items
        </Text>

        {/* ITEM 1 */}
        <View style={styles.productCard}>

          <View style={styles.productImagePlaceholder}>
            <Text style={styles.productEmoji}>🥩</Text>
          </View>

          <View style={{ flex: 1 }}>

            <Text style={styles.productName}>
              Premium Beef Meat
            </Text>

            <Text style={styles.productInfo}>
              Quantity: 2kg
            </Text>

            <Text style={styles.productPrice}>
              ₱1,200
            </Text>

          </View>

        </View>

        {/* ITEM 2 */}
        <View style={styles.productCard}>

          <View style={styles.productImagePlaceholder}>
            <Text style={styles.productEmoji}>🍗</Text>
          </View>

          <View style={{ flex: 1 }}>

            <Text style={styles.productName}>
              Fresh Chicken
            </Text>

            <Text style={styles.productInfo}>
              Quantity: 3kg
            </Text>

            <Text style={styles.productPrice}>
              ₱750
            </Text>

          </View>

        </View>

        {/* DELIVERY ADDRESS */}
        <Text style={styles.sectionTitle}>
          Delivery Address
        </Text>

        <View style={styles.addressCard}>

          <Text style={styles.addressName}>
            Jhedelson Mosa
          </Text>

          <Text style={styles.addressText}>
            Purok 1, Surigao City
          </Text>

          <Text style={styles.addressText}>
            09123456789
          </Text>

        </View>

        {/* PAYMENT SUMMARY */}
        <Text style={styles.sectionTitle}>
          Payment Summary
        </Text>

        <View style={styles.summaryCard}>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>₱1,950</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>₱50</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₱2,000</Text>
          </View>

        </View>

        {/* ACTION BUTTONS */}
        <TouchableOpacity style={styles.trackButton}>

          <Text style={styles.trackButtonText}>
            Track Order
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}>

          <Text style={styles.cancelButtonText}>
            Cancel Order
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  headerContainer: {
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#222",
  },

  orderId: {
    marginTop: 5,
    color: "#777",
    fontSize: 14,
  },

  statusCard: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusCircle: {
    width: 65,
    height: 65,
    borderRadius: 32,
    backgroundColor: "#FCEAEA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  statusEmoji: {
    fontSize: 30,
  },

  statusTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },

  statusSubtitle: {
    marginTop: 5,
    color: "#777",
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 14,
    marginTop: 10,
  },

  productCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    elevation: 2,
  },

  productImagePlaceholder: {
    width: 75,
    height: 75,
    borderRadius: 18,
    backgroundColor: "#FCEAEA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  productEmoji: {
    fontSize: 34,
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },

  productInfo: {
    marginTop: 5,
    color: "#777",
  },

  productPrice: {
    marginTop: 8,
    color: "#8c2a2a",
    fontWeight: "bold",
    fontSize: 16,
  },

  addressCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 18,
    elevation: 2,
  },

  addressName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },

  addressText: {
    marginTop: 6,
    color: "#666",
    lineHeight: 22,
  },

  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 18,
    elevation: 2,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
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
    marginBottom: 14,
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  totalValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8c2a2a",
  },

  trackButton: {
    backgroundColor: "#8c2a2a",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 25,
  },

  trackButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  cancelButton: {
    backgroundColor: "#FFE5E5",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 12,
  },

  cancelButtonText: {
    color: "#D32F2F",
    fontWeight: "bold",
    fontSize: 16,
  },

});

