 
import HomeOne from '@/components/Home';
import Wrapper from '@/layouts/Wrapper'; 

export const metadata  = {
  title: "Uxora - IT Solution & Technology Next JS Temaptle",
  description: "Uxora - IT Solution & Technology Next JS Temaptle",
}
 
const index = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default index;