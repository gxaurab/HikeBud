import { TypeAnimation } from 'react-type-animation';

const Typer = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Breathe. Hike. Repeat.",
        2000,
        "Pack light. Live heavy",
         // wait 1s before replacing "Mice" with "Hamsters"
        2000,
        'Mountains meet memories',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Typer