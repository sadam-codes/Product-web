import { Container } from "react-bootstrap";
import girl from "../../assets/images/girl.png";
import group from "../../assets/images/group.png";

function AllData() {
  return (
    <Container className="widthcontainer px-2">
      <div className="d-flex">
        <img
          className="girlimage  d-lg-block d-none"
          src={girl}
          alt="No Display"
        />

        <div className="px-lg-3 px-0">
          <h3 className="specialffer py-5">
            A special offer for my blog visitors.
          </h3>
          <div className="p-0">
            <img className="widthhh p-0" src={group} alt="No Display" />
          </div>
          <div className="padder text-center py-3">
            <button
              type="button"
              className="stylesmallbuttontwo px-3 text-white py-2 position-absolute"
            >
              46% OFF
            </button>
          </div>
          <p className="bestseller py-4 mb-0">
            Best seller package - 3 boxes of 60 gummies for a duration of 3
            months at -46% off.
          </p>
          <div className="position-absolute">
            <button type="button" className="sellbutton">
              SAVE 4<sup>6%</sup> NOW
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AllData;
