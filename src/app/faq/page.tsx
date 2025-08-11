 
import Faq from '@/components/faq'; 
import Wrapper from '@/layouts/Wrapper'; 

export const metadata  = {
  title: "Uxora Faq - IT Solution & Technology Next JS Temaptle",
  description: "Uxora - IT Solution & Technology Next JS Temaptle",
}
 
const index = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default index;