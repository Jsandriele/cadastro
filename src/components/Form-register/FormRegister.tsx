import React from 'react';
import { useState } from 'react';
import './styleForm.css';
import InputMask from 'react-input-mask';

export const FormRegister = () => {
  return (
    <div className="Form">
      <div className="form_input">
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
              {...this.props}
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
              {...this.props}
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
              placeholder="__/__/__"
            />
          </label>
          <label htmlFor="inputDadosSenha">
            Senha
            <br />
            <InputMask
              type="password"
              {...this.props}
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
              {...this.props}
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
