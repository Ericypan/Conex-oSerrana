# Instruções para iniciar a aplicação
1. Abrir o terminal na pasta do projeto
2. Realizar o pull da branch `main` (para aprender a usar o git/github no vscode [veja esse vídeo](https://www.youtube.com/watch?v=HIqyLRKv-YE))
3. `node ace migration:run` (caso não tenha executado as migrações recentes)
4. Inicie a aplicação: `node ace serve --watch`


 
## O que fazer antes de iniciar o desenvolvimento de um novo recurso
1. Faça o `git pull` da branch **main**
2. Inicie uma nova branch para separar essas modificações do que já está consolidado
3. Realize a migração de tudo o que está pendente: `node ace migration:run`
4. Inicie o seu desenvolvimento


## O que fazer ao concluir o desenvolvimento do novo recurso
1. Tenha certeza que fez o push da branch para o github
2. Crie o PR (Pull Request) no Github e não esqueça de marcar o issue (para marcar é necessário usar no comentário o # e o número da issue, exemplo: #999). Essa etapa é essencial para acompanharmos os cartões que estão em processo de finalização.
3. Antes de partir para outra issue, tenha certeza que:
   1. Fez o **Assign** de *eyglys*, para que receba notificação de que há uma nova PR
   2. Colocou *eyglys* em **Reviewers**