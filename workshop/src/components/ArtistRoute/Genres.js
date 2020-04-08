import React from 'react';
import styled from 'styled-components'

const Genres = ({artistGenres}) => {
    return (
        <GenreDiv>
        {artistGenres.map((genre, index) => {
            return (
                    <Genre key={index+1}>{genre}</Genre>
                    )
                })}
        </GenreDiv>
    )
}

const Genre = styled.div`
    background: rgba(75, 75, 75, 0.4);
    padding: 8px;
    color: white;
    margin: 10px;
`

const GenreDiv = styled.div`
    display: flex;
    position: absolute;
    top: 528px;
    width: 375px;
    justify-content: space-around;
    padding: 0 100px 0 100px;
`

export default Genres