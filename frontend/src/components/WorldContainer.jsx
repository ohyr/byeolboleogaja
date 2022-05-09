import 'aframe';
import ground from '@/assets/ground-world.glb?url';
import library from '@/assets/library.glb?url';
import observatory from '@/assets/observatory.glb?url';
import spaceship from '@/assets/spaceship.glb?url';
import scienceMuseum from '@/assets/science-museum.glb?url';
import satellite from '@/assets/satellite.glb?url';
import witchHouse from '@/assets/witch-house.glb?url';
import sky from '@/assets/bg-world.jpg?url';

const WorldContainer = () => {
  return (
    <>
      <a-scene>
        <a-assets>
          <img id="sky" src={sky}/>
          <a-asset-item id="ground" src={ground}></a-asset-item>
          <a-asset-item id="library" src={library}></a-asset-item>
          <a-asset-item id="observatory" src={observatory}></a-asset-item>
          <a-asset-item id="spaceship" src={spaceship}></a-asset-item>
          <a-asset-item id="science-museum" src={scienceMuseum}></a-asset-item>
          <a-asset-item id="satellite" src={satellite}></a-asset-item>
          <a-asset-item id="witch-house" src={witchHouse}></a-asset-item>
        </a-assets>
        <a-sky src="#sky" />
        <a-gltf-model src="#ground" position="0 -5 0" rotation="0 -2 0" />
        <a-gltf-model src="#library" position="82.276 14.178 -204.775" rotation="0 90 0" />
        <a-gltf-model src="#observatory" scale="120 120 120" position="41.511 29.726 -56.011" rotation="0 90 0" />
        <a-gltf-model src="#spaceship" scale="100 100 100" position="-60.211 -1.030 -262.203" />
        <a-gltf-model src="#science-museum" scale="2.3 2.3 2.3" position="-54.671 0 -86.823" />
        <a-gltf-model src="#satellite" scale="100 100 100" position="-69.931 45.263 -98.965" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000" />
        <a-gltf-model src="#witch-house" scale="0.3 0.3 0.3" position="-83.652 15.925 -359.571" rotation="179.947 0 -179.957"/>
        <a-camera position="0 7 0">
          <a-entity position="0 -5 0" rotation="0 180 0">
            <a-gltf-model src="src/assets/amongUs.glb" />
          </a-entity>
        </a-camera>
      </a-scene>
    </>
  );
};

export default WorldContainer;
