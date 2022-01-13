import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import * as THREE from 'three'

type DotProps = {
  style: any,
  size: number,
  seperation: number,
  amountx: number
  amounty: number
  position: any
}


var SEPARATION = 100,
  AMOUNTX = 100,
  AMOUNTY = 70;
var count = 0;

const Dots = ({ style, size, seperation, amountx, amounty, position }: DotProps) => {
  const ref = useRef()

  const { particles } = useMemo(() => {
    var particles = [];
    var i = 0;
    for (var ix = 0; ix < amountx; ix++) {
      for (var iy = 0; iy < amounty; iy++) {
        const particle = new THREE.Sprite()
        particle.position.x = ix * seperation - ((amountx * seperation) / 2);
        particle.position.z = iy * seperation - ((amounty * seperation) / 2);
        particles.push(particle);
      }
    }
    return { particles }
  }, [])

  useFrame(({ clock }) => {

    let i = 0;
    for (var ix = 0; ix < amountx; ix++) {
      for (var iy = 0; iy < amounty; iy++) {
        let particle = particles[i++];
        particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
        particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
        let transformation = new THREE.Matrix4();
        transformation.makeTranslation(particle.position.x, particle.position.y, particle.position.z);
        // @ts-ignore
        ref.current.setMatrixAt(i, transformation)
      }
    }
    // @ts-ignore
    ref.current.instanceMatrix.needsUpdate = true
    count += 0.1;
  })

  return (
    // @ts-ignore
    <instancedMesh ref={ref} args={[null, null, amountx * amounty]}>
      <circleBufferGeometry args={[size]} />
      <meshBasicMaterial color={"#fff"} />
    </instancedMesh>
  )
}



export default function ParticleCanvas({ style, size, seperation, amountx, amounty, position }: DotProps) {
  return (
    <Canvas className="left-0 right-0 opacity-100"
      style={{ ...style, 'margin-top': '18rem' }}
      camera={{ fov: 120, position: position, near: -20, far: 1000 }}
    >
      <color attach="background" args={[0, 0, 0]} />
      <Dots
        style={style}
        size={size}
        seperation={seperation}
        amountx={amountx}
        amounty={amounty}
        position={position}
      />
    </Canvas>
  )
}


