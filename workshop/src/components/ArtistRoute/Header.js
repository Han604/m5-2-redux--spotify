import React from 'react'
import styled from 'styled-components'

const Header = ({artistName, artistImage, artistFollowers}) => {

    return (
        <>
            <ArtistImg src={artistImage} alt={artistName}/>
            <ArtistName>{artistName}</ArtistName>
            <ArtistFollowers>{artistFollowers}<div style={{marginLeft:'5px', color: 'white'}}> followers</div></ArtistFollowers>
        </>
    )
}

export default Header

const ArtistFollowers = styled.div`
    position: absolute;
    width: 93px;
    height: 17px;
    left: 141px;
    top: 257px;
    display: flex;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-transform: lowercase;

    color: #FF4FD8;
`

const ArtistName = styled.div`
    position: absolute;
    width: 268px;
    height: 59px;
    left: 54px;
    top: 173px;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 59px;
    color: white;
    text-shadow: 4px 8px 25px #000000, 0px 4px 4px rgba(0, 0, 0, 0.5), 1px 2px 2px rgba(0, 0, 0, 0.75);
`


const ArtistImg = styled.img`
    border-radius: 50%;
    height: 175px;
    width: 175px;
    left: 104px;
    top:59px;
    position: absolute;
`