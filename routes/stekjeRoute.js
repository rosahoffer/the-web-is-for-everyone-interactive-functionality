import * as dotenv from 'dotenv'

import express from 'express'
import { fetchJson} from '../helpers/fetchWrapper.js'

dotenv.config()

const stekje = express.Router()

// Route voor stekje id 
  stekje.get('/:id', async function (req, res) {
    const url = process.env.API_URL
    let id = req.params.id
    let stekjeUrl = url +'/stekjes?id='+ id
    fetchJson(stekjeUrl).then((data) => {
      res.render('stekje', data)
    })
  })

export default stekje


