import prisma from "../../database/prisma.js"

export async function addMember(companyId, userId, role) {

    return prisma.companyMember.create({
        data: {
            companyId,
            userId,
            role
        }
    })

}

export async function getMembers(companyId) {

    return prisma.companyMember.findMany({
        where: { companyId },
        include: { user: true }
    })

}