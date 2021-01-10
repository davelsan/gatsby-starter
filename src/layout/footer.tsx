import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="flex justify-center mt-10 p-8 w-full"
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
};
export default Footer;
