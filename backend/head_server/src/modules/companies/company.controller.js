import * as service from "./company.service.js"

export async function createCompany(req, res, next) {

    try {

        const company = await service.createCompany(
            req.body,
            req.user.id
        )

        res.status(201).json(company)

    } catch (err) {
        next(err)
    }

}

export async function getCompanyByUser(req, res, next) {
    try {
        // console.log(req.body);
        if (req.body) {
            const company = await service.getCompanyByUser(req.body)
         res.json(company); 
        }
        else{
            res.json('No companies')
        }
        
    } catch (error) {
        next(error)
    }
}
export async function listCompanies(req, res, next) {

    try {

        const companies = await service.getCompanies()

        res.json(companies)

    } catch (err) {
        next(err)
    }

}