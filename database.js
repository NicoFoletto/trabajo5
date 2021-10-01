const { connect } = require('mongoose');


//conexion a BD
connect(process.env.URI)
    .then(() => console.log('BD is connected'))
    .catch(err => console.error(err));