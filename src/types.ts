export interface ImageType   {
  id: string,
  title: string,
  urls: {
    small: string,
  },
  user: {
    name: string,
    username: string,
    profile_image: {
      small: string,
    },
  },
  alt_description: string,
  likes: number,
  description: string,
  tags: [{
    "title": string
  }],
  downloads: number
}