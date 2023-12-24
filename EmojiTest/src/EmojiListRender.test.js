import React from 'react';
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import emojiList from '../emojiList.json'
import App from '../App'

describe('Emoji Render Test',()=>{
    let emojiList;
    beforeEach(() => {
        render(<App/>);

        emojiList = [...document.querySelectorAll('.emoji-item')].slice(0, 10);
    })

    test('Successful rendering is tested.',()=> {
        emojiList.map((item)=>{
            expect(screen.getByText(item.title)).toBeInTheDocument();
        })
    })
})