# Generator_Doc

create table documentos (
	id int auto_increment primary key,
    num_doc char(30),
    tipo_doc char(50),
    data_hota datetime,
    usuario  char(100),
    descricao char(100)
);

