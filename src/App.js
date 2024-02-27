import logo from './logo.svg';
import './App.css';
import {Navbar,Footer, Heading,Container, UpdationBox,Card,Card4,Card2,AboutCard} from "./Components"

function App() {
  return (
    <div>
      <Navbar/>
      <Container className='px-20'>
        <Heading className='pt-20 text-4xl mt-5' content="Best Website builders in the US"/>        
        <UpdationBox/>
        <Heading className='py-4' content="Home > Hosting for all > Hosting > Hosting6 > Hosting5"/>
        <Card number="1" info="Best Choice" infosrc="/img2.png" name='Builder-1' btext='WixPro 72-Inch Responsive Website Builder-' text1=' Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)' text2='[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.' value='9.8' rating='Exceptional' stars='5' />
        <Card number='2' info="Best Value" infosrc="/img3.png" name='Builder' btext='SiteCraft 68-Inch Ultimate Web Design Studio-' text1='Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)' text2='[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.' value='9.5' rating='Excellent' stars='4' />
        <Card number='3' name='Builder 1' btext='WixPro 72-Inch Responsive Website Builder-' text1=' Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)' text2='[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.' value='9.3' rating='Exceptional' stars='5' />
        <Card name='Builder-1' number='4' btext='WixPro 72-Inch Responsive Website Builder-' text1=' Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)' value='9.8' rating='Exceptional' stars='5' div='true'/>
        <Heading className='py-10 text-2xl' content="Related Deals you might like for"/>        
        <Container className='flex justify-center flex-wrap'>
          <Card2/>
          <Card2/>
          <Card2/>
        </Container>
        <Card4/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
