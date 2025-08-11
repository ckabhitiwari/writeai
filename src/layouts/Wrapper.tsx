import DemoSidebar from "@/common/DemoSidebar";
import ScrollToTop from "@/common/ScrollToTop"; 

const Wrapper = ({ children }: any) => {
 
  
	return <>
  {children}
  <ScrollToTop />
  <DemoSidebar />
  </>;
};

export default Wrapper;
 