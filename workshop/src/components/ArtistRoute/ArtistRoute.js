import React from "react";
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux'

import { fetchArtistProfile } from '../../helpers/api-helpers'
import { useParams, } from 'react-router-dom'

import { humanizeNumber } from '../../utils' 

import {
  requestArtistProfile,
  receiveArtistProfile,
  receiveArtistProfileError
} from '../../actions'

import Header from './Header'
import Genres from './Genres'

const ArtistRoute = () => {
  const accessToken = useSelector(state => state.auth.token)
  const currentArtist = useSelector(state=> state.artists.currentArtist)
  const dispatch = useDispatch()
  const { artistId } = useParams();

  React.useEffect(() => {
    if (!accessToken) {
      return;
    } 
    console.log('useEffect')
    dispatch(requestArtistProfile());
    fetchArtistProfile(accessToken, artistId)
    .then(res => {
      console.log(res);
      dispatch(receiveArtistProfile(res));
    })
    .catch(err => {
      console.error(err);
      dispatch(receiveArtistProfileError())
    })
  }, [accessToken]);
  
  console.log(currentArtist)

  if (currentArtist) {
    return (
      <Wrapper>
        <Header
          artistName={currentArtist.profile.name}
          artistImage={currentArtist.profile.images[2].url}
          artistFollowers={humanizeNumber(currentArtist.profile.followers.total)}
        />
        <Genres artistGenres={[
          currentArtist.profile.genres[0],
          currentArtist.profile.genres[1]
        ]}>
        </Genres>
      </Wrapper>
    )
  } else {
    return <div>loading</div> 
  }
}

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: #0B0F14;
`

export default ArtistRoute;
