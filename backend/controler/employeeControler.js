
const employee = require("../model/employeeModel")
module.exports = {
    addEmployee: (empData) => {
        return new Promise(async (resolve, reject) => {
            let data = await employee.create({
                desigination: empData.desigination, contact: empData.contact, email: empData.email, name: empData.name, image: empData.imageOne, gender: empData.gender, course: empData.course
            })
            resolve(data)
        })
    },
    getEmployee: () => {
        return new Promise(async (resolve, reject) => {
            let data = await employee.find({})
            if (data) {
                resolve({ status: true, empData: data })
            }
            else {
                resolve({ status: false })
            }
        })
    }
}