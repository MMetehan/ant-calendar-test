import React, { useState } from "react";
import { Col, ColorPicker, Row } from "antd";

const style = {
  gridStyles: { background: "#0092ff", padding: "8px 0" },
  customBox: {
    border: "1px solid aqua",
    padding: 8,
  },
};

function App() {
  const [backColor, setBackColor] = useState("transparent");
  return (
    <>
      <Row gutter={8}>
        <Col className="gutter-row" xs={12}>
          <div>
            <ColorPicker
              defaultValue="#1677ff"
              size="large"
              showText
              onChange={(value) => {
                console.log(value.toHexString());
                setBackColor(value.toHexString());
              }}
            />
          </div>
        </Col>
        <Col className="gutter-row" xs={12}>
          <div
            style={Object.assign({}, style.customBox, {
              backgroundColor: backColor,
            })}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            molestias assumenda pariatur, quas iusto iste. Repellendus quam
            maiores ipsum! Fugit nisi itaque magni ipsa cum mollitia sit, ipsum
            officia eius?
          </div>
        </Col>
      </Row>
    </>
  );
}

export default App;
