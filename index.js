// import 'wp-content/plugins/contact-form-7/includes/js/scriptsbdeb.js?ver=5.1.3';
// import 'wp-content/themes/dashcore/js/01.cookie-consent-util4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/02.1.cookie-consent-themes4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/02.2.cookie-consent-custom-css4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/02.3.cookie-consent-informational4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/02.4.cookie-consent-opt-out4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/02.5.cookie-consent-opt-in4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/02.6.cookie-consent-location4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/jquery4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/jquery.animatebar4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/jquery.smartWizard4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/odometer.min4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/simplebar4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/swiper4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/popper4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/jquery.easing.min4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/bootstrap4b0b.js?ver=4.9.20';
// import 'wp-content/plugins/js_composer/assets/lib/waypoints/waypoints.min8b06.js?ver=5.4.7';
// import 'wp-content/themes/dashcore/js/jquery.counterup4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/modernizr-2.8.3.min4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/aos4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/particles4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/typed4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/prettify4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/jquery.magnific-popup4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/cookieconsent.min4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/common-script4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/slick.min4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/site4b0b.js?ver=4.9.20';
// import 'wp-content/themes/dashcore/js/demo4b0b.js?ver=4.9.20';
// import 'wp-content/plugins/mega_main_menu/src/js/frontende7f3.js?ver=2.1.7';
// import 'wp-includes/js/wp-embed.min4b0b.js?ver=4.9.20';
// import 'wp-content/plugins/js_composer/assets/js/dist/js_composer_front.min8b06.js?ver=5.4.7';
var sceneLight, portalLight, clock ,portalParticles = [],smokeParticles = [] ;


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60,300/300, 1,10000);
camera.position.z = 1;

var renderer = new THREE.WebGLRenderer({antialias: true});

scene.background = new THREE.Color( 0x000000 );

sceneLight = new THREE.DirectionalLight(0xffffff,0.5);
sceneLight.position.set(0,0,1);
scene.add(sceneLight);

portalLight = new THREE.PointLight(0x062d89, 30, 600, 1.7);
portalLight.position.set(0,0,250);
scene.add(portalLight);

// const interaction = new Interaction(renderer, scene, camera);

renderer.setSize(300,300);
renderer.setClearColor( 0x000000, 1);
renderer.clear(renderer.COLOR_BUFFER_BIT);

document.getElementById('canvasDraw').append(renderer.domElement);

var geometry = new THREE.BoxGeometry(20,20,20);
var colors = [ 0xdc3545, 0xdc3545, 0x17a2b8,0x17a2b8, 0x28a745, 0x28a745, 0x048fff, 0x048fff, 0x9f55ff, 0x9f55ff, 0x553fff, 0x553fff]


for ( var i = 0; i < geometry.faces.length; i +=2 ) {
  let color = Math.random() * 0xffffff;
  geometry.faces[ i ].color.setHex( colors[i] );
  geometry.faces[ i + 1 ].color.setHex( colors[i] );
}
var material = new THREE.PointsMaterial({color: 0x0091AD,  vertexColors: true });
var cube = new THREE.Mesh(geometry,material);

scene.add(cube);
var cubeOverlay = document.getElementById('CanvasOverlay') 



const cubePositions = [

  {
    x: 2, 
    y: 2
  },
  {
    x: 2,
    y: -2
  },
  {
    x: -2,
    y: 2
  },
  {
    x: -2,
    y: -2
  },
]


const geometryDim = 1.5;
var geometry2 = new THREE.BoxGeometry(geometryDim, geometryDim  , geometryDim);


function renderCubes () {
  cubePositions.forEach((cube, index) => {
    let material2 = new THREE.PointsMaterial({color: colors[index*2]});
    let cube2 = new THREE.Mesh(geometry2,material2);
    cube2.position.set(0,0,-5);

    cube2.position.z = -10;
    cube2.rotation.x = 30;
    cube2.rotation.y = 50;


    let interval = setInterval(() => {
      cube2.position.x += (cube.x)*0.02
      cube2.position.y += (cube.y)*0.02    }, 50);


    setTimeout(() => {
        clearInterval(interval)
    }, 3000);
  scene.add(cube2);
  })
  
}


cubeOverlay.onclick =  function() {
  setInterval(() => {
    cube.position.z -= 1
  }, 50);

    setTimeout(() => {
      renderCubes();
    }, 1000)

    setTimeout(() => {
      scene.remove(cube)
    }, 1100);
};

cube.position.z = -50;
cube.rotation.x = 10;
cube.rotation.y = 5;


starGeo = new THREE.Geometry();
for(let i=0;i<3000;i++) {
  star = new THREE.Vector3(
    Math.random() * 600 - 300,
    Math.random() * 600 - 300,
    Math.random() * 600 - 300
  );
  star.velocity = 0;
  star.acceleration = 0.02;
  starGeo.vertices.push(star);
}

// let sprite = new THREE.TextureLoader().load( 'star.png' );
let starMaterial = new THREE.PointsMaterial({
  color: 0xaaaaaa,
  size: 1.2,
});

stars = new THREE.Points(starGeo,starMaterial);

scene.add(stars);



function animate() {
  cube.rotation.x += 0.03
  cube.rotation.y += 0.01
  cube.rotation.z += 0.02
  starGeo.vertices.forEach(p => {
    p.velocity += p.acceleration
    p.z += p.velocity;
    
    if (p.z < 300) {
      p.z = -300;
      p.velocity = 0;
    }
  });
  starGeo.verticesNeedUpdate = true;
  stars.rotation.z -= 0.002;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();