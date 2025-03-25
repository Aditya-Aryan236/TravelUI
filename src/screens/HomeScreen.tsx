import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

const categories = [
  { id: 1, title: "Hotels", image: require("../../assets/images/categories/hotels.png") },
  { id: 2, title: "Flights", image: require("../../assets/images/categories/flights.png") },
  { id: 3, title: "Flight + Hotel", image: require("../../assets/images/categories/flight_hotel.png"), isNew: true },
  { id: 4, title: "Activities", image: require("../../assets/images/categories/activities.png"), isNew: true },
];

const quickLinks = [
  { id: 1, title: "Homes & Apts", image: require("../../assets/images/quicklinks/home.png") },
  { id: 2, title: "Long Stay Deals", image: require("../../assets/images/quicklinks/long_stay.png") },
  { id: 3, title: "Hourly Stay", image: require("../../assets/images/quicklinks/hourly_stay.png") },
  { id: 4, title: "Special Offers", image: require("../../assets/images/quicklinks/special_offers.png") },
  { id: 5, title: "Car Rentals", image: require("../../assets/images/quicklinks/car_rental.png") },
  { id: 6, title: "Airport Transfer", image: require("../../assets/images/quicklinks/airport_transfer.png") },
  { id: 7, title: "eSim", image: require("../../assets/images/quicklinks/esim.png") },
  { id: 8, title: "Trains", image: require("../../assets/images/quicklinks/trains.png") },
  { id: 9, title: "Buses", image: require("../../assets/images/quicklinks/buses.png") },
  { id: 10, title: "Ferries", image: require("../../assets/images/quicklinks/ferries.png") },
];

const welcomePack = [
  { id: 1, title: "Up to 12% off", subtitle: "First time booking", image: require("../../assets/images/welcomePacks/discount.png") },
  { id: 2, title: "Up to 8% off", subtitle: "First flight booking", image: require("../../assets/images/welcomePacks/flight_discount.png") },
  { id: 3, title: "VIP Gold Trial", subtitle: "Up to 18% off", image: require("../../assets/images/welcomePacks/vip_gold.png") },
  { id: 4, title: "Up to 10% off", subtitle: "First activity booking", image: require("../../assets/images/welcomePacks/activity_discount.png") },
  { id: 5, title: "Up to 10% off", subtitle: "Second time booking", image: require("../../assets/images/welcomePacks/second_booking.png") },
];

const specialDeals = [
  { id: 1, title: "Travel to India", discount: "20% off", tagline: "See more, spend less!", image: require("../../assets/images/special_deals/deal_india.png") },
  { id: 2, title: "Travel to Thailand", discount: "20% off", tagline: "", image: require("../../assets/images/special_deals/deal_thailand.png") },
  { id: 3, title: "Travel to Singapore", discount: "15% off", tagline: "Experience the Lion City!", image: require("../../assets/images/special_deals/deal_singapore.png") },
  { id: 4, title: "Travel to China", discount: "18% off", tagline: "Discover the Great Wall!", image: require("../../assets/images/special_deals/deal_china.png") },
];

const promotions = [
  { id: 1, title: "✨ Flash Sale ✨", discount: "Up to 5% off", tagline: "on all flights, every day!", image: require("../../assets/images/promotions/flash_sale.png") },
];

export  function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
        <View style={styles.vipBadge}>
          <Text style={[styles.vipText, { backgroundColor: "#000" }]}>VIP</Text>
          <Text style={[styles.vipText, { backgroundColor: "#cd7f32" }]}>Bronze</Text>
        </View>
        <View style={styles.wallet}>
          <Image source={require("../../assets/images/wallet.png")} style={styles.walletIcon} />
          <Text style={styles.walletText}>RS. 1.2K</Text>
        </View>
      </View>

      {/* Category Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((item) => (
          <TouchableOpacity key={item.id} style={styles.categoryCard}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={ styles.categoryText}>{item.title}</Text>
            {item.isNew && <Text style={styles.newBadge}>New!</Text>}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Quick Links */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickLinksContainer}>
        {quickLinks.map((item) => (
          <TouchableOpacity key={item.id} style={styles.quickLink}>
            <Image source={item.image} style={styles.quickLinkImage} />
            <Text style={styles.quickLinkText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

     
      {/* Welcome Pack */}
      <Text style={styles.heading}>New User Welcome Pack</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.welcomePackScroll}>
        {welcomePack.map((item) => (
          <View key={item.id} style={styles.welcomePackCard}>
            <Image source={item.image} style={styles.welcomePackImage} />
            <View style={styles.welcomePackTextContainer}>
              <Text style={styles.welcomePackTitle}>{item.title}</Text>
              <Text style={styles.welcomePackSubtitle}>{item.subtitle}</Text>
            </View>
            <TouchableOpacity style={styles.useButton}>
              <Text style={styles.useButtonText}>Use</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView> 

      {/* Special Deals */}
      <Text style={styles.heading}>Special Deals</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.specialDealsContainer}>
        {specialDeals.map((item) => (
          <View key={item.id} style={styles.specialDealCard}>
            <Image source={item.image} style={styles.specialDealImage} />
            <View style={styles.specialDealTextContainer}>
              <Text style={styles.specialDealTitle}>{item.title}</Text>
              <Text style={styles.specialDealDiscount}>{item.discount}</Text>
              {item.tagline && <Text style={styles.specialDealTagline}>{item.tagline}</Text>}
            </View>
          </View>
        ))}
      </ScrollView>
      
      {/* Flights & Activities Promotions */}
      <Text style={styles.heading}>Flights & Activities Promotions</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promotionsContainer}>
        {promotions.map((item) => (
          <View key={item.id} style={styles.promotionCard}>
            <Image source={item.image} style={styles.promotionImage} />
            <View style={styles.promotionTextContainer}>
              <Text style={styles.promotionTitle}>{item.title}</Text>
              <Text style={styles.promotionDiscount}>{item.discount}</Text>
              <Text style={styles.promotionTagline}>{item.tagline}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

       {/* VIP Status */}
      <Text style={styles.heading}>VIP Status</Text>
      <View style={styles.vipContainer}>
        <Text style={styles.vipDescription}>
          As an <Text style={styles.boldText}>AgodaVIP Bronze</Text> member, you receive a larger discount
        </Text>
        <View style={styles.vipBadgeContainer}>
          <Text style={styles.vipBadgeText }>⭐ VIP</Text>
          <Text style={styles.bronzeBadgeText}>Bronze</Text>
        </View>
      </View>

      <Text style={styles.heading}>Travel Achievements</Text>
      <View style={styles.achievementContainer}>
        <View style={styles.achievementItem}>
          <Image source={require("../../assets/images/achievements/agojis.png")} style={styles.achievementIcon} />
          <Text style={styles.achievementText}>1/6 Agojis</Text>
        </View>
        <View style={styles.achievementItem}>
          <Image source={require("../../assets/images/achievements/cities.png")} style={styles.achievementIcon} />
          <Text style={styles.achievementText}>0 Cities</Text>
        </View>
      </View>

      <Text style={styles.heading}>Discover hotels in top destinations</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hotelScroll}>
        <View style={styles.hotelCard}>
          <Image source={require("../../assets/images/hotels/dubai.png")} style={styles.hotelImage} />
          <Text style={styles.hotelTitle}>Dubai</Text>
          <Text style={styles.hotelSubtitle}>Shopping | Beaches</Text>
          <Text style={styles.hotelSubtitle}>₹ 8,464 per night average</Text>
        </View>
        <View style={styles.hotelCard}>
          <Image source={require("../../assets/images/hotels/hyderabad.png")} style={styles.hotelImage} />
          <Text style={styles.hotelTitle}>Hyderabad</Text>
          <Text style={styles.hotelSubtitle}>Sightseeing | Restaurants</Text>
          <Text style={styles.hotelSubtitle}>₹ 3,366 per night average</Text>
        </View>
        <View style={styles.hotelCard}>
          <Image source={require("../../assets/images/hotels/delhi.png")} style={styles.hotelImage} />
          <Text style={styles.hotelTitle}>Delhi</Text>
          <Text style={styles.hotelSubtitle}>Historical | Markets</Text>
          <Text style={styles.hotelSubtitle}>₹ 3,992 per night average</Text>
        </View>
        <View style={styles.hotelCard}>
          <Image source={require("../../assets/images/hotels/goa.png")} style={styles.hotelImage} />
          <Text style={styles.hotelTitle}>Goa</Text>
          <Text style={styles.hotelSubtitle}>Beaches | Nightlife</Text>
          <Text style={styles.hotelSubtitle}>₹ 5,192 per night average</Text>
        </View>
        <View style={styles.hotelCard}>
          <Image source={require("../../assets/images/hotels/chennai.png")} style={styles.hotelImage} />
          <Text style={styles.hotelTitle}>Chennai</Text>
          <Text style={styles.hotelSubtitle}>Temples | Food</Text>
          <Text style={styles.hotelSubtitle}>₹ 3,962 per night average</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },

  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15 },
  logo: { width: 120, height: 40, resizeMode: "contain" },
  
  vipBadge: { flexDirection: "row", borderRadius: 5, overflow: "hidden" },
  vipText: { color: "#fff", paddingHorizontal: 6, paddingVertical: 2, fontWeight: "bold" },
  bronzeText: { fontSize: 12, color: "#8B4513" },
  
  wallet: { flexDirection: "row", alignItems: "center", backgroundColor: "#F5F5F5", padding: 8, borderRadius: 5 },
  walletIcon: { width: 20, height: 20, marginRight: 5 },
  walletText: { fontSize: 14, fontWeight: "bold" },
  
  categoryContainer: { flexDirection: "row", marginVertical: 10 , overflow: "visible"},
  categoryCard: { width: 100, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10 },
  categoryImage: { width: "100%", height: "100%", resizeMode: "cover", borderRadius: 10 },
  categoryText: { position: "absolute", bottom: 5, textAlign: "center", fontSize: 12, fontWeight: "bold", color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)", paddingHorizontal: 4, borderRadius: 4 },
  newBadge: { position: "absolute", top: -3, zIndex: 1, left: "50%", transform: [{ translateX: -20 }], backgroundColor: "red", color: "white", fontSize: 10, fontWeight: "bold", paddingHorizontal: 6, paddingVertical: 2, borderRadius: 10, overflow: "visible" },

  quickLinksContainer: { flexDirection: "row", marginVertical: 10 },
  quickLink: { alignItems: "center", marginHorizontal: 5, padding: 10, backgroundColor: "#EEE", borderRadius: 8 },
  quickLinkImage: { width: 25, height: 25, resizeMode: "contain" },
  quickLinkText: { fontSize: 12, marginTop: 5 },

  heading: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },

  welcomePackScroll: { flexDirection: "row", marginVertical: 10 },
  welcomePackCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#f8f9fa", padding: 15, borderRadius: 10, marginRight: 10, width: 250 },
  welcomePackImage: { width: 40, height: 40, resizeMode: "contain", marginRight: 10 },
  welcomePackTextContainer: { flex: 1 },
  welcomePackTitle: { fontSize: 16, fontWeight: "bold" },
  welcomePackSubtitle: { fontSize: 12, color: "#666" },

  useButton: { backgroundColor: "#ff6f00", padding: 10, borderRadius: 5, alignItems: "center", marginTop: 10 },
  useButtonText: { color: "#fff", fontSize: 14, fontWeight: "bold" },
  
  specialDealsContainer: { flexDirection: "row", marginVertical: 10 },
  specialDealCard: { alignItems: "center", marginRight: 10, position: "relative" },
  specialDealImage: { width: 200, height: 150, resizeMode: "cover", borderRadius: 10 },
  specialDealTextContainer: { position: "absolute", top: "50%", left: 0, right: 0, alignItems: "center", transform: [{ translateY: -20 }] },
  specialDealTitle: { fontSize: 16, fontWeight: "bold", color: "#fff", textAlign: "center" },
  specialDealDiscount: { fontSize: 14, fontWeight: "bold", color: "#FFD700", textAlign: "center" },
  specialDealTagline: { fontSize: 12, fontWeight: "bold", color: "#fff", textAlign: "center" },
  
  dealImage: { width: "100%", height: 150, resizeMode: "cover", borderRadius: 10 },

  promotionsContainer: { flexDirection: "row", marginVertical: 10 },
  promotionCard: { alignItems: "center", marginRight: 10, position: "relative" },
  promotionImage: { width: 200, height: 150, resizeMode: "cover", borderRadius: 10 },
  promotionTextContainer: { position: "absolute", top: "50%", left: 0, right: 0, alignItems: "center", transform: [{ translateY: -20 }] },
  promotionTitle: { fontSize: 16, fontWeight: "bold", color: "#fff", textAlign: "center" },
  promotionDiscount: { fontSize: 14, fontWeight: "bold", color: "#FFD700", textAlign: "center" },
  promotionTagline: { fontSize: 12, fontWeight: "bold", color: "#fff", textAlign: "center" },

  vipContainer: { backgroundColor: "#F5F5F5", padding: 10, borderRadius: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 },
  vipDescription: { fontSize: 14, color: "#333", flex: 1 },
  boldText: { fontWeight: "bold" },
  vipBadgeContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderWidth: 1, borderColor: "#CD7F32" },
  vipBadgeText: { fontSize: 14, fontWeight: "bold", color: "#FFD700", marginRight: 5 },
  bronzeBadgeText: { fontSize: 14, fontWeight: "bold", color: "#CD7F32" },

  achievementContainer: { flexDirection: "row", justifyContent: "space-between", backgroundColor: "#F5F5F5", padding: 10, borderRadius: 10, marginVertical: 10 },
  achievementItem: { flexDirection: "row", alignItems: "center" },
  achievementIcon: { width: 30, height: 30, marginRight: 5 },
  achievementText: { fontSize: 14, fontWeight: "bold", color: "#333" },

  hotelScroll: { marginVertical: 10 },
  hotelCard: { width: 170, marginRight: 10 },
  hotelImage: { width: "100%", height: 110, borderRadius: 10 },
  hotelTitle: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  hotelSubtitle: { fontSize: 14, color: "#555" },
  hotelPrice: { fontSize: 14, fontWeight: "bold", color: "#333" }
});


