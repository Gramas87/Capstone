import Carousel from 'react-bootstrap/carousel'

import YouTube from 'react-youtube'
import { useState, useEffect } from 'react'

const BackingTracksSection = ({ ytlinksID }) => {
  const [players, setPlayers] = useState([])

   useEffect(() => {
     setPlayers([])
   }, [ytlinksID])

  const opts = {
    height: '340',
    width: '300',
  }

  const onReady = (event) => {
    setPlayers([...players, event.target])
  }

  return (
    <div className="contentDiv">
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
