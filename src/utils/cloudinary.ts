export const buildCloudinaryUrl = (
  id: string,
  assetType: 'image' | 'video' = 'image',
) => {
  const prefix = `https://res.cloudinary.com/grouprmc`
  if (id.startsWith(prefix)) {
    return id
  }
  return `${prefix}/${assetType}/upload/${id}`
}
