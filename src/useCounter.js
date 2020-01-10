import { useState } from 'react'

export function useCounter (initialCount) {
  return useState(initialCount)
}