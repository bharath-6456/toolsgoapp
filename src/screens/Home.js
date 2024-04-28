import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import RegistrationForm from "./RegistrationForm";
import { Link } from "react-router-dom";
import axios from "axios";
import ChatApp from "../ChatApp";
import VoiceRecognition from "../components/VoiceRecognition";
import {useForm} from 'react-hook-form'

export default function Home() {
  const [toolsList, setToolsList] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showChatApp, setShowChatApp] = useState(false);
  const [showVoiceRecognition, setShowVoiceRecognition] = useState(false);

  useEffect(() => {
    async function getTools() {
      try {
        const response = await axios.get("http://localhost:5001/gettools");
        setToolsList(response.data.payload);
      } catch (error) {
        console.error("Error fetching tools:", error);
      }
    }
    getTools();
  }, []);

  let {register,handleSubmit} = useForm()
  // async function handleFilter(Obj) {
  //   try {
  //     const res = await axios.get("http://localhost:5001/filter",Obj)
  //     console.log(res)
  //     setToolsList(res.data.payload)
  //   } catch(err) {
  //     console.error("Error filtering ",err)
  //   }
  // }

  const toggleSpeechSynthesis = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
    } else {
      const toolNames = toolsList.map((tool) => tool.Toolname).join(", ");
      textToSpeech(toolNames);
    }
    setIsSpeaking(!isSpeaking);
  };

  const textToSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleImageClick = () => {
    setShowChatApp(!showChatApp);
  };

  const handleVoiceRecognitionClick = () => {
    setShowVoiceRecognition(!showVoiceRecognition);
  };

  return (
    <div>
      <div className="sticky-top">
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="container" >
        <select className="m-2 p-1" {...register('location')}>
          <option default>Select a city</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Mumbai</option>
        </select>
        <input type="number" placeholder="Enter maximum price" {...register('price')}/>
        <button type="submit" className=" m-2 px-2 py-1 btn btn-secondary"  >Filter</button>
      </div>
      <div className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 mt-xl-4 m-2">
        {toolsList.map((tool, index) => (
          <Card key={index} {...tool} />
        ))}
      </div>
      <button onClick={toggleSpeechSynthesis} className="btn-primary btn" style={{"marginLeft": "700px"}}>
        {isSpeaking ? "Stop Speaking" : "Start Speaking"}
      </button>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small_2x/robot-chat-bot-concept-illustration-vector.jpg"
          alt="Chat Bot"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            height: "50px",
            width: "50px",
            zIndex: "9999",
          }}
          onClick={handleImageClick}
        />
      </div>
      {/* Render ChatApp based on showChatApp state */}
      {showChatApp && <ChatApp />}
      
      {/* Render VoiceRecognition based on showVoiceRecognition state */}
      {showVoiceRecognition && <VoiceRecognition />}
      
      {/* Button to toggle voice recognition */}
      <button onClick={handleVoiceRecognitionClick} className="btn-secondary btn" style={{"marginLeft": "700px"}}>
        {showVoiceRecognition ? "Hide Voice Recognition" : "Show Voice Recognition"}
      </button>
      <Footer />
    </div>
  );
}

