import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MultiAccordion from 'react-native-multi-flow-accordion';

const DATA = [
    {
      question: 'Personal Information',
      answer:
        'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is widely used for building interactive and dynamic websites.',
      children: [
        {
          question: 'What are the key features of React?',
          answer:
            'React is a JavaScript library for building user interfaces. Its key features include virtual DOM, component-based architecture, JSX syntax for defining components, and uni-directional data flow.',
        },
        {
          question: 'What is the purpose of CSS?',
          answer:
            'CSS (Cascading Style Sheets) is used to style the layout and appearance of HTML elements on web pages. It enables developers to control aspects such as colors, fonts, spacing, and positioning.',
        },
      ],
    },
    {
      question: 'Notifications',
      answer:
        'Git allows multiple developers to collaborate on projects efficiently by tracking changes to files, facilitating branching and merging, and providing a distributed architecture. It also offers features like version history and easy rollback.',
      children: [
        {
          question: 'Explain the concept of responsive web design.',
          answer:
            'Responsive web design is an approach to designing websites that ensures optimal viewing and interaction across various devices and screen sizes. It involves using flexible layouts, media queries, and fluid grids.',
          children: [
            {
              question: 'What is the difference between HTML and HTML5?',
              answer:
                'HTML5 is the latest version of HTML (Hypertext Markup Language), which introduces new elements, attributes, and APIs for building modern web applications. It also supports multimedia and offline capabilities.',
            },
          ],
        },
      ],
    },
    {
        question: "Login & Security"
    },
    {
        question: "Accessibility"
    },
    {
        question: "Personal Information"
    },
    {
        question: "Give Us Feedback"
    },
  ];

export default function Profile()
{
    return (
        <ScrollView style={{margin: 20, fontSize: wp("20%")}}>
            <View style={{display:"flex", flexDirection:"row", gap: wp("60%")}}>
                <Text style={{fontSize: wp("6%")}}>Profile</Text>
                <Image style = 
                {{
                    width: wp("9%"),
                    height: wp("9%"),
                    borderRadius: 100,
                }}
                source={require("../assets/haylee.jpg")}/>

            </View>
            <View style={{marginTop:wp("10%"), paddingBottom:wp("2%"),display:"flex", flexDirection:"row", alignItems:"center", gap:wp("2%"), borderBottomWidth:0.5,borderBottomColor:"#999999"}}>
            <Image style = 
                {{
                    width: wp("12%"),
                    height: wp("12%"),
                    borderRadius: 100,
                }}
                source={require("../assets/haylee.jpg")}
                />
                <View style={{display:"flex", flexDirection:"column"}}>
                    <Text style={{fontSize:wp("4%")}}>Haylee Thao</Text>
                    <Text style={{fontWeight:"100", fontSize:wp("3%")}}>Show Profile</Text>
                </View>
            </View>
            <View style={{paddingTop:wp("20%")}}>
            <Text style={{fontSize:wp("5%")}}>Settings</Text>
            <MultiAccordion
            contentContainerStyle = {{fontSize: wp("5%")}}
            actionBoxContainerStyle={{fontSize:wp("5%")}}
            questionTextStyle={{fontSize:wp("5%"),}} 
            style={{paddingTop:wp("10%"), margin:-20,}} 
            data={DATA} 
            onPress={(item, index) => {
        console.log('data-->>', item, index)
      }}/>

            </View>
        </ScrollView>
    )
}