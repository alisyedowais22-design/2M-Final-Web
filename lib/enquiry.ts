export const methods=['WhatsApp','Phone call','Email','Online meeting'];
export type Enquiry={name:string;company:string;email:string;phone:string;service:string;method:string;message:string;source:string;website:string;requestId:string};
export function validateEnquiry(input:unknown,services:string[]):{data?:Enquiry;errors:Record<string,string>}{
 if(!input||typeof input!=='object'||Array.isArray(input))return {errors:{form:'Invalid enquiry.'}};
 const obj=input as Record<string,unknown>;const get=(key:string)=>typeof obj[key]==='string'?(obj[key] as string).trim():'';
 const data:Enquiry={name:get('name'),company:get('company'),email:get('email'),phone:get('phone'),service:get('service'),method:get('method'),message:get('message'),source:get('source'),website:get('website'),requestId:get('requestId')};
 const errors:Record<string,string>={};
 if(!data.name||data.name.length>100)errors.name='Please tell us your name (up to 100 characters)';
 if(data.company.length>150)errors.company='Company name must be under 150 characters';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)||data.email.length>254)errors.email='Enter a valid email address';
 if(data.phone.replace(/\D/g,'').length<7||data.phone.replace(/\D/g,'').length>15||!/^[\d\s+().-]+$/.test(data.phone))errors.phone='Enter a reachable phone number';
 if(!services.includes(data.service)&&data.service!=='not-sure')errors.service='Select a product or service';
 if(!methods.includes(data.method))errors.method='Select your preferred contact method';
 if(data.message.length<10||data.message.length>5000)errors.message='A sentence or two about your requirement helps us reply usefully (10–5,000 characters)';
 if(!/^\/(?!\/)[^\r\n]*$/.test(data.source)||data.source.length>250)errors.source='Invalid enquiry source';
 if(!/^[a-zA-Z0-9-]{10,80}$/.test(data.requestId))errors.form='Please refresh the page and try again';
 return {data,errors};
}
