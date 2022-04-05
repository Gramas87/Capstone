

const DescriptionSection = ({title, description, heard}) =>(
    <div className="contentDiv">
        <h4 className="mx-2">{title} </h4>
       <div className="mt-1 mx-2">{description}</div> 
       <div className="mt-3 mx-2">{heard}</div> 
    </div>
 )
 
 export default DescriptionSection