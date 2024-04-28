import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

function Pricelist() {
  const [isSpeaking, setIsSpeaking] = useState(false); // State to track whether speech synthesis is active

  // Function to convert text to speech
  const textToSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  // Function to convert table content to speech
  const convertTableToSpeech = () => {
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach((row, index) => {
      const rowData = row.innerText;
      textToSpeech(`Row number ${index + 1}: ${rowData}`);
    });
  };

  // Function to toggle speech synthesis
  const toggleSpeechSynthesis = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel(); // Stop speech synthesis
    } else {
      convertTableToSpeech(); // Start speech synthesis
    }
    setIsSpeaking(!isSpeaking); // Toggle isSpeaking state
  };

  return (
    <div>
      <Table striped bordered hover variant="light green" style={{ backgroundColor: '#d4edda' }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Tool Name</th>
            <th>Min Price/hr</th>
            <th>Max Price/hr</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Tractor</td>
            <td>1200</td>
            <td>1400</td>
          </tr>
          <tr>
            <td>2</td>
            <td>harvester</td>
            <td>1500</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Tractor</td>
            <td>1500</td>
            <td>2800</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hay collection</td>
            <td>1200</td>
            <td>1800</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Cultivator</td>
            <td>1100</td>
            <td>2200</td>
          </tr>
        </tbody>
      </Table>
      <button onClick={toggleSpeechSynthesis}>{isSpeaking ? 'Stop Speaking' : 'Start Speaking'}</button>
    </div>
  );
}

export default Pricelist;