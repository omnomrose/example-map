
export default function Card({
    degree="none",
    colour= "none",
    font="0",    
    image="icon/computing.png"
}) {
    
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colour,
            borderRadius:"10px",
            gap: "20px",
            margin: "10px",
            height: "200px",
            width: "300px",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "20px"
            }}>

            {
                degree === "#FFA69E" ? <img src={'icon/business.png'} width='100'/> :
                degree === "#FFA69E" ? <img src={'icon/computing.png'} width='100'/> :
                                        <img src={image} width='100'/>
            }
            {degree}
        </div>
    )
}