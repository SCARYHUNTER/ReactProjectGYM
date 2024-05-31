import React, { useEffect, useState } from 'react';// importing hooks from the REACT.
import { Box, Button, Stack, TextField, Typography } from '@mui/material'; // importing from material ui.

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState(''); // use state with inital state state empty.
  const [bodyParts, setBodyParts] = useState([]); // use  state with inital object .

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      // await will wait until this promise will not be fulfilled it will fetchData and when the data will fetched up then only it will run further.
      // waiting first main stack will be empty then side stack will perform .
      // javascipt  is synchronous and single thread //
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);// NO dependencies here so Use effect will only run while mounting it will not work on upgradation.

  const handleSearch = async () => { // async code
    if (search) { // now the search state which is smae as input feild
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      // await waits for the time until this fetch request gets completed its similar to the promise.
      // f etch will returns a promise.
      // This function returns a Promise that resolves to the response from the API.
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      // takes a callback function as an argument which is called once for each element in the array. The callback function should return a boolean value indicating whether the element should be included in the new array.In this case, the callback function is an arrow function that takes an item argument (which represents an element from the exercisesData array) and returns a boolean value.
      // The includes() method is then used to check whether the search string is included in the lowercase version of the name, target, equipment, or bodyPart properties. The includes() method returns a boolean value indicating whether the search string was found in the string it was called on.
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px', color: '#E46C10' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          // event handler which on change sets the targeted value to search value. now search has currrent state same as in input feild.
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
