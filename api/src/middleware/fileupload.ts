import multer, { FileFilterCallback } from 'multer'
import path from 'path'
import { Request } from 'express'
type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void
const storage = multer.diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File,
        cb: DestinationCallback
    ) => {
        cb(null, 'src/images')
    },
    filename: (
        req: Request,
        file: Express.Multer.File,
        cb: FileNameCallback
    ) => {
        cb(null, Date.now() + path.extname(file.originalname))
    },
})

export const upload = multer({
    storage: storage,
    fileFilter: (
        req: Request,
        file: Express.Multer.File,
        cb: FileFilterCallback
    ) => {
        const fileTypes = /jpeg|jpg|png|gig/
        const mimiType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))
        if (mimiType && extname) {
            return cb(null, true)
        } else {
            return cb(new Error('Provide right file type'))
        }
    },
}).single('image') //image is column name of model
