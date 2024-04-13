const likeVoclioSong = async (
  songId,
  likerId = Math.floor(Math.random() * 1000000) + 1 // Random number between 1 and 1,000,000
) => {
  const baseUrl = `https://www.voclio.com/vocal-track`;
  const url = `${baseUrl}/${songId}`;

  try {
    const formDataPayload = new FormData();
    formDataPayload.append('songid', String(songId));
    formDataPayload.append('likerid', String(likerId));
    // const response = await axios.post(url, formDataPayload, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });

    const response = await fetch(url, {
      method: 'POST',
      body: formDataPayload,
    });

    // console.log('status', response.status);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const spamLikes = async (songId, numberOfLikes) => {
  for (let i = 0; i < numberOfLikes; i++) {
    console.log(`Liking song ${i + 1}`);
    await likeVoclioSong(songId);
  }

  console.log(`DONE, Liked ${numberOfLikes} times`);

  return 'Done';
};

// likeVoclioSong(13251, 187);
// spamLikes(13251, 1000); // this will like songId, N amount of times
