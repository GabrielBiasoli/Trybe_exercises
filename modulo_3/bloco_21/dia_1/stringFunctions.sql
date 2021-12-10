-- MANIPULAÇÃO DE STRINGS

-- 1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('Trybe');

-- 2. Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- 3. Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .
SELECT CHAR_LENGTH('Uma frase qualquer');

-- 4. Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- 5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
