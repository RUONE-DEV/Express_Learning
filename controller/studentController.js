let items = [
  { id: 1, name: 'Apple', quantity: 10 },
  { id: 2, name: 'Banana', quantity: 5 },
];

exports.getAllStudents =  (req ,res) =>{
    res.json(items);
}