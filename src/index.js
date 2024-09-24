const title = document.querySelector('.title');
title.innerHTML = 'Hellavor';

const description = document.querySelector('.description');
description.innerHTML = '"We are an independent Roblox game development studio."';

const exploreButton = document.querySelector('.exploreButton');
exploreButton.innerHTML = 'Explore';

const supportTitle = document.querySelector('.support-title');
supportTitle.innerHTML = 'Support';

const supportDescription = document.querySelector('.support-description');
supportDescription.innerHTML = 'Need help? Contact Us!'

const supportButton = document.querySelector('.support-button');
supportButton.innerHTML = 'Contact Us!'

const teamTitle = document.querySelector('.team-title');
teamTitle.innerHTML = 'Team';

const teamDescription = document.querySelector('.team-description');
teamDescription.innerHTML = 'Meet our team!'

const jobsTitle = document.querySelector('.jobs-title');
jobsTitle.innerHTML = 'Jobs';

const jobsDescription = document.querySelector('.jobs-description');
jobsDescription.innerHTML = 'We want to create even more with you!';

const jobsButton = document.querySelector('.jobs-button');
jobsButton.innerHTML = 'View Jobs'

const footerText = document.querySelector('.footer-text');
footerText.innerHTML = '&copy; Hellavor 2024. All right reserved.'

const teamMembers = [
    { name: 'Zac', imgSrc: 'https://placehold.co/100x100' },
    { name: 'Thomas', imgSrc: 'https://placehold.co/100x100' },
    { name: 'Mark', imgSrc: 'https://placehold.co/100x100' }
];

const teamMembersContainer = document.querySelector('.team-members');

teamMembers.forEach(member => {
    const memberContainer = document.createElement('div');
    memberContainer.classList.add('team-member');
    memberContainer.setAttribute('data-name', member.name);

    const memberImage = document.createElement('img');
    memberImage.src = member.imgSrc;
    memberImage.alt = member.name;

    memberContainer.appendChild(memberImage);
    teamMembersContainer.appendChild(memberContainer);
});

if (exploreButton) {
    exploreButton.addEventListener('click', () => {
        // TODO: Implement the explore button function.
        alert('Button clicked.');
        console.log('Button clicked.');
    });
}
else {
    alert('Not found.');
    console.log('Not found.');
}

if (supportButton) {
    supportButton.addEventListener('click', () => {
        // TODO: Implement the support button function.
        alert('Button clicked.');
        console.log('Button clicked.');
    });
}
else {
    alert('Not found.');
    console.log('Not found.');
}

if (jobsButton) {
    jobsButton.addEventListener('click', () => {
        window.open('https://hellavor.hiringthing.com', '_blank');
    });
}
else {
    alert('Not found.');
    console.log('Not found.');
}
