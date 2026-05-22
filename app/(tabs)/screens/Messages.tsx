import React, { useRef, useState } from "react";
import {
    Dimensions,
    KeyboardAvoidingView,
    Modal,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

const { height } = Dimensions.get("window");
const PRIMARY = "#8C2A2A";
const BACKGROUND = "#F5F5F5";

interface Message {
  id: number;
  sender: "admin" | "customer";
  text: string;
  time: string;
}

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "customer", text: "Available pa po ba pork belly?", time: "10:00 AM" },
    { id: 2, sender: "admin", text: "Yes po available today 😊", time: "10:01 AM" },
    { id: 3, sender: "customer", text: "Pwede COD?", time: "10:02 AM" },
    { id: 4, sender: "admin", text: "Yes po we accept COD.", time: "10:02 AM" },
  ]);

  const handleSend = () => {
    if (message.trim().length === 0) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: "customer",
      text: message.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY} />
      
      {/* HEADER SECTION */}
      <SafeAreaView style={styles.headerSafeArea}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => console.log("Go Back")}
            >
              <View style={styles.backChevron} />
            </TouchableOpacity>

            <View style={styles.avatar}>
              {/* Changed O to OSM */}
              <Text style={styles.avatarText}>OSM</Text>
              <View style={styles.onlineBadge} />
            </View>
            <View>
              <Text style={styles.headerName}>One Stop Meatshop</Text>
              <Text style={styles.activeText}>Online</Text>
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.detailsBtn} 
            onPress={() => setIsDetailsVisible(true)}
          >
            <Text style={styles.detailsText}>Details</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.chatContainer}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map((item) => {
            const isCustomer = item.sender === "customer";
            return (
              <View key={item.id} style={[styles.messageRow, { justifyContent: isCustomer ? "flex-end" : "flex-start" }]}>
                {!isCustomer && (
                  <View style={styles.smallAvatar}>
                    {/* Changed M to OSM */}
                    <Text style={styles.smallAvatarText}>OSM</Text>
                  </View>
                )}
                <View style={{ maxWidth: '75%' }}>
                  <View style={[
                    styles.messageBubble, 
                    isCustomer ? styles.senderBubble : styles.receiverBubble
                  ]}>
                    <Text style={[styles.messageText, { color: isCustomer ? "#fff" : "#1C1C1C" }]}>
                      {item.text}
                    </Text>
                  </View>
                  <Text style={[styles.timeText, { textAlign: isCustomer ? 'right' : 'left' }]}>
                    {item.time}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        {/* INPUT SECTION */}
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.plusCircle}>
              <Text style={styles.plusIcon}>+</Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Write a message..."
              value={message}
              onChangeText={setMessage}
              style={styles.input}
              placeholderTextColor="#999"
              onSubmitEditing={handleSend}
            />
            <TouchableOpacity 
              style={[styles.sendButton, { opacity: message.trim().length > 0 ? 1 : 0.6 }]} 
              onPress={handleSend}
              disabled={message.trim().length === 0}
            >
              <Text style={styles.sendIcon}>↑</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      {/* SHOP DETAILS MODAL */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDetailsVisible}
        onRequestClose={() => setIsDetailsVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setIsDetailsVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>Shop Information</Text>
            
            <View style={styles.detailBox}>
              <Text style={styles.label}>Location</Text>
              <Text style={styles.value}>📍 Stall 42, Central Public Market</Text>
            </View>

            <View style={styles.detailBox}>
              <Text style={styles.label}>Accepted Payments</Text>
              <Text style={styles.value}>💳 GCash, Maya, Cash on Delivery</Text>
            </View>

            <View style={styles.detailBox}>
              <Text style={styles.label}>Average Response Time</Text>
              <Text style={styles.value}>⚡ Usually responds within 5 mins</Text>
            </View>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>View Full Menu</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BACKGROUND },
  headerSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: PRIMARY,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  backChevron: {
    width: 10,
    height: 10,
    borderLeftWidth: 2.5,
    borderBottomWidth: 2.5,
    borderColor: '#fff',
    transform: [{ rotate: '45deg' }],
    marginLeft: 3,
  },
  avatar: {
    width: 44, // Increased slightly to fit 3 letters
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  avatarText: { color: "#fff", fontWeight: "bold", fontSize: 13 }, // Smaller font for 3 letters
  onlineBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    borderWidth: 1.5,
    borderColor: PRIMARY,
  },
  headerName: { fontSize: 16, fontWeight: "700", color: "#fff" },
  activeText: { color: "rgba(255,255,255,0.7)", fontSize: 11 },
  detailsBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  detailsText: { color: "#fff", fontWeight: "600", fontSize: 12 },
  chatContainer: { padding: 16 },
  messageRow: { flexDirection: "row", marginBottom: 12, alignItems: "flex-end" },
  smallAvatar: {
    width: 30, // Increased slightly to fit 3 letters
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    marginBottom: 16, 
  },
  smallAvatarText: { fontSize: 8, color: PRIMARY, fontWeight: "bold" }, // Smaller font
  messageBubble: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20 },
  senderBubble: { backgroundColor: PRIMARY, borderBottomRightRadius: 4 },
  receiverBubble: { backgroundColor: "#fff", borderBottomLeftRadius: 4, elevation: 1 },
  messageText: { fontSize: 15 },
  timeText: { fontSize: 10, color: "#999", marginTop: 4 },
  inputWrapper: {
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F3F5",
    borderRadius: 25,
    paddingHorizontal: 8,
  },
  plusCircle: { width: 30, height: 30, justifyContent: 'center', alignItems: 'center' },
  plusIcon: { fontSize: 22, color: PRIMARY, fontWeight: '300' },
  input: { flex: 1, paddingVertical: 10, paddingHorizontal: 8, fontSize: 15, color: '#000' },
  sendButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  sendIcon: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  
  /* MODAL STYLES */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 24,
    paddingTop: 12,
    minHeight: height * 0.4,
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#DDD',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: PRIMARY,
    marginBottom: 24,
    textAlign: 'center',
  },
  detailBox: { marginBottom: 20 },
  label: { fontSize: 12, color: '#888', textTransform: 'uppercase', marginBottom: 4, letterSpacing: 0.5 },
  value: { fontSize: 16, color: '#333', fontWeight: '500' },
  actionButton: {
    backgroundColor: PRIMARY,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  actionButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default ChatScreen;