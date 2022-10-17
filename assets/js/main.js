var testimonialSlider = $('.testimonial-slider');


// functions starts

function testimonialSliderFunc(){
    if(testimonialSlider.length> 0){
        $(testimonialSlider).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            
            dots: true,
            arrows: true,
            prevArrow: '<a href="javascript:" class="slick-prev"> <i class="icon-arrow-left"></i></a>',
            nextArrow: '<a href="javascript:" class="slick-next"> <i class="icon-arrow-right"></i></a>',
            responsive:[
                {
                    breakpoint: 1199.98,
                    settings:{
                        arrows: false
                    }
                },
                {
                    breakpoint: 991.98,
                    settings:{
                        arrows: false
                    }
                },
                {
                    breakpoint: 767.98,
                    settings:{
                        arrows: false
                    }
                }
            ]
            
            
        })
    }
}

const validateForm = (form) => {
    let isRequired = true;
 
    // Check for Required Firstname
    if (form.firstname.value.trim() === "") {
       setInvalid(form.firstname, "First name is required!");
       
       isRequired = false;
    } else {
       setSuccess(form.firstname);
    }
 
    // Check for Required Lastname
    if (form.lastname.value.trim() === "") {
       setInvalid(form.lastname, "Last name is required!");
       isRequired = false;
    } else {
       setSuccess(form.lastname);
    }
 
    // Check for Required Email
    if (form.email.value.trim() === "") {
       setInvalid(form.email, "Email is required!");
       isRequired = false;
    } else if (!validEmail(form.email.value.trim())) {
       setInvalid(form.email, "Email is not valid!");
       isRequired = false;
    } else {
       setSuccess(form.email);
    }
 
    // Check for Required Password
    if (form.password.value.trim() === "") {
       setInvalid(form.password, "Password is Required!");
       isRequired = false;
    } else if (form.password.value.length < 9) {
       setInvalid(form.password, "Password must be at least 9 characters!");
       isRequired = false;
    } else {
       setSuccess(form.password);
    }
 
    return isRequired;
 };
 
 // Set for Success Input Value
 const setSuccess = (input) => {
    const formControl = input;
    formControl.className = "form-control success";
 };
 
 // Set for Invalid Input Value
 const setInvalid = (input, message) => {
    const formControl = input;
    const formAlert = formControl.querySelector(".error");
    // formAlert.css("display", "block");
    formControl.className = "form-control invalid";
    formAlert.innerHTML = message;
 };
 
 // Set for Valid Email Value
 const validEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
 };
 


$(function(){
    testimonialSliderFunc();
})