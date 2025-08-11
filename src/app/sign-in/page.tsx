
import Signin from '@/components/sign-in';
import Wrapper from '@/layouts/Wrapper'; 

export const metadata  = {
  title: "Uxora Sign in - IT Solution & Technology Next JS Temaptle",
  description: "Uxora - IT Solution & Technology Next JS Temaptle",
}
 
const index = () => {
  return (
    <Wrapper>
      <Signin />
    </Wrapper>
  );
};

export default index;