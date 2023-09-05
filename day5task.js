//JSON representation of a resume
{
    personalInfo:[
         {
      name: "Shreedhana Kathiravan",
      email: "shreedhanakathiravan@gmail.com",
      phone: "+91 6379240320",
      address: "West tambaram, Chennai"
    }];
    education: [
      {
        degree: "M. Tech Nanotechnology",
        school: "Periyar Maniammai Instiutute of Science and Technology",
        year: "2015-2021"
      },
      
    ];
    experience: [
      {
        title: "Business development executive",
        company: "Vimanna labs",
        year: "july 2022 - march 2023",
        description: "handling business"
      },
      {
        language: "tamil, english",
        skills: "time management, good communication, leadership skills",
        software: "full stack development"
      }
    ];
    
}


//iteration over the JSON data using the for in loop
const resumeData = {
   
  personalInfo:[
    {
 name: "Shreedhana Kathiravan",
 email: "shreedhanakathiravan@gmail.com",
 phone: "+91 6379240320",
 address: "West tambaram, Chennai"
}],
education: [
 {
   degree: "M. Tech Nanotechnology",
   school: "Periyar Maniammai Instiutute of Science and Technology",
   year: "2015-2021"
 },
 
],
experience: [
 {
   title: "Business development executive",
   company: "Vimanna labs",
   year: "july 2022 - march 2023",
   description: "handling business"
 },
 {
   language: "tamil, english",
   skills: "time management, good communication, leadership skills",
   software: "full stack development"
 }
],

};

  for (const section in resumeData) {
    console.log(section);
    if (Array.isArray(resumeData[section])) {
      for (const item of resumeData[section]) {
        console.log(item);
      }
    } else {
      console.log(resumeData[section]);
    }
  }
  
  //using for of loop
  const resume = {
    personalInfo:[
      {
   name: "Shreedhana Kathiravan",
   email: "shreedhanakathiravan@gmail.com",
   phone: "+91 6379240320",
   address: "West tambaram, Chennai"
 }],
 education: [
   {
     degree: "M. Tech Nanotechnology",
     school: "Periyar Maniammai Instiutute of Science and Technology",
     year: "2015-2021"
   },
   
 ],
 experience: [
   {
     title: "Business development executive",
     company: "Vimanna labs",
     year: "july 2022 - march 2023",
     description: "handling business"
   },
   {
     language: "tamil, english",
     skills: "time management, good communication, leadership skills",
     software: "full stack development"
   }
 ],
    
  };
  
  for (const section of Object.keys(resumeData)) {
    console.log(section);
    if (Array.isArray(resumeData[section])) {
      for (const item of resumeData[section]) {
        console.log(item);
      }
    } else {
      console.log(resumeData[section]);
    }
  }
  
//using for each loop
const resume1 = {
  personalInfo:[
    {
 name: "Shreedhana Kathiravan",
 email: "shreedhanakathiravan@gmail.com",
 phone: "+91 6379240320",
 address: "West tambaram, Chennai"
}],
education: [
 {
   degree: "M. Tech Nanotechnology",
   school: "Periyar Maniammai Instiutute of Science and Technology",
   year: "2015-2021"
 },
 
],
experience: [
 {
   title: "Business development executive",
   company: "Vimanna labs",
   year: "july 2022 - march 2023",
   description: "handling business"
 },
 {
   language: "tamil, english",
   skills: "time management, good communication, leadership skills",
   software: "full stack development"
 }
],
};

Object.keys(resumeData).forEach((section) => {
  console.log(section);
  if (Array.isArray(resumeData[section])) {
    resumeData[section].forEach((item) => {
      console.log(item);
    });
  } else {
    console.log(resumeData[section]);
  }
});
