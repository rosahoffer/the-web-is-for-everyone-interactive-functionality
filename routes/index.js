import * as dotenv from 'dotenv'

import express from 'express'
import { fetchJson, postJson } from '../helpers/fetchWrapper.js'

dotenv.config()

const index = express.Router()

// Stel afhandeling van formulieren in
index.use(express.json())
index.use(express.urlencoded({ extended: true }))

// Route voor de index
index.get('/', async function (req, res) {
  const url = process.env.API_URL + '/stekjes?first=3'
  fetchJson(url).then((data) => {
    res.render('index', data)
  })
})

// Route voor index 2
index.get('/index2', async function (req, res) {
  const url = process.env.API_URL + '/stekjes'
  fetchJson(url).then((data) => {
    res.render('index2', data)
  })
})

// Route voor stekje aanmelden form
index.get('/newStekje', async function (req, res) {
  const url = process.env.API_URL
  fetchJson(url).then((data) => {
    res.render('aanmelden', data)
  })
})

// Route voor stekje posten
index.post('/newStekje', async function (req, res) {
  const url = process.env.API_URL + '/stekjes'

  console.log(req.body)

  postJson(url, req.body).then((data) => {
    let newStekje = { ...req.body }

    if (data.success) {
      res.redirect('/')
    } else {
      console.log('Er gaat wat mis')
    }
  })
})

export default index


