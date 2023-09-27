import React from "react";
import { useForm } from "react-hook-form";

const NewProductApp = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();

    const newProduct = (data) => {

        console.log("enviaste el formulario")
        console.log(data)
    }

  return (
    <form noValidate onSubmit={handleSubmit(newProduct)} className="bg-light text-dark p-3 rounded w-100">
      <h1 className="text-center">Nuevo producto</h1>
      <section className="row">
        <fieldset className="col-12 col-md-6 mb-2">
          <label htmlFor="nameProduct-input" className="form-label">
            Nombre del producto
          </label>
          <input
            type="text"
            id="nameProduct-input"
            className="form-control"
            {...register("nombre", {
                required: "Este campo es requerido",
                minLength: {
                    value: 3,
                    message: "Este campo tiene un mínimo de 3 caracteres"
                },
                maxLength: {
                    value: 15,
                    message: "Este campo tiene un máximo de 15 caracteres"
                }
            })}
            required
            minLength={3}
            maxLength={20}
          />
          <p className="text-danger">{errors.nombre?.message}</p>
        </fieldset>
        <fieldset className="col-12 col-md-6 mb-2">
          <label htmlFor="Price-input" className="form-label">
            Precio
          </label>
          <input
            type="number"
            id="Price-input"
            className="form-control"
            {...register("precio", {
                required: "Este campo es requerido",
                min: {
                    value: 1,
                    message: "el precio mínimo es de $1"
                },
                max: {
                    value: 2000,
                    message: "el precio máximo es de $2000"
                }
            })}
            required
            min={1}
            max={10000}
          />
          <p className="text-danger">{errors.precio?.message}</p>
        </fieldset>
        <fieldset className="col-12 col-md-6 mb-2">
          <label htmlFor="image-input" className="form-label">
            Imagen
          </label>
          <input
            type="text"
            id="image-input"
            className="form-control"
            {...register("imagen",{
                required: "Este campo es requerido",
                pattern:{
                    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "Tienes que ingresar una url válida"
                }
            }
            )}
            required
          />
          <p className="text-danger">{errors.imagen?.message}</p>
        </fieldset>
        <fieldset className="col-12 col-md-6 mb-2">
          <label htmlFor="category-input" className="form-label">
            Categoria
          </label>
          <select className="form-control" id="category-input"
          {...register("categoria",{
            required: "Este campo es requerido",
        }
        )}
          required>
            <option value="">Seleccione una categoria</option>
            <option value="Bebida caliente">Bebida caliente</option>
            <option value="Bebida fria">Bebida fria</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </select>
          <p className="text-danger">{errors.categoria?.message}</p>
        </fieldset>
        <fieldset className="col-12 mb-2">
          <label htmlFor="description-input" className="form-label">
            Descripción
          </label>
          <textarea
            type="text"
            id="description-input"
            className="form-control"
            {...register("descripcion", {
                required: "Este campo es requerido",
                minLength: {
                    value: 15,
                    message: "Este campo tiene un mínimo de 15 caracteres"
                },
                maxLength: {
                    value: 300,
                    message: "Este campo tiene un máximo de 300 caracteres"
                }
            })}
            required
            minLength={15}
            maxLength={300}
          />
          <p className="text-danger">{errors.descripcion?.message}</p>
        </fieldset>
      </section>
      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default NewProductApp;
