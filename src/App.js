import React,{useState} from 'react'
import styled from "@emotion/styled"
import Header from "./components/Header";
import CarInfo from "./components/CarInfo";
import Insurance from "./components/Insurance";
import TotalPrice from './components/TotalPrice';
import Spinner from './components/Spinner';

const MainContainer = styled.div`
    max-width:600px;
    margin:0 auto;
`;

const FormContainer = styled.div`
    background-color: #fff;
    padding: 3rem;
`;

function App() {

  const [carInsurance, setcarInsurance] = useState({
      Price: 0,
      values:{
        type:"",
        year:"",
        plan:"",
      }
  })
  const [showSpinner, setShowSpinner] = useState(false)


  const {Price, values} = carInsurance

  return (
    <>
      <MainContainer>
          <Header 
              title="Cotizador de seguros"
          />
          <FormContainer>
              <CarInfo 
                setcarInsurance={setcarInsurance}
                setShowSpinner={setShowSpinner}
              />
              {
                showSpinner ? <Spinner /> 
                :  
                <>
                    <Insurance
                      values={values}
                    />

                    <TotalPrice 
                      Price={Price}
                    />
                </>
              }
          </FormContainer>
      </MainContainer>
    </>
  );
}

export default App;
