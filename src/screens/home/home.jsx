import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import "./home.css";
import course from "../../json/course.json";

function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(course);
    setIsLoading(false);
  }, []);

  return (
    <div id="body1">
    <div className="Home" id="body">
      {isLoading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <PostCard
            key={index}
            title={item.title}
            id={item.id}
            image={item.image_480x270}
            name={item.visible_instructors[0].name}
            rating={item.avg_rating}
            image1={item.visible_instructors[0].image_50x50}
            price={"$99"}
          />
        ))
      ) : (
        <p>No Data</p>
      )}
    </div>
    </div>
  );
}

export default Home;
