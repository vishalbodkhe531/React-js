import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day . We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div className="">
          <h1>Who we are?</h1>
          <p>
            Assess the outcome of the inquiry by providing evidence of students’
            understanding of the central idea. The reflections of all teachers
            involved in the planning and teaching of the inquiry should be
            included. As we presented the IB projects to the whole class (The
            book on “Who we are”), the students were able to demonstrate
            research skills in the following areas: asking questions, to find
            information on their background, made observations and found the
            connections using their five sense by completing a product after
            reflecting about specific things that they like, such as, what they
            to taste, touch, hear, smell, see. The students were also able to
            compare/contrast similarities among their peers. Next year, we
            decided not to use the book again. Instead we will do the following:
            Project: Body Shape with Five Senses (label and give a description
            of function of senses); Language Arts Writing: Things you like to
            see, hear, smell, touch, taste. 2016-2017- We achieved our purpose
            by allowing the students time in the classroom to complete their
            projects. We found that the students were able to self-select things
            they perceived with their five senses to illustrate and label in
            order to complete their foldable. How you could improve on the
            assessment task(s) so that you would have a more accurate picture of
            each student’s understanding of the central idea. We will improve
            our assessments by using more specific graphic organizers, such as a
            Venn diagram, t-charts, or others. The students will be able to
            organize information and use it to compare similarities and
            differences between themselves, so they can understand how humans
            build, learn and evolve themselves through the impact of society.
            Make connections integrating key concepts, central idea, and line of
            inquiry into Reading/LA, math, social studies, and core enrichment.
          </p>
        </div>
      </div>
      <div className="home4">
        <div className="" id="brands">
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
