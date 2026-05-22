import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

// Mock Data representing the full lifecycle of an order
const ALL_ORDERS = [
  { 
    id: "#ORD-2026-999", 
    status: "To Pay", 
    total: "2,450", 
    date: "May 14", 
    items: 4, 
    icon: "💳", 
    color: "#E74C3C",
    notice: "Awaiting Payment" 
  },
  { id: "#ORD-2026-001", status: "Shipping", total: "2,000", date: "May 10", items: 3, icon: "🚚", color: "#3498DB" },
  { id: "#ORD-2026-002", status: "Packed", total: "1,450", date: "May 08", items: 2, icon: "📦", color: "#F39C12" },
  { id: "#ORD-2026-003", status: "Completed", total: "980", date: "May 05", items: 1, icon: "✅", color: "#27AE60" },
];

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState("To Pay");

  const filteredOrders = useMemo(() => {
    return ALL_ORDERS.filter(order => order.status === activeTab);
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#8C2A2A" barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.topSection}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, marginLeft: 16 }}>
            <Text style={styles.headerTitle}>Order History</Text>
            <Text style={styles.headerSubtitle}>
              {activeTab === "To Pay" ? "Complete your purchases" : "Track your meat delivery"}
            </Text>
          </View>
        </View>

        {/* HORIZONTAL MENU */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.menuScroll}>
          {[
            { label: "To Pay", emoji: "💳" },
            { label: "Packed", emoji: "📦" },
            { label: "Shipping", emoji: "🚚" },
            { label: "Completed", emoji: "✅" }
          ].map((tab) => (
            <TouchableOpacity 
              key={tab.label}
              onPress={() => setActiveTab(tab.label)}
              style={[
                styles.menuCard,
                activeTab === tab.label && styles.menuCardActive
              ]}
            >
              <Text style={styles.menuEmoji}>{tab.emoji}</Text>
              <Text style={[styles.menuText, activeTab === tab.label && styles.menuTextActive]}>
                {tab.label}
              </Text>
              {/* Bullets dot removed from here */}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* ORDER LIST */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContainer}>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((item, index) => (
            <View key={index} style={styles.orderCard}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.orderId}>{item.id}</Text>
                  <Text style={styles.orderDate}>Placed on {item.date}, 2026</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: item.color + '15' }]}>
                  <Text style={[styles.statusText, { color: item.color }]}>{item.status}</Text>
                </View>
              </View>

              {item.status === "To Pay" && (
                <View style={styles.paymentNotice}>
                  <Text style={styles.noticeText}>⚠️ Please settle payment within 24 hours to avoid cancellation.</Text>
                </View>
              )}

              <View style={styles.productRow}>
                <View style={styles.productImageBackground}>
                  <Text style={styles.productEmoji}>🥩</Text>
                </View>
                <View style={styles.productInfoCol}>
                  <Text style={styles.productTitle}>Premium Meat Selection</Text>
                  <Text style={styles.itemCount}>{item.items} Items</Text>
                  <Text style={styles.totalAmount}>₱{item.total}</Text>
                </View>
              </View>
              
              <View style={styles.actionRow}>
                <TouchableOpacity style={styles.detailsBtn}>
                  <Text style={styles.detailsBtnText}>View Details</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.mainBtn, { backgroundColor: item.color }]}>
                  <Text style={styles.mainBtnText}>
                    {item.status === "To Pay" ? "Pay Now" : "Track Order"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🛒</Text>
            <Text style={styles.emptyTitle}>No orders here</Text>
            <Text style={styles.emptySubtitle}>Items you order will appear in the {activeTab} section.</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FB" },
  topSection: {
    backgroundColor: "#8C2A2A",
    paddingTop: 30,
    paddingBottom: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 20, marginBottom: 20 },
  backButton: { width: 40, height: 40, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.2)", justifyContent: "center", alignItems: "center" },
  backIcon: { color: "#fff", fontSize: 28, fontWeight: '300' },
  headerTitle: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  headerSubtitle: { color: "rgba(255,255,255,0.7)", fontSize: 13 },
  menuScroll: { paddingLeft: 20 },
  menuCard: {
    width: 90,
    height: 75, // Slightly reduced height since dot is gone
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  menuCardActive: { 
    backgroundColor: "#fff", 
    borderColor: "rgba(255,255,255,0.3)",
    // elevation and shadow removed
  },
  menuEmoji: { fontSize: 22, marginBottom: 4 },
  menuText: { color: "#fff", fontSize: 11, fontWeight: "600" },
  menuTextActive: { color: "#8C2A2A" },
  listContainer: { padding: 20 },
  orderCard: { backgroundColor: "#fff", borderRadius: 24, padding: 16, marginBottom: 18, elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: 'flex-start', marginBottom: 12 },
  orderId: { fontSize: 14, fontWeight: "bold", color: "#1A1A1A" },
  orderDate: { fontSize: 11, color: "#999", marginTop: 2 },
  statusBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  statusText: { fontSize: 10, fontWeight: "800", textTransform: 'uppercase' },
  paymentNotice: { backgroundColor: '#FEF2F2', padding: 10, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: '#FEE2E2' },
  noticeText: { fontSize: 11, color: '#991B1B', fontWeight: '500' },
  productRow: { flexDirection: "row", alignItems: "center", marginBottom: 18 },
  productImageBackground: { width: 70, height: 70, backgroundColor: "#F9FAFB", borderRadius: 15, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: '#EEE' },
  productEmoji: { fontSize: 35 },
  productInfoCol: { flex: 1, marginLeft: 15 },
  productTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  itemCount: { fontSize: 12, color: "#777", marginTop: 2 },
  totalAmount: { fontSize: 18, fontWeight: "bold", color: "#8C2A2A", marginTop: 5 },
  actionRow: { flexDirection: "row", gap: 12 },
  detailsBtn: { flex: 1, paddingVertical: 14, borderRadius: 15, borderWidth: 1, borderColor: "#E5E7EB", alignItems: "center" },
  detailsBtnText: { color: "#4B5563", fontWeight: "600", fontSize: 14 },
  mainBtn: { flex: 1, paddingVertical: 14, borderRadius: 15, alignItems: "center", elevation: 2 },
  mainBtnText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  emptyState: { alignItems: "center", marginTop: 60, paddingHorizontal: 40 },
  emptyEmoji: { fontSize: 60, marginBottom: 20 },
  emptyTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  emptySubtitle: { color: "#999", fontSize: 13, textAlign: 'center', marginTop: 8 },
});

export default OrderHistory;