// importare express
const express = require('express');

// importo il router 
const router = express.Router();

// importo il controller 
const postsController = require("../controllers/post_controller")

// creo le rotte

router.get('/', postsController.index);

//show 
router.get('/:id', postsController.show);

// // store 
// router.post('/', postsController.store);

// // update 
// router.put('/:id', postsController.update);

// // modify 
// router.patch('/:id', postsController.modify);

// // destroy 
// router.delete('/:id', postsController.destroy);

// esportazione router
module.exports = router;