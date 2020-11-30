const mongoose = require('mongoose')
const { Schema } = mongoose

const VoteSchema = new Schema({
  beach: { type: Schema.Types.ObjectId, ref: 'Beach', required: true },
  originIp: { type: String, required: true },
  medusas: { type: String, enum: ['A', 'B', 'C'], required: true },
  bandera: { type: String, enum: ['A', 'B', 'C'], required: true },
  parking: { type: String, enum: ['A', 'B', 'C'], required: true }
}, { timestamps: { createdAt: 'created_at' }})

const Vote = mongoose.model('Vote', VoteSchema)

module.exports = Vote
