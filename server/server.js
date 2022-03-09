// **** External modules
const express = require("express");


//***** Internal Modules



//**** Instanced Modules
const app = express();


//****Configs

// @monorepo not working
const config = require('@monorepo/config');


//****middleware



//****routes & controllers





//****server listener
app.listen(config.PORT, () => {
    console.log(`monorepo! go little rockstar. *** live at http://localhost:${config.PORT}`)
})