
import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { profileStyles as styles } from '../styles/ProfileStyles';
import { COLORS } from '../theme/colors';

export default function TatuadoraAna() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* StatusBar transparente para efeito imersivo */}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header com Gradiente Curvo */}
        <View style={styles.headerContainer}>
          <LinearGradient
            colors={['#E8C5B0', '#8B0000', '#4A148C']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientHeader}
          >
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-undo" size={20} color="#FFF" />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Informações do Perfil */}
        <View style={styles.profileInfoContainer}>
          <View style={styles.locationContainer}>
             <Ionicons name="location-sharp" size={14} color="#666" />
             <Text style={styles.locationText}>Quixadá, Ceará</Text>
          </View>

          <View style={styles.profileImageBorder}>
            <Image 
              source={{ uri: 'https://s3-blog.tattoo2me.com/wp-content/uploads/2020/01/1*xwy3_SJRFuYKW1a5Wbw7nQ.jpeg' }} 
              style={styles.profileImage} 
            />
          </View>
          
          <Text style={styles.name}>Ana Silva</Text>
          <Text style={styles.handle}>@ana.silva_</Text>

          <View style={styles.actionsRow}>
            <View style={styles.socialIcons}>
              <TouchableOpacity><FontAwesome5 name="whatsapp" size={24} color="#333" /></TouchableOpacity>
              <TouchableOpacity><Feather name="instagram" size={24} color="#333" /></TouchableOpacity>
              <TouchableOpacity><FontAwesome5 name="behance" size={24} color="#333" /></TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.budgetButton}>
              <FontAwesome5 name="pen-fancy" size={14} color={COLORS.purpleBtn} />
              <Text style={styles.budgetBtnText}>Orçamento</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          <Text style={styles.tagsLabel}>Estilos com que trabalha:</Text>
          <Text style={styles.tagsText}>#cybertribal #minimalista #blackwork #cybersigilism</Text>
        </View>

        {/* Portfólio */}
        <Text style={styles.sectionTitle}>Portfólio</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.portfolioScroll}>
           <Image source={{ uri: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} style={styles.portfolioImage} />
           <Image source={{ uri: 'https://images.unsplash.com/photo-1590246814883-057063630396?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} style={styles.portfolioImage} />
           <Image source={{ uri: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} style={styles.portfolioImage} />
        </ScrollView>

        {/* Disponíveis / Flash */}
        <Text style={styles.sectionTitle}>Disponíveis</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.flashScroll}>
           <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25663.png' }} style={styles.flashImage} /> 
           <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/860/860079.png' }} style={styles.flashImage} />
           <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/32/32328.png' }} style={styles.flashImage} />
        </ScrollView>

      </ScrollView>
    </View>
  );
}