const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Robusta para Operações Matemáticas (Executable Specification)', () => {

  // === Bloco 1: Operações Básicas (1-10) ===
  describe('soma', () => {
    it('soma números inteiros positivos e negativos corretamente', () => {
      expect(soma(2, 3)).toBe(5);
      expect(soma(-2, 3)).toBe(1);
      expect(soma(-4, -6)).toBe(-10);
    });

    it('mantém o valor inalterado ao somar o elemento neutro (zero)', () => {
      expect(soma(5, 0)).toBe(5);
      expect(soma(0, 5)).toBe(5);
    });

    it('soma números com ponto flutuante com precisão', () => {
      expect(soma(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtracao', () => {
    it('calcula a diferença entre dois números preservando o sinal', () => {
      expect(subtracao(5, 2)).toBe(3);
      expect(subtracao(2, 5)).toBe(-3);
      expect(subtracao(-5, -2)).toBe(-3);
    });

    it('retorna o próprio número ao subtrair zero', () => {
      expect(subtracao(7, 0)).toBe(7);
      expect(subtracao(0, 7)).toBe(-7);
    });
  });

  describe('multiplicacao', () => {
    it('multiplica fatores positivos, negativos e decimais', () => {
      expect(multiplicacao(3, 4)).toBe(12);
      expect(multiplicacao(3, -4)).toBe(-12);
      expect(multiplicacao(-3, -4)).toBe(12);
      expect(multiplicacao(2.5, 4)).toBe(10);
    });

    it('retorna zero ao multiplicar por zero e o próprio número ao multiplicar por um', () => {
      expect(multiplicacao(99, 0)).toBe(0);
      expect(multiplicacao(0, 99)).toBe(0);
      expect(multiplicacao(42, 1)).toBe(42);
    });
  });

  describe('divisao', () => {
    it('divide dividendo por divisor positivo ou negativo', () => {
      expect(divisao(10, 2)).toBe(5);
      expect(divisao(-10, 2)).toBe(-5);
      expect(divisao(10, -2)).toBe(-5);
      expect(divisao(7, 2)).toBe(3.5);
    });

    it('rejeita divisão por zero lançando exceção com mensagem explicativa', () => {
      expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
      expect(() => divisao(-5, 0)).toThrow('Divisão por zero não é permitida.');
    });
  });

  describe('potencia', () => {
    it('eleva uma base a um expoente positivo', () => {
      expect(potencia(2, 3)).toBe(8);
      expect(potencia(3, 2)).toBe(9);
    });

    it('trata expoente zero e expoente um', () => {
      expect(potencia(5, 0)).toBe(1);
      expect(potencia(0, 0)).toBe(1);
      expect(potencia(7, 1)).toBe(7);
    });

    it('trata expoente negativo e base fracionária', () => {
      expect(potencia(2, -1)).toBe(0.5);
      expect(potencia(4, -2)).toBe(0.0625);
    });
  });

  describe('raizQuadrada', () => {
    it('calcula a raiz quadrada de números positivos e de zero', () => {
      expect(raizQuadrada(16)).toBe(4);
      expect(raizQuadrada(9)).toBe(3);
      expect(raizQuadrada(0)).toBe(0);
    });

    it('rejeita radicando negativo lançando erro com a mensagem exata', () => {
      expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
      expect(() => raizQuadrada(-100)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
    });
  });

  describe('restoDivisao', () => {
    it('retorna o resto exato da divisão inteira', () => {
      expect(restoDivisao(10, 3)).toBe(1);
      expect(restoDivisao(10, 5)).toBe(0);
      expect(restoDivisao(7, 4)).toBe(3);
    });
  });

  describe('fatorial', () => {
    it('calcula o fatorial de zero e de um como 1', () => {
      expect(fatorial(0)).toBe(1);
      expect(fatorial(1)).toBe(1);
    });

    it('calcula o fatorial de números naturais maiores que um', () => {
      expect(fatorial(2)).toBe(2);
      expect(fatorial(3)).toBe(6);
      expect(fatorial(4)).toBe(24);
      expect(fatorial(5)).toBe(120);
    });

    it('rejeita números negativos lançando erro com a mensagem esperada', () => {
      expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
      expect(() => fatorial(-5)).toThrow('Fatorial não é definido para números negativos.');
    });
  });

  describe('mediaArray', () => {
    it('calcula a média aritmética de múltiplos elementos', () => {
      expect(mediaArray([10, 20, 30])).toBe(20);
      expect(mediaArray([5, 15])).toBe(10);
      expect(mediaArray([-10, 10])).toBe(0);
    });

    it('retorna o próprio elemento para array unitário', () => {
      expect(mediaArray([42])).toBe(42);
    });

    it('retorna 0 para array vazio', () => {
      expect(mediaArray([])).toBe(0);
    });
  });

  describe('somaArray', () => {
    it('soma todos os elementos contidos no array', () => {
      expect(somaArray([1, 2, 3])).toBe(6);
      expect(somaArray([10, -5, 3])).toBe(8);
      expect(somaArray([42])).toBe(42);
    });

    it('retorna 0 para array vazio', () => {
      expect(somaArray([])).toBe(0);
    });
  });

  // === Bloco 2: Operações em Arrays e Checagens (11-20) ===
  describe('maximoArray', () => {
    it('encontra o maior valor entre números positivos e negativos', () => {
      expect(maximoArray([1, 50, 10])).toBe(50);
      expect(maximoArray([-10, -2, -50])).toBe(-2);
      expect(maximoArray([7])).toBe(7);
    });

    it('rejeita array vazio com a mensagem exata', () => {
      expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
    });
  });

  describe('minimoArray', () => {
    it('encontra o menor valor entre números positivos e negativos', () => {
      expect(minimoArray([10, 2, 100])).toBe(2);
      expect(minimoArray([-10, -2, -50])).toBe(-50);
      expect(minimoArray([7])).toBe(7);
    });

    it('rejeita array vazio com a mensagem exata', () => {
      expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
    });
  });

  describe('valorAbsoluto', () => {
    it('retorna o módulo positivo para números negativos, positivos e zero', () => {
      expect(valorAbsoluto(-5)).toBe(5);
      expect(valorAbsoluto(5)).toBe(5);
      expect(valorAbsoluto(0)).toBe(0);
      expect(valorAbsoluto(-0.75)).toBe(0.75);
    });
  });

  describe('arredondar', () => {
    it('arredonda para o inteiro mais próximo conforme regra padrão', () => {
      expect(arredondar(9.8)).toBe(10);
      expect(arredondar(9.2)).toBe(9);
      expect(arredondar(9.5)).toBe(10);
      expect(arredondar(-2.5)).toBe(-2);
    });
  });

  describe('isPar', () => {
    it('identifica números pares positivos, negativos e zero', () => {
      expect(isPar(100)).toBe(true);
      expect(isPar(0)).toBe(true);
      expect(isPar(-4)).toBe(true);
    });

    it('rejeita números ímpares', () => {
      expect(isPar(7)).toBe(false);
      expect(isPar(-7)).toBe(false);
      expect(isPar(1)).toBe(false);
    });
  });

  describe('isImpar', () => {
    it('identifica números ímpares positivos e negativos', () => {
      expect(isImpar(7)).toBe(true);
      expect(isImpar(-7)).toBe(true);
      expect(isImpar(1)).toBe(true);
    });

    it('rejeita números pares e zero', () => {
      expect(isImpar(100)).toBe(false);
      expect(isImpar(0)).toBe(false);
      expect(isImpar(-4)).toBe(false);
    });
  });

  describe('calcularPorcentagem', () => {
    it('calcula o valor correspondente ao percentual fornecido', () => {
      expect(calcularPorcentagem(50, 200)).toBe(100);
      expect(calcularPorcentagem(10, 150)).toBe(15);
      expect(calcularPorcentagem(0, 200)).toBe(0);
      expect(calcularPorcentagem(100, 75)).toBe(75);
    });
  });

  describe('aumentarPorcentagem', () => {
    it('acrescenta o percentual ao valor original', () => {
      expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110);
      expect(aumentarPorcentagem(200, 25)).toBeCloseTo(250);
      expect(aumentarPorcentagem(50, 0)).toBeCloseTo(50);
    });
  });

  describe('diminuirPorcentagem', () => {
    it('subtrai o percentual do valor original', () => {
      expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90);
      expect(diminuirPorcentagem(200, 25)).toBeCloseTo(150);
      expect(diminuirPorcentagem(80, 0)).toBeCloseTo(80);
    });
  });

  describe('inverterSinal', () => {
    it('inverte sinal de números positivos e negativos', () => {
      expect(inverterSinal(42)).toBe(-42);
      expect(inverterSinal(-42)).toBe(42);
      expect(inverterSinal(0)).toBe(-0);
    });
  });

  // === Bloco 3: Funções Trigonométricas e Logarítmicas (21-30) ===
  describe('seno', () => {
    it('calcula o seno para ângulos em radianos', () => {
      expect(seno(0)).toBe(0);
      expect(seno(Math.PI / 2)).toBeCloseTo(1);
      expect(seno(Math.PI)).toBeCloseTo(0);
    });
  });

  describe('cosseno', () => {
    it('calcula o cosseno para ângulos em radianos', () => {
      expect(cosseno(0)).toBe(1);
      expect(cosseno(Math.PI / 2)).toBeCloseTo(0);
      expect(cosseno(Math.PI)).toBeCloseTo(-1);
    });
  });

  describe('tangente', () => {
    it('calcula a tangente para ângulos em radianos', () => {
      expect(tangente(0)).toBe(0);
      expect(tangente(Math.PI / 4)).toBeCloseTo(1);
    });
  });

  describe('logaritmoNatural', () => {
    it('calcula o logaritmo neperiano', () => {
      expect(logaritmoNatural(Math.E)).toBe(1);
      expect(logaritmoNatural(1)).toBe(0);
    });
  });

  describe('logaritmoBase10', () => {
    it('calcula o logaritmo na base decimal', () => {
      expect(logaritmoBase10(100)).toBe(2);
      expect(logaritmoBase10(1000)).toBe(3);
      expect(logaritmoBase10(1)).toBe(0);
      expect(logaritmoBase10(10)).toBe(1);
    });
  });

  describe('arredondarParaBaixo', () => {
    it('trunca para o menor inteiro mais próximo', () => {
      expect(arredondarParaBaixo(5.9)).toBe(5);
      expect(arredondarParaBaixo(5.1)).toBe(5);
      expect(arredondarParaBaixo(5.0)).toBe(5);
      expect(arredondarParaBaixo(-5.1)).toBe(-6);
    });
  });

  describe('arredondarParaCima', () => {
    it('arredonda para o maior inteiro mais próximo', () => {
      expect(arredondarParaCima(5.1)).toBe(6);
      expect(arredondarParaCima(5.9)).toBe(6);
      expect(arredondarParaCima(5.0)).toBe(5);
      expect(arredondarParaCima(-5.9)).toBe(-5);
    });
  });

  describe('hipotenusa', () => {
    it('calcula a hipotenusa com o Teorema de Pitágoras', () => {
      expect(hipotenusa(3, 4)).toBe(5);
      expect(hipotenusa(5, 12)).toBe(13);
      expect(hipotenusa(0, 0)).toBe(0);
    });
  });

  describe('grausParaRadianos', () => {
    it('converte valores angulares de graus para radianos', () => {
      expect(grausParaRadianos(180)).toBeCloseTo(Math.PI);
      expect(grausParaRadianos(90)).toBeCloseTo(Math.PI / 2);
      expect(grausParaRadianos(360)).toBeCloseTo(2 * Math.PI);
      expect(grausParaRadianos(0)).toBe(0);
    });
  });

  describe('radianosParaGraus', () => {
    it('converte valores angulares de radianos para graus', () => {
      expect(radianosParaGraus(Math.PI)).toBeCloseTo(180);
      expect(radianosParaGraus(Math.PI / 2)).toBeCloseTo(90);
      expect(radianosParaGraus(2 * Math.PI)).toBeCloseTo(360);
      expect(radianosParaGraus(0)).toBe(0);
    });
  });

  // === Bloco 4: Teoria dos Números e Sequências (31-40) ===
  describe('mdc', () => {
    it('encontra o Máximo Divisor Comum entre dois números', () => {
      expect(mdc(10, 5)).toBe(5);
      expect(mdc(14, 28)).toBe(14);
      expect(mdc(17, 13)).toBe(1);
      expect(mdc(6, 9)).toBe(3);
    });
  });

  describe('mmc', () => {
    it('encontra o Mínimo Múltiplo Comum entre dois números', () => {
      expect(mmc(10, 5)).toBe(10);
      expect(mmc(4, 6)).toBe(12);
      expect(mmc(7, 3)).toBe(21);
    });
  });

  describe('isPrimo', () => {
    it('rejeita números menores ou iguais a 1', () => {
      expect(isPrimo(1)).toBe(false);
      expect(isPrimo(0)).toBe(false);
      expect(isPrimo(-5)).toBe(false);
    });

    it('identifica corretamente números primos de fronteira e compostos', () => {
      expect(isPrimo(2)).toBe(true);
      expect(isPrimo(3)).toBe(true);
      expect(isPrimo(4)).toBe(false);
      expect(isPrimo(7)).toBe(true);
      expect(isPrimo(9)).toBe(false);
      expect(isPrimo(11)).toBe(true);
    });
  });

  describe('fibonacci', () => {
    it('retorna os casos base 0 e 1', () => {
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
    });

    it('retorna os termos subsequentes da sequência de Fibonacci', () => {
      expect(fibonacci(2)).toBe(1);
      expect(fibonacci(3)).toBe(2);
      expect(fibonacci(4)).toBe(3);
      expect(fibonacci(5)).toBe(5);
      expect(fibonacci(10)).toBe(55);
    });
  });

  describe('produtoArray', () => {
    it('calcula o produto de arrays numéricos', () => {
      expect(produtoArray([2, 3, 4])).toBe(24);
      expect(produtoArray([5])).toBe(5);
      expect(produtoArray([2, 0, 4])).toBe(0);
    });

    it('retorna 1 (elemento neutro da multiplicação) para array vazio', () => {
      expect(produtoArray([])).toBe(1);
    });
  });

  describe('clamp', () => {
    it('retorna o valor original quando dentro dos limites', () => {
      expect(clamp(5, 0, 10)).toBe(5);
    });

    it('restringe valores abaixo do limite inferior ao valor mínimo', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(0, 0, 10)).toBe(0);
    });

    it('restringe valores acima do limite superior ao valor máximo', () => {
      expect(clamp(15, 0, 10)).toBe(10);
      expect(clamp(10, 0, 10)).toBe(10);
    });
  });

  describe('isDivisivel', () => {
    it('valida divisibilidade exata', () => {
      expect(isDivisivel(10, 2)).toBe(true);
      expect(isDivisivel(15, 5)).toBe(true);
    });

    it('rejeita números que deixam resto na divisão', () => {
      expect(isDivisivel(10, 3)).toBe(false);
      expect(isDivisivel(7, 2)).toBe(false);
    });
  });

  describe('celsiusParaFahrenheit', () => {
    it('converte temperaturas de Celsius para Fahrenheit com precisão', () => {
      expect(celsiusParaFahrenheit(0)).toBe(32);
      expect(celsiusParaFahrenheit(100)).toBe(212);
      expect(celsiusParaFahrenheit(-40)).toBe(-40);
      expect(celsiusParaFahrenheit(25)).toBe(77);
    });
  });

  describe('fahrenheitParaCelsius', () => {
    it('converte temperaturas de Fahrenheit para Celsius com precisão', () => {
      expect(fahrenheitParaCelsius(32)).toBe(0);
      expect(fahrenheitParaCelsius(212)).toBe(100);
      expect(fahrenheitParaCelsius(-40)).toBe(-40);
      expect(fahrenheitParaCelsius(77)).toBe(25);
    });
  });

  describe('inverso', () => {
    it('calcula o recíproco multiplicativo (1/n) para números não-nulos', () => {
      expect(inverso(4)).toBe(0.25);
      expect(inverso(2)).toBe(0.5);
      expect(inverso(-2)).toBe(-0.5);
      expect(inverso(1)).toBe(1);
    });

    it('rejeita zero lançando exceção com mensagem explicativa', () => {
      expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
    });
  });

  // === Bloco 5: Geometria e Lógica de Comparação (41-50) ===
  describe('areaCirculo', () => {
    it('calcula a área de um círculo com raio positivo ou zero', () => {
      expect(areaCirculo(10)).toBeCloseTo(314.159, 2);
      expect(areaCirculo(1)).toBeCloseTo(Math.PI, 4);
      expect(areaCirculo(0)).toBe(0);
    });
  });

  describe('areaRetangulo', () => {
    it('calcula a área multiplicando base por altura', () => {
      expect(areaRetangulo(5, 4)).toBe(20);
      expect(areaRetangulo(3, 7)).toBe(21);
      expect(areaRetangulo(0, 5)).toBe(0);
    });
  });

  describe('perimetroRetangulo', () => {
    it('calcula o perímetro do retângulo somando duas vezes a base e altura', () => {
      expect(perimetroRetangulo(5, 4)).toBe(18);
      expect(perimetroRetangulo(1, 1)).toBe(4);
      expect(perimetroRetangulo(0, 0)).toBe(0);
    });
  });

  describe('isMaiorQue', () => {
    it('retorna true quando o primeiro argumento é estritamente maior', () => {
      expect(isMaiorQue(10, 5)).toBe(true);
      expect(isMaiorQue(-1, -5)).toBe(true);
    });

    it('retorna false quando o primeiro argumento é menor ou igual', () => {
      expect(isMaiorQue(5, 10)).toBe(false);
      expect(isMaiorQue(5, 5)).toBe(false);
      expect(isMaiorQue(-5, -1)).toBe(false);
    });
  });

  describe('isMenorQue', () => {
    it('retorna true quando o primeiro argumento é estritamente menor', () => {
      expect(isMenorQue(5, 10)).toBe(true);
      expect(isMenorQue(-5, -1)).toBe(true);
    });

    it('retorna false quando o primeiro argumento é maior ou igual', () => {
      expect(isMenorQue(10, 5)).toBe(false);
      expect(isMenorQue(5, 5)).toBe(false);
      expect(isMenorQue(-1, -5)).toBe(false);
    });
  });

  describe('isEqual', () => {
    it('retorna true para valores estritamente iguais em tipo e valor', () => {
      expect(isEqual(7, 7)).toBe(true);
      expect(isEqual('puc', 'puc')).toBe(true);
      expect(isEqual(0, 0)).toBe(true);
    });

    it('retorna false para valores distintos ou de tipos diferentes', () => {
      expect(isEqual(7, 8)).toBe(false);
      expect(isEqual(7, '7')).toBe(false);
      expect(isEqual(null, undefined)).toBe(false);
    });
  });

  describe('medianaArray', () => {
    it('calcula a mediana para arrays com quantidade ímpar de elementos desordenados', () => {
      expect(medianaArray([5, 1, 3])).toBe(3);
      expect(medianaArray([10, -5, 2])).toBe(2);
      expect(medianaArray([1, 2, 3, 4, 5])).toBe(3);
    });

    it('calcula a média dos dois elementos centrais para arrays com quantidade par desordenada', () => {
      expect(medianaArray([4, 1, 3, 2])).toBe(2.5);
      expect(medianaArray([10, 20])).toBe(15);
    });

    it('retorna o único elemento para array unitário', () => {
      expect(medianaArray([42])).toBe(42);
    });

    it('rejeita array vazio com a mensagem exata de erro', () => {
      expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
    });
  });

  describe('dobro', () => {
    it('multiplica o número exatamente por dois', () => {
      expect(dobro(10)).toBe(20);
      expect(dobro(0)).toBe(0);
      expect(dobro(-3)).toBe(-6);
      expect(dobro(1.5)).toBe(3);
    });
  });

  describe('triplo', () => {
    it('multiplica o número exatamente por três', () => {
      expect(triplo(10)).toBe(30);
      expect(triplo(0)).toBe(0);
      expect(triplo(-3)).toBe(-9);
      expect(triplo(1.5)).toBe(4.5);
    });
  });

  describe('metade', () => {
    it('divide o número exatamente por dois', () => {
      expect(metade(20)).toBe(10);
      expect(metade(0)).toBe(0);
      expect(metade(-6)).toBe(-3);
      expect(metade(3)).toBe(1.5);
    });
  });

});