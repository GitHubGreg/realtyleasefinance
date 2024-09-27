import React from 'react'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="py-10">
      <div className="container mx-auto flex justify-center">
        <Logo />
      </div>
    </header>
  )
}
