import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <h5>Stay Updated with NewsSnap – Your Source for Real-Time News</h5>
        <p>
          NewsSnap is a revolutionary news platform built to deliver the 
          latest headlines and breaking stories as they happen, all in real
           time. In today’s fast-paced world, staying informed is more 
           important than ever, and NewsSnap makes it easier than ever to 
           stay connected. Whether you’re interested in global affairs, 
           politics, sports, technology, entertainment, or lifestyle news, 
           NewsSnap brings it all directly to your device. Our platform is 
           designed to deliver updates quickly, with content that is easy to 
           digest, so you’re never left out of the loop.
        </p>
        <h5>Concise and Focused News Delivered to You</h5>
        <p>
          At NewsSnap, we understand that your time is valuable.
          That’s why we focus on providing concise,
          bite-sized articles that get straight to the heart of the story.
          Say goodbye to wading through pages of long, drawn-out reports.
          With NewsSnap, you get the news you need without unnecessary distractions.
          Our approach allows you to stay informed on the latest developments in just a few minutes.
          And with push notifications for breaking news and trending stories,
          you can rest assured that you’ll never miss important updates,
          no matter where you are or what you’re doing.
        </p>
        <h5>User-Friendly Interface with Personalized Features</h5>
        <p>
        NewsSnap’s intuitive and sleek interface is designed with the user 
        in mind, ensuring a seamless and enjoyable experience. 
        Whether you’re quickly browsing through categories or exploring 
        trending stories, the app’s smooth navigation makes it easy to 
        find the information you’re looking for. In addition to an 
        easy-to-use interface, NewsSnap also offers personalized features. 
        You can customize your news feed to reflect your specific interests, 
        ensuring that the stories most relevant to you are front and center. 
        Whether you prefer politics, sports, or entertainment, 
        NewsSnap ensures that you stay updated on the topics that matter most to you.
        </p>
        <h5>Stay Connected in a Fast-Paced World</h5>
        <p>
        In an ever-changing world where information moves quickly, 
        NewsSnap is the ideal solution to staying connected and informed. 
        Our app goes beyond just delivering headlines; it offers in-depth 
        features, analyses, and perspectives on the issues shaping the world 
        today. Whether it’s a global event or a local story, NewsSnap keeps 
        you in the know with minimal effort. From your daily dose of breaking
        news to the most detailed stories on the events shaping society, 
        NewsSnap is your one-stop destination for news. With its blend of 
        speed, simplicity, and personalized content, 
        NewsSnap makes sure you’re always informed, wherever you go.
        </p>
      </div>
    </article>
  );
};

export default About;
