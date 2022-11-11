import FragList from './fragList'

/**
 * 
 * Aqui recebe o arquivo fragList o <li> de lá
 */
function Fragmento(){
    return(
        <>
         <h2>Nova lista</h2>
            <ul>
        <FragList marca="ferrari" />
        <FragList marca="Uno" />
        
            </ul>
        </>

    )
}

export default Fragmento