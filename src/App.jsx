import { useEffect, useMemo, useState } from 'react';
import Welcome from './components/Welcome';
import User from './components/User';
import { profileData, uid } from './common/index';
import Container from './components/Container';
import { useDebounce } from './hooks/useDebounce';
import Button from './components/Button';

function App() {
  const [profile, setUserProfile] = useState({});
  const [terms, setTerms] = useState('');

  const debouncedTerm = useDebounce(terms, 1000);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setUserProfile(profileData);
    }, 300);
    // clean up
    return () => clearTimeout(timerId);
  }, []);

  const handelInputChange = (e) => setTerms(e.target.value);
  const createRecord = () => console.log('generate uuid - ', uid());
  const deleteProfile = (profileId) => {
    console.log('to be receive from child-comp -', profileId);
  };

  return (
    <>
      <Welcome sendProfileId={deleteProfile} />
      {/* props destructuring  */}
      <User {...profile} />
      <Container>
        <div className='form-group'>
          <input
            type='text'
            value={terms}
            placeholder='Search Terms'
            onChange={handelInputChange}
          />
          <br />
          <span>{debouncedTerm}</span>
        </div>
        <div className='form-group'>
          <Button label='Create record' handelClick={createRecord} />
          <br />
        </div>
      </Container>
    </>
  );
}

export default App;
