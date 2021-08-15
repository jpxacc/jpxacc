import React, { Component } from 'react';
import { Table, Row, Button, ButtonToolbar, Container, Col } from 'react-bootstrap';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import PDF from "../schedule.pdf";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./App.css";

class Schedule extends Component {
    calendarComponentRef = React.createRef();

    state = {
        view: "dayGridMonth",
        calendarWeekends: true,
        calendarEvents: [
            // initial event data
            {
                title: "Adult English",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [2, 4],
                startTime: '09:30:00',
                endTime: '11:30:00'
            },
            {
                title: "Adult English",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [2, 4],
                startTime: '09:30:00',
                endTime: '11:30:00'
            },
            {
                title: "Number Sense (2nd-3rd)",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [2],
                startTime: '16:00:00',
                endTime: '17:00:00'
            },
            {
                title: "Number Sense (2nd-3rd)",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [2],
                startTime: '16:00:00',
                endTime: '17:00:00'
            },
            {
                title: "Reading/Writing (2nd-3rd)",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [2],
                startTime: '17:00:00',
                endTime: '18:00:00'
            },
            {
                title: "Reading/Writing (2nd-3rd)",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [2],
                startTime: '17:00:00',
                endTime: '18:00:00'
            },
            {
                title: "ISEE Math (Lower Level)",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [2],
                startTime: '17:00:00',
                endTime: '18:00:00'
            },
            {
                title: "ISEE Math (Lower Level)",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [2],
                startTime: '17:00:00',
                endTime: '18:00:00'
            },
            {
                title: "Geometry",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [3],
                startTime: '16:30:00',
                endTime: '18:00:00'
            },
            {
                title: "Geometry",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [3],
                startTime: '16:30:00',
                endTime: '18:00:00'
            },
            {
                title: "ISEE English (Lower Level)",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [3],
                startTime: '17:00:00',
                endTime: '18:00:00'
            },
            {
                title: "ISEE English (Lower Level)",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [3],
                startTime: '17:00:00',
                endTime: '18:00:00'
            },
            {
                title: "Debate",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [3],
                startTime: '18:00:00',
                endTime: '19:30:00'
            },
            {
                title: "Debate",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [3],
                startTime: '18:00:00',
                endTime: '19:30:00'
            },
            {
                title: "Number Sense (4th-5th)",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [4],
                startTime: '16:00:00',
                endTime: '17:00:00'
            },
            {
                title: "Number Sense (4th-5th)",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [4],
                startTime: '16:00:00',
                endTime: '17:00:00'
            },
            {
                title: "Reading/Writing (4th-6th)",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [4],
                startTime: '17:00:00',
                endTime: '18:00:00'
            },
            {
                title: "Reading/Writing (4th-6th)",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [4],
                startTime: '17:00:00',
                endTime: '18:00:00'
            },
            {
                title: "Classical Reading",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [5],
                startTime: '16:30:00',
                endTime: '18:00:00'
            },
            {
                title: "Classical Reading",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [5],
                startTime: '16:30:00',
                endTime: '18:00:00'
            },
            {
                title: "Classical Writing",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [5],
                startTime: '18:00:00',
                endTime: '19:30:00'
            },
            {
                title: "Classical Writing",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [5],
                startTime: '18:00:00',
                endTime: '19:30:00'
            },
            {
                title: "Middle School Competition Mathematics",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [6],
                startTime: '09:00:00',
                endTime: '10:30:00'
            },
            {
                title: "Middle School Competition Mathematics",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [6],
                startTime: '09:00:00',
                endTime: '10:30:00'
            },
            {
                title: "Reading/Writing (7th-8th)",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [6],
                startTime: '10:30:00',
                endTime: '12:00:00'
            },
            {
                title: "Reading/Writing (7th-8th)",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [6],
                startTime: '10:30:00',
                endTime: '12:00:00'
            },
            {
                title: "Reading/Writing (5th-6th)",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [6],
                startTime: '12:30:00',
                endTime: '14:00:00'
            },
            {
                title: "Reading/Writing (5th-6th)",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [6],
                startTime: '12:30:00',
                endTime: '14:00:00'
            },
            {
                title: "Performance Art",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [6],
                startTime: '10:30:00',
                endTime: '12:00:00'
            },
            {
                title: "Performance Art",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [6],
                startTime: '10:30:00',
                endTime: '12:00:00'
            },
            {
                title: "Public Speaking",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [6],
                startTime: '14:00:00',
                endTime: '15:30:00'
            },
            {
                title: "Public Speaking",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [6],
                startTime: '14:00:00',
                endTime: '15:30:00'
            },
            {
                title: "Narrative Writing",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [6],
                startTime: '15:30:00',
                endTime: '17:00:00'
            },
            {
                title: "Narrative Writing",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [6],
                startTime: '15:30:00',
                endTime: '17:00:00'
            },
            {
                title: "Chess (K-2nd)",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [6],
                startTime: '14:00:00',
                endTime: '15:00:00'
            },
            {
                title: "Chess (K-2nd)",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [6],
                startTime: '14:00:00',
                endTime: '15:00:00'
            },
            {
                title: "Chess (3rd-4th)",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [6],
                startTime: '15:00:00',
                endTime: '16:00:00'
            },
            {
                title: "Chess (3rd-4th)",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [6],
                startTime: '15:00:00',
                endTime: '16:00:00'
            },
            {
                title: "SAT/PSAT Math",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [0],
                startTime: '10:30:00',
                endTime: '12:00:00'
            },
            {
                title: "SAT/PSAT Math",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [0],
                startTime: '10:30:00',
                endTime: '12:00:00'
            },
            {
                title: "SAT/PSAT English",
                startRecur: '2019-08-24',
                endRecur: '2019-11-24',
                daysOfWeek: [0],
                startTime: '13:00:00',
                endTime: '14:30:00'
            },
            {
                title: "SAT/PSAT English",
                startRecur: '2019-12-01',
                endRecur: '2019-12-13',
                daysOfWeek: [0],
                startTime: '13:00:00',
                endTime: '14:30:00'
            },
        ]
    };
    render() {

        return (
            <div className="outer">
                <Container className="inner">
                    <div className="linkdiv">                    <a href={PDF} target='_blank' rel="noopener noreferrer">Link to pdf version of schedule</a>
                    </div>
                    <div className="demo-app">
                        <div className="demo-app-top">
                        </div>
                        <div className="demo-app-calendar">
                            <FullCalendar
                                defaultView="dayGridMonth"
                                header={{
                                    left: "prev,next today",
                                    center: "title",
                                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                                }}
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                ref={this.calendarComponentRef}
                                events={this.state.calendarEvents}
                                dateClick={this.handleDateClick}
                                eventClick={this.handleEventClick}
                            />
                        </div>
                    </div>
                </Container></div>
        );
    }
    handleDateClick = arg => {
        let calendarApi = this.calendarComponentRef.current.getApi()
        calendarApi.changeView('dayGrid', arg.dateStr);
    };
    handleEventClick = arg => {
        let calendarApi = this.calendarComponentRef.current.getApi()
        if (calendarApi.view.type == 'dayGrid') {
            window.open("/course-description");
        }
        else {
            calendarApi.changeView('dayGrid', arg.event.start);
        }
    }
}

export default Schedule;