
import fetch from 'node-fetch';

async function testChat() {
  try {
    const response = await fetch('http://localhost:3061/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'test', sessionId: 'test-session' })
    });
    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

testChat();
