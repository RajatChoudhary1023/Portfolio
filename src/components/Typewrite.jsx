import { Typewriter } from 'react-simple-typewriter';

const Typewrite = () => {
  return (
    <>
<h1 style={{ color: 'white' }}>
      A{' '}
      <span style={{ color: '#39FF14' }}>
        <Typewriter
          words={['Web Developer', 'UI/UX Designer', 'Python Developer']}
          loop
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1000}
          cursor={true}
          cursorColor="white"
          cursorBlinking={true}
        />
      </span>
    </h1>
    </>
  );
};

export default Typewrite;
