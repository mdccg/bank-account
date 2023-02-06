# bank-account

## Sumário

- [bank-account](#bank-account)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este app consiste em um sistema de empréstimos baseado na fórmula de juros compostos clássica, explicada abaixo:

$\text{Valor real do empréstimo} = \text{Valor} \times (1 + (\frac{\text{Taxa de juros}}{100} \times \text{Quantidade de parcelas}))$

$\text{Valor da prestação} = \frac{\text{Valor real do empréstimo}}{\text{Quantidade de parcelas}}$

A tabela abaixo explica o estudo de caso desta atividade:

| Plano | Taxa de juros | Limite (R$) | Número de prestações |
|-|-|-|-|
| Standard | 2,5% | R$ 10.000,00 | 12 |
| Platinum | 1,99% | R$ 50.000,00 | 24 |
| Gold | 1,2% | R$ 250.000,00 | 48 |

Este foi o primeiro repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Linguagem de Programação II.

## Pilha de tecnologia

As seguintes tecnologias foram utilizadas para desenvolver este app:

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Framework de teste | [Jest](https://jestjs.io/pt-BR/) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);

3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Finalmente, execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run test
```

Para Yarn:

```console
$ yarn test
```