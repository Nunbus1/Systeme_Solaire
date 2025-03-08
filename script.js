var planete = null;
let sun;
let univer;
let drag;
let zoom = 1;
var isClick = 0;
var index = 0;

//------------initialisation des variables de position------------//
var merX = 300;
var venX = 400;
var marsX = 600;
var terreX = 500;
var moonX = 70;
var jupX = 1000;
var ioX = 100;
var ganX = 150;
var euroX = 200;
var calliX = 250;
var satX = 1400;
var uraX = 1600;
var nepX = 1700;

//------------creation des boutons pour passer de euler à euler asymétrique------------//
var mercuryEuler = "mercure-euler";
var venusEuler = "venus-euler";
var marsEuler = "mars-euler";
var terreEuler = "terre-euler";
var luneEuler = "lune-euler-asimetric";
var jupiterEuler = "jupiter-euler";
var ioEuler = "Io-euler-asimetric";
var ganymedeEuler = "Ganymede-euler-asimetric";
var europeEuler = "Europe-euler-asimetric";
var callistoEuler = "Callisto-euler-asimetric";
var saturnEuler = "saturne-euler";
var uranusEuler = "uranus-euler";
var neptuneEuler = "neptune-euler";

const btn1 = document.querySelector("btn1");
const btn2 = document.getElementById("btn2");

function EulerA() {
  mercuryEuler = "mercure-euler-asimetric";
  venusEuler = "venus-euler-asimetric";
  marsEuler = "mars-euler-asimetric";
  terreEuler = "terre-euler-asimetric";
  jupiterEuler = "jupiter-euler-asimetric";
  saturnEuler = "saturne-euler-asimetric";
  uranusEuler = "uranus-euler-asimetric";
  neptuneEuler = "neptune-euler-asimetric";
}

function Euler() {
  mercuryEuler = "mercure-euler";
  venusEuler = "venus-euler";
  marsEuler = "mars-euler";
  terreEuler = "terre-euler";
  jupiterEuler = "jupiter-euler";
  saturnEuler = "saturne-euler";
  uranusEuler = "uranus-euler";
  neptuneEuler = "neptune-euler";
}

// Des parties de ce code on été prise sur https://editor.p5js.org/Bixbite/sketches/H1-rxu1sm, notamment la partie pour déplacer la camera

//------------recupération du json------------//
function test() {
  var file_to_read = document.getElementById("jsonfileinput").files[0];
  var fileread = new FileReader();
  fileread.onload = function (e) {
    var content = e.target.result;
    planete = JSON.parse(content); // parse json
    console.log(planete);
    isClick = 1;
  };
  fileread.readAsText(file_to_read);
}

//------------initialisation du canva------------//
// function windowResized() {
//   resizeCanvas(windowWidth, windowWidth, -4);
// }

//------------creation de la fonction setup------------//
function setup() {
  drag = createVector(0, 0);
  var cvn = createCanvas(windowWidth - 60, windowHeight - 110, WEBGL); // établie le canva , WEBGL permet de creer un rendu en 3D en générant un troisième dimensoin z
  cvn.parent("canv");

  // sphere dans laquelle seront les planetes (background)
  univer = new Body(
    5000,
    createVector(0, 0),
    null,
    loadImage("planete/milky_way.jpg"),
    color(255)
  );

  //mise en place des body des planetes
  sun = new Body(
    30,
    createVector(0, 0),
    null,
    loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06a094a4-7bd7-4bb9-b998-6c1e17f66c08/ddgzf2m-dfcb6862-2651-49d8-893c-5e70f3d78d7d.png/v1/fill/w_1024,h_512,q_80,strp/star_texture_map_2k__spectral_type_l_by_fargetanik_ddgzf2m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvMDZhMDk0YTQtN2JkNy00YmI5LWI5OTgtNmMxZTE3ZjY2YzA4XC9kZGd6ZjJtLWRmY2I2ODYyLTI2NTEtNDlkOC04OTNjLTVlNzBmM2Q3OGQ3ZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MSWRvv3CTFMUoEwfhXW1Z1jhBsl5aq59r-jZTqLPUo0"
    ),
    color(255)
  );
  mer = new Body(
    8,
    createVector(merX, 0),
    sun,
    loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b7029c3-9717-4658-9066-11c30aa24029/dcorxow-34c340a6-19db-42f8-89f9-2c008afd1fa8.png/v1/fill/w_1264,h_632,q_70,strp/mercury_texture_map__improved__by_oleg_pluton_dcorxow-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvOWI3MDI5YzMtOTcxNy00NjU4LTkwNjYtMTFjMzBhYTI0MDI5XC9kY29yeG93LTM0YzM0MGE2LTE5ZGItNDJmOC04OWY5LTJjMDA4YWZkMWZhOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rb7eF1JIKZjBZKh1EEgQQFEghjZBvy3U5Gm6eSd6Kpo"
    )
  );

  ven = new Body(
    9,
    createVector(venX, 0),
    sun,
    loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90ad8232-4e09-4675-b9e7-bc2898960870/dc0ss1u-9ce1cbd0-6f56-4bb1-ab24-e64089914504.png/v1/fill/w_1024,h_512,q_80,strp/venus_cloud_texture_map_by_jcp_johncarlo_dc0ss1u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvOTBhZDgyMzItNGUwOS00Njc1LWI5ZTctYmMyODk4OTYwODcwXC9kYzBzczF1LTljZTFjYmQwLTZmNTYtNGJiMS1hYjI0LWU2NDA4OTkxNDUwNC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.W_cmzd6frwnuf_p4_K40ME9cIai41bgUtrIImysmwaM"
    )
  );

  mars = new Body(
    10,
    createVector(marsX, 0),
    sun,
    loadImage(
      "data:image/jpeg;base64,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"
    )
  );

  terre = new Body(
    11,
    createVector(terreX, 0),
    sun,
    loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/570c9426-37ef-4869-b888-7da245b8a19f/del9sm5-8028b7e2-25ff-436f-889c-cb073876557a.jpg/v1/fill/w_1280,h_640,q_75,strp/earth_texture_map_by_wdawdawdwdaw_del9sm5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvNTcwYzk0MjYtMzdlZi00ODY5LWI4ODgtN2RhMjQ1YjhhMTlmXC9kZWw5c201LTgwMjhiN2UyLTI1ZmYtNDM2Zi04ODljLWNiMDczODc2NTU3YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mopKGVfWzfNfkf3m1GqexwCAAHsJX4-Rp9cdpmcAahk"
    )
  );

  moon = new Body(
    5,
    createVector(moonX, 0),
    terre,
    loadImage(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXmWGzFzZAjEAzK5m80ZP9ChqcN8WwLEqXg&usqp=CAU"
    )
  );
  jup = new Body(
    23,
    createVector(jupX, 0),
    sun,
    loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06a094a4-7bd7-4bb9-b998-6c1e17f66c08/dcc1wqa-50390fed-249b-4f71-b4f1-e00edda8f855.png/v1/fill/w_1024,h_512,q_80,strp/jupiter_true_color_texture_map_8k___cassini_2000_by_fargetanik_dcc1wqa-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvMDZhMDk0YTQtN2JkNy00YmI5LWI5OTgtNmMxZTE3ZjY2YzA4XC9kY2Mxd3FhLTUwMzkwZmVkLTI0OWItNGY3MS1iNGYxLWUwMGVkZGE4Zjg1NS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.YKMajP6ARgmDk8FuGouCstZJX11eM7FcYucyHHAF-Ek"
    )
  );
  io = new Body(
    5,
    createVector(ioX, 0),
    jup,
    loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06a094a4-7bd7-4bb9-b998-6c1e17f66c08/dbpxndx-6d4755a5-6af0-485f-9b30-538c56c5e946.jpg/v1/fill/w_1024,h_512,q_75,strp/io_truecolor_texture_map_8k_by_fargetanik_dbpxndx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvMDZhMDk0YTQtN2JkNy00YmI5LWI5OTgtNmMxZTE3ZjY2YzA4XC9kYnB4bmR4LTZkNDc1NWE1LTZhZjAtNDg1Zi05YjMwLTUzOGM1NmM1ZTk0Ni5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EcyocvEiSTNxnDHsDTWG84rKfP_1QusxICjPv_kPhLU"
    )
  );
  eur = new Body(
    5,
    createVector(euroX, 0),
    jup,
    loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5938ae9e-47de-424a-8836-f98e6658d37b/dcqbaif-1c3842cd-2e90-4be9-884c-ae1e6f266835.jpg/v1/fill/w_1920,h_960,q_75,strp/europa_texture_map__20k__by_askaniy_dcqbaif-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvNTkzOGFlOWUtNDdkZS00MjRhLTg4MzYtZjk4ZTY2NThkMzdiXC9kY3FiYWlmLTFjMzg0MmNkLTJlOTAtNGJlOS04ODRjLWFlMWU2ZjI2NjgzNS5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FH3YqbUcsS8Bl4cop8um5YHRk-uauUS6k63CB-orogE"
    )
  );
  gan = new Body(
    5,
    createVector(ganX, 0),
    jup,
    loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5938ae9e-47de-424a-8836-f98e6658d37b/dddhxoy-13ad6a6b-b3d0-49a1-88e5-941a518211c6.png/v1/fill/w_1264,h_632,q_70,strp/ganymede_texture_map__11k__by_askaniy_dddhxoy-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2MCIsInBhdGgiOiJcL2ZcLzU5MzhhZTllLTQ3ZGUtNDI0YS04ODM2LWY5OGU2NjU4ZDM3YlwvZGRkaHhveS0xM2FkNmE2Yi1iM2QwLTQ5YTEtODhlNS05NDFhNTE4MjExYzYucG5nIiwid2lkdGgiOiI8PTExNTIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.oIXBYqI_kqWbbgOKeBUlcwV573tU1qkxBpDF181Xa6A"
    )
  );
  calli = new Body(
    5,
    createVector(calliX, 0),
    jup,
    loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea752771-c82e-4eb6-954b-8ae5a5a63733/d9rpnxz-e7e54fdd-6343-43fa-b191-84e5d99b5c5a.jpg/v1/fill/w_900,h_450,q_75,strp/callisto_color_map_by_kexitt_d9rpnxz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDUwIiwicGF0aCI6IlwvZlwvZWE3NTI3NzEtYzgyZS00ZWI2LTk1NGItOGFlNWE1YTYzNzMzXC9kOXJwbnh6LWU3ZTU0ZmRkLTYzNDMtNDNmYS1iMTkxLTg0ZTVkOTliNWM1YS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5JDUe0J90wP0kyIWdDZ7A8ZEnGCltfq_V9eFLUMtFgI"
    )
  );
  sat = new Body(
    20,
    createVector(satX, 0),
    sun,
    loadImage("planete/saturn.jpg")
  );
  ura = new Body(
    15,
    createVector(uraX, 0),
    sun,
    loadImage("planete/uranus.jpg")
  );
  nep = new Body(
    15,
    createVector(nepX, 0),
    sun,
    loadImage("planete/neptune.jpg")
  );
}

//------------creation de la fonction draw------------//
function draw() {
  clear();
  background(0);
  noStroke();
  ambientMaterial(255); // génère le reflet des objets
  ambientLight(15); // creer une lumière sur le canva

  orbitControl(); // permet de se déplacer dans la zone 3D
  rotateX(PI / 2); // permet de faire tourner la zone 3D
  scale(1 / zoom); // permet de zoomer dans la zone 3D

  if (isClick == 1) {
    //ne s'active qu'une fois le json chargé
    univer.update();
    sun.update();

    // position des planetes à leurs perihelie
    merX = planete[mercuryEuler][0][0][0] / 100000000;
    venX = planete[venusEuler][0][0][0] / 100000000;
    marsX = planete[marsEuler][0][0][0] / 100000000;
    terreX = planete[terreEuler][0][0][0] / 100000000;
    moonX = planete[luneEuler][0][0][0] / 100000000;
    jupX = planete[jupiterEuler][0][0][0] / 100000000;
    ioX = planete[ioEuler][0][0][0] / 100000000;
    ganX = planete[ganymedeEuler][0][0][0] / 100000000;
    euroX = planete[europeEuler][0][0][0] / 100000000;
    calliX = planete[callistoEuler][0][0][0] / 100000000;
    satX = planete[saturnEuler][0][0][0] / 100000000;
    uraX = planete[uranusEuler][0][0][0] / 100000000;
    nepX = planete[neptuneEuler][0][0][0] / 100000000;

    index++;
  }
  univer.show();
  sun.show();
}

//------------creation de la fonction body------------//
function Body(size, pos, parent, tex, emission) {
  this.size = size;
  this.pos = pos;
  this.tex = tex;
  this.emission = emission;
  this.child = [];
  this.parent = parent;
  if (parent) {
    parent.child.push(this);
  }
}

//------------fonction qui va calculer la position à chaque instant------------//
Body.prototype.update = function () {
  mer.pos.x = planete[mercuryEuler][index][0][0] / 1000000000;
  mer.pos.y = planete[mercuryEuler][index][0][1] / 1000000000;

  ven.pos.x = planete[venusEuler][index][0][0] / 1000000000;
  ven.pos.y = planete[venusEuler][index][0][1] / 1000000000;

  mars.pos.x = planete[marsEuler][index][0][0] / 1000000000;
  mars.pos.y = planete[marsEuler][index][0][1] / 1000000000;

  terre.pos.x = planete[terreEuler][index][0][0] / 1000000000;
  terre.pos.y = planete[terreEuler][index][0][1] / 1000000000;

  moon.pos.x = planete[luneEuler][index][0][0] / 20000000;
  moon.pos.y = planete[luneEuler][index][0][1] / 20000000;

  jup.pos.x = planete[jupiterEuler][index][0][0] / 10000000000;
  jup.pos.y = planete[jupiterEuler][index][0][1] / 10000000000;

  io.pos.x = planete[ioEuler][index][0][0] / 10000000;
  io.pos.y = planete[ioEuler][index][0][1] / 10000000;

  gan.pos.x = planete[ganymedeEuler][index][0][0] / 10000000;
  gan.pos.y = planete[ganymedeEuler][index][0][1] / 10000000;

  eur.pos.x = planete[europeEuler][index][0][0] / 10000000;
  eur.pos.y = planete[europeEuler][index][0][1] / 10000000;

  calli.pos.x = planete[callistoEuler][index][0][0] / 10000000;
  calli.pos.y = planete[callistoEuler][index][0][1] / 10000000;

  sat.pos.x = planete[saturnEuler][index][0][0] / 10000000000;
  sat.pos.y = planete[saturnEuler][index][0][1] / 10000000000;

  ura.pos.x = planete[uranusEuler][index][0][0] / 10000000000;
  ura.pos.y = planete[uranusEuler][index][0][1] / 10000000000;

  nep.pos.x = planete[neptuneEuler][index][0][0] / 10000000000;
  nep.pos.y = planete[neptuneEuler][index][0][1] / 10000000000;

  for (let body of this.child) {
    // fait en sorte que l'enfant se comporte comme un parent
    body.update();
  }
};

//------------fontion qui va permettre de modéliser les planetes------------//
Body.prototype.show = function () {
  push();
  {
    if (this.emission) {
      fill(this.emission);
      scale(100);
      pointLight(this.emission, drag.x, drag.y, 0);
      scale(0.01);
    }

    translate(this.pos.x, this.pos.y); // met en rotation les planetes

    if (this.emission) {
      ambientLight(this.emission);
    }
    ambientMaterial(255);

    texture(this.tex); // ajoute la texture à la sphere/planete
    sphere(this.size); // creer une sphère
    for (let body of this.child) {
      body.show();
    }
  }
  pop();
};

//------------fonction pour se déplacer dans le canva------------//
function mousePressed() {
  prevMouse = createVector(mouseX, mouseY);
}

function mouseDragged() {
  let mousePos = createVector(mouseX, mouseY);
  drag.add(mousePos.copy().sub(prevMouse));
  prevMouse = mousePos.copy();

  return false;
}

function mouseWheel(event) {
  zoom += event.delta * 0.0005;
}
