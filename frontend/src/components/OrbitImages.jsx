import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

function generateEllipsePath(cx, cy, rx, ry) {
  return `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx - rx} ${cy}`
}

function generateRectanglePath(cx, cy, width, height) {
  const halfWidth = width / 2
  const halfHeight = height / 2
  return `M ${cx - halfWidth} ${cy - halfHeight} L ${cx + halfWidth} ${cy - halfHeight} L ${cx + halfWidth} ${cy + halfHeight} L ${cx - halfWidth} ${cy + halfHeight} Z`
}

function OrbitItem({ item, index, totalItems, path, itemSize, rotation, progress, fill, renderItem }) {
  const itemOffset = fill ? (index / totalItems) * 100 : 0

  const offsetDistance = useTransform(progress, (value) => {
    const offset = (((value + itemOffset) % 100) + 100) % 100
    return `${offset}%`
  })

  return (
    <motion.div
      className="absolute left-0 top-0 z-[2] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      style={{
        width: itemSize,
        height: itemSize,
        offsetPath: `path("${path}")`,
        offsetRotate: '0deg',
        offsetAnchor: 'center center',
        offsetDistance,
      }}
    >
      <div style={{ transform: `rotate(${-rotation}deg)` }}>{renderItem(item, index)}</div>
    </motion.div>
  )
}

function OrbitImages({
  items = [],
  renderItem,
  shape = 'ellipse',
  baseWidth = 1200,
  baseHeight = 460,
  radiusX = 360,
  radiusY = 120,
  rotation = 0,
  duration = 30,
  itemSize = 96,
  direction = 'normal',
  fill = true,
  className = '',
  showPath = true,
  pathColor = 'rgba(201,162,39,0.22)',
  pathWidth = 2,
  easing = 'linear',
  paused = false,
  responsive = true,
  centerContent,
}) {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const centerX = baseWidth / 2
  const centerY = baseHeight / 2

  const path = useMemo(() => {
    if (shape === 'rectangle') {
      return generateRectanglePath(centerX, centerY, radiusX * 2, radiusY * 2)
    }

    return generateEllipsePath(centerX, centerY, radiusX, radiusY)
  }, [centerX, centerY, radiusX, radiusY, shape])

  useEffect(() => {
    if (!responsive || !containerRef.current) {
      return undefined
    }

    const updateScale = () => {
      if (!containerRef.current) {
        return
      }

      setScale(containerRef.current.clientWidth / baseWidth)
    }

    updateScale()
    const observer = new ResizeObserver(updateScale)
    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [baseWidth, responsive])

  const progress = useMotionValue(0)

  useEffect(() => {
    if (paused) {
      return undefined
    }

    const controls = animate(progress, direction === 'reverse' ? -100 : 100, {
      duration,
      ease: easing,
      repeat: Infinity,
      repeatType: 'loop',
    })

    return () => controls.stop()
  }, [direction, duration, easing, paused, progress])

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: responsive ? `${baseWidth} / ${baseHeight}` : undefined }}
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: baseWidth,
          height: baseHeight,
          transform: `translate(-50%, -50%) scale(${responsive ? scale : 1})`,
          transformOrigin: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: 'center',
          }}
        >
          {showPath ? (
            <svg width="100%" height="100%" viewBox={`0 0 ${baseWidth} ${baseHeight}`} className="absolute inset-0">
              <path d={path} fill="none" stroke={pathColor} strokeWidth={pathWidth / Math.max(scale, 0.0001)} />
            </svg>
          ) : null}

          {items.map((item, index) => (
            <OrbitItem
              key={item.name || index}
              item={item}
              index={index}
              totalItems={items.length}
              path={path}
              itemSize={itemSize}
              rotation={rotation}
              progress={progress}
              fill={fill}
              renderItem={renderItem}
            />
          ))}
        </div>
      </div>

      {centerContent ? <div className="absolute inset-0 z-[3] grid place-items-center">{centerContent}</div> : null}
    </div>
  )
}

export default OrbitImages
