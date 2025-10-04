var SONIC_DIREITA = 1;
var SONIC_ESQUERDA = 2;

function Sonic(context, teclado, imagem) { 
   this.context = context; 
   this.teclado = teclado; 
   this.x = 200; 
   this.y = 300; 
   this.velocidade = 10;

   this.sheet = new Spritesheet(context, imagem, 3, 8);
   this.sheet.intervalo = 60;

   this.andando = false;
   this.direcao = SONIC_DIREITA;
} 

Sonic.prototype = { 
   atualizar: function() { 
      var estaAndando = false;
      var direcaoMovimento = 1;
      
      if (this.teclado.pressionada(SETA_DIREITA)) {
         if (! this.andando || this.direcao != SONIC_DIREITA) {
            this.sheet.linha = 1;
            this.sheet.coluna = 0;
         }

         this.andando = true;
         this.direcao = SONIC_DIREITA;
         estaAndando = true;
         direcaoMovimento = -1;

         this.sheet.proximoQuadro();
      }

      else if (this.teclado.pressionada(SETA_ESQUERDA)) {
         if (! this.andando || this.direcao != SONIC_ESQUERDA) {
            this.sheet.linha = 2;
            this.sheet.coluna = 0;
         }

         this.andando = true;
         this.direcao = SONIC_ESQUERDA;
         estaAndando = true;
         direcaoMovimento = 1;
         
         this.sheet.proximoQuadro();
      }

      else {
         if (this.direcao == SONIC_DIREITA) 
            this.sheet.coluna = 0; 
         else if (this.direcao == SONIC_ESQUERDA) 
            this.sheet.coluna = 1; 

         this.sheet.linha = 0; 
         this.andando = false;
         estaAndando = false;
      }
      
      if (window.gerenciadorFundos) {
         gerenciadorFundos.definirMovimento(estaAndando, direcaoMovimento);
      }
   }, 
   desenhar: function() { 
      this.sheet.desenhar(this.x, this.y);         
   } 
}