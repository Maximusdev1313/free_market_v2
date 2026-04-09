import prisma from "../../database/prisma.js"

export async function createCompany(data, ownerId) {

    return prisma.company.create({
        data: {
            name: data.name,
            location: data.location,
            address: data.address,
            isApproved: data.isApproved,
            ownerId
        }
    })

}

export async function getCompanies() {

    return prisma.company.findMany({
        include: {
            owner: true,
            members: true
        }
    })

}