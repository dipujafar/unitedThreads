import ForgetPasswordForm from "@/components/(auth)/forgetPassword/ForgetPasswordForm";


const ForgetPasswordPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-primary ">
      <div className="flex justify-center items-center md:max-w-[581px] md:h-[500px]  mx-auto border-2 border-[#363D43] md:px-12 px-6 py-5 rounded-[40px] bg-[#3A3F3F] ">
        <div>
        <h2 className="text-2xl font-semibold text-[#F8FAFC] text-center mb-6">Forgot Password</h2>
        <ForgetPasswordForm></ForgetPasswordForm>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
