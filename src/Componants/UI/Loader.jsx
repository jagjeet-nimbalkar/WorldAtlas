import { RotatingLines } from "react-loader-spinner";
import "../../App.css"

export const Loader = () => {
  return (
    <div className="loader-container">
      <RotatingLines
        className="loader"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
