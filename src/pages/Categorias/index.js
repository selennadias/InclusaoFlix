import React, {useState, useEffect} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useForm } from 'react-hook-form';
function CadastroCategoria() {
 const { register, handleSubmit, errors } = useForm();
 return (
 <div>
 <Header />
 <h1> Cadastro Categoria </h1>
 <form onSubmit={handleSubmit()} className="form-group">
 <input type="text" className="formcontrol" placeholder="Título" name="titulo" ref={register({required: true})} />
 <br />
 <input type="text" className="formcontrol" placeholder="Descrição Extra" name="descricao" ref={register({required: true})} />
 <br />
 <input type="text" className="formcontrol" placeholder="Link Extra" name="url" ref={register({required: true})} />
 <br />
 <input type="color" className="formcontrol" placeholder="Cor" name="cor" ref={register({required: true})} />
 <br />
 <input type="submit" className="btn btn-primary btnlg" value="Salvar"/>
 </form>
 <Footer />
 </div>
 )
};
export default CadastroCategoria;