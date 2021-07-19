import { Router } from 'express'
import controllers from './item.controllers'

const router = Router()

const dummyController = (req, res) => {
  res.send({ message: 'Hello - Item' })
}

// /api/item
router
  .route('/')
  .get(dummyController)
  .post(dummyController)

router
  .route('/:id')
  .get(dummyController)
  .put(dummyController)
  .delete(dummyController)

export default router
