"use client";

import React, { useRef, useState, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ExtrudeGeometry, Shape } from "three";
import * as THREE from "three";

interface BoxProps {
  position: [number, number, number];
  width?: number;
  length?: number;
  cornerRadius?: number;
  gridPosition: [number, number];
  hoveredBox: [number, number] | null;
  rippleScale?: number;
  rippleRadius?: number;
  sharedGeometry: ExtrudeGeometry;
  sharedMaterial: THREE.MeshPhysicalMaterial;
}

const Box = React.memo(({
  position,
  gridPosition,
  hoveredBox,
  rippleScale = 0.3,
  rippleRadius = 3,
  sharedGeometry,
  sharedMaterial,
}: BoxProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const scaleRef = useRef(1);
  const targetScaleRef = useRef(1);

  useFrame(() => {
    if (!meshRef.current) return;

    let targetScale = 1;

    const isThisBoxHovered =
      hoveredBox &&
      gridPosition[0] === hoveredBox[0] &&
      gridPosition[1] === hoveredBox[1];

    if (isThisBoxHovered) {
      targetScale = 5;
    } else if (hoveredBox) {
      const dx = gridPosition[0] - hoveredBox[0];
      const dz = gridPosition[1] - hoveredBox[1];
      const distance = Math.sqrt(dx * dx + dz * dz);

      if (distance <= rippleRadius && distance > 0) {
        const falloff = Math.max(0, 1 - distance / rippleRadius);
        const rippleEffect = falloff * rippleScale;
        targetScale = 1 + rippleEffect * 3;
      }
    }

    // Only update if target changed significantly
    if (Math.abs(targetScale - targetScaleRef.current) > 0.01) {
      targetScaleRef.current = targetScale;
    }

    const lerpFactor = 0.1;
    const newScale = scaleRef.current + (targetScaleRef.current - scaleRef.current) * lerpFactor;
    
    // Only update scale if change is significant
    if (Math.abs(newScale - scaleRef.current) > 0.001) {
      scaleRef.current = newScale;
      meshRef.current.scale.z = newScale;
    }
  });

  // Set userData once on mount
  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.userData.gridPosition = gridPosition;
    }
  }, [gridPosition]);

  return (
    <mesh
      ref={meshRef}
      geometry={sharedGeometry}
      material={sharedMaterial}
      position={position}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
});

Box.displayName = 'Box';

function HoverDetector({
  onHoverChange,
}: {
  onHoverChange: (hoveredBox: [number, number] | null) => void;
}) {
  const { camera, raycaster, pointer, scene } = useThree();
  const lastHoveredRef = useRef<[number, number] | null>(null);

  useFrame(() => {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    let newHovered: [number, number] | null = null;

    if (intersects.length > 0) {
      for (const intersect of intersects) {
        const mesh = intersect.object;
        if (mesh.userData?.gridPosition) {
          newHovered = mesh.userData.gridPosition as [number, number];
          break;
        }
      }
    }

    // Only call onHoverChange if the hovered box actually changed
    const current = lastHoveredRef.current;
    if (
      (newHovered === null && current !== null) ||
      (newHovered !== null && current === null) ||
      (newHovered !== null && current !== null && 
       (newHovered[0] !== current[0] || newHovered[1] !== current[1]))
    ) {
      lastHoveredRef.current = newHovered;
      onHoverChange(newHovered);
    }
  });

  return null;
}

function GridOfBoxes() {
  const gridSize = 10;
  const boxWidth = 4;
  const boxLength = 4;
  const gap = 0.05;
  const spacingX = boxWidth + gap;
  const spacingZ = boxLength + gap;

  const [hoveredBox, setHoveredBox] = useState<[number, number] | null>(null);
  const rippleScale = 2.5;
  const rippleRadius = 2;

  // Create shared geometry and material once
  const { sharedGeometry, sharedMaterial } = useMemo(() => {
    const shape = new Shape();
    const angleStep = Math.PI * 0.5;
    const radius = 0.8; // cornerRadius
    const halfWidth = boxWidth / 2;
    const halfLength = boxLength / 2;

    shape.absarc(
      halfWidth - radius,
      halfLength - radius,
      radius,
      angleStep * 0,
      angleStep * 1
    );
    shape.absarc(
      -halfWidth + radius,
      halfLength - radius,
      radius,
      angleStep * 1,
      angleStep * 2
    );
    shape.absarc(
      -halfWidth + radius,
      -halfLength + radius,
      radius,
      angleStep * 2,
      angleStep * 3
    );
    shape.absarc(
      halfWidth - radius,
      -halfLength + radius,
      radius,
      angleStep * 3,
      angleStep * 4
    );

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 20,
      curveSegments: 20,
    };

    const geometry = new ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    const material = new THREE.MeshPhysicalMaterial({
      color: "#232323",
      roughness: 0.5,
      metalness: 1,
      clearcoat: 1,
      clearcoatRoughness: 0,
    });

    return { sharedGeometry: geometry, sharedMaterial: material };
  }, []);

  // Memoize boxes array
  const boxes = useMemo(() => {
    const boxArray = [];
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        const posX = (x - (gridSize - 1) / 2) * spacingX;
        const posZ = (z - (gridSize - 1) / 2) * spacingZ;

        boxArray.push(
          <Box
            key={`${x}-${z}`}
            position={[posX, -0.85, posZ]}
            width={boxWidth}
            length={boxLength}
            cornerRadius={0.8}
            gridPosition={[x, z]}
            hoveredBox={hoveredBox}
            rippleScale={rippleScale}
            rippleRadius={rippleRadius}
            sharedGeometry={sharedGeometry}
            sharedMaterial={sharedMaterial}
          />
        );
      }
    }
    return boxArray;
  }, [hoveredBox, sharedGeometry, sharedMaterial, spacingX, spacingZ, gridSize, rippleScale, rippleRadius]);

  const handleHoverChange = useCallback((newHoveredBox: [number, number] | null) => {
    setHoveredBox(newHoveredBox);
  }, []);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      sharedGeometry.dispose();
      sharedMaterial.dispose();
    };
  }, [sharedGeometry, sharedMaterial]);

  return (
    <>
      <HoverDetector onHoverChange={handleHoverChange} />
      {boxes}
    </>
  );
}

export function ChromeGrid() {
  return (
    <div className="w-full h-full bg-black relative z-0 ">
      <Canvas
        camera={{
          position: [-9.31, 12, 24.72],
          rotation: [-0.65, -0.2, -0.13],
          fov: 35,
        }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 15, 10]} intensity={10} castShadow />
        <directionalLight
          position={[-10, 10, -5]}
          intensity={10}
          color="#ffffff"
        />
        <directionalLight
          position={[5, -10, 15]}
          intensity={5}
          color="#f0f8ff"
        />
        <pointLight position={[0, 20, 3]} intensity={2} distance={50} />
        <pointLight
          position={[15, 5, 15]}
          intensity={1.5}
          distance={40}
          color="#ffffff"
        />
        <GridOfBoxes />
      </Canvas>
    </div>
  );
}
