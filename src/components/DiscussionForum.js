import React, { useState } from 'react';
import './DiscussionForum.css';

function DiscussionForum() {
  const [activeChat, setActiveChat] = useState('intra');
  const [activeGroup, setActiveGroup] = useState(null);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]); // Store sent messages
  
  // Define intra departmental groups and messages
  const intraGroups = {
    water: [
      { title: 'Water Supply', content: 'We need to discuss the new water supply schedule.' },
      { title: 'Leak Repair', content: 'Status on the leak repair works?' }
    ],
    road: [
      { title: 'Road Construction', content: 'We need to discuss the new road construction timeline.' },
      { title: 'Pothole Repairs', content: 'Pothole repairs are lagging behind.' }
    ],
    transport: [
      { title: 'Transport Scheduling', content: 'Need to align transport schedules.' },
      { title: 'Vehicle Maintenance', content: 'Updates on vehicle maintenance?' }
    ],
    security: [
      { title: 'Security Protocols', content: 'Review security protocols for ongoing projects.' },
      { title: 'Site Security', content: 'Is site security sufficient for the new project?' }
    ],
    pipeline: [
      { title: 'Gas Pipeline', content: 'Gas pipeline installation updates needed.' },
      { title: 'Safety Measures', content: 'Safety measures for the pipeline project.' }
    ]
  };

  // Define inter departmental groups and messages
  const interGroups = {
    coordination: [
      { title: 'BMC Collaboration', content: 'Discussion on collaboration with BMC for waste management.' },
      { title: 'PMPL Coordination', content: 'Need to align with PMPL on project timelines.' }
    ],
    funding: [
      { title: 'Funding Support', content: 'Funding support from other departments is crucial.' },
      { title: 'Resource Allocation', content: 'Resource allocation needs to be discussed.' }
    ],
    publicEngagement: [
      { title: 'Public Feedback', content: 'How do we handle public feedback?' },
      { title: 'Community Engagement', content: 'Strategies for community engagement.' }
    ],
  };

  // Define public messages (admin posts)
  const publicPosts = [
    { title: 'Water Pipeline Update', content: 'Water pipeline work is ongoing. Expect no water supply for 3-4 days.' },
    { title: 'Road Maintenance Notice', content: 'Road maintenance in your area will cause delays this week.' },
    { title: 'Security Updates', content: 'New security measures are being implemented across sites.' },
  ];

  const handleSendMessage = () => {
    if (message) {
      setChatMessages([...chatMessages, { content: message }]); // Add message to chat
      setMessage(''); // Clear the input after sending the message
    }
  };

  // Get the posts based on active chat and group selection
  const getPosts = () => {
    if (activeChat === 'intra' && activeGroup) {
      return intraGroups[activeGroup] || [];
    }
    if (activeChat === 'inter' && activeGroup) {
      return interGroups[activeGroup] || [];
    }
    if (activeChat === 'public') {
      return publicPosts;
    }
    return [];
  };

  return (
    <div className="discussion-forum-container">
      <h2>Discussion Forum</h2>
      <div className="chat-options">
        <button className={activeChat === 'intra' ? 'active' : ''} onClick={() => { setActiveChat('intra'); setActiveGroup(null); }}>
          Intra-Departmental
        </button>
        <button className={activeChat === 'inter' ? 'active' : ''} onClick={() => { setActiveChat('inter'); setActiveGroup(null); }}>
          Inter-Departmental
        </button>
      </div>

      {/* Render groups for intra and inter departmental chats */}
      {(activeChat === 'intra' || activeChat === 'inter') && (
        <div className="group-options">
          <h3>Select a Group:</h3>
          {(activeChat === 'intra' ? Object.keys(intraGroups) : Object.keys(interGroups)).map((group) => (
            <button key={group} className={activeGroup === group ? 'active' : ''} onClick={() => setActiveGroup(group)}>
              {group.charAt(0).toUpperCase() + group.slice(1)}
            </button>
          ))}
        </div>
      )}

      <ul className="posts-list">
        {getPosts().map((post, index) => (
          <li key={index} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>

      {/* Display sent messages */}
      <div className="chat-messages">
        {chatMessages.map((msg, index) => (
          <div key={index} className="chat-message">
            <p>{msg.content}</p>
          </div>
        ))}
      </div>

      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} className="btn">Send</button>
      </div>
    </div>
  );
}

export default DiscussionForum;
