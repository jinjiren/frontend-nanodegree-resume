/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $('#main').append('Jiren Jin');

// var awesomeThoughts = 'I am Jiren and I am AWESOME!';
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');
// $('#main').append(funThoughts);
/*
var formattedName = HTMLheaderName.replace('%data%', 'Jiren Jin');
var formattedRole = HTMLheaderRole.replace('%data%', 'Student');
var formattedContact = HTMLcontactGeneric.replace('%data%', 'Tokyo, Japan');
var formattedBioPic = HTMLbioPic.replace('%data%', 'images/jin.jpg');
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', 'Welcome to my bio!');
var formattedSkills = HTMLskills.replace('%data%', 'Python, C, CUDA, Django, HTML, CSS, Javascript, VIM, Lua, Torch7, TensorFlow, Caffe, Theano, Chainer...');

//$('#header').prepend(formattedRole);
//$('#header').prepend(formattedName);

var bio = {
    name: 'Jiren Jin',
    role: 'Master student',
    contact: {
        mobile: '080-xxxx-xxxx',
        email: 'jinjiren@foxmail.com',
        twitter: 'Jiren Jin',
        github: 'jinjiren',
        blog: 'jinjiren.github.io',
    },
    bioPic: 'images/jin.jpg',
    welcomeMsg: 'Welcome!',
    skills: ['Python', 'C', 'CUDA', 'Lua', 'HTML', 'CSS', 'Javascript'],
};

var work = {
    position: 'Application Developer',
};

var education = {
    name:'The Univesity of Tokyo',
    years: 1,
    location: 'Tokyo',
};

$('#main').append(bio.name);
$('#main').append(HTMLworkLocation.replace('%data%', work['position']));
$('#main').append(HTMLschoolName.replace('%data%', education.name));
*/

var work = {
  jobs: [
    {
      employer: 'Metadata Inc.',
      title: 'Application Developer',
      location: 'Tokyo, Japan',
      dates: 'February 2015 - now',
      description: 'Part time job: developing various machine learning based application for customer companies.'
    }
  ]
};

var projects = {
  projects: [
    {
      title: 'Arbitrary Length Image Annotation',
      dates: 'April 2016',
      description: 'We adopt the Recurrent Neural Networks (RNN) model to tackle the problem with arbitrary length image annotation. In addition, we explore and discuss the influence of different tag sequence orders in training phase.',
      images: ['images/model.png', 'images/examples.png']
    }
  ],
  display: function() {
    projects.projects.forEach(function(project) {
      $('#projects').append(HTMLprojectStart);
      var formattedProjectInfo = [
        // note that emplyer and title should be concatenated
        HTMLprojectTitle.replace('%data%', project.title),
        HTMLprojectDates.replace('%data%', project.dates),
        HTMLprojectDescription.replace('%data%', project.description)
      ];
      project.images.forEach(function(image) {
          formattedProjectInfo.push(HTMLprojectImage.replace('%data%', image));
        });
      formattedProjectInfo.forEach(function(info) {
        $('.project-entry:last').append(info);
      });
    });
  }
};

var bio = {
  name: 'Jiren Jin',
  role: 'Master Student',
  contacts: {
    mobile: '080-xxxx-xxxx',
    email: 'jinjiren@foxmail.com',
    github: 'jinjiren',
    twitter: '@JirenJin',
    location: 'Tokyo'
  },
  welcomeMessage: 'Welcome!',
  skills: [
    'Python programming', 'C programming', 'CUDA programming', 'web development'
  ],
  bioPic: 'images/jin.jpg'
};

var education = {
  schools: [
    {
      name: 'The Univesity of Tokyo',
      city: 'Tokyo, Japan',
      degree: 'Master candidate',
      majors: ['Creative Informatics'],
      dates: 2015,
      url: 'http://www.u-tokyo.ac.jp/en/index.html'
    },
    {
      name: 'Beijing Univesity of Posts and Telecommunications',
      city: 'Beijing, China',
      degree: '[BS]',
      majors: ['Information Engineering'],
      dates: 2010,
      url: 'http://english.bupt.edu.cn/'
    }
  ],
  onlineCourses: [
    {

    }
  ]
};


/**
 * Start modify the DOM
 */

// add internationalize button
$('#main').append(internationalizeButton);

function inName() {
  var newName = bio.name;
  newName = newName.split(' ');
  console.log(newName);
  newName = newName[0] + ' ' + newName[1].toUpperCase();
  bio.name = newName;
}

// add name first
$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
// add skill, note that [] (empty array) is truthy in js
if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
    $('#skills').append(HTMLskills.replace('%data%', skill));
  });
}

// add work experience
work.jobs.forEach(function(job) {
  $('#workExperience').append(HTMLworkStart);
  var formattedJobInfo = [
    // note that emplyer and title should be concatenated
    HTMLworkEmployer.replace('%data%', job.employer) +
    HTMLworkTitle.replace('%data%', job.title),
    HTMLworkDates.replace('%data%', job.dates),
    HTMLworkLocation.replace('%data%', job.location),
    HTMLworkDescription.replace('%data%', job.description)
  ];

  formattedJobInfo.forEach(function(info) {
    $('.work-entry:last').append(info);
  });
});

// add projects
projects.display();

// add the map
$('#mapDiv').append(googleMap);
