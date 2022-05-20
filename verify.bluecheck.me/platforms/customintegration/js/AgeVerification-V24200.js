var BlueCheck={trackWithMixpanel:function(eventName,configs){if(typeof configs=='undefined'){configs={'domain':window.location.hostname,'isMobile':(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))}}
if(typeof mixpanel=='undefined')return;try{mixpanel.track(eventName,configs)}catch(e){BlueCheck.debugOutput('Mixpanel could not track this event')
BlueCheck.debugOutput(e)}},trackModalClose:function(el){while((el=el.parentElement)&&!RegExp('(bluecheck-screen-)+.*').test(el.classList));var className=el.classList[0];var modalName=className.substring(className.lastIndexOf('-')+1);BlueCheck.trackWithMixpanel("Modal Close - "+modalName)},trackTimeEventMaster:function(){mixpanel.time_event('Verify SSN');mixpanel.time_event('Verify Photo ID');mixpanel.time_event('Close Modal');mixpanel.time_event('Successful Verification')},platformCallbacks:{onReady:function(){},onOpen:function(){},scrapeUserData:function(){},onUserDataChanged:function(){},onClose:function(){},onSuccess:function(){},onQuit:function(){}},userData:{dob:'',ssn:'',email:'',shipping_first_name:'',shipping_last_name:'',shipping_address:'',shipping_address2:'',shipping_city:'',shipping_region:'',shipping_country:'',shipping_postal_code:'',shipping_phone:'',billing_first_name:'',billing_last_name:'',billing_address:'',billing_address2:'',billing_city:'',billing_region:'',billing_country:'',billing_postal_code:'',billing_phone:''},files:[],photoIdVerificationType:'age_photoID',maxAttempts:{dob:10,name:3,ssn:3,photos:2},attempts:{dob:0,name:0,ssn:0,photos:0},requiredFields:[],rejectedValues:[],checkoutElements:function(type){return[]},domainToken:null,orderID:'',orderGroup:'',orderToken:'',version:'4.3',productTypes:'',domainInfo:null,verificationTypes:[],captchaToken:null,verificationAddressType:'',verificationAddressTypeRedirectCallback:null,verificationAddressTypeRedirectBypass:!1,verificationAddressTypeRedirectFunction:function(){return},monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],isAfterCheckoutProcess:!1,quitAlertBeforeQuitting:!1,htmlLoaded:!1,didModalIntroScreen:!1,successful:!1,debug:!0,lastResponse:'',forceSuccessModal:!1,ageLimit:((new Date().getFullYear())-12),currentRequest:null,skipModalPages:[],language:{globals:{help:'<div class="bluecheck-modal-head-circle-container"><i class="fa fa-chevron-left bluecheck-link-back" aria-hidden="true"></i></div><div class="bluecheck-modal-head-text bluecheck-link-help bluecheck-open-help"><h6 class="bluecheck-modal-head-text-h6">Need Help ?</h6></div><div class="bluecheck-modal-head-circle-container"><i class="fa fa-times bluecheck-fa-times bluecheck-close-this-modal" aria-hidden="true"></i></div>',helpModified:'<div class="bluecheck-border-fa"></div><div class="bluecheck-modal-head-text bluecheck-link-help bluecheck-open-help"><h6 class="bluecheck-modal-head-text-h6">Need Help ?</h6></div><div class="bluecheck-modal-head-circle-container"><i class="fa fa-times bluecheck-fa-times bluecheck-close-this-modal" aria-hidden="true"></i></div>'},intro:{blueCheckLogo:'https://verify.bluecheck.me/age-verification/images/bluecheck.png',shieldLogo:'https://verify.bluecheck.me/age-verification/images/shield2.png',headerBefore:'Please verify your age',headerAfter:'To complete your order, please verify your age.',subheader:'',caption:'By continuing below you agree to our website <a class="bluecheck-intro-a" target="_blank" href="https://www.bluecheck.me/terms-of-use">terms</a> of use and <a class="bluecheck-intro-a" target="_blank" href="https://www.bluecheck.me/privacy-policy">privacy policy</a>',buttonClickErrorMessage:'Please agree to the terms and conditions.',customIntroText:'',buttons:{submit:{id:'bluecheck-submit-intro',class:'bluecheck-not-active bluecheck-modal-footer-button',text:'VERIFY MY AGE',icon:'fa-chevron-right'}}},dob:{title:'Enter your <span class="bluecheck-modal-body-span">date of birth</span>',caption:'We\'ll now attempt an automated verification using name and address.',buttons:{submit:{id:'bluecheck-submit-dob',class:'bluecheck-not-active bluecheck-modal-footer-button',text:'SUBMIT MY VERIFICATION',icon:'fa-chevron-right'}}},name:{title:'Enter your full <span class="bluecheck-semibold-me">legal name.</span>',first:'FIRST NAME',last:'LAST NAME',shippingCaption:'I understand my purchase will be <span id="bluecheck-input-name-checkbox-method">shipped</span> to the name above.',billingCaption:'I understand my purchase will be <span id="bluecheck-input-name-checkbox-method">billed</span> to the name above.',buttons:{submit:{id:'bluecheck-submit-name',class:'bluecheck-not-active bluecheck-modal-footer-button',text:'SUBMIT MY VERIFICATION',icon:'fa-chevron-right'}}},ssn:{title:'Enter last 4 digits of SSN.',icon:'fa-lock',subtitle:'All information is sent via 128-bit AES encryption and used only in an attempt to verify your age.',buttons:{submit:{id:'bluecheck-submit-ssn',class:'bluecheck-not-active bluecheck-modal-footer-button',text:'SUBMIT MY VERIFICATION',icon:'fa-chevron-right'}}},email:{title:'Enter your <span class="bluecheck-semibold-me">email</span>.',subtitle:'We will email you once your Photo ID verification is complete.',email:'YOUR EMAIL ADDRESS',caption:' I understand and consent to the capture, collection, use, storage, transfer and disclosure of all personal information or data in accordance with BlueCheck’s Data Policy and <a class="bluecheck-intro-a" target="_blank" href="https://www.bluecheck.me/privacy-policy">Privacy Policy</a>.',buttonClickErrorMessage:'Please agree to the terms and conditions.',buttons:{submit:{id:'bluecheck-submit-email',class:'bluecheck-not-active bluecheck-modal-footer-button',text:'UPLOAD PHOTOS',icon:'fa-chevron-right'}}},help:{title:'How can we help?',emailLink:'<a target="_blank" href="mailto:help@bluecheck.me?subject=Need Help With Verification&body=This email will go directly to our Age Verification Support Team.%0D%0A%0D%0AFor quicker assistance, please include the store url you are attempting to order from. Additionally, please include the device type and browser you are currently using.%0D%0A%0D%0ALastly, please include your full name, address, and date of birth. Thank you, and sorry for the inconvenience,%0D%0A%0D%0ATeam BlueCheck.%0D%0A%0D%0A Start your message here" id="bluecheck-link-email-a"></a>',faqLink:'<a target="_blank" href="https://www.bluecheck.me/faq" id="bluecheck-link-faq-a"></a>',buttons:{retry:{id:'bluecheck-try-a-new-method',class:'bluecheck-modal-body-button',text:'Retry Age Verification',icon:'fa-chevron-right'},email:{id:'bluecheck-link-email',class:'bluecheck-modal-body-button',text:'Send us an email',icon:'fa-envelope'},faq:{id:'bluecheck-link-faq',class:'bluecheck-modal-body-button',text:'EXPLORE OUR FAQ',icon:'fa-question'},closeAll:{id:'',class:'bluecheck-modal-body-button bluecheck-close-all-modals',text:'CLOSE AGE VERIFICATION',icon:'fa-times'}}},sendEmail:{title:'Send us an Email',icon:'fa-lock',buttons:{email:{id:'bluecheck-send-email-submit',class:'bluecheck-hero-button',text:'Submit'}}},photos:{photoTitle:'Photo Upload',selfieDetectionFailure:'Please ensure the selfie clearly displays your face.',photoExample:'https://verify.bluecheck.me/age-verification/images/id-government3.png',photoInstruction1:'<div class="instruction-circle">1</div><h2 class="instruction-text">Upload or take a photo of your <span class="bluecheck-uppercase-regular">government ID</span> on a flat surface.</h2>',photoInstruction2:'<div class="instruction-circle instruction-circle-grey">2</div><h2 class="instruction-text instruction-text-grey">Upload or take a selfie of your <span class="bluecheck-uppercase-regular">government ID</span> close to your face.</h2>',selfieTitle:'Photo Upload',selfieExample:'https://verify.bluecheck.me/age-verification/images/id-selfie3.png',selfieInstruction1:'<div class="instruction-circle instruction-circle-grey"><i class="fa fa-check instruction-circle-i" aria-hidden="true"></i> </div><h2 class="instruction-text instruction-text-grey">Upload or take a photo of your <span class="bluecheck-uppercase-regular">government ID</span> on a flat surface.</h2>',selfieInstruction2:'<div class="instruction-circle">2</div><h2 class="instruction-text">Upload or take a selfie of your <span class="bluecheck-uppercase-regular">government ID</span> close to your face.</h2>',buttons:{photoSelect:{id:'bluecheck-photo-id-select',class:'bluecheck-active bluecheck-modal-body-button',text:'TAKE PHOTO OF ID',icon:'fa-camera bluecheck-modal-body-i'},selfieSelect:{id:'bluecheck-selfie-select',class:'bluecheck-active bluecheck-modal-body-button',text:'TAKE SELFIE WITH ID',icon:'fa-camera bluecheck-modal-body-i'}}},photosWaiting:{title:'Please wait while we review your photos',subtitle:"Current wait time: less than 5 minutes",message:"Contact Us: help@bluecheck.me",buttons:{}},attempts:{oldBrowserTitle:'This browser does not support photo upload.',oldBrowserMessage:'To verify your identity using your photo ID, please send your photo ID, and selfie of you and your photo ID to help@bluecheck.me.',redirectTitle:'Name Change',redirectMessage:'In order to change your name, you have to return to the shipping page.',updateTitle:'Please verify your age.',updateCaption:'We were unable to verify you using the provided information. Please select an alternative verification type.',updateSsnCaption:'We were unable to verify you using the SSN you provided. You can either try the SSN search again or proceed to the Photo ID verification.',updateNameText:'Legal Name:',updateDobText:'Date of Birth:',updateEditText:'edit',validateTitle:'Select a new verification type:',validateSsnTitle:'Last 4 of SSN',retrySsnTitle:'Re-try SSN',validatePhotoTitle:'Photo ID',buttons:{validateSsn:{id:'bluecheck-attempt-ssn',class:'bluecheck-modal-footer-button',text:'{{validateSsnTitle}}',icon:''},retrySsn:{id:'bluecheck-retry-ssn',class:'bluecheck-modal-footer-button',text:'{{retrySsnTitle}}',icon:''},validatePhoto:{id:'bluecheck-attempt-photos',class:'bluecheck-modal-footer-button',text:'{{validatePhotoTitle}}',icon:''}}},loading:{loadingPhotos:'Uploading photos',loadingInfo:'Reviewing your data'},alert:{standardTitle:'Alert',standardMessage:'Looks like something went wrong.',close:'<a href="#" id="bluecheck-screen-alert-close-button" class="bluecheck-link-close bluecheck-link-close-red">Close this Window</a>',help:'<a href="#" id="bluecheck-screen-alert-help-button" class="bluecheck-link-close bluecheck-link-close-red">Contact Customer Service</a>',dob:'<a href="#" id="bluecheck-screen-alert-dob-button" class="bluecheck-link-close bluecheck-link-close-red">Edit Date of Birth</a>'},quit:{standardTitle:'Are you sure?',standardMessage:'You must verify your age before your order can be processed.',continue:'<a href="#" id="bluecheck-screen-quit-continue-button" class="bluecheck-link-close bluecheck-link-close-red">Continue with Age Verification</a>',close:'<a href="#" id="bluecheck-screen-quit-close-button" class="bluecheck-link-close bluecheck-link-close-red">Close this Window</a>',help:'<a href="#" id="bluecheck-screen-quit-help-button" class="bluecheck-link-close bluecheck-link-close-red">Contact Customer Service</a>'},info:{standardTitle:'Attention',standardMessage:'Looks like something went wrong.',precheckoutDomainPhoto:'Once your verification is complete, please return to checkout to complete your order.',cookieTitle:'Attention',cookieMessage:'Please make sure you have cookies enabled in your browser.<br><p><a href="https://www.wikihow.com/Enable-Cookies-in-Your-Internet-Web-Browser" class="bluecheck-alert-message-link" target="_blank">How to enable cookies.</a></p>',redirect:'<a href="#" id="bluecheck-screen-info-redirect-button" class="bluecheck-link-close bluecheck-link-redirect">Redirect to Shipping Page</a>',close:'<a href="#" id="bluecheck-screen-info-close-button" class="bluecheck-link-close">Close this Window</a>',help:'<a href="#" id="bluecheck-screen-info-help-button" class="bluecheck-link-close">Contact Customer Service</a>'},success:{title:'Your verification has been completed!',message:'Please click OK to close this window.',done:'<a href="#" id="bluecheck-close-success" class="bluecheck-link-close">OK</a>'},failedSelfie:{title:'We were unable to verify you using the selfie you submitted.',message:'Please make sure to upload a photo of you holding your ID.',photo:'https://verify.bluecheck.me/age-verification/images/id-selfie3.png',done:'<a href="#" id="bluecheck-return-photo" class="bluecheck-link-close">OK</a>'},failedSelfieInvalidID:{title:'We were unable to verify you using the photos you submitted.',message:'Please make sure to upload a clear photo of your ID and a selfie of you holding your ID.',done:'<a href="#" id="bluecheck-return-photo" class="bluecheck-link-close">OK</a>'},invalidID:{title:'We were unable to verify you using the ID you submitted. ',message:'Please make sure to upload a clear photo of your ID taken on a flat surface.',photo:'https://verify.bluecheck.me/age-verification/images/validID.png',done:'<a href="#" id="bluecheck-return-photo" class="bluecheck-link-close">OK</a>'},failedNSFW:{header:'Verification Failed',title:'We were unable to process the images you submitted.',message:'Please make sure you submit a clear photo of your ID and a selfie holding your ID.',done:'<a href="#" id="bluecheck-return-nsfw" class="bluecheck-link-close bluecheck-link-close-red">Retry</a>'}},toggleSubmitButtons:function(element,turnOn){if(turnOn){element.classList.add('bluecheck-active')
element.classList.remove('bluecheck-not-active')}else{element.classList.add('bluecheck-not-active')
element.classList.remove('bluecheck-active')}},open:{intro:function(){BlueCheck.trackWithMixpanel("Modal Opened");var logo_html='<img src="'+BlueCheck.domainInfo.logo+'" alt="" id="bluecheck-store-logo" class="bluecheck-store-logo">'
var name_html='<p class="bluecheck-modal-absolute-head-text-p" id="bluecheck-store-name">'+BlueCheck.domainInfo.name+'</p>'
var dynamicDataObject={logo:BlueCheck.domainInfo.logo?logo_html:name_html}
if(BlueCheck.isAfterCheckoutProcess){dynamicDataObject.header=BlueCheck.language.intro.headerAfter}else{dynamicDataObject.header=BlueCheck.language.intro.headerBefore}
if(!BlueCheck.createModal('intro',dynamicDataObject)){return}
function validate(){var termsCheckbox=document.querySelector('#bluecheck-terms');if(!termsCheckbox.checked){document.getElementById('buttonClickErrorMessage').style.display='block';return}
document.getElementById('buttonClickErrorMessage').style.display='none';setTimeout(function(){BlueCheck.didModalIntroScreen=!0
BlueCheck.closeTop(!0)
BlueCheck.focusOnElement('bluecheck-input-dob-month',!1)},50)}
function enableButton(){var submit=document.querySelector('#'+BlueCheck.language.intro.buttons.submit.id);var termsCheckbox=document.querySelector('#bluecheck-terms');BlueCheck.toggleSubmitButtons(submit,termsCheckbox.checked)}
var submit=document.querySelector('#'+BlueCheck.language.intro.buttons.submit.id)
var termsCheckbox=document.querySelector('#bluecheck-terms')
submit.addEventListener('click',validate,!0)
termsCheckbox.addEventListener('click',enableButton,!0)
BlueCheck.showModal('intro')
function edgeFocus(){BlueCheck.focusOnElement(BlueCheck.language.intro.buttons.submit.id,!1)}
setTimeout(edgeFocus,100)},dob:function(response){if(response){BlueCheck.open.alert('Error','The Date of Birth you entered was invalid. Please make sure to enter a valid Date of Birth.',!0,!1);return}
if(!BlueCheck.createModal('dob')){return}
function post(month,day,year){month=month.toString()
day=day.toString()
year=year.toString()
if(month.length==1){month='0'+month}
if(day.length==1){day='0'+day}
BlueCheck.userData.dob=year+'-'+month+'-'+day
BlueCheck.postToApiAndHandleResponse('dob')}
function getCurrentData(){var dobArray=BlueCheck.splitDob()
if(dobArray){month.value=dobArray[0]
day.value=dobArray[1]
year.value=dobArray[2]
setDobSentence(!0,Number(dobArray[0]),'month')
setDobSentence(!0,Number(dobArray[1]),'day')
setDobSentence(!0,Number(dobArray[2]),'year')
BlueCheck.toggleSubmitButtons(submit,!0)
BlueCheck.focusOnElement('bluecheck-input-dob-year',!1)}else{BlueCheck.focusOnElement('bluecheck-input-dob-month',!1)}}
function setDobSentence(valid,number,type){var mBool=type=='month'?!0:!1
var dBool=type=='day'?!0:!1
var yBool=type=='year'?!0:!1
var monthText=document.querySelector('#bluecheck-dob-month-data')
var dayText=document.querySelector('#bluecheck-dob-day-data')
var yearText=document.querySelector('#bluecheck-dob-year-data')
if(mBool&&valid){monthText.innerText=BlueCheck.monthNames[parseInt(number)-1]}else if(mBool&&!valid){monthText.innerText=''}
if(dBool&&valid){dayText.innerText=BlueCheck.getOrdinal(number)+','}else if(dBool&&!valid){dayText.innerText=''}
if(yBool&&valid){yearText.innerText=number}else if(yBool&&!valid){yearText.innerText=''}}
function moveFocus(element,previousValue,currentValue,monthBool,dayBool,keyCode){var pL=previousValue.length
var cL=currentValue.length
if(element==month){if(pL==1&&cL==2&&monthBool){BlueCheck.focusOnElement('bluecheck-input-dob-day',!0)}}else if(element==day){if(pL==1&&cL==2&&dayBool){BlueCheck.focusOnElement('bluecheck-input-dob-year',!0)}else if(pL==0&&cL==0&&keyCode==8){BlueCheck.focusOnElement('bluecheck-input-dob-month',!0)
if(month.value.length==2){month.value=month.value.substr(0,1)}else if(month.value.length==1){month.value=''}}}else if(element==year){if(pL==0&&cL==0&&keyCode==8){BlueCheck.focusOnElement('bluecheck-input-dob-day',!0)
if(day.value.length==2){day.value=day.value.substr(0,1)}else if(day.value.length==1){day.value=''}}}}
function validate(e){var element=e.target
var type=e.type
var previousValue=element.value
setTimeout(function(){var mInt=Number(month.value)
var dInt=Number(day.value)
var yInt=Number(year.value)
var mBool=mInt>=1&&mInt<=12?!0:!1
var dBool=dInt>=1&&dInt<=31?!0:!1
var yBool=yInt>=1900&&yInt<BlueCheck.ageLimit?!0:!1
var key=e.keyCode||!1
if(type=='keydown'){var currentValue=element.value
moveFocus(element,previousValue,currentValue,mBool,dBool,key)
if(element==month){setDobSentence(mBool,mInt,'month')}
if(element==day){setDobSentence(dBool,dInt,'day')}
if(element==year){setDobSentence(yBool,yInt,'year')}}
if(mBool&&dBool&&yBool){BlueCheck.toggleSubmitButtons(submit,Date.parse(yInt+'-'+mInt+'-'+dInt))
if(element==submit||key==13){post(mInt,dInt,yInt)}}else{BlueCheck.toggleSubmitButtons(submit,!1)}},50)}
var month=document.querySelector('#bluecheck-input-dob-month')
var day=document.querySelector('#bluecheck-input-dob-day')
var year=document.querySelector('#bluecheck-input-dob-year')
var submit=document.querySelector('#'+BlueCheck.language.dob.buttons.submit.id)
month.addEventListener('keydown',validate,!0)
day.addEventListener('keydown',validate,!0)
year.addEventListener('keydown',validate,!0)
submit.addEventListener('click',validate,!0)
getCurrentData()
BlueCheck.showModal('dob')},name:function(){var dynamicDataObject={}
if(BlueCheck.verificationAddressType=='shipping'){dynamicDataObject.caption=BlueCheck.language.name.shippingCaption}else{dynamicDataObject.caption=BlueCheck.language.name.billingCaption}
if(!BlueCheck.createModal('name',dynamicDataObject)){return}
function post(first,last){BlueCheck.userData[BlueCheck.verificationAddressType+"_first_name"]=first
BlueCheck.userData[BlueCheck.verificationAddressType+"_last_name"]=last
BlueCheck.platformCallbacks.onUserDataChanged()
BlueCheck.postToApiAndHandleResponse('name')}
function getCurrentData(){var fName=BlueCheck.userData[BlueCheck.verificationAddressType+"_first_name"]
var lName=BlueCheck.userData[BlueCheck.verificationAddressType+"_last_name"]
if(fName&&lName){first.value=fName
last.value=lName}}
function checkboxKeydownFilter(e){if(e.keyCode==13){checkbox.checked=!0
e.bluecheckSkipPost=!0}
validate(e)}
function validate(e){var element=e.target
var type=e.type
setTimeout(function(){var fVal=first.value
var lVal=last.value
var f=fVal.length
var l=lVal.length
var c=checkbox.checked
var key=e.keyCode||!1
if(f&&l&&c){BlueCheck.toggleSubmitButtons(submit,!0)
if(e.bluecheckSkipPost){BlueCheck.focusOnElement(BlueCheck.language.name.buttons.submit.id,!1)
return}
if(element==submit||key==13){post(fVal,lVal)}}else{BlueCheck.toggleSubmitButtons(submit,!1)}},50)}
var first=document.querySelector('#bluecheck-input-name-first')
var last=document.querySelector('#bluecheck-input-name-last')
var checkbox=document.querySelector('#bluecheck-input-name-checkbox')
var submit=document.querySelector('#'+BlueCheck.language.name.buttons.submit.id)
first.addEventListener('keydown',validate,!0)
last.addEventListener('keydown',validate,!0)
checkbox.addEventListener('change',validate,!0)
checkbox.addEventListener('keydown',checkboxKeydownFilter,!0)
submit.addEventListener('click',validate,!0)
getCurrentData()
BlueCheck.showModal('name')
BlueCheck.focusOnElement('bluecheck-input-name-first',!1)},ssn:function(){BlueCheck.trackWithMixpanel("Verify SSN");if(!BlueCheck.createModal('ssn')){return}
function post(ssn1Value,ssn2Value,ssn3Value,ssn4Value){var args=Array.prototype.slice.call(arguments)
BlueCheck.userData.ssn=args.join('')
BlueCheck.postToApiAndHandleResponse('ssn')}
function moveFocusAndSetSSNSentence(element,currentValue,ssn1Bool,ssn2Bool,ssn3Bool,ssn4Bool){function moveCursorToEnd(el){if(typeof el.selectionStart=="number"){el.selectionStart=el.selectionEnd=el.value.length}else if(typeof el.createTextRange!="undefined"){el.focus()
var range=el.createTextRange()
range.collapse(!1)
range.select()}}
var cL=currentValue.length
var ssn1Text=document.querySelector('#bluecheck-model-ssn1')
var ssn2Text=document.querySelector('#bluecheck-model-ssn2')
var ssn3Text=document.querySelector('#bluecheck-model-ssn3')
var ssn4Text=document.querySelector('#bluecheck-model-ssn4')
if(element==ssn1){if(cL==1&&ssn1Bool){ssn1Text.innerHTML=currentValue
BlueCheck.focusOnElement('bluecheck-input-ssn2',!0)
moveCursorToEnd(ssn2)}else if(cL==0){ssn1Text.innerHTML=''
ssn1.value=''}}else if(element==ssn2){if(cL==1&&ssn2Bool){ssn2Text.innerHTML=currentValue
BlueCheck.focusOnElement('bluecheck-input-ssn3',!0)
moveCursorToEnd(ssn3)}else if(cL==0){ssn2Text.innerHTML=''
ssn2.value=''
BlueCheck.focusOnElement('bluecheck-input-ssn1',!0)
moveCursorToEnd(ssn1)}}else if(element==ssn3){if(cL==1&&ssn3Bool){ssn3Text.innerHTML=currentValue
BlueCheck.focusOnElement('bluecheck-input-ssn4',!0)
moveCursorToEnd(ssn4)}else if(cL==0){ssn3Text.innerHTML=''
ssn3.value=''
BlueCheck.focusOnElement('bluecheck-input-ssn2',!0)
moveCursorToEnd(ssn2)}}else if(element==ssn4){if(cL==1&&ssn4Bool){ssn4Text.innerHTML=currentValue}else if(cL==0){ssn4Text.innerHTML=''
ssn4.value=''
BlueCheck.focusOnElement('bluecheck-input-ssn3',!0)
moveCursorToEnd(ssn3)}}}
function validate(e){var element=e.target
var type=e.type
setTimeout(function(){function returnBool(ssnLength,ssnInt){if(ssnLength<=0){return!1}
if(ssnInt===NaN){return!1}
if(ssnInt>=0&&ssnInt<=9){return!0}}
var ssn1Val=ssn1.value
var ssn2Val=ssn2.value
var ssn3Val=ssn3.value
var ssn4Val=ssn4.value
var ssn1L=ssn1Val.length
var ssn2L=ssn2Val.length
var ssn3L=ssn3Val.length
var ssn4L=ssn4Val.length
var ssn1Int=Number(ssn1Val)
var ssn2Int=Number(ssn2Val)
var ssn3Int=Number(ssn3Val)
var ssn4Int=Number(ssn4Val)
var ssn1Bool=returnBool(ssn1L,ssn1Int)
var ssn2Bool=returnBool(ssn2L,ssn2Int)
var ssn3Bool=returnBool(ssn3L,ssn3Int)
var ssn4Bool=returnBool(ssn4L,ssn4Int)
var key=e.keyCode||!1
var currentValue=element.value
if(type=='keydown'){moveFocusAndSetSSNSentence(element,currentValue,ssn1Bool,ssn2Bool,ssn3Bool,ssn4Bool)}
if(ssn1Bool&&ssn2Bool&&ssn3Bool&&ssn4Bool){BlueCheck.toggleSubmitButtons(submit,!0)
if(element==submit||key==13){post(ssn1Val,ssn2Val,ssn3Val,ssn4Val)}}else{BlueCheck.toggleSubmitButtons(submit,!1)}},50)}
var ssn1=document.querySelector('#bluecheck-input-ssn1')
var ssn2=document.querySelector('#bluecheck-input-ssn2')
var ssn3=document.querySelector('#bluecheck-input-ssn3')
var ssn4=document.querySelector('#bluecheck-input-ssn4')
var submit=document.querySelector('#'+BlueCheck.language.ssn.buttons.submit.id)
ssn1.addEventListener('keydown',validate,!0)
ssn2.addEventListener('keydown',validate,!0)
ssn3.addEventListener('keydown',validate,!0)
ssn4.addEventListener('keydown',validate,!0)
submit.addEventListener('click',validate,!0)
BlueCheck.showModal('ssn')
BlueCheck.focusOnElement('bluecheck-input-ssn1',!1)},email:function(){if(!BlueCheck.createModal('email')){return}
var emailRegex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function post(email){BlueCheck.userData.email=email
BlueCheck.postToApiAndHandleResponse('photos')}
if(BlueCheck.skipModalPages.indexOf('email')!=-1){post(BlueCheck.userData.email);return}
function enableButton(){var submit=document.querySelector('#'+BlueCheck.language.email.buttons.submit.id);var termsCheckbox=document.querySelector('#bluecheck-terms-email');BlueCheck.toggleSubmitButtons(submit,termsCheckbox.checked)}
function getCurrentData(){var eString=BlueCheck.userData.email
if(eString){emailInput.value=eString
enableButton()}}
function validateAndPost(e){e.preventDefault()
var termsCheckbox=document.querySelector('#bluecheck-terms-email');if(!termsCheckbox.checked){e.stopImmediatePropagation();document.getElementById('buttonClickErrorMessageEmail').style.display='block';return}
document.getElementById('buttonClickErrorMessageEmail').style.display='none';var email=emailInput.value
var emailValidated=emailRegex.test(email)
if(emailValidated){BlueCheck.toggleSubmitButtons(submit,!0)
submit.disabled=!1;if(!BlueCheck.domainInfo.loadCaptcha){post(email)}}else{BlueCheck.toggleSubmitButtons(submit,!1)}}
function validateEmail(e){var email=emailInput.value
var emailValidated=emailRegex.test(email)
if(emailValidated){enableButton()}else{BlueCheck.toggleSubmitButtons(submit,!1)}}
var emailInput=document.querySelector('#bluecheck-input-email')
var submit=document.querySelector('#'+BlueCheck.language.email.buttons.submit.id)
var termsCheckbox=document.querySelector('#bluecheck-terms-email');emailInput.addEventListener('keyup',validateEmail,!0)
submit.addEventListener('click',validateAndPost,!0)
termsCheckbox.addEventListener('click',enableButton,!0);getCurrentData()
if(BlueCheck.domainInfo.loadCaptcha){window.BlueCheckCaptchaCallback=function(token){BlueCheck.captchaToken=token
BlueCheck.userData.email=document.querySelector('#bluecheck-input-email').value
BlueCheck.postToApiAndHandleResponse('photos')}
if(document.getElementById('bluecheck-captcha-script')){document.getElementById('bluecheck-captcha-script').remove()}
var divCaptcha=document.getElementById('bluecheck-submit-email')
divCaptcha.classList.add("g-recaptcha")
divCaptcha.setAttribute('data-sitekey',"6Lf_OC4UAAAAAMB4OghxAtLYEGS0CflOlPnNo3wj")
divCaptcha.setAttribute('data-callback','BlueCheckCaptchaCallback')
divCaptcha.setAttribute('data-size',"invisible")
var body=document.querySelector('body')
var captcha=document.createElement('script')
captcha.setAttribute('src',"https://www.google.com/recaptcha/api.js")
captcha.setAttribute('id','bluecheck-captcha-script')
captcha.setAttribute('async','true')
captcha.setAttribute('defer','true')
body.appendChild(captcha)
setInterval(validateEmail,250)}
BlueCheck.showModal('email')
if(!BlueCheck.domainInfo.loadCaptcha){validateEmail()}
BlueCheck.focusOnElement('bluecheck-input-email',!1)},help:function(){if(!BlueCheck.createModal('help')){return}
function retryAttempts(){BlueCheck.closeAll(!0)
BlueCheck.open.attempts(!1)}
function openEmailForm(){BlueCheck.open.sendEmail()}
function openFaq(){var faqLink=document.getElementById('bluecheck-link-faq-a')
faqLink.click()}
var retry=document.querySelector('#'+BlueCheck.language.help.buttons.retry.id)
var email=document.querySelector('#'+BlueCheck.language.help.buttons.email.id)
var faq=document.querySelector('#'+BlueCheck.language.help.buttons.faq.id)
email.addEventListener('click',openEmailForm,!0)
faq.addEventListener('click',openFaq,!0)
faq.style.display="none";if(!navigator.cookieEnabled||BlueCheck.lastResponse=='pending'||BlueCheck.lastResponse=='photos_received'||BlueCheck.lastResponse=='error'){retry.style.display='none'}else{retry.addEventListener('click',retryAttempts,!0)}
BlueCheck.showModal('help')},sendEmail:function(){if(!BlueCheck.createModal('sendEmail')){return}
var ContactForm={form:{name:'',company:'',email:'',purpose:'',message:''},postForm:function(){document.getElementById("bluecheck-send-email-submit").children[0].innerHTML='SENDING...';ContactForm.form.name=document.getElementById('bluecheck-send-email-name').value;ContactForm.form.purpose='verification';ContactForm.form.email=document.getElementById('bluecheck-send-email-email').value.toLowerCase();ContactForm.form.message=document.getElementById('bluecheck-send-email-message').value;function jsonToUrlEncoded(obj){var str="";for(var key in obj){str+=key+'='+obj[key]+'&'}
return str.substring(0,str.length-1)}
function createCORSRequest(method,url){var xhr=new XMLHttpRequest();if("withCredentials" in xhr){xhr.open(method,url,!0)}else if(typeof XDomainRequest!="undefined"){xhr=new XDomainRequest();xhr.open(method,url)}else{xhr=null}
return xhr}
var request=createCORSRequest('POST','https://verify.bluecheck.me/contact-us');if(request){request.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE){if(this.status===200){ContactForm.clearForm();var error=document.getElementById('bluecheck-send-email-error');error.innerHTML="Email sent. We'll get back to you shortly.";error.style.display="block";error.style.color="#72B939"}else{var error=document.getElementById('bluecheck-send-email-error');error.style.display="block";error.style.color="red";switch(request.responseText){case 'invalid_email':error.innerHTML='Invalid Email';document.getElementById('bluecheck-send-email-email').focus()
break;case 'invalid_purpose':error.innerHTML='Invalid Purpose';document.getElementById('bluecheck-send-email-purpose').focus()
break;case 'empty_message':error.innerHTML='Empty Message';document.getElementById('bluecheck-send-email-message').focus()
break;default:error.innerHTML='Empty Name';document.getElementById('bluecheck-send-email-name').focus()}}}};request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");request.send(jsonToUrlEncoded(ContactForm.form))}},fillForm:function(purpose){document.getElementById('bluecheck-send-email-name').focus()},clearForm:function(){document.getElementById("bluecheck-send-email-submit").children[0].innerHTML='SEND MESSAGE';ContactForm.form={name:'',company:'',email:'',purpose:'',message:''}
document.getElementById("bluecheck-send-email-name").value='';document.getElementById("bluecheck-send-email-email").value='';document.getElementById("bluecheck-send-email-message").value=''}};function sendEmail(){ContactForm.postForm()}
var email=document.querySelector('#'+BlueCheck.language.sendEmail.buttons.email.id)
email.addEventListener('click',sendEmail,!0)
BlueCheck.showModal('sendEmail')
ContactForm.fillForm()},photos:function(){BlueCheck.trackWithMixpanel("Verify Photo ID");if(!BlueCheck.createModal('photos')){return}
function post(){BlueCheck.files={'id_front':photoInput.files[0],'id_selfie':selfieInput.files[0]}
BlueCheck.closeTop(!0)
BlueCheck.open.email()}
function photoClick(){photoInput.click()}
function photoSubmit(){photoBody.style.display='none'
selfieBody.style.display='block'
BlueCheck.trackWithMixpanel("Photo ID Upload");BlueCheck.focusOnElement(BlueCheck.language.photos.buttons.selfieSelect.id,!1)}
function selfieClick(){selfieInput.click()}
function selfieSubmit(){BlueCheck.trackWithMixpanel("Selfie Upload");post()}
var photoBody=document.querySelector('#bluecheck-body-photo-id')
var photoButton=document.querySelector('#'+BlueCheck.language.photos.buttons.photoSelect.id)
var photoInput=document.querySelector('#bluecheck-photo-id-data')
var selfieBody=document.querySelector('#bluecheck-body-selfie')
var selfieButton=document.querySelector('#'+BlueCheck.language.photos.buttons.selfieSelect.id)
var selfieInput=document.querySelector('#bluecheck-selfie-data')
photoBody.style.display='block'
selfieBody.style.display='none'
photoButton.addEventListener('click',photoClick,!0)
photoInput.addEventListener('change',photoSubmit,!0)
selfieButton.addEventListener('click',selfieClick,!0)
selfieInput.addEventListener('change',selfieSubmit,!0)
BlueCheck.showModal('photos')
BlueCheck.focusOnElement(BlueCheck.language.photos.buttons.photoSelect.id,!1)},photosWaiting:function(){BlueCheck.subscribeToRealtimeIO(BlueCheck.orderToken);var dynamicDataObject=BlueCheck.language.photosWaiting;if(!BlueCheck.createModal('photosWaiting',dynamicDataObject))return;BlueCheck.showModal('photosWaiting')},attempts:function(ssnNoMatch){function returnDobSentence(){var dobArray=BlueCheck.splitDob()
var mString=BlueCheck.monthNames[parseInt(dobArray[0])-1]
var dString=BlueCheck.getOrdinal(dobArray[1])+','
var yString=dobArray[2]
return mString+' '+dString+' '+yString}
var userDataFirst=BlueCheck.userData[BlueCheck.verificationAddressType+"_first_name"]
var userDataLast=BlueCheck.userData[BlueCheck.verificationAddressType+"_last_name"]
var fullName=userDataFirst+' '+userDataLast
var fullDob=returnDobSentence()
var dynamicDataObject={fullName:fullName,fullDob:fullDob,caption:ssnNoMatch?BlueCheck.language.attempts.updateSsnCaption:BlueCheck.language.attempts.updateCaption}
if(!BlueCheck.userData.dob){BlueCheck.open.dob();return}
if((!userDataFirst||!userDataLast)&&BlueCheck.attemptsRemaining('name')){BlueCheck.open.name();return}
if(BlueCheck.verificationTypes.length==1&&BlueCheck.attemptsRemaining('photos')){BlueCheck.open.photos()
return}
if(!BlueCheck.createModal('attempts',dynamicDataObject)){return}
function prepareDob(){if(BlueCheck.attemptsRemaining('dob')){dobElement.style.display='inline-block'
dobElement.addEventListener('click',function(){BlueCheck.closeAll(!0)
BlueCheck.open.dob()},!0)}else{dobElement.style.display='none'}}
function prepareName(){if(BlueCheck.isAfterCheckoutProcess){var nameContainer=document.querySelector('#bluecheck-attempt-name-container')
nameContainer.style.display='none'}else if(BlueCheck.attemptsRemaining('name')){nameElement.style.display='none'}else{nameElement.style.display='none'}}
function prepareFlex(){function adjustCss(){if(BlueCheck.verificationTypes.length==2){for(var i=0;i<flexButtons.length;i++){flexButtons[i].style.width='50%'}}else if(BlueCheck.verificationTypes.length==1){for(var i=0;i<flexButtons.length;i++){flexButtons[i].style.width='100%'}}}
if(!BlueCheck.canUseVerificationType('age_name_ssn_dob')&&!BlueCheck.canUseVerificationType(BlueCheck.photoIdVerificationType)){flexTitleElement.style.display='none'
flexAttemptsElement.style.display='none'
return!1}else{flexTitleElement.style.display='block'
flexAttemptsElement.style.display='flex'
adjustCss()
return!0}}
function prepareSsn(ssnNoMatch){if(!BlueCheck.canUseVerificationType('age_name_ssn_dob')){ssnElement.parentNode.style.display='none'}else{element=ssnNoMatch?ssnRetryElement:ssnElement
element.style.display='inline-block'
if(BlueCheck.attemptsRemaining('ssn')){element.classList.add('bluecheck-active-square')
element.addEventListener('click',function(){BlueCheck.closeAll(!0)
BlueCheck.open.ssn()},!0)}else{element.classList.remove('bluecheck-active-square')}}}
function preparePhoto(){if(!BlueCheck.canUseVerificationType(BlueCheck.photoIdVerificationType)){photosElement.parentNode.style.display='none'}else{photosElement.style.display='inline-block'
if(BlueCheck.attemptsRemaining('photos')){photosElement.classList.add('bluecheck-active-square')
photosElement.addEventListener('click',function(){if(BlueCheck.usingOldBrowser()){BlueCheck.open.info(BlueCheck.language.attempts.oldBrowserTitle,BlueCheck.language.attempts.oldBrowserMessage)}else{BlueCheck.closeAll(!0)
BlueCheck.open.photos()}},!0)}else{photosElement.classList.remove('bluecheck-active-square')}}}
var dobElement=document.querySelector('#bluecheck-attempt-dob')
var nameElement=document.querySelector('#bluecheck-attempt-name')
var ssnElement=document.querySelector('#bluecheck-attempt-ssn')
var ssnRetryElement=document.querySelector('#bluecheck-retry-ssn')
var photosElement=document.querySelector('#bluecheck-attempt-photos')
var flexTitleElement=document.querySelector('#bluecheck-modal-body-h2-selectmethod')
var flexAttemptsElement=flexTitleElement.nextElementSibling
var flexButtons=document.querySelectorAll('.bluecheck-flex-attempt-button-container')
prepareDob()
prepareName()
if(prepareFlex()){prepareSsn(ssnNoMatch)
preparePhoto()}
BlueCheck.showModal('attempts')},loading:function(){var dynamicDataObject={}
if(BlueCheck.files){dynamicDataObject.title=BlueCheck.language.loading.loadingPhotos}else{dynamicDataObject.title=BlueCheck.language.loading.loadingInfo}
if(!BlueCheck.createModal('loading',dynamicDataObject)){return}
BlueCheck.progressBar.init()
BlueCheck.showModal('loading')},alert:function(title,message,editDob,hideCustomerSupport){var dynamicDataObject={}
dynamicDataObject.title=title||BlueCheck.language.alert.standardTitle
dynamicDataObject.message=message||BlueCheck.language.alert.standardMessage
if(!BlueCheck.createModal('alert',dynamicDataObject)){return}
function prepareClose(){closeButton.addEventListener('click',function(){BlueCheck.closeTop(!1)})}
function prepareHelp(hideCustomerSupport){helpButton.style.display=hideCustomerSupport?'none':'block'
helpButton.addEventListener('click',function(){BlueCheck.open.help()})}
function prepareDob(){if(typeof editDob=='undefined'){dobButton.style.display='none'}else if(editDob){dobButton.style.display='block'
dobButton.addEventListener('click',function(){BlueCheck.closeAll(!0)
BlueCheck.open.dob()})}}
var closeButton=document.querySelector('#bluecheck-screen-alert-close-button')
var helpButton=document.querySelector('#bluecheck-screen-alert-help-button')
var dobButton=document.querySelector('#bluecheck-screen-alert-dob-button')
prepareClose()
prepareHelp(hideCustomerSupport)
prepareDob()
BlueCheck.showModal('alert')},quit:function(title,message,override){var dynamicDataObject={}
if(typeof override!=='undefined'&&override){dynamicDataObject.title=title||BlueCheck.language.quit.standardTitle
dynamicDataObject.message=message||BlueCheck.language.quit.standardMessage}else{dynamicDataObject.title=BlueCheck.language.quit.standardTitle
dynamicDataObject.message=BlueCheck.language.quit.standardMessage}
if(!BlueCheck.createModal('quit',dynamicDataObject)){return}
function prepareContinue(){continueButton.addEventListener('click',function(){BlueCheck.closeAll(!0)
BlueCheck.postToApiAndHandleResponse()})}
function prepareClose(){closeButton.addEventListener('click',function(){BlueCheck.closeModal('quit')})}
function prepareHelp(){helpButton.style.display='block'
helpButton.addEventListener('click',function(){BlueCheck.open.help()})}
var continueButton=document.querySelector('#bluecheck-screen-quit-continue-button')
var closeButton=document.querySelector('#bluecheck-screen-quit-close-button')
var helpButton=document.querySelector('#bluecheck-screen-quit-help-button')
prepareContinue()
prepareClose()
prepareHelp()
BlueCheck.showModal('quit')},info:function(title,message,redirect){var dynamicDataObject={}
dynamicDataObject.title=title||BlueCheck.language.info.standardTitle
dynamicDataObject.message=message||BlueCheck.language.info.standardMessage
if(!BlueCheck.createModal('info',dynamicDataObject)){return}
function prepareRedirect(){if(!redirect){redirectButton.style.display='none'}else{redirectButton.style.display='block'
redirectButton.addEventListener('click',BlueCheck.verificationAddressTypeRedirectFunction)}}
function prepareClose(){closeButton.addEventListener('click',function(){BlueCheck.closeTop(!1)})}
function prepareHelp(){helpButton.style.display='block'
helpButton.addEventListener('click',function(){BlueCheck.open.help()})}
var redirectButton=document.querySelector('#bluecheck-screen-info-redirect-button')
var closeButton=document.querySelector('#bluecheck-screen-info-close-button')
var helpButton=document.querySelector('#bluecheck-screen-info-help-button')
prepareRedirect()
prepareClose()
prepareHelp()
BlueCheck.showModal('info')},success:function(){if(BlueCheck.skipModalPages.indexOf('success')!=-1){BlueCheck.closingCallbacks()
return}
if(!BlueCheck.createModal('success')){return}
function prepareDone(e){BlueCheck.closeModal('success')}
var doneButton=document.querySelector('#bluecheck-close-success')
doneButton.addEventListener('click',prepareDone,!0)
BlueCheck.showModal('success')},failedSelfie:function(){if(!BlueCheck.createModal('failedSelfie')){return}
function returnToPhoto(e){BlueCheck.closeTop();BlueCheck.open.photos()}
var closeButton=document.querySelector('#bluecheck-return-photo')
closeButton.addEventListener('click',returnToPhoto,!0)
BlueCheck.showModal('failedSelfie')},invalidID:function(){if(!BlueCheck.createModal('invalidID')){return}
function returnToPhoto(e){BlueCheck.closeTop();BlueCheck.open.photos()}
var closeButton=document.querySelector('#bluecheck-return-photo')
closeButton.addEventListener('click',returnToPhoto,!0)
BlueCheck.showModal('invalidID')},failedSelfieInvalidID:function(){if(!BlueCheck.createModal('failedSelfieInvalidID')){return}
function returnToPhoto(e){BlueCheck.closeTop();BlueCheck.open.photos()}
var closeButton=document.querySelector('#bluecheck-return-photo')
closeButton.addEventListener('click',returnToPhoto,!0)
BlueCheck.showModal('failedSelfieInvalidID')},failedNSFW:function(){if(!BlueCheck.createModal('failedNSFW')){return}
function returnToPhoto(e){BlueCheck.closeTop();BlueCheck.open.photos()}
var closeButton=document.querySelector('#bluecheck-return-nsfw')
closeButton.addEventListener('click',returnToPhoto,!0)
BlueCheck.showModal('failedNSFW')}},createModal:function(modal,dynamicDataObject){var container=document.querySelector('#bluecheck-container')
var actualModal=document.querySelector('.bluecheck-screen-'+modal)
if(actualModal){return!1}else{if(typeof dynamicDataObject=='undefined')dynamicDataObject={}
if(BlueCheck.files&&modal!=='help'&&modal!=='email'&&modal!=='loading'){BlueCheck.files=null}}
function createButtons(){var buttonHTML;var buttons=BlueCheck.language[modal].buttons
for(var key in buttons){var object=buttons[key]
var button=document.createElement('button')
button.setAttribute('id',object.id)
button.setAttribute('class',object.class)
if(object.text){var span=document.createElement('span')
span.innerHTML=object.text
span.style.pointerEvents='none'
button.appendChild(span)}
if(object.icon){var icon=document.createElement('i')
icon.setAttribute('aria-hidden','true')
icon.setAttribute('class','fa '+object.icon)
icon.style.pointerEvents='none'
button.appendChild(icon)}
buttonHTML=button.outerHTML
dynamicDataObject[key]=buttonHTML}}
function updateTemplate(){var language=BlueCheck.language[modal]
var globals=BlueCheck.language.globals
var template=document.querySelector('#bluecheck-template-'+modal)
var newHtml=template.innerHTML
for(var key in dynamicDataObject){var text=dynamicDataObject[key]
var regex=new RegExp("\\{\\{dynamic."+key+"\\}\\}","g")
newHtml=newHtml.replace(regex,text)}
for(var key in globals){var text=globals[key]
var regex=new RegExp("\\{\\{globals."+key+"\\}\\}","g")
newHtml=newHtml.replace(regex,text)}
for(var key in language){var text=language[key]
if(typeof text=='object')continue;var regex=new RegExp("\\{\\{"+key+"\\}\\}","g")
newHtml=newHtml.replace(regex,text)}
var body=document.body
var temporaryContainer=document.createElement('div')
temporaryContainer.id='bluecheck-temporary-container'
temporaryContainer.innerHTML=newHtml
body.appendChild(temporaryContainer)
actualModal=document.querySelector('.bluecheck-screen-'+modal)
container.appendChild(actualModal)
body.removeChild(temporaryContainer)
if(BlueCheck.didModalIntroScreen==!1&&modal=='dob'){BlueCheck.open.intro()}}
function addMiscListeners(){var actualModalString='.bluecheck-screen-'+modal
var closeSingleModal=document.querySelectorAll(actualModalString+' .bluecheck-close-this-modal')
var closeAllModals=document.querySelectorAll(actualModalString+' .bluecheck-close-all-modals')
var helpLinks=document.querySelectorAll(actualModalString+' .bluecheck-open-help')
var backLinks=document.querySelectorAll(actualModalString+' .bluecheck-link-back')
var aLinks=document.querySelectorAll(actualModalString+' .bluecheck-link-close')
var buttons=document.querySelectorAll(actualModalString+' input')
for(var i=0;i<buttons.length;i++){buttons[i].addEventListener('keydown',function(e){if(e.keyCode==13){e.preventDefault()}})}
for(var i=0;i<aLinks.length;i++){aLinks[i].addEventListener('keydown',function(e){if(e.keyCode==13){e.preventDefault()}})
aLinks[i].addEventListener('click',function(e){e.preventDefault()})}
for(var i=0;i<closeSingleModal.length;i++){closeSingleModal[i].addEventListener('click',function(e){BlueCheck.trackModalClose(e.target);BlueCheck.closeTop(!1)},!0)}
for(var i=0;i<closeAllModals.length;i++){closeAllModals[i].addEventListener('click',function(e){BlueCheck.trackModalClose(e.target);BlueCheck.closeAll(!1)},!0)}
for(var i=0;i<helpLinks.length;i++){helpLinks[i].addEventListener('click',function(e){BlueCheck.open.help()},!0)}
for(var i=0;i<backLinks.length;i++){backLinks[i].addEventListener("click",function(e){var dobData=BlueCheck.userData.dob
var dobModal=document.querySelector('.bluecheck-screen-dob')
if(!dobData&&dobModal){BlueCheck.open.intro();return}
BlueCheck.closeAll(!0)
BlueCheck.open.attempts(!1)})}}
createButtons()
updateTemplate()
addMiscListeners()
return!0},progressBar:{progress:0,init:function(){BlueCheck.progressBar.progress=0
BlueCheck.progressBar.animate()},update:function(e){if(BlueCheck.lastResponse.length<=0)return
BlueCheck.progressBar.progress=Math.round(((e.loaded/e.total)*100)-5)
setTimeout(BlueCheck.progressBar.animate)},animate:function(){var progress=BlueCheck.progressBar.progress
var status=document.getElementById('bluecheck-upload-status')
var bar=document.getElementById('bluecheck-progress-bar')
if(status&&bar&&progress>=0){status.innerHTML=progress+'% Complete'
bar.style.width=progress+'%'}}},debugOutput:function(message){if(BlueCheck.debug)console.log(message)},sendReport:function(level,message,informTheUser){console.error(message)
if(informTheUser||typeof informTheUser=='undefined'){if(BlueCheck.htmlLoaded){BlueCheck.closeAll(!0)
BlueCheck.open.alert('Error',message)}else{alert(message)}}
var url="https://verify.bluecheck.me/api/report"
var newstring='?domainToken='+encodeURIComponent(BlueCheck.domainToken)+'&level='+level+'&message='+encodeURIComponent(message)
var xhr=new XMLHttpRequest();xhr.open("GET",url+newstring);xhr.send()},getIeVerison:function(){var version=-1
if(navigator.appName=='Microsoft Internet Explorer'){var userAgent=navigator.userAgent
var regex=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})")
if(regex.exec(userAgent)!=null){version=parseFloat(RegExp.$1)}}
return version},usingOldBrowser:function(){var version=BlueCheck.getIeVerison()
if(version==-1)return!1
if(version<=9)return!0
return!1},getOrdinal:function(n){n=Number(n)
var s=["th","st","nd","rd"]
var v=n%100
return n+(s[(v-20)%10]||s[v]||s[0])},splitDob:function(){var dob=BlueCheck.userData.dob
if(dob){var split=dob.split('-')
var yString=split[0]
var mString=split[1]
var dString=split[2]
return[mString,dString,yString]}else{return!1}},getParameterFromUrl:function(name,url){name=name.replace(/[[]]/g,"\$&")
var regex=new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)")
var results=regex.exec(url)
if(!results)return null
if(!results[2])return''
return results[2]},attemptsRemaining:function(type){if(!BlueCheck.canUseAttemptType(type))return 0;return BlueCheck.maxAttempts[type]-BlueCheck.attempts[type]},canUseAttemptType:function(type){var verificationTypes={'name or dob':['age_name_address','age_name_address_dob'],'ssn':['age_name_ssn_dob'],'photos':['age_photoID','age_photoID_address','age_photoID_dob_only']};if(type=='dob'||type=='name')type='name or dob';var possibleTypes=verificationTypes[type];var filteredTypes=possibleTypes.filter(function(verification){return BlueCheck.verificationTypes.indexOf(verification)>=0});return filteredTypes.length!=0},incrementAttemptCount:function(type){if(!BlueCheck.attemptsRemaining(type))return!1;BlueCheck.attempts[type]+=1;return!0},canUseVerificationType:function(type){if(!BlueCheck.verificationTypes.length){return!1}else{return BlueCheck.verificationTypes.indexOf(type)!=-1}},adjustViewportToModal:function(){var viewportmeta=document.querySelector('meta[name="viewport"]')
if(viewportmeta){viewportmeta.setAttribute('content','width=device-width, minimum-scale=1.0, initial-scale=1.0')}else{viewportmeta=document.createElement('meta')
viewportmeta.setAttribute('content','width=device-width, minimum-scale=1.0, initial-scale=1.0')
document.getElementsByTagName('head')[0].appendChild(viewportmeta)}},focusOnElement:function(element,now){if(now==!0){document.getElementById(element).focus()}else{setTimeout(function(){document.getElementById(element).focus()},100)}},showModal:function(modal){var actualModal=document.querySelector('.bluecheck-screen-'+modal)
actualModal.style.display='block'},closeModal:function(modal){var container=document.querySelector('#bluecheck-container')
var children=container.children
var theModal=document.querySelector('.bluecheck-screen-'+modal)
container.removeChild(theModal)
if(children.length==0){BlueCheck.closingCallbacks()}},closeTop:function(waiting){var container=document.querySelector('#bluecheck-container')
var children=container.children
var thisModal=children[children.length-1]
container.removeChild(thisModal)
if(children.length==0&&!waiting){if(BlueCheck.quitAlertBeforeQuitting){BlueCheck.open.quit()
return!1}else{BlueCheck.closingCallbacks()}}},closeAll:function(waiting){var container=document.querySelector('#bluecheck-container')
while(container.firstChild){if(waiting){BlueCheck.closeTop(!0)}else if(BlueCheck.closeTop(!1)==!1){break}}},insertHotjar:function(){var domainTokensUsingHotjar=['0vb5sLtckr1iV1Ehcv77'];if(domainTokensUsingHotjar.length&&domainTokensUsingHotjar.indexOf(BlueCheck.domainToken)==-1){return}
function addHotjar(){(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:583101,hjsv:5};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r)})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=')}
if(typeof window.hj=='undefined'){BlueCheck.debugOutput('Hotjar Script Does Not Exist')
try{addHotjar()
BlueCheck.debugOutput('Added Our Hotjar Account Script')}catch(e){BlueCheck.debugOutput('Hotjar was not successfully added')
BlueCheck.debugOutput(e)}}else{BlueCheck.debugOutput('Hotjar Script Exists')
try{if(typeof window._hjSettings=='undefined')return
if(window._hjSettings.hjid==583101)return
addHotjar()
BlueCheck.debugOutput('Added Our Hotjar Account Script')}catch(e){BlueCheck.debugOutput('Hotjar was not successfully added')
BlueCheck.debugOutput(e)}}},closingCallbacks:function(){BlueCheck.debugOutput("closingCallbacks()")
if(BlueCheck.successful){BlueCheck.platformCallbacks.onSuccess()}else{BlueCheck.platformCallbacks.onQuit()}
BlueCheck.files=null;BlueCheck.platformCallbacks.onClose()},checkForCookiesAndAlert:function(){if(navigator.cookieEnabled)return!0
BlueCheck.open.info(BlueCheck.language.info.cookieTitle,BlueCheck.language.info.cookieMessage)
return!1},setCookie:function(name,value){var exhours=6;var d=new Date();d.setTime(d.getTime()+(exhours*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=name+"="+value+";"+expires+";path=/"},setCookieWithTimeout:function(name,value,exhours){var d=new Date();d.setTime(d.getTime()+(exhours*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=name+"="+value+";"+expires+";path=/"},getCookie:function(name){name=name+"="
var decodedCookie=decodeURIComponent(document.cookie)
var cookieArray=decodedCookie.split(';')
for(var i=0;i<cookieArray.length;i++){var cookie=cookieArray[i]
if(cookie.charAt(0)==' '){cookie=cookie.substring(1)}
if(cookie.indexOf(name)==0){return cookie.substring(name.length,cookie.length)}}
return""},setUserDataCookie:function(){var userData;if(BlueCheck.userData.ssn==''){userData=BlueCheck.userData}else{var userDataContainer=Object.create(BlueCheck.userData)
var userDataCopy=userDataContainer.__proto__
userDataCopy.ssn=''
userData=userDataCopy}
BlueCheck.setCookie('BlueCheckUserData',JSON.stringify(userData))},getUserDataCookie:function(){var cookieData=BlueCheck.getCookie('BlueCheckUserData')
if(cookieData){BlueCheck.userData=JSON.parse(cookieData);return!0}
return!1},billingAndShippingAreTheSame:function(){for(key in BlueCheck.userData){if(key.lastIndexOf('billing_',0)===0){var compareKey='shipping_'+key.replace('billing_','')}else if(key.lastIndexOf('shipping_',0)===0){var compareKey='billing_'+key.replace('shipping_','')}else{continue}
if(BlueCheck.userData[key]!=''&&BlueCheck.userData[compareKey]!=''&&BlueCheck.userData[compareKey]!=BlueCheck.userData[key]){return!1}}
return!0},validateForm:function(){var userData=BlueCheck.userData
var requiredFields=BlueCheck.requiredFields
for(var i=0;i<requiredFields.length;i++){if(userData[requiredFields[i]].length<1){return!1}}
return!0},updateRequiredField:function(operator,field){if(operator=='add'){if(BlueCheck.requiredFields.indexOf(field)>=0)return;BlueCheck.requiredFields.push(field)}
if(operator=='remove'){if(BlueCheck.requiredFields.indexOf(field)<0)return;BlueCheck.requiredFields.splice(field,1)}},setUserData:function(element,field,isRequired,remove,additionalWorkFunction){if(!element){if(!remove)return
if(BlueCheck.userData[field]===undefined)return
BlueCheck.userData[field]=''}else{var value=element.value;if(typeof value==='undefined'){value=element.innerText}
if(BlueCheck.rejectedValues.indexOf(value)>=0){BlueCheck.userData[field]=''}else{if(typeof additionalWorkFunction!=='undefined'){value=additionalWorkFunction(value)}
BlueCheck.userData[field]=value
if(isRequired){BlueCheck.updateRequiredField('add',field)}}}},storeAddress:function(type){var array=BlueCheck.checkoutElements(type)
for(var i=0;i<array.length;i++){var element=array[i][0]
var field=array[i][1]
var isRequired=array[i][2]
var remove=array[i][3]
var additionalWorkFunction=array[i][4]
BlueCheck.setUserData(element,field,isRequired,remove,additionalWorkFunction)}},copyAddressFrom:function(from,to){var userData=BlueCheck.userData
for(var key in userData){var splitParts=key.split("_");if(splitParts[0]!=from){continue}
splitParts.shift()
var suffix=splitParts.join("_")
userData[to+"_"+suffix]=userData[key]}},subscribeToRealtimeIO:function(orderToken){if(orderToken==''){BlueCheck.sendReport('error',"No order token for realtime IO subbscription.");return}
var loadedRealTimeScript;var currentlySubscribedChannel;if(!loadedRealTimeScript){loadedRealTimeScript=!0;BlueCheck.debugOutput("Loading realtime IO script");var realtimeBrowserIoBindList=[];var pusher=null;(function(){var scriptElement=document.createElement('script');scriptElement.type='text/javascript';scriptElement.async=!0;if(typeof requirejs=="function"){scriptElement.text='var realtimeBrowserIoBindList = [ ];var pusher = null;requirejs.config({enforceDefine: true,paths: {Pusher: \'//js.pusher.com/4.3/pusher.min\'}});requirejs(["Pusher"], function(Pusher) {Pusher.logToConsole = true;pusher = new Pusher(\'4232492039c421f2711d\', {cluster: \'us2\',forceTLS: true});});var bindEvent;while(bindEvent = realtimeBrowserIoBindList.pop()) {realtimeBrowserIoSubscribe(bindEvent.channel, bindEvent.event, bindEvent.callback);}'}else{scriptElement.src='https://js.pusher.com/4.3/pusher.min.js'}
scriptElement.addEventListener('load',function(){Pusher.logToConsole=!0;pusher=new Pusher('4232492039c421f2711d',{cluster:'us2',forceTLS:!0});var bindEvent;while(bindEvent=realtimeBrowserIoBindList.pop()){realtimeBrowserIoSubscribe(bindEvent.channel,bindEvent.event,bindEvent.callback)}});var head=document.head||document.getElementsByTagName('head')[0];head.insertBefore(scriptElement,head.firstChild)})();var realtimeBrowserIoSubscribe=function(channel,event,callback){if(pusher){var channel=pusher.subscribe(channel);channel.bind(event,callback)}else{realtimeBrowserIoBindList.push({'channel':channel,'event':event,'callback':callback})}}
var realtimeBrowserIoUnubscribe=function(channel){if(pusher){pusher.unsubscribe(channel);realtimeBrowserIoBindList=[]}}}
var channel='order-'+orderToken;if(channel==currentlySubscribedChannel){BlueCheck.debugOutput("Already subscribed to channel "+channel);return}
if(currentlySubscribedChannel){BlueCheck.debugOutput("Unsubscribing channel "+currentlySubscribedChannel);realtimeBrowserIoUnsubscribe(currentlySubscribedChannel)}
BlueCheck.debugOutput("Subscribing to channel "+channel);realtimeBrowserIoSubscribe(channel,'order-status',function(data){switch(data.status){case 'approved':BlueCheck.closeTop(!0);BlueCheck.gotApprovedResult(data.reason);break;case 'failed':case 'canceled':BlueCheck.closeTop(!0);BlueCheck.gotFailedResult(data.reason,data.message,data.flagScope);break;case 'pending':break;case 'error':switch(data.reason){case 'selfie_not_detected':BlueCheck.closeTop();BlueCheck.open.failedSelfie();break;case 'selfie_invalid_id':BlueCheck.closeTop();BlueCheck.open.failedSelfieInvalidID();break;case 'invalid_id':BlueCheck.closeTop();BlueCheck.open.invalidID();break}
break}});currentlySubscribedChannel=channel},createFormData:function(type){var data=new FormData()
var userDataKeys=Object.keys(BlueCheck.userData)
data.append('version',BlueCheck.version)
data.append('productTypes',BlueCheck.productTypes)
data.append('domainToken',BlueCheck.domainToken)
data.append('orderID',BlueCheck.orderID)
data.append('orderGroup',BlueCheck.orderGroup)
data.append('captchaToken',BlueCheck.captchaToken)
if(type=='ssn'){data.append('verificationType','age_name_ssn_dob')}else if(type=='photos'){data.append('verificationType',BlueCheck.photoIdVerificationType)}
if(BlueCheck.isAfterCheckoutProcess){data.append('orderToken',BlueCheck.orderToken)}
if(!BlueCheck.domainInfo){data.append('fetch','domain')}
if(type=='photos'&&BlueCheck.files){for(var typeOfFile in BlueCheck.files){BlueCheck.debugOutput("Post file \""+typeOfFile+"\"")
data.append('files['+typeOfFile+']',BlueCheck.files[typeOfFile])}
if(BlueCheck.attempts.photos==BlueCheck.maxAttempts.photos-1){data.append('force_manual',!0)}}
for(var i=0;i<userDataKeys.length;i++){var key=userDataKeys[i]
var value=BlueCheck.userData[key]
if(value==null||value.length<1)continue;var string='userData['+key+']'
data.append(string,value)}
if(typeof data._asNative==='function')return data._asNative().fd;return data},postToApiAndHandleResponse:function(type){var responseHandler=function(type,response){try{BlueCheck.currentRequest=null
BlueCheck.closeAll(!0)
BlueCheck.handleApiResponse(JSON.parse(response),type)}catch(e){BlueCheck.sendReport('error',e)}};BlueCheck.postToApiUsingHandler(type,responseHandler)},postToApiUsingHandler:function(type,responseHandler){BlueCheck.debugOutput("postToApiAndHandleResponse("+type+")")
var xhr=new XMLHttpRequest()
BlueCheck.currentRequest=xhr
if(!BlueCheck.usingOldBrowser())xhr.upload.onprogress=BlueCheck.progressBar.update
xhr.open("POST","https://verify.bluecheck.me/api/verify")
if(BlueCheck.files){xhr.timeout=600000}else{xhr.timeout=30000}
BlueCheck.debugOutput("XHR timeout: "+xhr.timeout);if(BlueCheck.lastResponse.length>0){BlueCheck.open.loading()}
xhr.onreadystatechange=function(){if(this.readyState==4){if(this.status==0){return}
if(this.status==413){BlueCheck.currentRequest=null
BlueCheck.sendReport('error',"The photos you are uploading are too large.  Please use photos that are less than 15 MB.")}else if(this.status!=200&&this.status!=400){BlueCheck.currentRequest=null
BlueCheck.sendReport('error',"Network error ("+this.status+"). Please try again.")}else{responseHandler(type,xhr.responseText)}}}
xhr.ontimeout=function(){BlueCheck.sendReport('error',"The network request timed out.  Please try again.")}
xhr.onerror=function(){BlueCheck.sendReport('error',"Network error ("+this.status+"). Please try again.")}
xhr.send(BlueCheck.createFormData(type))},handleApiResponse:function(response,type){BlueCheck.debugOutput("handleApiResponse("+response.result+")")
BlueCheck.lastResponse=response.result
BlueCheck.files=null
if(response.orderToken&&response.orderToken!=BlueCheck.orderToken){BlueCheck.orderToken=response.orderToken}
if(response.verificationTypes){BlueCheck.verificationTypes=response.verificationTypes}
BlueCheck.getDomainInfoFromResponse(response);switch(response.result){case 'approved':BlueCheck.gotApprovedResult(response.reason);return;case 'error':switch(response.errorCode){case 'invalid_user_data':if(response.userDataField=='dob'){if(type=='dob')BlueCheck.attempts[type]+=1;if(BlueCheck.attempts.dob>0){BlueCheck.open.dob(response)}else{BlueCheck.open.dob()}}else{BlueCheck.open.alert('Error',response.message!=''?response.message:'Please make sure the form is completely filled out and try again.',undefined,!0)}
break;case 'photo_upload_error':BlueCheck.open.alert('Error','File type or size not supported. Please select an option below.')
break;case 'invalid_domain_token':BlueCheck.open.alert('Error','Age Verification not active. Please contact this store.')
break;case 'domain_deactivated':BlueCheck.open.alert('Error','Age Verification was deactivated. Please contact this store.')
break;case 'bad_image_format':BlueCheck.open.alert('Error','Incorrect image format. Please upload another image.',!1,!0);break;case 'invalid_photos':BlueCheck.attempts.photos=0;if(response.reason=='nsfw_content_detected'){BlueCheck.open.failedNSFW()}else if(response.reason=='male_gender_detected'){BlueCheck.open.alert('Error','Your account has been flagged. Please contact the web admin for further assistance.',!1,!0)}else if(response.reason=='photo_matched_flagged_user'){BlueCheck.open.alert('Error','One of the photos you submitted has been flagged. Please upload different images.',!1,!0)}else if(response.reason=='bad_image_data'){BlueCheck.open.alert('Error','We were unable to process the files you uploaded.',!1,!0)}else{BlueCheck.open.alert('Error','An unexpected error has occurred.')}
break;case 'invalid_captcha':BlueCheck.attempts.photos=0;BlueCheck.open.attempts(!1);BlueCheck.open.alert('Error','Your account has been flagged. Please contact the web admin for further assistance.',!1,!0);break;default:BlueCheck.open.alert('Error','An unexpected error has occurred. Please select an option below.')
break}
break;case 'photos_received':BlueCheck.open.photosWaiting();return;case 'pending':BlueCheck.open.photosWaiting();return;case 'failed':if(type)BlueCheck.incrementAttemptCount(type);BlueCheck.gotFailedResult(response.reason,response.message,response.flagScope);break;default:BlueCheck.sendReport('Error','Unknown response ("'+response.result+'").')}
BlueCheck.adjustViewportToModal()},gotApprovedResult:function(reason){BlueCheck.trackWithMixpanel("Successful Verification");BlueCheck.successful=!0
if((BlueCheck.didModalIntroScreen&&reason!='verification_not_required')||BlueCheck.forceSuccessModal){BlueCheck.quitAlertBeforeQuitting=!1
BlueCheck.open.success()}else{BlueCheck.closingCallbacks()}},gotFailedResult:function(reason,message,scope){if(reason=='underage'){if(!BlueCheck.userData.dob){BlueCheck.open.dob()}else{BlueCheck.userData.dob=''
BlueCheck.open.alert('Age Requirement Not Met',message?message:'Sorry, you do not meet the minimum age requirement to purchase from this website.',!0)}}else if(reason=='shipping_prohibited'){BlueCheck.open.alert('',message?message:'This store does not ship orders to the area you selected.')}else if(reason=='flagged'||reason=='matched_flagged_id_document'){if(scope=='domain'){BlueCheck.open.alert('Error',BlueCheck.domainInfo.name+' has banned your account from completing verification. For more information please contact '+BlueCheck.domainInfo.name+' customer support.',!1,!0)}else{BlueCheck.open.alert('Verification Failed','Your account has been flagged and you will be unable to complete verification for 14 days.',!1,!1)}}else{if(!BlueCheck.attemptsRemaining('photos')&&!BlueCheck.attemptsRemaining('ssn')){BlueCheck.open.info('Verification Failed','Unfortunately, we were unable to verify you with the information you submitted. If you have any questions you can email <a href="mailto:help@bluecheck.me">help@bluecheck.me</a>.')
return}
BlueCheck.open.attempts(BlueCheck.attempts.ssn>0)}},getDomainInfoIfDidntAlready:function(){if(BlueCheck.domainInfo)return;var responseHandler=function(type,response){BlueCheck.getDomainInfoFromResponse(JSON.parse(response))};BlueCheck.postToApiUsingHandler(null,responseHandler)},getDomainInfoFromResponse:function(response){if(response.domain){BlueCheck.domainInfo=response.domain
BlueCheck.verificationAddressType=response.domain.verificationAddressType}},validateAndDisplayModal:function(){try{if(BlueCheck.successful)return!1
if(BlueCheck.platformCallbacks.scrapeUserData()===!1)return!1
if(BlueCheck.validateForm()===!1)return!1
if(BlueCheck.displayModalCallback()===!1)return!1}catch(e){BlueCheck.sendReport('error',e)
return!1}
return!0},displayModalCallback:function(){BlueCheck.debugOutput("displayModalCallback()")
BlueCheck.successful=!1
BlueCheck.userData.ssn=''
try{if(BlueCheck.platformCallbacks.onOpen()===!1)return!1}catch(e){BlueCheck.sendReport('error',e)
return!1}
BlueCheck.postToApiAndHandleResponse()
return!0},initialize:function(){function getDomainToken(){if(BlueCheck.domainToken)return
var url='https://verify.bluecheck.me/platforms/customintegration/js/AgeVerification-V2.js'
var scriptSource;var scriptElements=document.getElementsByTagName('script')
for(var i=0;i<scriptElements.length;i++){if(scriptElements[i].src.indexOf(url)>=0){scriptSource=scriptElements[i].src
break}}
if(!scriptSource)throw "Script not found."
var domainToken=BlueCheck.getParameterFromUrl('domain_token',scriptSource)
BlueCheck.domainToken=domainToken}
function loadNetworkListener(){window.addEventListener('offline',function(){if(BlueCheck.currentRequest){BlueCheck.currentRequest.abort()
BlueCheck.closeAll(!0)
BlueCheck.open.alert('Network Error','Internet connection lost. Check your network connection and try again.')}})}
function insertMixpanel(){function addMixpanel(){(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);mixpanel.init("a97194dc9ed25075785d26677a9492fe",{debug:!1})}
if(typeof mixpanel=='undefined'){BlueCheck.debugOutput('Mixpanel Script Does Not Exist')
try{addMixpanel()
BlueCheck.debugOutput("Added Our Mixpanel Account Script")}catch(e){BlueCheck.debugOutput('Mixpanel was not successfully added.')
BlueCheck.debugOutput(e)}}else{BlueCheck.debugOutput('Mixpanel Script Exists')}}
function prepareHtml(response){try{var body=document.querySelector('body')
var temporaryContainer=document.createElement('div')
temporaryContainer.id='bluecheck-script-container'
temporaryContainer.innerHTML=response
body.appendChild(temporaryContainer)
var container=document.createElement("div")
container.id='bluecheck-container'
body.appendChild(container)
function formDataPolyfill(global){if(global.FormData)return
function FormData(form){this._data=[];if(!form)return;for(var i=0;i<form.elements.length;++i){var element=form.elements[i];if(element.name!=='')
this.append(element.name,element.value)}}
FormData.prototype={append:function(name,value,filename){var entryName=String(name);var entryValue=value;if('Blob' in global&&value instanceof global.Blob){entryValue=new File(value,"blob")}
if(filename&&'File' in global&&value instanceof global.File){entryValue=new File(entryValue,filename)}
this._data.push([entryName,entryValue])},toString:function(){return this._data.map(function(pair){return encodeURIComponent(pair[0])+'='+encodeURIComponent(pair[1])}).join('&')}};global.FormData=FormData;var send=global.XMLHttpRequest.prototype.send;global.XMLHttpRequest.prototype.send=function(body){if(body instanceof FormData){this.setRequestHeader('Content-Type','application/x-www-form-urlencoded');arguments[0]=body.toString()}
return send.apply(this,arguments)}}
formDataPolyfill(self)
if("document" in window.self){if(!("classList" in document.createElement("_"))||document.createElementNS&&!("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))){(function(view){"use strict";if(!('Element' in view))return;var classListProp="classList",protoProp="prototype",elemCtrProto=view.Element[protoProp],objCtr=Object,strTrim=String[protoProp].trim||function(){return this.replace(/^\s+|\s+$/g,"")},arrIndexOf=Array[protoProp].indexOf||function(item){var
i=0,len=this.length;for(;i<len;i++){if(i in this&&this[i]===item){return i}}
return-1},DOMEx=function(type,message){this.name=type;this.code=DOMException[type];this.message=message},checkTokenAndGetIndex=function(classList,token){if(token===""){throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified")}
if(/\s/.test(token)){throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character")}
return arrIndexOf.call(classList,token)},ClassList=function(elem){var
trimmedClasses=strTrim.call(elem.getAttribute("class")||""),classes=trimmedClasses?trimmedClasses.split(/\s+/):[],i=0,len=classes.length;for(;i<len;i++){this.push(classes[i])}
this._updateClassName=function(){elem.setAttribute("class",this.toString())}},classListProto=ClassList[protoProp]=[],classListGetter=function(){return new ClassList(this)};DOMEx[protoProp]=Error[protoProp];classListProto.item=function(i){return this[i]||null};classListProto.contains=function(token){token+="";return checkTokenAndGetIndex(this,token)!==-1};classListProto.add=function(){var
tokens=arguments,i=0,l=tokens.length,token,updated=!1;do{token=tokens[i]+"";if(checkTokenAndGetIndex(this,token)===-1){this.push(token);updated=!0}}
while(++i<l);if(updated){this._updateClassName()}};classListProto.remove=function(){var
tokens=arguments,i=0,l=tokens.length,token,updated=!1,index;do{token=tokens[i]+"";index=checkTokenAndGetIndex(this,token);while(index!==-1){this.splice(index,1);updated=!0;index=checkTokenAndGetIndex(this,token)}}
while(++i<l);if(updated){this._updateClassName()}};classListProto.toggle=function(token,force){token+="";var result=this.contains(token),method=result?force!==!0&&"remove":force!==!1&&"add";if(method){this[method](token)}
if(force===!0||force===!1){return force}else{return!result}};classListProto.toString=function(){return this.join(" ")};if(objCtr.defineProperty){var classListPropDesc={get:classListGetter,enumerable:!0,configurable:!0};try{objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}catch(ex){if(ex.number===undefined||ex.number===-0x7FF5EC54){classListPropDesc.enumerable=!1;objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}}}else if(objCtr[protoProp].__defineGetter__){elemCtrProto.__defineGetter__(classListProp,classListGetter)}}(window.self))}(function(){"use strict";var testElement=document.createElement("_");testElement.classList.add("c1","c2");if(!testElement.classList.contains("c2")){var createMethod=function(method){var original=DOMTokenList.prototype[method];DOMTokenList.prototype[method]=function(token){var i,len=arguments.length;for(i=0;i<len;i++){token=arguments[i];original.call(this,token)}}};createMethod('add');createMethod('remove')}
testElement.classList.toggle("c3",!1);if(testElement.classList.contains("c3")){var _toggle=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(token,force){if(1 in arguments&&!this.contains(token)===!force){return force}else{return _toggle.call(this,token)}}}
testElement=null}())}
document.getElementById('bluecheck-av-css').addEventListener('load',function(e){if(BlueCheck.htmlLoaded)return
BlueCheck.debugOutput("Loaded BlueCheck AV CSS")
loadNetworkListener()
BlueCheck.insertHotjar();insertMixpanel()
BlueCheck.htmlLoaded=!0
if(BlueCheck.platformCallbacks.onReady()===!1){return}else{BlueCheck.debugOutput("Completed BlueCheck Initialization")}})}catch(e){BlueCheck.sendReport('Error',e)}}
if(BlueCheck.isAfterCheckoutProcess){BlueCheck.quitAlertBeforeQuitting=!0}
getDomainToken()
var xhr=new XMLHttpRequest()
xhr.open("GET","https://verify.bluecheck.me/age-verification/modal.html")
xhr.timeout=15000
xhr.onreadystatechange=function(){if(this.readyState==4){if(this.status==0){return}else if(this.status!=200){BlueCheck.sendReport('error',"Network error ("+this.status+") when loading HTML.")}else{prepareHtml(xhr.responseText)}}}
xhr.ontimeout=function(){BlueCheck.sendReport('error',"The network request timed out when loading the HTML.  Please try reloading the page.")}
xhr.send()}}