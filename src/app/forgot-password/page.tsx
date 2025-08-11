
 
import ForgotPassword from '@/components/forgot-password'; 
import Wrapper from '@/layouts/Wrapper'; 

export const metadata  = {
  title: "Uxora Forgot Password - IT Solution & Technology Next JS Temaptle",
  description: "Uxora - IT Solution & Technology Next JS Temaptle",
}
 
const index = () => {
  return (
    <Wrapper>
      <ForgotPassword />
    </Wrapper>
  );
};

export default index;