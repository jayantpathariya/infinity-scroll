import './Image.scss';

const Image = ({ thumbnailUrl, title }) => {
  return (
    <div className="container">
      <img src={thumbnailUrl} alt="img" className="img" />
      <p className="title">{title}</p>
    </div>
  );
};

export default Image;
