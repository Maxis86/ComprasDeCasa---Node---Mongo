

const {Schema, model} = require('mongoose')

const ProductoSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    estado:{
        type: Boolean,
        default: true,
        required: true
    },
    precio: {
        type:Number,
        default: 0
    },
    cantidad: {
        type:Number,
        default: 0
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    tachar: {
        type: Boolean,
        default: true,
    },


});

ProductoSchema.methods.toJSON = function () {
    const {__v, estado, ...data} = this.toObject();
    
    return data;
}   

module.exports = model('Producto', ProductoSchema);