function Gallery({ photos }) {
  return (
    <div className="Gallery">
      {photos.map((photo) => {
        return <img src={photo} className="photo" />;
      })}
    </div>
  );
}

export default Gallery;
