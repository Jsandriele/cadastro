import './styleForm.css';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import Datepicker from "react-datepicker"


interface FormValues {
  fisica: string;
  juridica: boolean;
  nome: string;
  cpf: string;
  razaoSocial: string;
  cnpj: string;
  dataEntrada: string;
  senha: string;
  confsenha: string;
  email: string;
  email2: string;
  confemail: string;
  phone: string;
  phone2: string;
}



export const FormRegister = () => {

  const {
    register,
    
    handleSubmit,
    
  }= useForm<FormValues>({
    fisica: '',
    juridica: false,
    nome: '',
    cpf: '',
    razaoSocial: '',
    cnpj: '',
    dataEntrada: '',
    senha: '',
    confsenha: '',
    email: '',
    email2: '',
    confemail: '',
    phone: '',
    phone2: '',
  });    
  const handleSubmitForm = (data: any)=>{
    console.log(data)
  }
  
  return (
    <div className="Form">
      <div className="hidden form_input">
        <div className="header">
          <img src="./LogoMangue.png" alt="Logo" id="LogoMangue" />
          <h1>Formulário</h1>
          <div className="checkBox">
            <label htmlFor="checkpessoafisica" id="checkpessoafisica">
              <input type="checkbox" id="check_inputfisica" />
              <span id="pessoafisica">Pessoa física</span>
            </label>
            <label htmlFor="checkpessoajuridica" id="checkpessoajuridica">
              <input type="checkbox" id="check_inputjuridica" />
              <span id="pessoajuridica">Pessoa jurídica</span>
            </label>
          </div>
        </div>
        <form method="POST" className="form_inputs_dados">
          <label htmlFor="inputDadosNome">
            Nome do responsável
            <br />
            <input
              required
              type="text"
              placeholder="Responsável-pessoa física"
              id="nome"
            />
          </label>
          <label htmlFor="inputDadosCpf">
            CPF
            <br />
            <InputMask
             
              mask="999.999.999-99"
              maskChar=" "
              placeholder="000.000.000-00"
              required
            />
          </label>

          <label htmlFor="inputDadosRazaoSocial">
            Razão social / Nome fantasia
            <br />
            <input
              type="text"
              placeholder="Empresa"
              id="razaoSocial"
              required
            />
          </label>
          <label htmlFor="inputDadosCnpj">
            CNPJ
            <br />
            <InputMask
              
              mask="99.999.999/9999-99"
              maskChar=" "
              placeholder="00.000.000/0000-00"
              required
            />
          </label>
          <label htmlFor="inputDadosEntrada">
            Data de entrada
            <br />
            <input
              type="text"
              id="dataEntrada"
              required
              
            >
              <Datepicker/>
            </input>
          </label>
          <label htmlFor="inputDadosSenha">
            Senha
            <br />
            <InputMask
              type="password"
              
              mask=""
              maskChar=" "
              placeholder="********"
              required
            />
          </label>
          <label htmlFor="inputDadosConfirmSenha">
            Confirmar Senha
            <br />
            <InputMask
             
              type="password"
              mask=""
              maskChar=" "
              placeholder="********"
              required
            />
          </label>
          <label htmlFor="inputDadosEmail">
            Email
            <br />
            <input
              required
              type="email"
              placeholder="@exemplo.com"
              id="Email"
            />
          </label>
          <label htmlFor="inputDadosEmail2">
            Email 2
            <br />
            <input type="email" placeholder="@exemplo.com" id="Email2" />
          </label>
          <label htmlFor="inputDadosConfirmEmail">
            Confirmar e-mail
            <br />
            <input
              required
              type="email"
              placeholder="@exemplo.com"
              id="confirmEmail"
            />
          </label>
          <label htmlFor="inputDadosPhone">
            Telefone
            <br />
            <input
              required
              type="text"
              placeholder="(00) 0000-0000 "
              id="Phone"
            />
          </label>
          <label htmlFor="inputDadosPhone2">
            Telefone 2
            <br />
            <input type="text" placeholder="(00) 0000-0000 " id="Phone2" />
          </label>
          <form className="form-check-termos">
            <label htmlFor="inputDadoscheckTermos" id="termos">
              <input type="checkbox" id="checkTermos" />
              <span id="checkTermostext">
                Eu concordo com os termos e condições de uso
              </span>
            </label>
          </form>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
