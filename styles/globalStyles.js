import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f2f5f8',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginVertical: 6,
    marginHorizontal: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageThumbnail: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  textContainer: {
    marginLeft: 14,
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  emailText: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  searchInput: {
    padding: 12,
    margin: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  centered: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f2f5f8',
  },
  bigImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 12,
  },
  errorContainer: {
    backgroundColor: '#ffe5e5',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 14,
    textAlign: 'center',
  },

  starIcon: {
    padding: 4,
  },

  favoriteButton: {
  backgroundColor: '#2196F3',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 12,
  marginTop: 16,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3,
},

favoriteButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
},

})

