var about_section_waypoint = new Waypoint({
    element: document.getElementById('about_section'),
    handler: function() {
      about_type.typeString('{ A Struct }').start();
      this.disable();
    },

    offset: '40%'
  });

  var about_type = new Typewriter('#about_title', {
    delay: 65,
    loop: false,
  });