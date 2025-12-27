import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../theme/colors';

const { width } = Dimensions.get('window');

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.logoText,
    marginLeft: 5,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 25,
    elevation: 3, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    height: '100%', // Garante que o input ocupe a altura
    outlineStyle: 'none', // Remove borda azul na web
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primaryText,
  },
  seeAllText: {
    color: COLORS.logoText,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '48%', // Melhor que cálculo fixo para web/mobile responsivo
    backgroundColor: COLORS.cardBg,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#5c5c5c',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 140,
  },
  favoriteBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 4,
    elevation: 2,
  },
  cardContent: {
    padding: 10,
  },
  artistName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primaryText,
    marginBottom: 2,
  },
  artistStyle: {
    fontSize: 11,
    color: COLORS.secondaryText,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  bottomNavWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#F3E5F5',
    width: '85%',
    height: 60,
    borderRadius: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
});