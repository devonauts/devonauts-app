import React from 'react';
import Sky from 'react-sky';

const Background = () => (
    <Sky
    images={{
      /* FORMAT AS FOLLOWS */
      0: require("../../assets/space-icons/orbital-station.png"),  /* You can pass as many images as you want */
      1: require("../../assets/space-icons/satellite.png"),
      2: require("../../assets/space-icons/saturn-ring.png"),
      3: require("../../assets/space-icons/solar-system.png"),
      4: require("../../assets/space-icons/alien-technologies.png"),
      5: require("../../assets/space-icons/constellation.png"),
      6: require("../../assets/space-icons/control-center.png"),
      7: require("../../assets/space-icons/cyrogenic-chamber.png"),
      8: require("../../assets/space-icons/distant-colony.png"),
      9: require("../../assets/space-icons/distant-planet.png"),
      10: require("../../assets/space-icons/floating-robot-head.png"),
      11: require("../../assets/space-icons/galaxy.png"),
      12: require("../../assets/space-icons/life-dome-planet-base.png"),
      13: require("../../assets/space-icons/light-speed-travel.png"),
      14: require("../../assets/space-icons/meteorite.png"),
      15: require("../../assets/space-icons/space-interceptor.png"),
      16: require("../../assets/space-icons/moon-rover.png"),
      17: require("../../assets/space-icons/moon.png"),
      18: require("../../assets/space-icons/old-satellite.png"),
      19: require("../../assets/space-icons/planetary-exploration.png"),
      20: require("../../assets/space-icons/rocket.png"),
      21: require("../../assets/space-icons/satellite-transmitter.png")

    }}
    how={40} /* Pass the number of images Sky will render chosing randomly */
    time={40} /* time of animation */
    size={'100px'} /* size of the rendered images */
    background={'#f5f5f5'} /* color of background */
  />
)

export default Background;