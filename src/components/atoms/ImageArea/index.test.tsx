import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import ImageArea from './'

describe('ImageArea component ', () => {
  it('- Render', () => {
    const { container } = render(<ImageArea height='10px' width='10px'/>);
    
    const ImageAreaNode = container.getElementsByTagName('img');

    expect(ImageAreaNode.length).toBe(1);
  })
});