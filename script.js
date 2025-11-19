async function findDog() {
  const dogIDInput = document.getElementById('dogId');
  const dogInfoContainer = document.getElementById('dogInfo');

  const dogID = dogIDInput.value;

  if (!dogID) {
    dogInfoContainer.innerHTML = 'There is no dog.';
  } else {
    try {
      const response = await fetch(`https://dog-vidi.vercel.app/dogs/${dogID}`);
      if (!response.ok) {
        dogInfoContainer.innerHTML = `Dog Not Found`;
      } else {
        const data = await response.json();
        dogInfoContainer.innerHTML = `${data.name}: ${data.breed} - ${data.age}`;
        if (data.age < 3) {
          dogInfoContainer.style.color = 'green';
        } else {
          dogInfoContainer.style.color = 'blue';
        }
      }
    } catch (error) {
      dogInfoContainer.innerHTML = `Dog Not Found`;
    }
  }
}