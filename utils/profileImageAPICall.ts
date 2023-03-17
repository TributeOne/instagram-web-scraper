import axios from 'axios'

const getInstagramProfilePicture = async (username: string): Promise<string | null> => {
    const response = await axios.get(`https://www.instagram.com/${username}/?__a=1&__d=1`)
  if (response.status !== 200) {
    return null
  }
  const profilePictureUrl = response.data.graphql.user.profile_pic_url;
  return profilePictureUrl
}