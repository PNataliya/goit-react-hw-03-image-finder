import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ image, openModal }) {
  const { webformatURL, largeImageURL, tags } = image;
  return (
    <GalleryItem>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        data-large={largeImageURL}
        onClick={openModal}
      />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};
