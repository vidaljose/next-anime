export const CardOnly = ({descripcion, caratula,nombre,id }) => {
    
    return (
        <div >
            <h3>{nombre}</h3>
            <img src={caratula} alt={nombre} width="500"/>
            <p>{descripcion}</p>
        </div>
    )
}