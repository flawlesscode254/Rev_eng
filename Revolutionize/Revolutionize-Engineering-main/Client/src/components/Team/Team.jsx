import React from 'react';
import './Team.css';


const UserCard = ({ name, role, location, image, socialProfiles }) => {
  return (
    <div className="user">
      <div className="user-img-wrap">
        <div className="user-img">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="user-meta">
        <div className="user-name">{name}</div>
        <div className="user-location">
          {role}
          <br />
          {location}
        </div>
        <div className="user-profiles">
          {socialProfiles.map((profile, index) => (
            <i key={index} className={`fa-brands fa-${profile}`}></i>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const usersData = [
    {
      name: 'Kelvin Mulama',
      role: 'Dukatech Solutions, CEO',
      location: 'Nairobi, Kenya',
      image: require('../../assets/mulama.jpeg'), // Import image from assets folder
      socialProfiles: ['youtube', 'instagram', 'x-twitter', 'whatsapp'],
    },
    {
      name: 'Purity Christine',
      role: 'Project Manager',
      location: 'Nairobi, Kenya',
      image: require('../../assets/IMG_1596 (1).jpg'), // Import image from assets folder
      socialProfiles: ['youtube', 'instagram', 'x-twitter', 'whatsapp'],
    },
    {
      name: 'Dukatech Solutions',
      role: 'Host Organization',
      location: 'Nairobi, Kenya',
      image: require('../../assets/mulama.jpeg'), // Import image from assets folder
      socialProfiles: ['youtube', 'instagram', 'x-twitter', 'whatsapp'],
    },
    {
      name: 'The Royal Academy of Eng.',
      role: 'Sponsor',
      location: 'Nairobi, Kenya',
      image: require('../../assets/Royal.jpg'), // Import image from assets folder
      socialProfiles: ['youtube', 'instagram', 'x-twitter', 'whatsapp'],
    },
  ];

  return (
    <div className="team-container mt-24">
    <div className="flex flex-col items-center mb-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-2">Project Leadership</h2>
      <p className="text-sm md:text-base text-gray-600 mb-12">Meet the awesome people behind Revolution Engineering</p>
    </div>
    <div className="users">
      {usersData.map((userData, index) => (
        <UserCard key={index} {...userData} />
      ))}
    </div>
  </div>
);
};

export default Team;
