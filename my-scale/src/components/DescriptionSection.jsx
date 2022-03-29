const DescriptionSection = ({title, description, heard}) =>(
    <div>
        <div>{title} </div>
       <div className="mt-1">{description}</div> 
       <div className="mt-3">{heard}</div> 
    </div>
 )
 
 export default DescriptionSection