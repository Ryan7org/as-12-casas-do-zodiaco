function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const biogra = document.querySelector("p");
    
    if(valor=="gemeos" || valor=="Gêmeos" || valor=="gêmeos"){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Saga de Gêmeos: Saga é complexo, com sua dualidade refletindo os gêmeos. Ele pode alternar entre o bem e o mal, lutando contra seu lado sombrio.";
    }

    else if(valor=="escorpião" || valor == "Escorpião" || valor == "escorpiao"){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Milo de Escorpião: Milo é intenso e determinado, características de Escorpião. Sua lealdade é inabalável, e ele é conhecido por sua força.";
    }
    
    else if(valor=="peixes" || valor == "Peixe"){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Afrodite de Peixes: Afrodite é sensível e sonhador, características de Peixes. Sua natureza gentil contrasta com sua habilidade no combate.";
    }
    else if(valor=="Áries" || valor == "aries" || valor == "Aries"){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Mu de Áries: Mu é protetor e leal, como típico de Áries. Sua personalidade é corajosa e determinada, sempre pronta para lutar pelas pessoas que ama.";
    }
    else if(valor=="Touro" || valor == "touro"){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Aldebaran de Touro: Aldebaran é paciente e teimoso, como os traços de Touro. Ele é forte e confiável, muitas vezes agindo como um pilar de apoio para os outros.";
    }
    else if(valor=="virgem" || valor == "Virgem"){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Shaka de Virgem: Shaka é analítico e perfeccionista, como os traços de Virgem. Ele é sábio e compassivo, sempre buscando a verdade interior.";
    }
    else if(valor=="aquario" || valor == "Aquario"){
        texto.innerHTML = "Aquario";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Camus de Aquário: Camus é intelectual e humanitário, como típico de Aquário. Ele valoriza a amizade e está disposto a enfrentar desafios por ela.";
    }
    else if(valor=="sagitario"){
        texto.innerHTML = "Sagitario";
        imagem.setAttribute("src","img/sargitario.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Aiolos de Sagitário: Aiolos é aventureiro e otimista, como típico de Sagitário. Ele é um herói destemido, disposto a sacrificar-se pelos outros.";
    }
    else if(valor=="capricornio"){
        texto.innerHTML = "Capricornio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Shura de Capricórnio: Shura é disciplinado e ambicioso, características de Capricórnio. Ele luta pelo dever, mesmo que isso signifique tomar decisões difíceis.";
    }
    else if(valor=="leão"){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Aiolia de Leão: Aiolia é nobre e leal, típico de Leão. Sua personalidade é ardente e protetora, demonstrando grande coragem.";
    }
    else if(valor=="libra"){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Dohko de Libra: Dohko é equilibrado e pacífico, como típico de Libra. Ele busca justiça e harmonia, mas pode ser formidável quando necessário.";
    }
    else if(valor=="cancer"){
        texto.innerHTML = "Cancer";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Máscara da Morte de Câncer: Máscara da Morte é emocional e misterioso, características de Câncer. Ele é sensível, mas também esconde segredos profundos.";
    }
    else if(valor=="virgem"){
        texto.innerHTML = "virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Shaka de Virgem:** Shaka é analítico e perfeccionista, como os traços de Virgem. Ele é sábio e compassivo, sempre buscando a verdade interior.";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}
