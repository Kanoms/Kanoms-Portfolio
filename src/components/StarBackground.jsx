import React, { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration (Stars)
// id, size, x, y, delay, animationDuration (Meteors)

export const StarBackground = () => {
  const [stars, setSars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Size between 1 and 4
        x: Math.random() * 100, // Percentage of screen width
        y: Math.random() * 100, // Percentage of screen height
        opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // Duration between 2s and 6s
      });
    }

    setSars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Size between 1 and 3
        x: Math.random() * 100, // Percentage of screen width
        y: Math.random() * 20, // Percentage of screen height (top 20%)
        delay: Math.random() * 15, // Delay between 0s and 15s
        animationDuration: Math.random() * 3 + 3, // Duration between 3s and 6s
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
