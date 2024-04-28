import React from 'react';
import ChatBot from "react-simple-chatbot";
import {Segment} from "semantic-ui-react";

function ChatApp() {
    const steps = [
        {
            id: 'Greet',
            message: 'Hello Ask your query',
            trigger: 'Ask Name',
        },
        {
            id: 'Ask Name',
            message: 'Enter Name',
            trigger: 'waiting'
        },
        {
            id: 'waiting',
            user: true,
            trigger: 'Name',
        },
        {
            id: 'Name',
            message: 'Hey {previousValue}, Select issue',
            trigger: 'issues'
        },
        {
            id: 'issues',
            options:[
                { value: "Pesticides", label: "Pesticides", trigger:"Pesticides"},
                { value: "Resources", label: "Resources", trigger:"Resources"},
                { value: "Soil Conditions", label: "Soil Conditions", trigger:"Soil Conditions"},
            ],
        },
        {
            id: 'Pesticides',
            message: 'In Hyderabad, pesticides are widely used in agriculture to control pests and boost crop yields. However, their excessive and indiscriminate use poses risks to public health and the environment. Exposure to pesticides can lead to various health issues, including respiratory problems and neurological disorders. Efforts are underway to promote sustainable alternatives like integrated pest management and organic farming to mitigate these risks and ensure safer agricultural practices in the region.',
            end:true
        },
        {
            id: 'Resources',
            message: 'In Hyderabad, agriculture equipment plays a crucial role in enhancing productivity and efficiency on farms. Farmers utilize a variety of equipment such as tractors, harvesters, plows, seeders, and irrigation systems to prepare soil, plant seeds, manage crops, and harvest produce. These modern agricultural technologies help farmers optimize their operations, reduce labor requirements, and achieve higher yields. Additionally, advancements in equipment design and technology adoption contribute to sustainable farming practices and contribute to the overall growth of the agricultural sector in Hyderabad.',
            end:true
        },
        {
            id: 'Soil Conditions',
            message: 'In Narsapur, Hyderabad, the soil conditions are generally conducive to farming, with a predominant soil type being red sandy loam. This type of soil offers good drainage and aeration, which is beneficial for crop cultivation. Additionally, the region experiences a semi-arid climate with hot summers and moderate winters, making it suitable for a variety of crops such as rice, maize, cotton, vegetables, and fruits. However, water availability and irrigation management are crucial due to occasional drought conditions in the area. Overall, Narsapur provides favorable soil conditions for agricultural activities with proper water management practices.',
            end:true
        }
    ];
  return (
    <div>
        <Segment floated = "right">
            <ChatBot steps = {steps}/>
        </Segment>
      
    </div>
  );
}

export default ChatApp