import React from 'react';

import CardItem from './CardItem'

const Courses = () => (
  <div className="NewsComponent">
    <CardItem
      title='Tai Chi Chuan Marcial - Aplicações dos Movimentos da Forma Longa - com Prof. Roque Severino'
      content={
        <span>
          <b>Data de início</b>: 21/out/2017 <br />
          <b>Local</b>: Sede da SBTCC em São Paulo - Rua José Maria Lisboa, 612 - sl 07
        </span>
      }
      image='http://sbtcc.org.br/arquivos/noticias/teste-04.jpg'
      buttonText='Mais Detalhes'
    />
  </div>
);


export default Courses;
