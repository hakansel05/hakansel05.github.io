// var formattedName = HTMLheaderName.replace("%data%", "H. Hakan Akansel");
// var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");

// $("#header").append(formattedName);
// $("#header").append(formattedRole);


var bio = {
  "name" : "H. Hakan Akansel",
  "role" : "Software Developer",
  "contacts" : { 
    "mobile" : "05068597862",
    "email" : "hakansel05@gmail.com",
    "github" : "hakansel05",
    "twitter" : "@hakansel",
    "location" : "Ankara"
    },
  "pic_url" : "images/hha.png",
  "message" : "Hello World Brew!", 
  "skills" : [
    "Embedded System", "Software Development", "Linux"
  ]
}

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.pic_url));
$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.message));
$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills.replace("%data%", bio.skills[0]));
$("#header").append(HTMLskills.replace("%data%", bio.skills[1]));
$("#header").append(HTMLskills.replace("%data%", bio.skills[2]));

var work = {
  "jobs" : [
    {
      "curr_pos" : "Software Developer",
      "employer" : "Tokmak Technology",
      "year" : "May, 2014 - present",
      "city" : "Ankara, TR",
      "description" : "We are all code brew about high technology."
    },
    {
      "curr_pos" : "Embedded Software Developer",
      "employer" : "Onur Inc.",
      "year" : "June, 2012 - Nov, 2013",
      "city" : "Ankara, TR",
      "description" : "- Embedded Software Engineer(exactly Embedded Linux Engineer) on Air Defense Radio Network Project(ADRN). ADRN is a next generation VoIP solution to provide country-wide radio&coverage for air traffic&intercept controllers."
    },
    {
      "curr_pos" : "Software Developer",
      "employer" : "Lider Technology",
      "year" : "Feb, 2012 - June, 2012",
      "city" : "Ankara, TR",
      "description" : "Avionics, BeechCraft C90GTi CDU(Rockwell Collins FMS3000) software programmer, flight simulation."
    }
  ]
}

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work["jobs"][0]["employer"]));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work["jobs"][0]["curr_pos"]));
$("#workExperience").append(HTMLworkDates.replace("%data%", work["jobs"][0]["year"]));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work["jobs"][0]["city"]));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work["jobs"][0]["description"]));

$("#workExperience").append(HTMLworkEmployer.replace("%data%", work["jobs"][1]["employer"]));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work["jobs"][1]["curr_pos"]));
$("#workExperience").append(HTMLworkDates.replace("%data%", work["jobs"][1]["year"]));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work["jobs"][1]["city"]));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work["jobs"][1]["description"]));

$("#workExperience").append(HTMLworkEmployer.replace("%data%", work["jobs"][2]["employer"]));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work["jobs"][2]["curr_pos"]));
$("#workExperience").append(HTMLworkDates.replace("%data%", work["jobs"][2]["year"]));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work["jobs"][2]["city"]));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work["jobs"][2]["description"]));


var education = {
  "schools" : [
      {
        "university" : "Eskishir Osmangazi University",
        "degree" : "2.55",
        "year" : "2006 - 2012",
        "city" : "Eskisehir, TR",
        "major" : "Computer Engineering"
      },
      {
        "university" : "Eskishir Osmangazi University",
        "degree" : "2.54",
        "year" : "2006 - 2012",
        "city" : "Eskisehir, TR",
        "major" : "Electrical-Electronics Engineering"
      }
    ]
}

$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", education.schools[0].university));
$("#education").append(HTMLschoolDegree.replace("%data%", education.schools[0].degree));
$("#education").append(HTMLschoolDates.replace("%data%", education.schools[0].year));
$("#education").append(HTMLschoolLocation.replace("%data%", education.schools[0].city));
$("#education").append(HTMLschoolMajor.replace("%data%", education.schools[0].major));

$("#education").append(HTMLschoolName.replace("%data%", education.schools[1].university));
$("#education").append(HTMLschoolDegree.replace("%data%", education.schools[1].degree));
$("#education").append(HTMLschoolDates.replace("%data%", education.schools[1].year));
$("#education").append(HTMLschoolLocation.replace("%data%", education.schools[1].city));
$("#education").append(HTMLschoolMajor.replace("%data%", education.schools[1].major));

var projects = {
  "project" : [
    {
      "title" : "MuFirewall",
      "date" : "2014 - present",
      "description" : "Scripts to use in firewall system(*nix box - exactly FreeBSD)",
      "image" : "images/mufirewall.jpg"
    },
    {
      "title" : "PandaLin",
      "date" : "2012 - present",
      "description" : "Pandaboard and Pandaboard ES image creation with some capabilities based on Buildroot.",
      "image" : "images/pandalin.jpg"
    },
    {
      "title" : "Portfolio",
      "date" : "Feb, 2015",
      "description" : "Udacity Front-End Web Developer Nanodegree Course Project-1",
      "image" : "images/portfolio.png"
    }
  ]
}

$("#projects").append(HTMLprojectStart);
$("#projects").append(HTMLprojectTitle.replace("%data%", projects.project[0].title));
$("#projects").append(HTMLprojectDates.replace("%data%", projects.project[0].date));
$("#projects").append(HTMLprojectDescription.replace("%data%", projects.project[0].description));
$("#projects").append(HTMLprojectImage.replace("%data%", projects.project[0].image));

$("#projects").append(HTMLprojectTitle.replace("%data%", projects.project[1].title));
$("#projects").append(HTMLprojectDates.replace("%data%", projects.project[1].date));
$("#projects").append(HTMLprojectDescription.replace("%data%", projects.project[1].description));
$("#projects").append(HTMLprojectImage.replace("%data%", projects.project[1].image));

$("#projects").append(HTMLprojectTitle.replace("%data%", projects.project[2].title));
$("#projects").append(HTMLprojectDates.replace("%data%", projects.project[2].date));
$("#projects").append(HTMLprojectDescription.replace("%data%", projects.project[2].description));
$("#projects").append(HTMLprojectImage.replace("%data%", projects.project[2].image));