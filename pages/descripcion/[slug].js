import api from '../../Services/api';
import Head from 'next/head';
import Link from 'next/link';
import ButtonGhost from '../../Components/ADMoleculas/ButtonAD';
import styles from './styles.module.css';
const departamento = ({ data }) => {

    const Imagenes = data.Imagenes.map((item, index) => {
        return (
            <div className="ImgSlugDepartaments p-1" key={index}>
                <img className="w-100 h-100" src={`${process.env.NEXT_PUBLIC_API_HOST}${item.url}`} alt="imagen destalles" />
            </div>
        )
    })
    return (
        <>
            <Head>
                <title>Missum - {data.Nombre}</title>
            </Head>

            <div className="container">
                <Link href="/resultados">back</Link>
            </div>

            <div className="container ">
                <div className="ImgSlugDepartaments d-flex flex-nowrap">
                    <div className="col-md-8">
                        <img className=" w-100 h-100" src={`${process.env.NEXT_PUBLIC_API_HOST}${data.Imagenes[0].url}`} />
                        <div className="overlayButton">
                            <ButtonGhost className="" Type="missumT2" Message="Ver Galeria" />
                        </div>
                    </div>

                    <div className="row col-md-4 d-flex d-xs-none">
                        <img className="w-100 h-50 p-1" src={`${process.env.NEXT_PUBLIC_API_HOST}${data.Imagenes[1].url}`} />
                        <img className="w-100 h-50 p-1" src={`${process.env.NEXT_PUBLIC_API_HOST}${data.Imagenes[2].url}`} />
                    </div>

                </div>
            </div>

            <div className="container d-flex flex-wrap mt-5 mb-5">
                <div className="col-md-9"> 
                    <div className="d-flex flex-wrap justify-content-between">
                        <p className="h2">Departamento tipo: {data.categoria_departamento.Nombre}</p>
                        <p className=" font-weight-bold">No. maximo de personas: {data.MaxPersonas}</p>
                    </div>
                    <p>Descripcion del departamento</p>
                    <div className="">
                        <p>
                            {data.Descripcion}
                        </p>
                    </div>
                </div>
                <div className="col-md-3 bg-missum-grey">
                    <div className="">
                        <p className="text-center">Detalles de reservacion</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const res = await api.departamento.departamento(params.slug)
    const data = res.data[0];
    return {
        props: { data }
    }
}

export const getStaticPaths = async () => {
    const res = await (await api.departamento.departamentos()).data;

    const paths = res.map((item) => {
        return { params: { slug: item.slug } }
    })
    return {
        paths,
        fallback: false
    }
}

export default departamento;