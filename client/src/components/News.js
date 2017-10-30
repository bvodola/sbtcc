import React from 'react';

import CardItem from './CardItem'

const News = () => (
  <div className="NewsComponent">
    <CardItem
      title='Seminário Internacional de Tai Chi Chuan 2017 - Mestre Yang Jun no Brasil com 3 Seminários Especiais!'
      subheader='11 de Novembro de 2017'
      image='http://sbtcc.org.br/arquivos/noticias/teste-04.jpg'
      content='-Seminário de Forma Curta em São Paulo -Seminário de Forma Longa 103 em Florianópolis -Seminário para Instrutores em São Paulo Organize sua agenda e não perca!'
      buttonText='Leia Mais'
    />
  </div>
);


export default News;
