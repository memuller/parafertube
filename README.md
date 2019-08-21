# Parafertube
Projeto implementado como parte do processo seletivo da Parafernália Interativa.

## Instruções

### Execução
- `yarn run start` inicia o projeto em `http://localhost:3000`

### Requerimentos
- Node > 10.2
- Dependências instaladas, via `yarn install`
- Pode ser necessário instalar `react-scripts` globalmente, via `npm install -g react-scripts`

## Decisões Técnicas
- Redux-thunk foi utilizado para permitir despacho de ações que são funções
- Classes do bootstrap foram utilizadas sempre que possivel, ao invés de estilização manual
- Cogitado usar Typescrit, mas isso certamente iria aumentar muito o tempo gasto (não estou familiarizado com os types usados no React)

## Comentários Gerais
- O enunciado não deixa claro se paginação de resultados deve ser usada: a query de exemplo solicita 20 resultados, mas o layout tem 5 resultados exibidos; entretanto não há interface de paginação no layout e há um erro nos parâmetros da query que faz com que ela retorne somente 5 resultados. 

## Alocação de Tempo
Cada item listado corresponde a 25min (um Pomodoro), totalizando 6h25min.

- Arquitetura do projeto, pesquisa de react-thunk
- Inicia projeto, adiciona bootstrap e SASS
- Adiciona debugging, Inicia trabalho no header
- Adiciona ícones, melhora formatação do header
- Ajusta formatação do header e ícones
- Adiciona redux e redux-thunk, cria actions de busca e reducer
- Conecta redux ao componente de busca
- Debugging/refactoring do redux
- Cria componente de lista, trata exibição sem busca
- Cria componete Resultado
- Melhora redux, tratamento de resultados, layout
- Implementa seleção de vídeo
- Exibe vídeo, ajustes resposivos no embed
- Ajustes no layout e exibição do player
- Lida com estados de falha e loading
