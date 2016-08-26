import React from 'react'
import PRNG from 'prng'

const avatarCache = {}

function drawAvatar(width, height) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  return canvas.toDataUrl()
}

function makeRNG(id) {
  const seed = id
    .split('')
    .map(c => c.charCodeAt(0))
    .join('')

  const prng = new PRNG(Number(seed))
  return (min=0, max=100) => prng.rand(min, max)
}

export default function Avatar({ width, height, id }) {

  if(!avatarCache.hasOwnProperty(id)) {
    const rand = makeRNG(id)
    avatarCache[id] = drawAvatar()
  }

  return <img src={avatarCache[id]} />
}

