void
function() {
    var buttons = [
            '.footer-next-btn>#next_Submit',
            '#editPostUrl',
            '#editBumpPostUrl',
            '#createPostUrl',
            '#createBumpPostUrl',
            'div#next_Submit',
            '#confirmModal_enoughTokens .flex-btn',
            '#confirmModal_Not_enoughTokens .flex-btn',
            '#remove-post .flex-btn a',
            'label.footer-next-btn',
            '#buyMoreTokensButton'
        ],
        forms = [
            '#contact_us_form',
            '#loginFormId',
            '#registerForm',
            '#postFormId',
            '#emailForm',
            '#eftForm',
            '#cardForm',
            'form[action="/users/agree_to_terms"]',
            '#t1paymentform'
        ],
        buttonsForms = [
            '#contact_us_form button.myButton',
            '#login_data_submit_button',
            '#sign_up_data_submit_button',
            '#input_send',
            '#reset_password_submit_button',
            '#next_Submit',
            '#agree-submit-id',
            '.t1Submit'
        ];

    function disabler(jqObject) {
        jqObject
            .prop('disabled', true)
            .css({
                'opacity': '0.5',
                'pointer-events': 'none'
            });
    };

    $(document).ready(function() {
        $(buttons.join(',')).on('click tap', function() { // for single submit buttons
            disabler($(this));
        });
        $(forms.join(',')).on('submit', function() { // for submit forms and submit buttons
            disabler($(buttonsForms.join(',')));
            buttonsForms.forEach(function(button) {
                disabler($(button).parent());
            });
        });
    });
}();