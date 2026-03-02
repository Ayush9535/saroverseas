import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [suppressDropdown, setSuppressDropdown] = useState(false)
  const suppressTimer = useRef(null)

  const links = [
    {
      to: '/about',
      label: 'About Us',
      children: [
        { to: '/about/parent-company', label: 'Parent Company' },
        { to: '/about/global-vision', label: 'Global Vision' },
        { to: '/about/ethos', label: 'Ethos' },
      ],
    },
    {
      to: '/products',
      label: 'Products',
      children: [
        { to: '/products/polymers', label: 'Polymers' },
        { to: '/products/chemicals', label: 'Chemicals' },
      ],
    },
    { to: '/services', label: 'Services' },
    {
      to: '/presence',
      label: 'Presence',
      children: [
        { to: '/presence/geography', label: 'Geography' },
        { to: '/presence/industries', label: 'Industries' },
      ],
    },
    { to: '/career', label: 'Career' },
    { to: '/contact-us', label: 'Contact Us' },
  ]

  useEffect(() => {
    return () => {
      if (suppressTimer.current) clearTimeout(suppressTimer.current)
    }
  }, [])

  return (
    <header className={`site-header ${suppressDropdown ? 'suppress-dropdown' : ''}`}>
      <div className="container nav-inner">
        <div className="logo">
          <NavLink to={"/"}>
          <img src="/images/cropped-SAR-Logo.png" alt="SAR Logo" height={60} width={80} loading="eager" />
          </NavLink>
        </div>

        <nav className="main-nav">
          <ul>
            {links.map((l, i) => (
              <li key={l.to} className={l.children ? 'has-children' : ''}>
                {l.children ? (
                  <span className="nav-link nav-link--parent" aria-haspopup="true">
                    {l.label}
                  </span>
                ) : (
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </NavLink>
                )}

                {l.children && (
                  <ul className="dropdown" aria-label={`${l.label} submenu`}>
                    {l.children.map((c) => (
                      <li key={c.to}>
                        <NavLink
                          to={c.to}
                          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                          onClick={(e) => {
                            setOpen(false)
                            e.currentTarget.blur()
                            setSuppressDropdown(true)
                            if (suppressTimer.current) clearTimeout(suppressTimer.current)
                            suppressTimer.current = setTimeout(() => setSuppressDropdown(false), 250)
                          }}
                        >
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}

                {i < links.length - 1 && <span className="sep">|</span>}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              {l.children ? (
                <span className="nav-link nav-link--parent">{l.label}</span>
              ) : (
                <NavLink to={l.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              )}

              {l.children && (
                <ul className="mobile-submenu">
                  {l.children.map((c) => (
                    <li key={c.to}>
                      <NavLink to={c.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)}>
                          - {c.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
