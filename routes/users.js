var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
    {
      display_order: 1,
      project_name: 'JobSearch',
      description: 'An application that allows users to search for a job and receive a list of related skills.',
      image_url: '/images/jobSearch.png',
      tech_stack: ['React', 'Redux'],
      github_url: 'https://github.com/mmumby/jobSearch',
      deployed_url: 'https://jobsearch-.herokuapp.com/'
    },
    {
      display_order: 2,
      project_name: 'LettuceShare',
      description: 'A community networking application centered around minimizing food waste.',
      image_url: '/images/lettuceShare.png',
      tech_stack: ['Ruby', 'Rails', 'WebSockets', 'Active Record', 'PostgreSQL', 'Bootstrap', 'SASS'],
      github_url: 'https://github.com/mmumby/Lettuce-Share',
      deployed_url: 'http://lettuceshare.ca'
    },
    {
      display_order: 3,
      project_name: 'ChattyApp',
      description: 'A messenger application that allows users to send messages in a chat room environment, keeps track of how many users are online, and sends a message to all users when a username change occurs.',
      image_url: '/images/ChattyApp.png',
      tech_stack: ['Express', 'Node', 'React', 'WebSockets'],
      github_url: 'https://github.com/mmumby/chattyApp'
    },
    {
      display_order: 4,
      project_name: 'Jungle',
      description: 'Ruby on Rails e-commerce app. Implemented new features to an inherited code base.',
      image_url: '/images/jungle.png',
      tech_stack: ['Ruby', 'Rails', 'Bootstrap', 'RSpec'],
      github_url: 'https://github.com/mmumby/jungle-rails',
      deployed_url: 'https://fast-river-43563.herokuapp.com/',
    },
    {
      display_order: 5,
      project_name: 'WikiMaps',
      description: 'Worked in a team of three to build a multi-page application using Google Maps API. Registered users can mark their favourite hot spots on a map and group those markers together on a list to share with others.',
      image_url: '/images/WikiMaps.png',
      tech_stack: ['Express', 'Node', 'jQuery', 'PostgreSQL', 'Bootstrap', 'SASS'],
      github_url: 'https://github.com/mmumby/WikiMap'
    },
    {
      display_order: 6,
      project_name: 'Tweetr',
      description: 'A single-page Twitter clone that allows users to add dynamic 140 character messages.',
      image_url: '/images/tweeter-photo.png',
      tech_stack: ['Express', 'Node', 'jQuery', 'MongoDB'],
      github_url: 'https://github.com/mmumby/tweetr'
    },
    {
      display_order: 7,
      project_name: 'TinyApp',
      description: 'A multi-page web application using RESTful routes that allows registered users to shorten URLs',
      image_url: '/images/TinyApp.png',
      tech_stack: ['Express', 'Node'],
      github_url: 'https://github.com/mmumby/TinyApp'
    }
  ]);
});

module.exports = router;