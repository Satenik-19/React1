function Post(props) {
  let { title, text, tags, autor, img, img_2x, date, views } = props;

  let overlayObj = {
    visibility: "visible",
    opacity: "1",
  };
  return (
    <div
      className="post"
      onClick={() => {
        if (props.isOnPage) {
          props.click(overlayObj);
          props.setObjOfPost(props.objOfPost);
        }
      }}
    >
      <img src={img} srcSet={`${img_2x} 2x`} alt="picture" />
      <div className="content">
        <h3>{tags}</h3>
        <h2>{title}</h2>
        <p className="info">
          <span className="name">{autor}</span>
          <span className="data">{date}</span>
          <span>{views}</span>
        </p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Post;
