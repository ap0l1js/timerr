import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '.';

describe('Header', () => {
  it('must render correctly Header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByText('Timerr.')).toBeInTheDocument();
  });
});
