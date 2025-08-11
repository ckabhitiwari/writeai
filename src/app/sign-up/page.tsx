 
import Signup from '@/components/sign-up';
import Wrapper from '@/layouts/Wrapper'; 

export const metadata  = {
  title: "Uxora Sign up - IT Solution & Technology Next JS Temaptle",
  description: "Uxora - IT Solution & Technology Next JS Temaptle",
}
 
const index = () => {
  return (
    <Wrapper>
      <Signup />
    </Wrapper>
  );
};

export default index;