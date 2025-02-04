export function AfficherImage(props){
    return <img src={`/images/${props.nom}.jpg`} alt={`Image de ${props.nom}`} />;
}
