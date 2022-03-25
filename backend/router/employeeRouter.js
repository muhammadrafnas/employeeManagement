const express = require("express")
const router = express.Router()
const { cloudinary } = require('../utils/cloudinary')
const employeeControler = require("../controler/employeeControler")


router.post("/addEmployee", async (req, res) => {
    console.log("api called.......");
    console.log(req.body);
    let values = req.body.empDetails
    try {
        let fileStr = values.imageOne;
        const uploadedResponse = await cloudinary.uploader.
            upload(fileStr)
        console.log(uploadedResponse);
        values.imageOne = uploadedResponse.secure_url
    }
    catch (error) {
        console.error(error);
    }
    let response = await employeeControler.addEmployee(values)
    res.json(response)
})

router.get("/getEmployee", async (req, res) => {
    console.log("api called....");
    let employeeData = await employeeControler.getEmployee()
    console.log(employeeData);
    if (employeeData.status) {
        res.status(200).json(employeeData.empData)
    }
    else {
        res.status(404).send({
            message: "No employees"
        })
    }
})
router.get("/getEditData/:id",(req,res)=>{
    console.log("api edit called.....");
     console.log(req.params.id);
})




















module.exports = router;