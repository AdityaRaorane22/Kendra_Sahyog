import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import calendar CSS
import './ScheduledMeetings.css';

const localizer = momentLocalizer(moment); // Localizer for the calendar

function ScheduledMeetings() {
  const [meetings, setMeetings] = useState([]);
  const [events, setEvents] = useState([]); // Calendar events

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      const response = await axios.get('http://localhost:4444/api/meetings');
      setMeetings(response.data); // Set meetings from the backend response

      // Map meetings to events for the calendar
      const meetingEvents = response.data.map(meeting => ({
        title: `Meeting ID: ${meeting.meetingId}`,
        start: new Date(meeting.date),
        end: new Date(meeting.date), // Assuming meetings are all-day or end on the same day
        allDay: false,
        meeting,
      }));

      setEvents(meetingEvents); // Set the events in the state for the calendar
    } catch (error) {
      console.error('Error fetching meetings:', error);
    }
  };

  const handleSelectMeeting = (event) => {
    const meeting = event.meeting;
    alert(`Meeting ID: ${meeting.meetingId}\nManager: ${meeting.managerName}\nDate: ${new Date(meeting.date).toLocaleDateString()}\nTime: ${meeting.time}`);
    // Optionally, display more meeting details in a modal or another UI element
  };

  return (
    <div className="scheduled-meetings-container">
      <h2>Scheduled Meetings</h2>

      {/* Calendar Component */}
      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: '50px' }}
          onSelectEvent={handleSelectMeeting} // Click event handler for meetings
        />
      </div>

      <ul className="meetings-list">
        {meetings.map((meeting) => (
          <li key={meeting._id} className="meeting-item">
            <h3>Meeting ID: {meeting.meetingId}</h3>
            <p><strong>Manager:</strong> {meeting.managerName}</p>
            <p><strong>Date:</strong> {new Date(meeting.date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {meeting.time}</p>
            <p><strong>Meeting Password:</strong> {meeting.meetingPassword}</p>
            <h4>Members:</h4>
            <ul>
              {meeting.members.map((member, index) => (
                <li key={index}>
                  <p><strong>Email:</strong> {member.email}</p>
                  <p><strong>Agenda:</strong> {member.agenda}</p>
                  <p><strong>Proposal:</strong> <a href={member.proposal} target="_blank" rel="noopener noreferrer">{member.proposal}</a></p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScheduledMeetings;
