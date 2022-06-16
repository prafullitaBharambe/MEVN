const express = require('express')

const router = express.Router()

const controller = require('../controllers/banking.controller')


router.post('/banking/addCustomer', controller.create)
router.get('/banking/getAllcustomers',controller.getAll)
router.get('/banking/getCustomerById/:id',controller.getById)
router.post('/banking/getbyEmail',controller.getByEmail)
router.put('/banking/updateCustomer/:id',controller.updateById)
router.delete('/banking/deleteAll',controller.deleteAll)
router.delete('/banking/deletebyId/:id',controller.deleteById)


module.exports = router