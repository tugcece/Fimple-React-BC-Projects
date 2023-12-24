import React from 'react';
import {fireEvent, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('Emoji Filter',()=>{
    let emojiFilter;
    beforeEach(() => {
        // to find input
        render(<App/>);
        emojiFilter = screen.getByLabelText('emojiInput');
    })

    test('testing....',()=>{ 
        const emoji = 'Smiley';
        fireEvent.click(emojiFilter,emoji);
        expect(screen.getByText(emoji)).toBeInTheDocument();
    })
})