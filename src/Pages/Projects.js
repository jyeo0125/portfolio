import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Projects = (props)=> {
    return(
        
    <div className='cardCon'>    
            <div className='cardDiv'>
            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Solo project Img need to update the outline before take screen shoot" />
                <CardBody>
                <CardTitle tag="h5">Drag&Drop Puzzle  </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">JavaScript,HTML,CSS</CardSubtitle>
                <CardText>This simple Drag and Drop Puzzle can play with other person. When a user finish the game, it shows who is the winner.</CardText>
                <Button href="https://github.com/jyeo0125/solo-project1" >GitHub</Button>
                </CardBody>
            </Card>
            </div>
            <div className='cardDiv'>
            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Final project img need to update" />
                <CardBody>
                <CardTitle tag="h5">Personal Blog  </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">React,Postgresql,Express,Node.js</CardSubtitle>
                <CardText>This personal blog is need to add and fix some code.</CardText>
                <Button className='gitBtn' href="https://github.com/jyeo0125/final_front">GitHub(FrontEnd)</Button>
                <Button className='gitBtn' href="https://github.com/jyeo0125/final_back">GitHub(BackEnd)</Button>
                </CardBody>
            </Card>
            </div>
    
    </div>    
    
    )
}
export default Projects