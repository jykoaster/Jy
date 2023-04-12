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
let camera = null as any
let controls = null as any
let positionTween = null as any
let rotationTween = null as any

const enter = () => {
  isActive.value = true
  const targetPosition = new THREE.Vector3(
    -0.325 - 0.325 * Math.cos(Math.PI - Math.PI / 1.5) + 0.02,
    0.325 * Math.cos(Math.PI / 1.5 - Math.PI / 2) + 0.03,
    0
  )
  const targetRotation = Math.PI / 1.5
  const duration = 1200
  controls.autoRotate = false
  positionTween.to(targetPosition, duration).easing(Easing.Quadratic.Out).start()
  rotationTween.to({ angle: targetRotation }, duration).easing(Easing.Quadratic.Out).start()
  const cameraTween = new Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
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
  }, duration - 200)
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

  const cube = new THREE.Mesh(geometry, materials)
  const cube2 = new THREE.Mesh(geometry2, materials2)
  scene.add(cube, cube2)

  positionTween = new Tween(cube2.position).start()
  rotationTween = new Tween({ angle: 0 })

    .onUpdate((obj) => {
      cube2.rotation.z = obj.angle
    })
    .start()

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
  <div class="relative">
    <div id="notebook" class="min-h-screen min-w-screen"></div>
    <div
      class="absolute bottom-20 right-10 rounded-full w-60 h-60 text-white text-5xl flex justify-center items-center cursor-pointer bg-slate-400 bg-opacity-50 hover:bg-opacity-100"
      :class="isActive && 'animate-bigping'"
      @click="enter"
    >
      <p>ENTER</p>
    </div>
  </div>
</template>
