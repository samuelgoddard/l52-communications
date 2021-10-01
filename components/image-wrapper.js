import Img from 'next/image';
import { imageUrlBuilder, useNextSanityImage } from 'next-sanity-image';
import sanity from '../services/sanity';
import { useState } from 'react';

const customImageBuilder = (imageUrlBuilder, options, baseWidth, baseHeight, fill, ignoreCropping) => {
  return ignoreCropping ? imageUrlBuilder.fit('clip') : imageUrlBuilder
    .size(baseWidth || options.originalImageDimensions.width, baseHeight || options.originalImageDimensions.height)
    .fit(fill ? 'fill' : 'clip')
    .crop(`top`)
    .quality(100);
};

function ImageWrapper({ image, sizes, className, alt, baseWidth, baseHeight, noPlaceholder, fill, objectFit, ignoreCropping, priority, next, lqip }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  if (next && !(image?.asset?.metadata?.dimensions || image?.asset?._ref)) return <></>
  const imageProps =  useNextSanityImage(
    sanity.client,
    image,
    { imageBuilder: (imageUrlBuilder, options) => customImageBuilder(imageUrlBuilder, options, baseWidth, baseHeight, fill, ignoreCropping)} 
  )

  let setBaseWidth = imageProps.width
  let removeWidth = false

  if (ignoreCropping) {
    setBaseWidth =  imageProps.width
  } else if (fill) {
    removeWidth = true
  } else if (baseWidth) {
    setBaseWidth = baseWidth
  }

  let setBaseHeight =  imageProps.height
  let removeHeight = false
  
  if (ignoreCropping) {
    setBaseHeight =  imageProps.height
  } else if (fill) {
    removeHeight = true
  } else if (baseHeight) {
    setBaseHeight = baseHeight
  }

  return (
    <div className={`${className} ${ noPlaceholder ? '' : ''} bg-black dark:bg-opacity-25 bg-opacity-10`}>
      <Img
        src={imageProps.src}
        { ...( !removeWidth && { width: setBaseWidth } ) }
        { ...( !removeHeight && { height:  setBaseHeight } ) }
        className={`${className} object-cover object-top ${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}
        alt={alt}
        layout={fill ? 'fill' : 'responsive'}
        objectFit={fill ? 'cover' : null}
        priority={priority ? priority : false}
        objectPosition={`50% 0`}        
        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
              setImageIsLoaded(true)
          }
        }}
        { ...( lqip && { placeholder: "blur" })}
        { ...( lqip && { blurDataURL: lqip })}
      />
    </div>
  )
}

export default ImageWrapper;