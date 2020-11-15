import React from 'react';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle: string;
}

class Header extends React.Component<HeaderProps> {
  render(): JSX.Element {
    return (
      <header
        className="fixed top-0 flex justify-center py-4 px-10 w-full"
        style={{ background: `rebeccapurple` }}
      >
        <h1 className="text-3xl sm:text-4xl font-semibold">
          <Link to="/" className="text-white no-underline">
            {this.props.siteTitle}
          </Link>
        </h1>
      </header>
    );
  }
}

export default Header;
