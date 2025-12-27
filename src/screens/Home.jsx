import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { homeStyles as styles } from '../styles/HomeStyles';
import { COLORS } from '../theme/colors';

// Dados fictícios
const ARTISTS = [
  { id: 1, name: 'Ana Silva', styles: 'Minimalistas, Old School', rating: 5, image: 'https://s3-blog.tattoo2me.com/wp-content/uploads/2020/01/1*xwy3_SJRFuYKW1a5Wbw7nQ.jpeg' },
  { id: 2, name: 'Luan Pereira', styles: 'Realismo, Retratos', rating: 5, image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 3, name: 'Renata Alves', styles: 'Realismo, Retratos', rating: 5, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 4, name: 'Francisco Cents', styles: 'Realismo, Retratos', rating: 5, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const ArtistCard = ({ artist }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.cardContainer}
      onPress={() => {
        if (artist.name === 'Ana Silva') {
          navigation.navigate('TatuadoraAna');
        }
      }}
    >
      <View>
        <Image source={{ uri: artist.image }} style={styles.cardImage} />
        <View style={styles.favoriteBadge}>
          <Ionicons name="heart-outline" size={16} color={COLORS.primaryText} />
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.artistName}>{artist.name}</Text>
        <Text style={styles.artistStyle} numberOfLines={1}>{artist.styles}</Text>
        <View style={styles.ratingContainer}>
          {[...Array(artist.rating)].map((_, i) => (
            <FontAwesome key={i} name="star" size={12} color={COLORS.star} style={{ marginRight: 2 }} />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <MaterialCommunityIcons name="squid" size={28} color={COLORS.logoText} /> 
            <Text style={styles.logoText}>Tattool</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}><Ionicons name="notifications-outline" size={24} color={COLORS.logoText} /></TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}><Ionicons name="settings-outline" size={24} color={COLORS.logoText} /></TouchableOpacity>
          </View>
        </View>

        {/* Busca */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput placeholder="Buscar tatuadores" style={styles.searchInput} placeholderTextColor="#999"/>
          <Ionicons name="list" size={20} color="#000" />
        </View>

        {/* Título Seção */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Tatuadores em Destaque</Text>
          <Text style={styles.seeAllText}>Ver todos</Text>
        </View>

        {/* Grid */}
        <View style={styles.gridContainer}>
          {ARTISTS.map((artist) => <ArtistCard key={artist.id} artist={artist} />)}
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomNavWrapper}>
        <View style={styles.bottomNav}>
          <Ionicons name="home-outline" size={28} color={COLORS.logoText} />
          <Ionicons name="heart-outline" size={28} color={COLORS.logoText} />
          <Ionicons name="person-outline" size={28} color={COLORS.logoText} />
        </View>
      </View>
    </SafeAreaView>
  );
}