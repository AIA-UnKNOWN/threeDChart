import {
  WebGLRenderer, Scene, PerspectiveCamera,
  DirectionalLight,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { makeCube, needResizeToDisplaySize } from './utils/functions'; 

export default () => {
  const canvas = document.querySelector( '#chart' );
  const alpha = true;
  const renderer = new WebGLRenderer({ canvas, alpha });

  const scene = new Scene();

  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 100;
  const camera = new PerspectiveCamera( fov, aspect, near, far );
  camera.position.set( 0, 0, 6 );

  const controls = new OrbitControls( camera, renderer.domElement );
  controls.rotateSpeed = 0.1;
  controls.update();

  const color = 0xffffff;
  const intensity = 1;
  const light = new DirectionalLight( color, intensity );
  light.position.set( -2, 0, 4 );
  scene.add( light );

  const cubes = [
    makeCube( -4 ),
    makeCube( -2 ),
    makeCube( 0 ),
    makeCube( 2 ),
    makeCube( 4 )
  ];

  cubes.forEach( cube => {
    scene.add( cube )
  });

  function render( time ) {
    if ( needResizeToDisplaySize( renderer ) ) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    } 

    controls.update();
		renderer.render( scene, camera );
		requestAnimationFrame( render );
	}

  render();
}