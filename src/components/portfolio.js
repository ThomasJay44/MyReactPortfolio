import React from 'react';
import { projects } from '../projectsArray'

const Portfolio = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <Container>
                <Row>
                {projects.map((project) => (
                    <Col>
                        <h2>{project.name}</h2>
                        <img/>
                        <p>Description</p>
                        <a>Deployed Link</a>    
                        <a>Github Link</a>
                    </Col>  
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio