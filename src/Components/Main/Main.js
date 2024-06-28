import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import MyImage2 from '../Main/myimage2.png';
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import '../Main/Main.css';
import gmail from '../Main/gmail.svg';
import instagram from '../Main/instagram.png';
import linkedin from '../Main/linkedin.jpeg';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import R from '../Main/R.png';

const EmailLink = ({ email }) => {
    const composeMailLink = `mailto:${email}`;
  
    return (
      <a href={composeMailLink} style={{ textDecoration: "none", color: "black" }}>
        {email}<img src={gmail} alt="gmail" width="50px" height="50px"></img>
      </a>
    );
  };

const Main = () => {
    const [selectedItem, setSelectedItem] = React.useState('Skills');
    const recipientEmail = 'venkataramanakarri.official@gmail.com';
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);

    const handleListItemClick = (item) => {
        setSelectedItem(item);
      };

    const [animate, setAnimate] = useState(false);

    const handleAboutClick = () => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 5000);
    };

    const handleProjectClick = () => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 4000);
    };

    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" expand="xxl" expanded={expanded} onToggle={handleToggle}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={R} height='30px' width='30px' alt="Brand logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" collapseOnSelect>
                    <Nav className="ms-auto">
                        <a href='#Home' className="nav-link">Home</a>
                        &emsp;
                        <a href='#Aboutme' className="nav-link" onClick={handleAboutClick}>About</a>
                        &emsp;
                        <a href='#Myprojects' className="nav-link" onClick={handleProjectClick}>Projects</a>
                        &emsp;
                        <a href='#Activites' className="nav-link">Activities</a>
                        &emsp;
                        <a href='#Contact' className="nav-link">Contact</a>
                        &emsp;
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div style={{ color: "white", backgroundColor: "black", overflow: "hidden" }} id='Home'>
            <br /><br /><br /><br /><br /><br /><br />
            <div
                style={{
                    float: 'left',
                    marginLeft: '50px',
                    fontFamily: 'Times New Roman',
                    fontSize: 'xxxx-large',
                    overflow: 'hidden',
                }}
                className="Name"
            >
                <div
                    style={{
                        animation: 'slideIn 2s',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <Typography variant="h3">Hi, I'm Karri Venkata Ramana</Typography>
                    <h2>Software Development Engineer,</h2>
                    <h3>India.</h3>
                </div>
            </div>
            <img src={MyImage2} alt="MyImage" style={{ maxWidth: '100%', height: 'auto', float: "right" }}></img>
        </div>

        <div style={{ display: 'flex', color: "white", backgroundColor: "#1b1b1b", overflow: "hidden", textAlign: "justify" }} id="Aboutme">
            <div style={{ marginTop: "70px", marginLeft: "80px", marginRight: "80px", marginBottom: "40px" }}>
                <div style={{ animation: animate ? 'slideUp 3s' : 'none' }}>
                    <Typography variant="h2">About Me</Typography>
                    <Typography variant="h6" style={{ textAlign: "justify" }}>
                        Dedicated and adaptable IT professional with a strong analytical mindset, seeking a role that
                        enables me to contribute my skills to drive organizational growth. I thrive in
                        dynamic environments, quickly assimilating new concepts and technologies to drive
                        innovation.
                    </Typography>
                    <br />
                    <Button variant="outline-light" onClick={() => handleListItemClick('Skills')}>Skills</Button>&emsp;
                    <Button variant="outline-light" onClick={() => handleListItemClick('Education')}>Education</Button>&emsp;
                    <Button variant="outline-light" onClick={() => handleListItemClick('Certificates')}>Certificates</Button>&emsp;
                    <Button variant="outline-light" onClick={() => handleListItemClick('Internships')}>Internships</Button>
                    <br /><br />
                    {selectedItem === 'Skills' && (
                        <>
                            <Typography paragraph><b>Programming Languages</b> &emsp;: Java </Typography>
                            <Typography paragraph><b>Web and user interface design - Development</b> &emsp;: HTML, CSS, JavaScript </Typography>
                            <Typography paragraph><b>Frameworks</b> &emsp;: React, Node </Typography>
                            <Typography paragraph><b>Database</b> &emsp;: MySQL </Typography>
                        </>
                    )}
                    {selectedItem === 'Education' && (
                        <>
                            <Typography paragraph>B.Tech in Information Technology - JNTU-GV College of Engineering.<br />2020-2024</Typography>
                            <Typography paragraph>Intermediate in MPC - Sri Chaitanya Junior College, Visakhapatnam.<br />2018-2020</Typography>
                            <Typography paragraph>SSC - Sri Chaitanya Techno School, Anakapalli.<br />2018</Typography>
                        </>
                    )}
                    {selectedItem === 'Certificates' && (
                        <>
                            <Typography paragraph><b>Database Management Systems</b><br />During the course of eight weeks, NTPEL will work with IITs to teach students how to use and execute queries on databases using SQL</Typography>
                            <Typography paragraph><b>Java Fundamentals, Oracle Academy</b></Typography>
                        </>
                    )}
                    {selectedItem === 'Internships' && (
                        <>
                            <Typography paragraph><b>Miracle Software Systems, Web Development Intern</b><br />Developed Ecommerce Website<br />Utilized: Angular, JavaScript, Spring Boot, Java, HTML, CSS<br />05/2023 – 06/2023</Typography>
                            <Typography paragraph><b>Salesforce Developer Virtual Internship</b><br />Successfully completed virtual internship program AICTE partnered with Salesforce for a 2-month virtual internship, focusing on crafting applications with Salesforce cloud technology.<br />07/2022 – 09/2022</Typography>
                            <Typography paragraph><b>The Sparks Foundation, Web Development Intern</b><br />I undertook a dynamic one month virtual internship with the Sparks Foundation, specializing in frontend development. During this experience, I crafted a captivating frontend project titled 'Mother_Teresa Foundation'. Developed Payment Gateway Integration<br />07/2022 – 07/2022</Typography>
                        </>
                    )}
                </div>
            </div>
        </div>

        <div style={{ color: "white", backgroundColor: "#080808", overflow: "hidden", textAlign: "justify" }} id='Myprojects'>
            <div style={{ marginTop: "40px", marginLeft: "100px", marginRight: "100px", marginBottom: "40px", alignItems: "center" }}>
                <div style={{ animation: animate ? 'slideUp 2s' : 'none' }}>
                    <br />
                    <div className="row">
                        <div className="projects">
                            <iframe src="https://all-projects-xi.vercel.app/" title="Projects" className="embedded-page" style={{ width: "100%", height: "500px", border: "none" }}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={{ color: "white", backgroundColor: "#1b1b1b", overflow: "hidden", textAlign: "justify" }} id='Activites'>
            <div style={{ marginTop: "40px", marginLeft: "100px", marginRight: "100px", marginBottom: "40px", alignItems: "center" }}>
                <div style={{ animation: animate ? 'slideUp 3s' : 'none' }}>
                    <Typography variant="h3" style={{ textAlign: "center" }}>Activities</Typography>
                    <br />
                    <Card className="mb-4" bg="dark" text="white">
                    <Card.Body>
                        <Card.Header><Card.Title>Main Coordinator</Card.Title></Card.Header>
                            <Card.Text>
                            <Typography variant="h6" >ITYUKTA 2K23 Technical Fest</Typography>
        <ul>
            <li>Led the organization and execution of the technical fest</li>
            <li>Managed teams and ensured successful event delivery</li>
            <li>Website: <a href="https://www.ityukta2k23.org">www.ityukta2k23.org</a></li>
        </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

        <div style={{ color: "white", backgroundColor: "#080808", overflow: "hidden", textAlign: "justify" }} id="Contact">
            <div style={{ marginTop: "40px", marginLeft: "100px", marginRight: "100px", marginBottom: "40px", alignItems: "center" }}>
                <div style={{ animation: animate ? 'slideUp 3s' : 'none' }}>
                    <Typography variant="h3" style={{ textAlign: "center" }}>Contact</Typography>
                    <br />
                    <div >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <EmailLink email={recipientEmail} />&emsp;
                        <a href="https://www.linkedin.com/in/ramana-karri-189b17224/">
                            <img src={linkedin} alt="LinkedIn" width="50px" height="50pxpx" />
                        </a>&emsp;
                        <a href="https://www.instagram.com/official_rk_17/">
                            <img src={instagram} alt="Instagram" width="50px" height="50px" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;