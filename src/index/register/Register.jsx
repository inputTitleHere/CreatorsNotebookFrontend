import { Form, redirect } from "react-router-dom";
import Header from "../../common/Header";

function Register(){
    return(
        <div>
            <Header showButton={false}/>
            <section className="register-page">
                <Form method="post">
                    <button>뭔가 등록</button>
                </Form>
            </section>
        </div>
    )
}

export async function registerAction(props){
    let formData = await props.request.formData();
    console.log(props);
    console.log(formData);
    return redirect("/test/login");
}


export default Register;