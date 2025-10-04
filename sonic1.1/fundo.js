function FundoParallax(context, imagem, velocidade, profundidade) {
   this.context = context;
   this.imagem = imagem;
   this.velocidade = velocidade;      
   this.profundidade = profundidade; 
   this.posicaoEmenda = 0;            
   this.ativo = false;                  
}

FundoParallax.prototype = {
   definirMovimento: function(ativo, direcao) {
      this.ativo = ativo;
      this.direcao = direcao || 1; 
   },
   
   atualizar: function() {
      if (this.ativo) {
         var velocidadeReal = this.velocidade * this.profundidade * this.direcao;
         
         this.posicaoEmenda += velocidadeReal;
         
         if (this.posicaoEmenda > this.imagem.width) {
            this.posicaoEmenda = 0;
         } else if (this.posicaoEmenda < -this.imagem.width) {
            this.posicaoEmenda = 0;
         }
      }
   },
   
   desenhar: function() {
      if (!this.imagem || !this.imagem.complete) return;
      
      var img = this.imagem;
      
      var posicaoX = this.posicaoEmenda - img.width;
      this.context.drawImage(img, posicaoX, 0);
      
      posicaoX = this.posicaoEmenda;
      this.context.drawImage(img, posicaoX, 0);
      
      posicaoX = this.posicaoEmenda + img.width;
      this.context.drawImage(img, posicaoX, 0);
   }
};

function GerenciadorFundos(context) {
   this.context = context;
   this.camadas = [];
}

GerenciadorFundos.prototype = {
   adicionarCamada: function(imagem, velocidade, profundidade) {
      var camada = new FundoParallax(context, imagem, velocidade, profundidade);
      this.camadas.push(camada);
      return camada;
   },
   
   definirMovimento: function(ativo, direcao) {
      for (var i = 0; i < this.camadas.length; i++) {
         this.camadas[i].definirMovimento(ativo, direcao);
      }
   },
   
   atualizar: function() {
      for (var i = 0; i < this.camadas.length; i++) {
         this.camadas[i].atualizar();
      }
   },
   
   desenhar: function() {
      for (var i = 0; i < this.camadas.length; i++) {
         this.camadas[i].desenhar();
      }
   }
};