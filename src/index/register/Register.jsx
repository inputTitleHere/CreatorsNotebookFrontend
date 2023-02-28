import { Form } from "react-router-dom";
import Header from "../../common/Header";

function Register(){
    return(
        <div>
            <Header showButton={false}/>
            <section className="register-page">
                <Form >

                </Form>
            </section>
        </div>
    )
}

export default Register;