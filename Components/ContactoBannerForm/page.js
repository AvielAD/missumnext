import ImageContact from './assets/contactImagen.png';
import { withFormik, Field} from 'formik';
import ButtonGhost from '../ADMoleculas/ButtonAD';
const Page = ({handleSubmit}) => {

    return (
        <>
            <div className="row">
                <img className="col-md-8" src={ImageContact} alt="imagen contacto" />
                <div className="col-md-4">
                    <div className="">
                        <p className="h1 mt-5 mb-4">Busca el lugar perfecto para hospedarte</p>
                        <p className="">Viajes por deportes, bodas o conferencias, lo que tú quieras. hacemos que las reservas en grupos sean más fáciles.</p>
                        <form onSubmit={handleSubmit}>
                            <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" name="Name" placeholder="Nombre" />
                            <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" name="Email" type="email" placeholder="Correo" />
                            <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" name="Telefono" placeholder="Telefono" />
                            <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" as="select" name="motivo" placeholder="Motivo de Contacto">
                                <option value="BussinesCenter">Informacion sobre el Bussines Center</option>
                                <option value="Catering">Informacion sobre el catering</option>
                                <option value="PuebloMagico">Informacion excursiones pueblos magicos</option>
                            </Field>
                            <div className="d-flex justify-content-end mt-5">
                                <ButtonGhost Type="submit" Message="Enviar"></ButtonGhost>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default withFormik({
    handleSubmit(values){
        console.log(values)
    }
})(Page);

