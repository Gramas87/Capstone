import Carousel from 'react-bootstrap/carousel'
import './BackingTracksSection.css'

import YouTube from 'react-youtube'
import { useState } from 'react'

const BackingTracksSection = ({ ytlinksID }) => {
  const [players, setPlayers] = useState([])

  const opts = {
    height: '300',
    width: '300',
  }

  const onReady = (event) => {
    setPlayers([...players, event.target])
  }

  return (
    <div>
      <Carousel
        interval={null}
        onSlide={() => {
          players.forEach((p) => p.pauseVideo())
        }}
      >
        {ytlinksID.map((id, index) => (
          <Carousel.Item key={index}>
            <YouTube videoId={id} id={id} opts={opts} onReady={onReady} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default BackingTracksSection
