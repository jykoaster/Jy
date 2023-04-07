<script setup lang="ts">
import * as THREE from 'three'
import { onMounted } from 'vue'
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Tween, Easing, update as updateTween } from '@tweenjs/tween.js'

onMounted(() => {
  const tar = document.getElementById('notebook') as HTMLElement
  tar.style.height = `${window.innerHeight - 96}px`
  const width = tar.offsetWidth
  const height = tar.offsetHeight
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x111111)
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 2
  camera.position.y = 2
  const light = new THREE.AmbientLight(0x404040) // soft white light
  scene.add(light)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)

  const controls = new OrbitControls(camera, renderer.domElement)

  tar.appendChild(renderer.domElement)
  const RoundEdgedBox = (
    width?: number,
    height?: number,
    depth?: number,
    radius?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number,
    smoothness?: number
  ) => {
    width = width || 1
    height = height || 1
    depth = depth || 1
    radius = radius || Math.min(Math.min(width, height), depth) * 0.25
    widthSegments = widthSegments ? Math.floor(widthSegments) : 1
    heightSegments = heightSegments ? Math.floor(heightSegments) : 1
    depthSegments = depthSegments ? Math.floor(depthSegments) : 1
    smoothness = smoothness ? Math.max(3, Math.floor(smoothness) || 3) : 3

    let halfWidth = width * 0.5 - radius
    let halfHeight = height * 0.5 - radius
    let halfDepth = depth * 0.5 - radius

    // corners - 4 eighths of a sphere
    var corner1 = new THREE.SphereGeometry(radius, smoothness, smoothness, 0, Math.PI * 0.5, 0, Math.PI * 0.5)
    corner1.translate(-halfWidth, halfHeight, halfDepth)
    var corner2 = new THREE.SphereGeometry(
      radius,
      smoothness,
      smoothness,
      Math.PI * 0.5,
      Math.PI * 0.5,
      0,
      Math.PI * 0.5
    )
    corner2.translate(halfWidth, halfHeight, halfDepth)
    var corner3 = new THREE.SphereGeometry(
      radius,
      smoothness,
      smoothness,
      0,
      Math.PI * 0.5,
      Math.PI * 0.5,
      Math.PI * 0.5
    )
    corner3.translate(-halfWidth, -halfHeight, halfDepth)
    var corner4 = new THREE.SphereGeometry(
      radius,
      smoothness,
      smoothness,
      Math.PI * 0.5,
      Math.PI * 0.5,
      Math.PI * 0.5,
      Math.PI * 0.5
    )
    corner4.translate(halfWidth, -halfHeight, halfDepth)

    let geometry = BufferGeometryUtils.mergeBufferGeometries([corner1, corner2, corner3, corner4])

    // edges - 2 fourths for each dimension
    // width
    var edge = new THREE.CylinderGeometry(
      radius,
      radius,
      width - radius * 2,
      smoothness,
      widthSegments,
      true,
      0,
      Math.PI * 0.5
    )
    edge.rotateZ(Math.PI * 0.5)
    edge.translate(0, halfHeight, halfDepth)
    var edge2 = new THREE.CylinderGeometry(
      radius,
      radius,
      width - radius * 2,
      smoothness,
      widthSegments,
      true,
      Math.PI * 1.5,
      Math.PI * 0.5
    )
    edge2.rotateZ(Math.PI * 0.5)
    edge2.translate(0, -halfHeight, halfDepth)

    // height
    var edge3 = new THREE.CylinderGeometry(
      radius,
      radius,
      height - radius * 2,
      smoothness,
      heightSegments,
      true,
      0,
      Math.PI * 0.5
    )
    edge3.translate(halfWidth, 0, halfDepth)
    var edge4 = new THREE.CylinderGeometry(
      radius,
      radius,
      height - radius * 2,
      smoothness,
      heightSegments,
      true,
      Math.PI * 1.5,
      Math.PI * 0.5
    )
    edge4.translate(-halfWidth, 0, halfDepth)

    // depth
    var edge5 = new THREE.CylinderGeometry(
      radius,
      radius,
      depth - radius * 2,
      smoothness,
      depthSegments,
      true,
      0,
      Math.PI * 0.5
    )
    edge5.rotateX(-Math.PI * 0.5)
    edge5.translate(halfWidth, halfHeight, 0)
    var edge6 = new THREE.CylinderGeometry(
      radius,
      radius,
      depth - radius * 2,
      smoothness,
      depthSegments,
      true,
      Math.PI * 0.5,
      Math.PI * 0.5
    )
    edge6.rotateX(-Math.PI * 0.5)
    edge6.translate(halfWidth, -halfHeight, 0)

    const edgeGroup = BufferGeometryUtils.mergeBufferGeometries([edge, edge2, edge3, edge4, edge5, edge6])

    // sides
    // front
    var side = new THREE.PlaneGeometry(width - radius * 2, height - radius * 2, widthSegments, heightSegments)
    side.translate(0, 0, depth * 0.5)

    // right
    var side2 = new THREE.PlaneGeometry(depth - radius * 2, height - radius * 2, depthSegments, heightSegments)
    side2.rotateY(Math.PI * 0.5)
    side2.translate(width * 0.5, 0, 0)

    const sideGroup = BufferGeometryUtils.mergeBufferGeometries([side, side2])

    geometry = BufferGeometryUtils.mergeBufferGeometries([geometry, sideGroup, edgeGroup])

    // duplicate and flip
    var secondHalf = geometry.clone()
    secondHalf.rotateY(Math.PI)
    geometry = BufferGeometryUtils.mergeBufferGeometries([secondHalf, geometry])

    // top
    var top = new THREE.PlaneGeometry(width - radius * 2, depth - radius * 2, widthSegments, depthSegments)
    top.rotateX(-Math.PI * 0.5)
    top.translate(0, height * 0.5, 0)

    // bottom
    var bottom = new THREE.PlaneGeometry(width - radius * 2, depth - radius * 2, widthSegments, depthSegments)
    bottom.rotateX(Math.PI * 0.5)
    bottom.translate(0, -height * 0.5, 0)

    geometry = BufferGeometryUtils.mergeBufferGeometries([geometry, top, bottom])

    return geometry
  }

  const geometry = RoundEdgedBox(0.65, 0.03, 1, undefined, 1, 1, 3)
  const geometry2 = RoundEdgedBox(0.65, 0.03, 1, undefined, 1, 1, 3)
  geometry2.translate(0, 0.03, 0)

  const material = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true })
  const cube = new THREE.Mesh(geometry, material)
  const cube2 = new THREE.Mesh(geometry2, material)
  scene.add(cube, cube2)

  const axis = new THREE.Vector3(0, 0, 1)
  const targetPosition = new THREE.Vector3(
    -0.325 - 0.325 * Math.cos(Math.PI - Math.PI / 1.5),
    0.325 * Math.cos(Math.PI / 1.5 - Math.PI / 2) + 0.03,
    0
  )
  const targetRotation = Math.PI / 1.5
  const duration = 1000
  const positionTween = new Tween(cube2.position).to(targetPosition, duration).start()
  const rotationTween = new Tween({ angle: 0 })
    .to({ angle: targetRotation }, duration)
    .onUpdate((obj) => {
      cube2.rotation.z = obj.angle
    })
    .start()

  const cameraTween = new Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
    .to({ x: 1, y: 1, z: 0 }, duration)
    .onUpdate((obj) => {
      camera.position.x = obj.x
      camera.position.y = obj.y
      camera.position.z = obj.z
      camera.lookAt(new THREE.Vector3(0, 0, 0))
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
  <div id="notebook"></div>
</template>
