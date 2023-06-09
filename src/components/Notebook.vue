<script setup lang="ts">
import * as THREE from 'three'
import { onMounted, ref } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Tween, Easing, update as updateTween } from '@tweenjs/tween.js'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'

const emit = defineEmits<{
  (e: 'enter'): void
}>()

const isActive = ref(false)
const showBtn = ref(true)

let camera = null as any
let controls = null as any
let cube = null as any
let cube2 = null as any

const enter = () => {
  isActive.value = true
  setTimeout(() => {
    showBtn.value = false
  }, 700)
  const targetPosition = new THREE.Vector3(
    -0.325 - 0.325 * Math.cos(Math.PI - Math.PI / 1.5) + 0.02,
    0.325 * Math.cos(Math.PI / 1.5 - Math.PI / 2) + 0.03,
    0
  )
  const targetRotation = Math.PI / 1.5
  const duration = 1000
  controls.autoRotate = false

  new Tween(cube2.position).to(targetPosition, duration).easing(Easing.Quadratic.Out).start()
  new Tween({ angle: 0 })
    .to({ angle: targetRotation }, duration)
    .easing(Easing.Quadratic.Out)
    .onUpdate((obj) => {
      cube2.rotation.z = obj.angle
    })
    .start()
  new Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
    .to({ x: 1, y: 1, z: 0 }, duration)
    .easing(Easing.Quadratic.Out)
    .onUpdate((obj) => {
      camera.position.x = obj.x
      camera.position.y = obj.y
      camera.position.z = obj.z
      camera.lookAt(new THREE.Vector3(0, 0, 0))
    })
    .start()
  setTimeout(() => {
    emit('enter')
  }, duration - 300)
}

onMounted(() => {
  const tar = document.getElementById('notebook') as HTMLElement
  const width = tar.offsetWidth
  const height = tar.offsetHeight
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 2
  camera.position.y = 2
  const light = new THREE.AmbientLight(0xffffff) // soft white light
  scene.add(light)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.autoRotate = true
  tar.appendChild(renderer.domElement)

  // onProgress callback currently not supported
  const geometry = new RoundedBoxGeometry(0.65, 0.03, 1, 20, 50)
  const geometry2 = new RoundedBoxGeometry(0.65, 0.03, 1, 20, 50)
  geometry2.translate(0, 0.03, 0)

  const loader = new THREE.TextureLoader()

  const texture = loader.load('/texture/notebook.png')
  texture.Magnification = THREE.NearestFilter
  texture.rotation = Math.PI / 2
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  const texture2 = loader.load('/texture/notebook2.png')
  texture2.Magnification = THREE.NearestFilter
  texture2.rotation = -Math.PI / 2
  texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping

  const texture3 = loader.load('/texture/notebook3.png')
  texture3.Magnification = THREE.NearestFilter
  texture3.rotation = Math.PI
  texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping

  const texture4 = loader.load('/texture/notebook4.png')
  texture3.Magnification = THREE.NearestFilter
  texture4.rotation = -Math.PI / 2
  texture4.wrapS = texture4.wrapT = THREE.RepeatWrapping

  const materials = [
    new THREE.MeshStandardMaterial({
      map: texture3,
    }), // 背面
    new THREE.MeshStandardMaterial({
      map: texture3,
    }),
    new THREE.MeshStandardMaterial({
      map: texture2,
    }), // 正面
    new THREE.MeshStandardMaterial({
      map: texture3,
    }),
    new THREE.MeshStandardMaterial({
      map: texture3,
    }),
    new THREE.MeshStandardMaterial({
      map: texture3,
    }),
  ]

  const materials2 = [
    new THREE.MeshStandardMaterial({
      map: texture3,
    }), // 背面
    new THREE.MeshStandardMaterial({
      map: texture3,
    }),
    new THREE.MeshStandardMaterial({
      map: texture4,
    }),
    new THREE.MeshStandardMaterial({
      map: texture,
    }), // 正面
    new THREE.MeshStandardMaterial({
      map: texture3,
    }),
    new THREE.MeshStandardMaterial({
      map: texture3,
    }),
  ]

  cube = new THREE.Mesh(geometry, materials)
  cube2 = new THREE.Mesh(geometry2, materials2)
  scene.add(cube, cube2)

  const animate = () => {
    requestAnimationFrame(animate)
    controls.update()
    updateTween()
    renderer.render(scene, camera)
  }
  requestAnimationFrame(animate)

  animate()
})
</script>
<template>
  <div class="fixed top-0 bottom-0 right-0 left-0">
    <div class="relative">
      <div id="notebook" class="min-h-screen min-w-screen"></div>
      <div
        v-show="showBtn"
        class="absolute bottom-24 right-10 rounded-full text-white flex justify-center items-center cursor-pointer bg-slate-400 bg-opacity-50 hover:bg-opacity-100 w-24 h-24 lg:bottom-20 lg:text-5xl lg:w-44 lg:h-44"
        :class="isActive && 'animate-bigping'"
        @click="enter"
      >
        <p>ENTER</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
