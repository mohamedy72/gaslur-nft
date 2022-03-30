import "./avatar.css";

const Avatar = ({ img, alt }) => {
  return <img className="avatar" src={img} alt={alt} />;
};

export default Avatar;
