import React, { useState, useEffect, useCallback } from 'react'
import { View, FlatList, TextInput, ActivityIndicator, RefreshControl } from 'react-native'
import UserCard from '../components/UserCard'
import ErrorMessage from '../components/ErrorMessage'
import globalStyles from '../styles/globalStyles'
import { fetchUsers, filterUsers } from '../api/userService'

export default function HomeScreen({ navigation }) {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [query, setQuery] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const loadUsers = async (pageToLoad = 1, isRefresh = false) => {
    if (pageToLoad === 1) setLoading(true)
    setError('')

    try {
      const results = await fetchUsers(pageToLoad)
      const newUsers = isRefresh ? results : [...users, ...results]
      setUsers(newUsers)
      setFilteredUsers(filterUsers(newUsers, query))
    } catch (e) {
      setError('Failed to fetch users. Please check your connection.')
    }

    if (pageToLoad === 1) setLoading(false)
  }

  useEffect(() => {
    loadUsers(1)
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setPage(1)
    loadUsers(1, true).then(() => setRefreshing(false))
  }, [])

  const handleSearch = (text) => {
    setQuery(text)
    setFilteredUsers(filterUsers(users, text))
  }

  const handleLoadMore = async () => {
    if (!isLoadingMore && !refreshing) {
      setIsLoadingMore(true)
      const nextPage = page + 1
      await loadUsers(nextPage)
      setPage(nextPage)
      setIsLoadingMore(false)
    }
  }

  const goToDetails = (user) => navigation.navigate('Details', { user })

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Search users..."
        value={query}
        onChangeText={handleSearch}
        style={globalStyles.searchInput}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#2196F3" />
      ) : (
        <>
          <ErrorMessage message={error} />
          <FlatList
            data={filteredUsers}
            keyExtractor={(item, index) => item.login.uuid + index}
            renderItem={({ item }) => (
              <UserCard user={item} onPress={() => goToDetails(item)} />
            )}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              isLoadingMore ? <ActivityIndicator size="small" color="#2196F3" /> : null
            }
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            contentContainerStyle={{ paddingBottom: 12 }}
          />
        </>
      )}
    </View>
  )
}