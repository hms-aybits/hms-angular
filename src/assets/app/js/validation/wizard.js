var WizardDemo = function() {
    $("#m_wizard");
    var e, r, i = $("#m_form");
    return {
        init: function() {
            var n;
            $("#m_wizard"), i = $("#m_form"), (r = new mWizard("m_wizard", {
                startStep: 1
            })).on("beforeNext", function(r) {
                !0 !== e.form() && r.stop()
            }), r.on("change", function(e) {
                mApp.scrollTop()
            }), e = i.validate({
                ignore: ":hidden",
                rules: {

                    //Hotel Information Hotel Details
                    hotelName: {
                        required: !0,
                        alphanumeric: !0
                    },
                    roomCount: {
                        required: !0,
                        positiveInteger: !0
                    },
                    staffCount: {
                        required: !0,
                        positiveInteger: !0
                    },


                    //Hotel Information Contact Details
                    landLine1: {
                        required: !0,
                        landLineIN: !0
                    },
                    landLine2: {
                        landLineIN: !0
                    },
                    faxNo: {
                        faxIN: !0
                    },
                    mobileNumber: {
                        required: !0,
                        mobileIN: !0
                    },
                    email1: {
                        required: !0,
                        email: !0
                    },
                    email2: {
                        email: !0
                    },

                    //Hotel Information Mailing Address
                    address1: {
                        required: !0,
                        alphanumeric: !0
                    },
                    city: {
                        required: !0,
                        lettersonly: !0
                    },
                    state: {
                        required: !0,
                        lettersonly: !0
                    },
                    country: {
                        required: !0,
                        lettersonly: !0
                    },

                    //Hotel Certificates

                    registrationNo: {
                        alphanumeric: !0
                    },
                    buildingPermitNumber: {
                        alphanumeric: !0
                    },
                    fireSafetyNumber: {
                        alphanumeric: !0
                    },
                    policeLicenseNumber: {
                        alphanumeric: !0
                    },
                    healthTradeLicenseNumber: {
                        alphanumeric: !0
                    },
                    fssaiLicenseNumber: {
                        alphanumeric: !0
                    },
                    gstNumber: {
                        alphanumeric: !0
                    },
                    esiRegistrationNumber: {
                        alphanumeric: !0
                    },
                    epfRegistrationNumber: {
                        alphanumeric: !0
                    },



                    //Hotel Facilities

                    facilityName: {
                        required: !0,
                        lettersonly: !0
                    },







                    account_url: {
                        required: !0,
                        url: !0
                    },
                    account_username: {
                        required: !0,
                        minlength: 4
                    },
                    account_password: {
                        required: !0,
                        minlength: 6
                    },
                    account_group: {
                        required: !0
                    },
                    "account_communication[]": {
                        required: !0
                    },
                    billing_card_name: {
                        required: !0
                    },
                    billing_card_number: {
                        required: !0,
                        creditcard: !0
                    },
                    billing_card_exp_month: {
                        required: !0
                    },
                    billing_card_exp_year: {
                        required: !0
                    },
                    billing_card_cvv: {
                        required: !0,
                        minlength: 2,
                        maxlength: 3
                    },
                    billing_address_1: {
                        required: !0
                    },
                    billing_address_2: {},
                    billing_city: {
                        required: !0
                    },
                    billing_state: {
                        required: !0
                    },
                    billing_zip: {
                        required: !0,
                        number: !0
                    },
                    billing_delivery: {
                        required: !0
                    },
                    accept: {
                        required: !0
                    }
                },
                messages: {
                    "account_communication[]": {
                        required: "You must select at least one communication option"
                    },
                    accept: {
                        required: "You must accept the Terms and Conditions agreement!"
                    }
                },
                invalidHandler: function(e, r) {
                    mApp.scrollTop(), swal({
                        title: "",
                        text: "There are some errors in your submission. Please correct them.",
                        type: "error",
                        confirmButtonClass: "btn btn-secondary m-btn m-btn--wide"
                    })
                },
                submitHandler: function(e) {}
            }), (n = i.find('[data-wizard-action="submit"]')).on("click", function(r) {
                r.preventDefault(), e.form() && (mApp.progress(n), i.ajaxSubmit({
                    success: function() {
                        mApp.unprogress(n), swal({
                            title: "",
                            text: "The application has been successfully submitted!",
                            type: "success",
                            confirmButtonClass: "btn btn-secondary m-btn m-btn--wide"
                        })
                    }
                }))
            })
        }
    }
}();



jQuery(document).ready(function() {
    WizardDemo.init()
});