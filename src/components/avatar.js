import React from 'react'
import PRNG from 'prng'
import { colors } from '../constants/styles'
import { repeatedly } from 'zaphod/compat'

const avatarCache = {}

function drawAvatar(width, height, shapes) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')
  ctx.fillStyle = colors.blue
  ctx.fillRect(0, 0, width, height)

  shapes.forEach(shape => {
    const { saturation, lightness } = shape
    const [x, y] = shape.points[0]

    ctx.fillStyle = `hsl(214, ${saturation}%, ${lightness}%)`
    ctx.beginPath()
    ctx.moveTo(x, y)
    shape.points.forEach(
      ([x, y]) => ctx.lineTo(x, y)
    )
    ctx.fill()
  })

  return canvas.toDataURL()
}

function makeAvatar(width, height, nextNumber) {
  const shapeCount = nextNumber(3, 6)

  function makeShape() {
    const pointCount = nextNumber(3, 5)
    const saturation = nextNumber(60, 70)
    const lightness = nextNumber(40, 80)

    return {
      points: repeatedly(pointCount, makePoint),
      saturation,
      lightness
    }
  }

  function makePoint() {
    return [
      nextNumber(-width, width * 2),
      nextNumber(-height, height * 2)
    ]
  }

  return repeatedly(shapeCount, makeShape)
}

function makeRNG(id) {
  const seed = id
    .split('')
    .map(c => c.charCodeAt(0))
    .join('')

  const prng = new PRNG(Number(seed))
  return (min=0, max=100) => prng.rand(min, max)
}

export default function Avatar({ width=80, height=80, id, style }) {
  if(!avatarCache.hasOwnProperty(id)) {
    const shapes = makeAvatar(width, height, makeRNG(id))
    avatarCache[id] = drawAvatar(width, height, shapes)
  }

  return <img
    src={avatarCache[id]}
    style={style}
    width={width}
    height={height}
    alt="Avatar" />
}

