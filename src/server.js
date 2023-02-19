const app = require('./app');

// const teams = [
//   {
//     id: 1,
//     name: 'São Paulo Futebol Clube',
//     initials: 'SPF',
//   },
//   {
//     id: 2,
//     name: 'Clube Atlético Mineiro',
//     initials: 'CAM',
//   },
// ];

app.listen(3001, () => console.log('server running on port 3001'));
app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));