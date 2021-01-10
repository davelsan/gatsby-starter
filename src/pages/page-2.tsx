import React from 'react';
import { navigate } from 'gatsby';

import Layout from '../layout/layout';
import SEO from '../components/seo';

const SecondPage: React.FC = () => {
  const onButtonClick: React.EventHandler<
    React.FormEvent<HTMLButtonElement>
  > = () => {
    navigate('/');
  };

  return (
    <Layout>
      <SEO title="Page two" />
      <h1 className="text-2xl sm:text-3xl">Hi from the second page</h1>
      <p className="text-lg sm:text-xl mt-3">Welcome to page 2</p>
      <button
        className="py-2 px-4 mt-10
                     focus:outline-none rounded-full bg-purple-700
                     font-medium text-center text-lg text-white"
        onClick={onButtonClick}
      >
        Go back to the homepage
      </button>
    </Layout>
  );
};

export default SecondPage;
