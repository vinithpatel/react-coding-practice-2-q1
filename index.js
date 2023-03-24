const Button = (props) => {
  const { className, buttonText } = props;

  return <button className={className}>{buttonText}</button>;
};

const element = (
  <div className="background-container">
    <div className="info-container">
      <h1 className="heading">Social Buttons</h1>
      <div class="buttons-container">
        <Button className="like-button button" buttonText="Like" />
        <Button className="comment-button button" buttonText="Comment" />
        <Button className="share-button button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
