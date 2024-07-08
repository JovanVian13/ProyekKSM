import About from './components/about'
import Navbar from './components/navbar'
import Home from './components/home'
import Techjovan from './components/techjovan'
import Education from './components/education'
import Projectjovan from './components/projectjovan'
import Footer from './components/footer'
import jovanphoto from '../assets/img/jovanphoto.jpg'

function Jovan() {
  return (
    <div>
      <Navbar
      name={"Jovan"}
      bg="bg-defaultColorjo"
      link="/"
      text="text-defaultColorjo"
      />
      <main>
        <div id="home">
          <Home 
          name={"Jovan Vian Thendra"}
          img={jovanphoto}
          color="bg-defaultColorjo"
          role={"Web Developer"}
          from="from-bgColorjo"
          to="to-backColorjo"
          text="text-defaultColorjo"
          href="https://drive.google.com/file/d/1I4lu4VI_LFw7gslZFv5ogzLjxVFHl_1r/view?usp=sharing"
          download="JOVAN_VIAN_THENDRA_CV.pdf"
          />
        </div>

        <div id="about">
          <About
          color="text-defaultColorjo"
          text={"I am a student from Universitas Pembangunan Nasional Veteran Jakarta, specializing in Web Development, particularly Front-End Development, with a robust academic background and extensive practical experience. Currently pursuing a degree in Information Systems with a keen interest in App Development, I am also actively engaged in an organization and have been recognized for funding from the Student Creativity Program (PKM). I am proficient in various web development tools such as HTML, JavaScript, PHP, and React JS, and have successfully managed numerous projects, both independently and within a team. I possess excellent communication skills and exceptional adaptability, while also consistently striving to deliver outstanding performances."}
          />
        </div>

        <div id="skills">
          <Techjovan />
        </div>
        <br />
        <div id="education">
          <Education
          color="text-defaultColorjo"
          text={"I'm currently a student at UPN 'Veteran' Jakarta, majoring in Information Systems with an interest in App Development, with a strong GPA of 3.92. My primary area of expertise lies in Web Development, with a keen focus on Front-End. Additionally, I'm delving into database management, UI/UX design, project management, and mastering various programming languages. I'm constantly refining my skills by actively participating in a Web Development organization. Through university projects and collaborative group studies, I'm honing not only technical skills but also crucial soft skills, preparing myself thoroughly for the professional world."}
          />
        </div>
        <br />
        <div id="project">
          <Projectjovan />
        </div>
      </main>
      <Footer
      text="text-defaultColorjo"
      hover="text-backColorjo"
      phone="+6289602348946"
      email="Jovan.then1@gmail.com"
      name="Jovan Vian Thendra"
      phonelink="https://wa.me/6289602348946"
      emaillink="mailto:jovan.then1@gmail.com"
      linkedinlink="https://www.linkedin.com/in/jovan-then-18a13430a/"
      />
    </div>
  )
}

export default Jovan
