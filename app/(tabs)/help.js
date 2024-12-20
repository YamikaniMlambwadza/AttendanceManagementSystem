import { Text, View } from 'react-native';
import React from 'react';

export default function Help() {
  return (
    <View className="items-center h-full pt-10 bg-white">
      <Text className="text-black text-lg font-bold mb-6">
        help and support
      </Text>
      <View className="px-6">
        
        <Text className="text-black text-base mb-4 text-left">
          1. Register student
        </Text>

        <Text className="text-black text-base mb-4 text-left ml-8">
          1. Go to attendance marking
        </Text>
        <Text className="text-black text-base mb-4 text-left ml-8">
          2. Press register student button below the course name, and it gives two options:
        </Text>
        <Text className="text-black text-base mb-4 text-left ml-12">
          a. Attended
        </Text>
        <Text className="text-black text-base mb-4 text-left ml-12">
          b. Submitted
        </Text>

        <Text className="text-black text-base mb-4 text-left ml-8">
          3. To mark attended
        </Text>
        <Text className="text-black text-base mb-4 text-left ml-12">
          i. Press attended
        </Text>
        <Text className="text-black text-base mb-4 text-left ml-12">
          ii. Scan student id
        </Text>
        <Text className="text-black text-base mb-4 text-left ml-12">
          iii. Press ok to confirm
        </Text>
        <Text className="text-black text-base mb-4 text-left ml-8">
          4. To mark submitted
        </Text>
        
        <Text className="text-black text-base mb-4 text-left ml-12">
          i. press submitted
        </Text>
        <Text className="tex-black text-base mb-4 text-left ml-12">
          ii. scan student id
        </Text>
        <Text className="text-black text-base mb-4 text-left ml-12">
          iii. press ok to confirm 
        </Text>

          

        
        <Text className="text-black text-base mb-4 text-left">
          2. Check records
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-12">
          1. Go to records
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-12">
          2. press attended, it will show the records of students who attended
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-12">
          3. press submitted, it will show the records of student who submitted
        </Text>
        <Text classNme="text-black text-base mb-4 text-left">
          3. Frequently Asked Questions (FAQs)
        </Text>
        <Text classnam="text-black text-base mb-4 text-left ml-8">
          General Usage
        </text>
        <Text classname="text-black text-base mb-4 text-left ml-12">
         i.How can i scan student id to mark attendance 
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-12">
          ii. How can i scan student id to mark submission
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-12">
          iii. can i scan multiple student id silmutaneously or does it need to be one at a time
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-8">
          Technical issues
        </Text>
        <Text classsname="text-black text-base mb-4 text-left ml-12"> 
         i. What happen if accidentally scan the student id twice
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-12">
          ii.What should be done if the student id cannot be scanned
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-8">
          Report and verification
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-12">
          i.How can i generate a report of student who attended or submitted the exam paper
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-12">
          ii. How do i confirm the total number of submission matches the attendance
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-8">
          Security and policies
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-12">
          i. What if an unauthorised id is scanned? what can happen
        </Text>
        <Text classname="text-black text-base mb-4 text-left ml-12">
          ii. can i track who scanned the student id if multiple invigilators are using the system 
        </Text>
      </View>
    </View>
  );
}




}




