angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope) {
	$scope.app = "Lista Telefônica";
	$scope.contatos = [
		{nome: "Pedro", telefone: "99998888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "celular"}, cor: "blue"},
		{nome: "Maria", telefone: "22225555", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "celular"}, cor: "yellow"},
		{nome: "Ana", telefone: "66663333", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "celular"}, cor: "red"}
	];
	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria: "celular"},
		{nome: "Vivo", codigo: 15, categoria: "celular"},
		{nome: "Tim", codigo: 41, categoria: "celular"},
		{nome: "GVT", codigo: 25, categoria: "fixo"},
		{nome: "Embratel", codigo: 21, categoria: "fixo"}				
	];
	$scope.adicionarContato = function(contato) {
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};
	$scope.apagarContatos = function(contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
		<!--console.log(contatosSelecionados);	-->
	};
	$scope.isContatoSelecionado = function (contatos) {
		//console.log(contatos);
		return contatos.some(function (contato) {
			return contato.selecionado;
		}); 
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao; 
	};
});