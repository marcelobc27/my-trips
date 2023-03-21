import LinkWrapper from ".";

import { render, screen } from "@testing-library/react";

describe('<LinkWrapper/>', () => {
  it('Should render link and children', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByText(/anything/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')

    screen.logTestingPlaygroundURL
  })
})