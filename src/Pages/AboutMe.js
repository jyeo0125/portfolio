import { Media } from 'reactstrap';

const AboutMe = ()=> {
    return(
    <Media className='aboutMecon'>
        <Media left href="https://www.linkedin.com/in/jisu-yeo-aa8978160/">
            <Media className='myPic'src="https://i.imgur.com/WnghcNl.jpg" alt="My Picture" />
        </Media>
        <Media className='aboutBody' body>
            <Media heading>
            About myslef
            </Media>
            Having studied Full-Stack Software engineering from GeneralAssembly(GA), I enjoy challenging myself to adopt new skills and technologies. Also, I finished several projects with remote teams, who enjoy working on projects with strong communication with team members.
        </Media>
    </Media>
    )
}
export default AboutMe