import React from 'react';
import MyProgress from './MyProgress';
import DisplayTask from './TaskName';
import DisplayAppName from './AppName.js'
import "./../styles/Main.css";
import LogButton from './LogButton.js'

export default function Calendar() {
    return (
        <div className="MainPage">
            <DisplayAppName />
            <DisplayTask />
            <MyProgress />
            <LogButton />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}