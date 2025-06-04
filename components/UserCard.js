import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import globalStyles from '../styles/globalStyles'
import { checkIfFavorite, toggleFavoriteUser } from './useFavorites'

export default function UserCard({ user, onPress }) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    checkIfFavorite(user.login.uuid).then(setIsFavorite)
  }, [])

  const handleStarPress = async () => {
    const newStatus = await toggleFavoriteUser(user, isFavorite)
    setIsFavorite(newStatus)
  }

  return (
    <TouchableOpacity onPress={onPress} style={globalStyles.card}> 
      <Image source={{ uri: user.picture.thumbnail }} style={globalStyles.imageThumbnail} />
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.nameText}>{user.name.first} {user.name.last}</Text>
        <Text style={globalStyles.emailText}>{user.email}</Text>
      </View>
      <TouchableOpacity onPress={handleStarPress} style={globalStyles.starIcon}>
        <Ionicons
          name={isFavorite ? 'star' : 'star-outline'}
          size={24}
          color={isFavorite ? '#fbc02d' : '#999'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}