const mongoose = require('mongoose')
const { Schema } = mongoose

const BeachSchema = new Schema({
  name: { type: String, required: true },
  images: { 
    main: { type: String, default: 'firebaseLinkDefaultImage', required: true },
    more: { type: [String] },
  },
  description: {
    long: { type: String, required: true },
    short: { type: String, required: true },
  },
  geo: { 
    lat: { type: Number, required: true, min: -90, max: 90 },
    lon: { type: Number, required: true, max: 180, min: -180 },
  },
  province: { type: String, enum: ['Catalunya', 'Baleares'], required: true },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})

const Beach = mongoose.model('Beach', BeachSchema)

module.exports = Beach
