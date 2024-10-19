import NameIcon from '../assets/person.svg?react'; // This should work with the correct setup
import PhoneIcon from '../assets/phone.svg?react';
import CompanyNameIcon from '../assets/person.svg?react';
import CompanyEmailIcon from '../assets/mail.svg?react';
import EmployeeSizeIcon from '../assets/group.svg?react';


export const Signup = () => {
    return (
        <div className="container max-w-full flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-60 my-10">
            <div className="flex justify-center items-center">
                <div className="text-cuvetteGray max-w-[430px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex flex-col justify-center items-center p-5 border border-black/20 rounded-lg">
                    <div className="text-black font-semibold text-2xl">Sign Up</div>
                    <div className="text-cuvetteGray text-sm mt-2">Lorem Ipsum is simply dummy text</div>
                    <div className="flex flex-col items-center justify-center w-[20rem] md:w-96 mt-5">
                        {[
                            { placeholder: 'Name', Icon: NameIcon },
                            { placeholder: 'Phone no.', Icon: PhoneIcon },
                            { placeholder: 'Company Name', Icon: CompanyNameIcon },
                            { placeholder: 'Company Email', Icon: CompanyEmailIcon },
                            { placeholder: 'Employee Size', Icon: EmployeeSizeIcon },
                        ].map(({ placeholder, Icon }) => (
                            <div key={placeholder} className="relative w-full">
                                <div className="flex items-center bg-cuvetteLightGray border rounded-md py-2 px-3 my-2">
                                    <Icon className="mr-3 w-4 h-4" />
                                    <input
                                        className="bg-transparent flex-1 border-none placeholder-cuvetteBlack focus:outline-none"
                                        type="text"
                                        placeholder={placeholder}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center text-sm mt-4">
                        By clicking on proceed you will accept our<br /> Terms & Conditions
                    </div>
                    <div className="w-[20rem] md:w-96 bg-cuvetteBlue py-1 rounded-lg text-white flex items-center justify-center mt-5 cursor-pointer">
                        Proceed
                    </div>
                </div>
            </div>
        </div>
    );
};