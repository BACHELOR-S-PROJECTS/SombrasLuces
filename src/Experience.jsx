import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './ball'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'
import { PointLightHelper } from 'three'
import { HemisphereLightHelper } from 'three'
import { SpotLightHelper } from 'three'

export default function Experience() {
    const directionalLightRef = useRef()
    const pointLightRef = useRef()
    const hemisphereLightRef = useRef()
    const spotLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper, 1)
    useHelper(pointLightRef, PointLightHelper, 1)
    useHelper(hemisphereLightRef, HemisphereLightHelper, 1)
    useHelper(spotLightRef,SpotLightHelper,1)

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <directionalLight  ref={directionalLightRef} castShadow position={[0, 10, -6]} intensity={1.5} /> */}
        {/* <pointLight  ref={pointLightRef} castShadow position={[0, 10, -6]} intensity={1.5} /> */}
        {/* <hemisphereLight ref={hemisphereLightRef} castShadow position={[0, 10, -6]} intensity={1.5} /> */}
        {/* <rectAreaLight castShadow position={[0, 10, -6]} intensity={1.5} /> */}
        <spotLight ref={spotLightRef} castShadow position={[0, 10, -6]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        
        <Door />
        <Floor />
    </>
}