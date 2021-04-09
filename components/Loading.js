import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center style={{ display: "grid", height: "100vh", placeItems: "center" }}>
      <div>
        <img
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png'
          alt='loading'
          height={200}
          style={{ marginBottom: 10 }}
        />
        <Circle size={60} color='#3cbc28' />
      </div>
    </center>
  );
};

export default Loading;
