import React from 'react';
import Circle from './Circle';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import "./../../styles/Progress.css";

export default function Progress() {
    return (
        // Check For conditional rendering here @Tanmay
        <ProgressBar className="bar">
            <ProgressBar variant="dark" now={2} key={1} />
            <ProgressBar variant="success" now={12} key={1} />
            <ProgressBar variant="dark" now={2} key={1} />
            <ProgressBar variant="success" now={12} key={2} />
            <ProgressBar variant="dark" now={2} key={1} />
            <ProgressBar style={{backgroundColor:"#808080"}} now={12} key={3} />
            <ProgressBar variant="dark" now={2} key={1} />
            <ProgressBar variant="success" now={12} key={4} />
            <ProgressBar variant="dark" now={2} key={1} />
            <ProgressBar style={{backgroundColor:"#808080"}} now={12} key={5} />
            <ProgressBar variant="dark" now={2} key={1} />
            <ProgressBar style={{backgroundColor:"#808080"}} now={12} key={6} />
            <ProgressBar variant="dark" now={2} key={1} />
            <ProgressBar style={{backgroundColor:"#808080"}} now={12} key={6} />
            <ProgressBar variant="dark" now={2} key={1} />
        </ProgressBar>
    )
}