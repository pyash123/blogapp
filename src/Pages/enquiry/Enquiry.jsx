import {useFormik} from "formik";
import emailjs from "@emailjs/browser";
import './enquiry.css';

function Enquiry()
{
	const initialValues = {name:"",phone:"",message:""}


	const validate = (values) => {
		const errors = {}

			if(values.name == ""){
				errors.name = "name is empty";

				}

			if( !values.name.match(/^[A-z]+$/)){
				errors.name = "name is empty";

				}
			if(values.phone.toString().length != 10){
				errors.phone = "invalid phone ";

				}

			if(values.message.length <= 10){
				errors.message = "msg shud be atleast 10 letters";

				}

			return errors;


	}

		const onSubmit = (values) => {
			let data = {"from_name":values.name,"from_phone":values.phone,"message":values.message};
				emailjs.send("service_olishe9","template_ik4q1t3",data,"yQWKDCZ4mPFIXwPHa")
			.then(res => {
					console.log(res)
			alert("we will get back to u");
			formik.resetForm();
				})
			.catch(err => console.log(err))
	}
	
	const formik =useFormik({initialValues,validate, onSubmit})



		return(
			<>
				<center>
                    <div className="en">
				<span>Contact Me </span>
				<form className="eq" onSubmit = {formik.handleSubmit}>
				<input  style={{ width: "300px" , height:"20px" }}  type="text" name = "name" placeholder="Enter name"  onChange={formik.handleChange} value = {formik.values.name} onBlur = {formik.handleBlur} />
				
			{formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div>:null}
				<br/><br/>
				<input   style={{ width: "300px" , height:"20px" }}type="number" name = "phone" placeholder="Enter phone no"  onChange={formik.handleChange} value = {formik.values.phone} onBlur = {formik.handleBlur} />
				
			{formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div>:null}
				<br/><br/>
				<textarea name = "message" placeholder="Enter ur enquiry"  onChange={formik.handleChange} value = {formik.values.message} onBlur = {formik.handleBlur} />
			{formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div>:null}
				<br/><br/>
				<input type = "submit" />
				</form>
                </div>
				</center>

			</>
		

		);
}

export default Enquiry;



