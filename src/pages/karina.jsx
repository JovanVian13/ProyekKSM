import About from './components/about'
import Navbar from './components/navbar'
import Home from './components/home'
import Techkar from './components/techkar'
import Education from './components/education'
import Projectkar from './components/projectkar'
import Footer from './components/footer'
import karinaphoto from '../assets/img/karinaphoto.png'

function Karina() {
  return (
    <div>
      <Navbar
      name={"Karina"}
      bg="bg-defaultColorkar"
      link="/"
      text="text-defaultColorkar"
      />
      <main>
        <div id="home">
          <Home 
          name={"Karina Ghaisani"}
          img={karinaphoto}
          color="bg-defaultColorkar"
          role={"Web Developer"}
          from="from-bgColorkar"
          to="to-backColorkar"
          text="text-defaultColorkar"
          href="https://drive.google.com/file/d/1csakW_7th0sBVs-OROYUQ3pJ63CwELe-/view?usp=sharing"
          download="KARINA_GHAISANI_CV.pdf"
          />
        </div>

        <div id="about">
          <About
          color="text-defaultColorkar"
          text={"As a dedicated undergraduate student majoring in Information Systems at the University of Pembangunan Nasional 'Veteran' Jakarta, I have a profound interest in front-end web development. With an exemplary academic record and extensive hands-on experience in creating user-friendly and visually compelling websites, I am committed to leveraging my skills to deliver superior web solutions. My objective is to continuously enhance my expertise and contribute to significant web development projects."}
          />
        </div>

        <div id="skills">
          <Techkar />
        </div>
        <br />
        <div id="education">
          <Education
          color="text-defaultColorkar"
          text={"I'm a student at UPN 'Veteran' Jakarta, studying Information Systems and focusing on App Development. I have a strong GPA of 3.93 and specialize in Web Development, particularly Front-End as well as UI/UX Design. I'm also exploring database management, UI/UX design, project management, and various programming languages. To enhance my skills, I actively participate in a Web Development organization. Through university projects and collaborative group studies, I'm developing both technical and soft skills, preparing myself well for the professional world."}
          />
        </div>
        <br />
        <div id="project">
          <Projectkar />
        </div>
      </main>
      <Footer
      text="text-defaultColorkar"
      hover="text-backColorkar"
      phone="+6288977750442"
      email="karinaghsn@gmail.com"
      name="Karina Ghaisani"
      phonelink="https://wa.me/6288977750442"
      emaillink="mailto:karinaghsn@gmail.com"
      linkedinlink="http://www.linkedin.com/in/karina-ghaisani"
      />
    </div>
  )
}

export default Karina
