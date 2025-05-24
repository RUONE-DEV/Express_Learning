let student = [
  { id: 1, name: 'Ruwan', age: 22 },
  { id: 2, name: 'Dinusha', quantity: 22 },
];

exports.getAllStudents =  (req ,res) =>{
    res.json(student);
}