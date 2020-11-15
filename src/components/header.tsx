import React from 'react';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle: string;
}

class Header extends React.Component<HeaderProps> {
  render(): JSX.Element {
    return (
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {this.props.siteTitle}
            </Link>
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
