import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import globalStyles from '../styles/globalStyles'
import { checkIfFavorite, toggleFavoriteUser } from '../components/useFavorites'

export default function DetailsScreen({ route }) {
  const { user } = route.params
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    checkIfFavorite(user.login.uuid).then(setIsFavorite)
  }, [])

  const handleToggleFavorite = async () => {
    const updatedStatus = await toggleFavoriteUser(user, isFavorite)
    setIsFavorite(updatedStatus)
    Alert.alert(updatedStatus ? 'Saved' : 'Removed', updatedStatus ? 'User added to favorites' : 'User removed from favorites')
  }

  return (
    <View style={globalStyles.centered}>
      <Image source={{ uri: user.picture.large }} style={globalStyles.bigImage} />
      <Text style={globalStyles.nameText}>{user.name.first} {user.name.last}</Text>
      <Text style={globalStyles.emailText}>{user.email}</Text>
      <TouchableOpacity
        onPress={handleToggleFavorite}
        style={globalStyles.favoriteButton}
      >
        <Text style={globalStyles.favoriteButtonText}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
