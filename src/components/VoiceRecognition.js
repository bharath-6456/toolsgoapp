import React, { useEffect, useState } from 'react';
import speech, { useSpeechRecognition } from 'react-speech-recognition';
import "regenerator-runtime"

const VoiceRecognition = () => {
  const { listening, transcript } = useSpeechRecognition()
  const [thinking, setThinking] = useState(false)
  const [aiText, setAiText] = useState('')

  async function CallGpt3API(message) {
    setThinking(true)
    const data = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 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"
      },
      body: JSON.stringify({
        messages: [{
          role: "user",
          content: message
        }],
        model: "gpt-3.5-turbo"
      })
    }).then((res) => res.json())
    setThinking(false)

    return data.choices[0].message.content
  }

  useEffect(() => {
    if (!listening && transcript) {
      CallGpt3API(transcript).then((res) => {
        const speechSynthesis = window.speechSynthesis
        const utterance = new SpeechSynthesisUtterance(res)
        speechSynthesis.speak(utterance)
        setAiText(res)
      })
    }
  }, [transcript, listening])

  return (
    <div>
      {listening ? <p>Go Ahead, I'm listening</p> : <p>Click to ask</p>}
      <button className='btn btn-primary' onClick={() => { speech.startListening() }}>Ask me anything</button>
      {transcript && <div>{transcript}</div>}
      {console.log(transcript)}
      {thinking && <div>Thinking...</div>}
      {aiText && <div>{aiText}</div>}
    </div>
  );
};

export default VoiceRecognition;