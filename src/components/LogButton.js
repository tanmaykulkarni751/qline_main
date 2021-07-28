import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import "./../styles/Button.css";



export default function LogButton(props) {

    const [updated, setUpdated] = useState(false);

    const user = {
        name: props.name,
        task: props.task
    };

    const handleLogProgress = () => {
        setUpdated(true);
        // axios.push(updateTask, {user})
        //     .then(res => {
        //         // do something
        //     })
        console.log("hit")
    };

    return (
        <div class="LogButton">
            <Button class="ButtonStyle" variant="primary" size="lg" onClick={handleLogProgress} disabled={updated}>
                Today.LogProgress()
            </Button>{' '}
        </div>
    )
}