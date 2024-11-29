import { useEffect, useMemo, useState } from 'react';
import Welcome from './components/Welcome';
import User from './components/User';
import { profileData } from './common/index';
import Container from './components/Container';

function App() {
  const [profile, setUserProfile] = useState({});
  const [terms, setTerms] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setUserProfile(profileData);
    }, 300);
    // clean up
    return () => clearTimeout(timerId);
  }, []);

  const handelInputChange = (e) => setTerms(e.target.value);

  return (
    <>
      <Welcome />
      {/* props destructuring  */}
      <User {...profile} name='' />
      <Container>
        <div className='form-group'>
          <input
            type='text'
            value={terms}
            placeholder='Search Terms'
            onChange={handelInputChange}
          />
        </div>
      </Container>
    </>
  );
}

export default App;
