import React from 'react';
import { Card } from 'react-bootstrap';
import foto from './Foto.jpg'
import foot from './fotod.jpg'
const About = () => {
    return (
        <div
            style={{
                backgroundImage: `url(https://vse-frazi.ru/wp-content/uploads/2018/02/2018-02-05_112416.jpg)`, backgroundSize: "40px", display: 'flex', justifyContent: 'center', justifyContent: 'space-between'
            }}>
            <Card border="warning" style={{ width: '450px' }} style={{ backgroundImage: `url(https://img.wattpad.com/7e8e7cf34f6ec9f88561f8245b4d5798e54d3b20/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d6663576d7355544236376743773d3d2d3533373633393230302e313531366135633761316162313633663939363831323837373932362e6a7067)`, width: '450px' }}>
                <Card.Header>Sanzharidze</Card.Header>
                <Card.Body>
                    <Card.Title>Favorite hero of "Yu Zhong"</Card.Title>
                    <Card.Text>
                        Берегите лучших подруг, близких друзей, хреново, когда не с кем выйти в туалет или просто позвонить, пока идёшь в магазин.
                    </Card.Text>
                </Card.Body>
                <img width="450" src={foto} alt="#" />
            </Card>

            <Card border="warning" style={{ width: '450px', backgroundImage: `url(https://khersonregion.com/wp-content/uploads/black-sea1.jpg)`, width: '450px' }}>
                <img width="450" src={foot} alt="#" />
                <Card.Header style={{ color: 'white' }}>Isakov</Card.Header>
                <Card.Body>
                    <Card.Title style={{ color: 'white' }}>Favorite hero of "Miya"</Card.Title>
                    <Card.Text >
                        Если ты звонишь девушке, а она не поднимает трубку, то скорей всего она просто танцует под звонок со своей подругой.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
};

export default About;