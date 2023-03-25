import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const getPosts = async (req, res) => {
    try {
        const data = await prisma.post.findMany({
            select: {
                id: true,
                title: true
            }
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export {getPosts}