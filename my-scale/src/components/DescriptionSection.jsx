

const DescriptionSection = ({title, description, heard}) =>(
    <div className="contentDiv">
        <h4 className="my-2 mx-3">{title} </h4>
       <div className="my-2 mx-3">{description}</div> 
       <div className="my-2 mx-3">{heard}</div> 
    </div>
 )
 
 export default DescriptionSection