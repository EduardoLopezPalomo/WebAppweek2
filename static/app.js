document.getElementById('submit-data').addEventListener('click', async () => {
    const inputText = document.getElementById('input-text').value;
    const response = await fetch('/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputText }),
    });
  
    const result = await response.json();
    console.log('Server response:', result);
  });
  