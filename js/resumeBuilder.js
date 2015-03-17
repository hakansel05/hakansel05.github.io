var bio = {
  "name" : "H. Hakan Akansel",
  "role" : "Software Developer",
  "contacts" : { 
    "mobile" : "05068597862",
    "email" : "hakansel05@gmail.com",
    "github" : "hakansel05",
    "twitter" : "@hakansel",
    "location" : "Ankara, TR"
    },
  "pic_url" : "images/hha.png",
  "message" : "Hello World; I'm Just Code Brew!", 
  "skills" : [
    "Embedded System", "Software Development", "Linux"
  ]
}

bio.display = (function(){
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#footerContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#footerContacts").prepend(HTMLemail.replace("%data%", bio.contacts.email));
  $("#footerContacts").prepend(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#footerContacts").prepend(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#footerContacts").prepend(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#header").append(HTMLbioPic.replace("%data%", bio.pic_url));
  $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.message));
  if(bio.hasOwnProperty("skills")){
    if (bio.skills.length !== false) {
      $("#header").append(HTMLskillsStart);
      $("#header").append(HTMLskills.replace("%data%", bio.skills[0]));
      $("#header").append(HTMLskills.replace("%data%", bio.skills[1]));
      $("#header").append(HTMLskills.replace("%data%", bio.skills[2]));
    }
  }
})();


var work = {
  "jobs" : [
    {
      "curr_pos" : "Software Developer",
      "employer" : "Tokmak Technology",
      "year" : "May, 2014 - present",
      "location" : "Ankara, TR",
      "description" : "We are all code brew about high technology."
    },
    {
      "curr_pos" : "Embedded Software Developer",
      "employer" : "Onur Inc.",
      "year" : "June, 2012 - Nov, 2013",
      "location" : "Ankara, TR",
      "description" : "- Embedded Software Engineer(exactly Embedded Linux Engineer) on Air Defense Radio Network Project(ADRN). ADRN is a next generation VoIP solution to provide country-wide radio&coverage for air traffic&intercept controllers."
    },
    {
      "curr_pos" : "Software Developer",
      "employer" : "Lider Technology",
      "year" : "Feb, 2012 - June, 2012",
      "location" : "Ankara, TR",
      "description" : "Avionics, BeechCraft C90GTi CDU(Rockwell Collins FMS3000) software programmer, flight simulation."
    }
  ]
}

work.display = (function(){
    if(work.hasOwnProperty("jobs")) {
      if(work.jobs.length !== false) {
        $("#workExperience").append(HTMLworkStart);
        var job;
        for(job in work.jobs) {
          $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work["jobs"][job]["employer"]));
          $(".work-entry:last").append(HTMLworkTitle.replace("%data%", work["jobs"][job]["curr_pos"]));
          $(".work-entry:last").append(HTMLworkDates.replace("%data%", work["jobs"][job]["year"]));
          $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work["jobs"][job]["location"]));
          $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work["jobs"][job]["description"]));      
        }
      }
    }
})();


var education = {
  "schools" : [
      {
        "university" : "Eskishir Osmangazi University",
        "degree" : "2.55",
        "year" : "2006 - 2012",
        "location" : "Eskisehir, TR",
        "major" : "Computer Engineering"
      },
      {
        "university" : "Eskishir Osmangazi University",
        "degree" : "2.54",
        "year" : "2006 - 2012",
        "location" : "Eskisehir, TR",
        "major" : "Electrical-Electronics Engineering"
      }
    ]
}

education.display = (function() {
  if(education.hasOwnProperty("schools")) {
    if(education.schools.length !== false) {
      $("#education").append(HTMLschoolStart);
      var school;
      for(school in education.schools) {
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].university));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].year));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));      
      }
    }
  }
})();



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

projects.display = (function() {
  if(projects.hasOwnProperty("project")) {
    if(projects.project.length !== false) {
      $("#projects").append(HTMLprojectStart);
      var pro;
      for(pro in projects.project) {
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[pro].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[pro].date));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[pro].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[pro].image));      
      }    
    }
  }
})();

$("#mapDiv").append(googleMap);

