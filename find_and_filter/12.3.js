const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
   };


   //1
   function findPerson(type, id){
       let obj={};
       if (type === "students")
       obj= school.students.find(person=> person.id===id);
       else obj= school.teachers.find(person=> person.id===id);
       return obj;
       
   }

   console.log(findPerson("students", 12));

   //2

   function assignStudent(id, subject){
       let teacher ={};
       teacher = school.teachers.find(person=> 
         person.subjects.includes(subject) && person.capacityLeft > 0);
        if (teacher){
            teacher.students.push(findPerson("students", id));
            teacher.capacityLeft--;
            console.log(teacher);
        }
        else console.log("Sorry, no available teachers left");


   }

   assignStudent(12,"math");
   assignStudent(12,"history");
   assignStudent(13,"history");
   assignStudent(11,"history");


   

//    console.log(school);