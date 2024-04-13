const updatePlays = async (artistId, songId) => {
  const url = `https://www.voclio.com/assets/handlers/updatePlays.php`;

  const formData1 = new FormData();
  formData1.append('artistId', String(artistId));

  const formData2 = new FormData();
  formData2.append('songId', String(songId));

  const response1 = await fetch(url, {
    method: 'POST',
    body: formData1,
  });

  // console.log('status1', response1.status);

  const response2 = await fetch(url, {
    method: 'POST',
    body: formData2,
  });

  // console.log('status2', response2.status);

  return response1.status === 200 && response2.status === 200;
};

const spamUpdatePlays = async (artistId, songId, times) => {
  for (let i = 0; i < times; i++) {
    console.log(`Updating plays ${i + 1}/${times}`);
    await updatePlays(artistId, songId);
  }
};

// spamUpdatePlays(187, 13251, 1000); // this will update the plays of the song for artistId, songId, N amount of times
