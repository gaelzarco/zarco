import { useState } from 'react';

export default function Contact() {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isSubjectFocused, setIsSubjectFocused] = useState(false);
    const [isMessageFocused, setIsMessageFocused] = useState(false);

    const [email, setEmail] = useState({
        email: '',
        subject: '',
        message: ''
    })

    console.log(email)

    return (
        <div className="mx-auto bg-black w-8/12 max-lg:w-full flex flex-col items-center">
            <div className="w-full border border-neutral-800 bg-neutral-900 rounded-md p-5">
                <h1 className="text-md p-2 mb-4 font-bold text-white">Contact</h1>
                <form onSubmit={e => e.preventDefault()} className="text-left space-y-4 mx-auto flex flex-col">
                    <input
                        name="email@"
                        type="text"
                        className="w-full bg-black text-white border-none p-4 rounded-md focus:outline-none"
                        placeholder={isEmailFocused ? '' : 'Email'}
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => email.email.length < 1 && setIsEmailFocused(false)}
                        onChange={event => setEmail({ ...email, email: event.target.value })}
                    />

                    <input
                        name="emailSubject"
                        type="text"
                        className="w-full bg-black text-white border-none p-4 rounded-md focus:outline-none"
                        placeholder={isSubjectFocused ? '' : 'Subject'}
                        onFocus={() => setIsSubjectFocused(true)}
                        onBlur={() => email.subject.length < 1 &&setIsSubjectFocused(false)}
                        onChange={event => setEmail({ ...email, subject: event.target.value })}
                    />

                    <textarea
                        name="emailMessage"
                        className="w-full bg-black text-white border-none p-4 rounded-md focus:outline-none"
                        placeholder={isMessageFocused ? '' : 'Message'}
                        onFocus={() => setIsMessageFocused(true)}
                        onBlur={() => email.message.length < 1 && setIsMessageFocused(false)}
                        onChange={event => setEmail({ ...email, message: event.target.value })}
                    />

                    <button className="bg-black p-2 px-16 mx-auto bg-black rounded-md font-semibold">Send</button>
                </form>
            </div>
        </div>
    )
}