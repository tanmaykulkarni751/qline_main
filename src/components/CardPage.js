import React from 'react';
import Progress from './Markers/Progress';
import { Card, Nav, Button, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Profile from './Profile';
import "./../styles/CardPage.css";

export default function CardPage(props) {
    return (
            <Card
              text='dark'
              className = 'card'
            >
              <Card.Header className="cardHeader"> Tanmay Kulkarni </Card.Header>   {/*props.name*/}
                <Card.Body>
                <div class="DayHeader">
                  Mon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-thumbs-up fa-2x"></i>
                  </div>
                  <br />
                 <Progress />
              </Card.Body>
            </Card>
    )
}