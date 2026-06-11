import NextImage, { ImageProps } from 'next/image'

// If your starter template uses a global base path configuration
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const Image = ({ src, ...rest }: ImageProps) => {
  // Safe-trim the string to strip the hidden Windows \r characters dynamically
  const cleanSrc = typeof src === 'string' ? `${basePath}${src.trim()}` : src

  return <NextImage src={cleanSrc} {...rest} />
}

export default Image
