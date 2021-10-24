import { BoxGeometry, MeshPhongMaterial, Mesh } from 'three';

// These reusable functions could make development easier

function makeCube( x ) {
	const boxWidth = 1;
	const boxHeight = Math.trunc( Math.random() * 5 ) || 1;
	const boxDepth = 1;
	const boxGeometry = new BoxGeometry( boxWidth, boxHeight, boxDepth );
  const material = new MeshPhongMaterial({ color: '#B255EC' });
  const cube = new Mesh( boxGeometry, material );

	cube.position.set( x, 0, 0 );
	
	return cube;
}

function needResizeToDisplaySize( renderer ) {
	const canvas = renderer.domElement;
	const pixelRatio = window.devicePixelRatio;
	const width = canvas.clientWidth * pixelRatio | 0;
	const height = canvas.clientHeight * pixelRatio | 0;
	const needResize = canvas.width !== width || canvas.height !== height;

	if ( needResize ) renderer.setSize( width, height, false );

	return needResize;
}

export {
	makeCube,
	needResizeToDisplaySize
}