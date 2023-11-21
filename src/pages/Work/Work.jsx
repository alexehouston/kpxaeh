import { useState} from "react";
import "./Work.css";

export default function Work({ isSmallScreen }) {
  const [hoveredItemGallery1, setHoveredItemGallery1] = useState(0);
  const [hoveredItemGallery2, setHoveredItemGallery2] = useState(0);

  const handleMouseEnterGallery1 = (index) => {
    setHoveredItemGallery1(index);
  };

  const handleMouseEnterGallery2 = (index) => {
    setHoveredItemGallery2(index);
  };

  const gallery1Items = [
    "/assets/kp/1.jpeg",
    "/assets/kp/0.jpeg",
    "/assets/kp/2.jpeg",
    "/assets/kp/3.jpeg",
    "/assets/kp/4.jpeg",
    "/assets/kp/5.jpeg",
    "/assets/kp/6.jpeg",
    "/assets/kp/7.jpeg",
    "/assets/kp/8.jpeg",
    "/assets/kp/9.jpeg"
  ];

  const gallery2Items = [
    "/assets/aeh/0.jpg",
    "/assets/aeh/1.jpg",
    "/assets/aeh/2.jpg",
    "/assets/aeh/3.jpg",
    "/assets/aeh/4.jpg",
    "/assets/aeh/5.jpg",
    "/assets/aeh/6.jpg",
    "/assets/aeh/7.jpg",
    "/assets/aeh/8.jpg",
    "/assets/aeh/9.jpg"
  ];

  return (
    <div className="Work">
      <div className="container animate__animated animate__fadeInLeft animate__slow">
        <h4>Kristen Pennington</h4>
        <div className="gallery">
          {gallery1Items.map((imageUrl, index) => (
            <div
              key={index}
              className="gallery-item"
              onMouseEnter={() => handleMouseEnterGallery1(index)}
              style={{
                flex: index === hoveredItemGallery1 ? (isSmallScreen ? "1 1 800px" : "1 1 400px") : (isSmallScreen ? "1 1 100px" : "1 1 20px"),
              }}
            >
              <img src={imageUrl} alt="" oncontextmenu="return false;" />
            </div>
          ))}
        </div>
      </div>
      <div className="container animate__animated animate__fadeInRight animate__slow">
        <h4>Alex E. Houston</h4>
        <div className="gallery">
          {gallery2Items.map((imageUrl, index) => (
            <div
              key={index}
              className="gallery-item"
              onMouseEnter={() => handleMouseEnterGallery2(index)}
              style={{
                flex: index === hoveredItemGallery2 ? (isSmallScreen ? "1 1 800px" : "1 1 400px") : (isSmallScreen ? "1 1 100px" : "1 1 20px"),
              }}
            >
              <img src={imageUrl} alt="" oncontextmenu="return false;" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
