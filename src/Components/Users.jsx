
//Display the user data
export const users = [
        {name:"John Doe", id:1, career:"Software Engineer"},
        {name:"Jane Doe", id:2, career:"Data Scientist"},
        {name:"Billy Doe", id:3, career:"Cyber Security Analyst"},
  ]
export default function Users(props) {
    
    const name = props.name;
    const id = props.id;
    const career = props.career;

    return (
        <div>
            <p>Name : {name}, ID:  { id}, Career : { career}</p>
        </div>
    )

}