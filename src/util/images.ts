import { getImage } from 'astro:assets'
import type { ImageMetadata } from 'astro'

// The `sizes` values below mirror the layout: the 13-column grid is 1500px wide from the
// 2xl breakpoint (1536px) on, and collapses to a single column below lg (1024px).

// Cover images and figures in the main content column (6 of 13 columns)
export const contentSizes = '(min-width: 1536px) 684px, (min-width: 1024px) 46vw, 100vw'

// The large lead image on the blog index (8 of 13 columns)
export const leadSizes = '(min-width: 1536px) 917px, (min-width: 1024px) 61vw, 100vw'

// Cards in the two-column post grids
const cardSizes = '(min-width: 1536px) 504px, (min-width: 1024px) 33vw, calc(100vw - 40px)'

const candidateWidths = [400, 800, 1200, 1600]

/** Srcset widths for an image, without upscaling it beyond its original width */
export const widthsFor = (image: ImageMetadata) => {
  const widths = candidateWidths.filter((width) => width < image.width)
  return widths.length < candidateWidths.length ? [...widths, image.width] : widths
}

/** Plain attributes for a responsive `<img>`, for components that can't use Astro's `<Image>` */
export interface ResponsiveImage {
  src: string
  srcSet: string
  sizes: string
  width: number
  height: number
}

export const getCardImage = async (image: ImageMetadata): Promise<ResponsiveImage> => {
  const result = await getImage({ src: image, widths: widthsFor(image), sizes: cardSizes })

  return {
    src: result.src,
    srcSet: result.srcSet.attribute,
    sizes: cardSizes,
    width: Number(result.attributes.width),
    height: Number(result.attributes.height),
  }
}

/** Absolute URL of a JPEG rendition for `og:image` and structured data */
export const getShareImageUrl = async (image: ImageMetadata, origin: string) => {
  const result = await getImage({ src: image, width: Math.min(image.width, 1200), format: 'jpg' })
  return origin + result.src
}
