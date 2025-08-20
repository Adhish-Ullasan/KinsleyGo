export const FeaturesCard = (props) =>{

    const data = props.data
    
    return (
        <div>
            <div>
                <img src={data.img} alt="" />
            </div>
            <div>
                <p>{data.content}</p>
            </div>
        </div>
    )
}