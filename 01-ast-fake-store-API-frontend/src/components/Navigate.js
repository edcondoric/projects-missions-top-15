import {
  Link
} from "react-router-dom";

export function Navigate() {
  const links = [{ path: '/home', content: 'Home' },
    { path: '/about', content: 'About' },
  ];

  return (
    <nav>
      {links.map(({ path, content }, index) => (
        <p key={index}><Link to={path}>{content}</Link></p>
      ))}
    </nav>
  )
}
