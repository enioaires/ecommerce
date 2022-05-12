import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'vqgpgr4m',
    dataset: 'production',
    apiVersion: '2022-05-10',
    useCdn: true,
    token: 'sk7sw1xEvVggWG2if2Xs8rbXFZZcnvWKTOLYUiPUwfzmWt7sRKQ5DQ8EduAsDn5eaMeCiZNJGYVZxRsfoIBhl4AMDYOZkD5w5lFo9FSkjXR97V6UhuAzAHP5XLncOyUhvi0UcYa4fFxHYjplxX2RyDdJEqquqHmd4u45XYdIdMF4hcHxvXvV'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)