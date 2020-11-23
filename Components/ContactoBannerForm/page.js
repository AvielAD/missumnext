import ImageContact from './assets/DSC062851.png';
import { withFormik, Field} from 'formik';
import ButtonGhost from '../ADMoleculas/ButtonAD';
import useSWR from 'swr';

//const fetcher = url => fetch(url).then((res) => res.json());

const Page = ({handleSubmit}) => {

    /*function handleClick(){

        const {data, error} = useSWR('/api/email', fetcher);

    }*/

    return (
        <>
            <div className="row">
                <img className="col-md-8" src={ImageContact} alt="imagen contacto" />
                <div className="col-md-4">
                    <div className="">
                        <p className="h1 mt-5 mb-4">Busca el lugar perfecto para hospedarte o arrendar</p>
                        <p className="">Viajas de manera individual o grupal o buscas rentar.</p>
                        <form onSubmit={handleSubmit}>
                            <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" name="Name" placeholder="Nombre" />
                            <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" name="Email" type="email" placeholder="Correo" />
                            <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" name="Telefono" placeholder="Telefono" />
                            <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" name="Mensaje" placeholder="Mensaje" />
                            
                            <div className="d-flex justify-content-end mt-5">
                                <ButtonGhost Type="submit" Message="Enviar" Evento={handleSubmit}></ButtonGhost>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withFormik({
    mapPropsToValues(propr){
        return{
            Name: '',
            Email: '',
            Telefono: '',
            Mensaje: ''
        }
    },
    handleSubmit(values){
        console.log(values)
    }
})(Page);

