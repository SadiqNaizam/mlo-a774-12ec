import * as React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/LoginPage/LoginForm';

/**
 * The main login page for the application.
 * This page composes the MainAppLayout and the LoginForm to create the complete login screen.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
