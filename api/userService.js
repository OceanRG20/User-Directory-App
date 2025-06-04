export const fetchUsers = async (page = 20) => {
  const response = await fetch(`https://randomuser.me/api/?results=20&page=${page}`)
  const data = await response.json()
  return data.results
};

export const filterUsers = (users, query) => {
  return users.filter(user =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(query.toLowerCase())
  )
}