import Link from "next/link"
const Footer = () => {
    return (
        <div className=" space-y-7">
            <div className="bg-[#ededed27] w-full h-10"></div>
            <div className="flex item-center justify-center gap-3">
                <h1>Support</h1>
                <img className="h-8" src='icons8-call-48.png' />
                <h1>
                    Calling 7699629860</h1>
                <img className="h-8" src="icons8-whatsapp-50.png" />
                <h1>WhatsApp +918272905898</h1>
            </div>
            <div className="flex gap-3 justify-center">
                <Link className='btn' href="/PrivacyPolicy">
                    Privacy Policy
                </Link>
                <div className='bg-black  w-[2px]'></div>

                <Link className='btn' href="/KYC">
                    KYC
                </Link>
                <div className='bg-black  w-[2px]'></div>

                <Link className='btn' href="/TermsandConditions">
                    Terms and Conditions
                </Link>
                <div className='bg-black  w-[2px]'></div>

                <Link className='btn' href="/RulesandRegulations">
                    Rules and Regulations
                </Link>
                <div className='bg-black  w-[2px]'></div>

                <Link className='btn' href="/ResponsibleGambling">
                    Responsible Gambling
                </Link>
            </div>
        </div>
    )
}

export default Footer