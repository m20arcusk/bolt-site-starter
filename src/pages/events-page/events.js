
import "./events-css/events.css";
import React, { useEffect, useRef, useState } from 'react';
import Navbar from "../../components/navbar/navbar.js";
import Timeline from "./events-components/timeline/timeline.js";
export default function Events() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <Navbar />
            <Timeline />
        </div>

    )
}