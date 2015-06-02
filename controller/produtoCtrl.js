function ProdutoController($scope){
    $scope.produtos = [
        { nome: 'Monitor Samsungg LED 18,5', qtdade: 0, preco: 350.00, dtinclusao: new Date() },
        { nome: 'Teclado Microsoft', qtdade: 0, preco: 80.00, dtinclusao: new Date() },
        { nome: 'Mouse Optico Microsoft', qtdade: 0, preco: 40.00, dtinclusao: new Date() },
        { nome: 'Impressora HP Multifuncional', qtdade: 0, preco: 250.00, dtinclusao: new Date() },
        { nome: 'Computador Lenovo 63TW', qtdade: 0, preco: 1200.00, dtinclusao: new Date() },
        { nome: 'Roteador DLink DIR-610N', qtdade: 0, preco: 70.00, dtinclusao: new Date()},
        { nome: 'HD Samsung Externo 1TB', qtdade: 0, preco: 340.00, dtinclusao: new Date()}
    ];
    
    //Grupos
    $scope.grupos = [
        { id: 1, nome: 'Monitor' },
        { id: 2, nome: 'Hardware' },
        { id: 3, nome: 'Sofwtare' },
        { id: 4, nome: 'Periféricos' }
    ];
    
    //Verifica se está selecionado
    $scope.isSelecionado = function(produtos){
        
        return produtos.some(function(item){
            return item.selecionado;
        });
        
    };
    
    //Adicionar
    $scope.adicionar = function(produto){
        $scope.produtos.push(angular.copy(produto));        
        //Remove o objeto do escope, fazendo com que os campos sejam limpos
        delete $scope.produto;
        $scope.produtoForm.$setPristine();
    };
    
    //Remover
    $scope.remover = function(produtos) {
        $scope.produtos = produtos.filter(function(item){
            if (! item.selecionado)
                return item;
        });
    };
}
angular.module('app.crud').controller('ProdutoCtrl', ProdutoController);


















