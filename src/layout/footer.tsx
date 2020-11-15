import React from 'react';

class Footer extends React.Component {
  render(): JSX.Element {
    return (
      <footer
        className="fixed flex bottom-0 w-full p-8 justify-center"
        style={{
          backgroundColor: 'rebeccapurple',
        }}
      >
        <span className="text-xl text-gray-300">
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </span>
      </footer>
    );
  }
}

export default Footer;
