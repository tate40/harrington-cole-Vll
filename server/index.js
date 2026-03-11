const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Serve static files from dist/public
app.use(express.static(path.join(__dirname, '../dist/public')))

// Fallback: serve index.html for all routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/public', 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Harrington & Cole server running on port ${PORT}`)
})
