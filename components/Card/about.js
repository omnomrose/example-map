export default function Card({
    name="none",
    lastName="Hayakawa",
    image="icon/aki.png"
}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap:"20px",
            backgroundColor: "pink",
            height:"200px",
            width:"300px",
            borderRadius: "20px"
            }}>
            {
                lastName === "Denji" ? <img src={'icon/denji.jpeg'} width='100' height='100'/> :
                lastName === "Aki" ? <img src={'icon/aki.png'} width='100' height='100'/> :
                lastName === "Power" ? <img src={'icon/computing.png'} width='100' height='100'/> :
                <img src={image} width='100'/>
            }
            {lastName}
        </div>
    )
}
