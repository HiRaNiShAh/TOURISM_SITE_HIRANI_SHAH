fetch('http://127.0.0.1:5000/api/destinations')
  .then(res => res.json())
  .then(data => {
    const section = document.getElementById('destinations');
    data.forEach(dest => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${dest.image}" />
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
      `;
      section.appendChild(card);
    });
  });
