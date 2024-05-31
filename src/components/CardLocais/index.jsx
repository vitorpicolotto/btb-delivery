import * as PropTypes from "prop-types"
import "./styles.css"

function CardLocais({dadosLocais, onEdit}){
    return(
        <div className="card">
                <div className="card-dados">
                    <h1 className="card-titulo">
                    {dadosLocais.destinatario}
                    </h1>
                    <h3>Planeta: {dadosLocais.planeta}</h3>
                    <h3>Tipo de serviço: {dadosLocais.tipo}</h3>
                </div>

                <div className="card-endereco">
                    <h4>Lote: {dadosLocais.lote}</h4>
                    <h4>Endereço: {dadosLocais.rua}, {dadosLocais.numero}</h4>
                    <h4>Cidade: {dadosLocais.cidade}</h4>
                    <h4>Estado: {dadosLocais.estado}</h4>
                    <h4>País: {dadosLocais.pais}</h4>
                </div>
                <button className="card-btn" onClick={onEdit}>Editar</button>
                
            
        </div>
    )
}

CardLocais.propTypes = {
    dadosLocais: PropTypes.exact({
        id: PropTypes.string.isRequired,
        destinatario: PropTypes.string.isRequired,
        planeta: PropTypes.string.isRequired,
        tipo: PropTypes.oneOf(['Armazenamento', 'Fábrica']).isRequired,
        lote: PropTypes.number,
        cep: PropTypes.number,
        rua: PropTypes.string,
        numero: PropTypes.number,
        cidade: PropTypes.string,
        estado: PropTypes.string,
        pais: PropTypes.string
    }),
    onEdit: PropTypes.func.isRequired
}

export default CardLocais;