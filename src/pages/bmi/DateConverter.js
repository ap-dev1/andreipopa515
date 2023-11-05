// WORKS FINE WITH USEsTATE AND USE EFFECT (NOV 1, 2023)


//--------------------------------------
// ISO 8601 
// Date and time in UTC: 2023-11-02T00:34:33Z
// 20231102T003433Z (non-simplified version)
// Date and time with the offset: 
// 2023-11-01T17:34:33−07:00 UTC−07:00 [refresh]

// RFC (timestamp)
// IETF RFC 3339[46] defines a profile of ISO 8601 for use in Internet protocols and standards. It explicitly excludes durations and dates before the common era. The more complex formats such as week numbers and ordinal days are not permitted



//----------------------------------------
// Coordinated Universal Time (UTC)

// 1985-04-12T23:20:50.52Z
// This represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.

// 1996-12-19T16:39:57-08:00
// This represents 39 minutes and 57 seconds after the 16th hour of December 19th, 1996 with an offset of -08:00 from UTC (Pacific  Standard Time).  Note that this is equivalent to 1996-12-20T00:39:57Z  in UTC.


//----------------------------------------
// Unix time (or epoch time)
// 2004-09-16T23:59:59.75 == 1095379199.75
// measures time by the number of seconds that have elapsed since 00:00:00 UTC on 1 January 1970, the Unix epoch, without adjustments made due to leap seconds. In modern computing, values are sometimes stored with higher granularity, such as microseconds or nanoseconds.
// Every day in Unix time consists of exactly 86400 seconds.


import React from "react";
import "./date-converter.css";
import { useState, useEffect } from "react";

import { signal } from "@preact/signals-react";

// console.log("signal, name, Andrei")
const name = signal("Andrei")
// console.log(name.value)
name.value = 2
// console.log(name)

export default function DateConverter() {
    const [iso, setIso] = useState("2023-11-01T16:00:00.000Z")
    const [unix, setUnix] = useState(1095379199)

    useEffect(() => {
        setUnix(Date.parse(iso))
    }, [iso])


    return (
        <div id="dateConverter">
            <input
                placeholder="2023-11-01T16:00:00.000Z"
                onChange={event => setIso(event.target.value)}
            ></input>
            <label>{unix}</label>

        </div>
    )
}