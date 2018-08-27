	
	var app = angular.module('imobil');

	app.controller('ImovelController', function($scope) {

		$scope.houses = [
		{
			titulo: 'Iguatu-CE',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis porta mi a ultricies. Mauris ut ultrices est. Fusce libero tellus, varius sed fermentum sed, semper sed diam. Sed sagittis orci sed congue ornare. Morbi finibus id nulla a suscipit. Nunc ut magna et lectus tincidunt pharetra eget a neque.',
			img: 'img/casa01.png',
			proprietario: 'Joao',
			tel: '88 9 9999 9999',
			email: 'joao@gmail.com',
			coment: 'Nulla orci odio, molestie at sollicitudin ut, blandit eget velit. Aenean volutpat sollicitudin accumsan.',
			preco: 100000
		}, 
		{
			titulo: 'Quixadá-CE',
			descricao: 'Dois quartos, sala, cozinha e lavanderia',
			img: 'img/casa02.jpg',
			proprietario: 'Bruno',
			tel: '88 9 9999 9999',
			email: 'joao@gmail.com',
			coment: 'Casa muito boa',
			preco: 200000
		}, 
		{
			titulo: 'Sao Paulo-SP',
			descricao: 'Dois quartos, sala, cozinha e lavanderia',
			img: 'img/casa03.jpg',
			proprietario: 'Mateus',
			tel: '88 9 9999 9999',
			email: 'joao@gmail.com',
			coment: 'Casa muito boa',
			preco: 300000
		},
		{
			titulo: 'Chicago-US',
			descricao: 'Dois quartos, sala, cozinha e lavanderia',
			img: 'img/casa01.png',
			proprietario: 'Joao',
			tel: '88 9 9999 9999',
			email: 'joao@gmail.com',
			coment: 'Casa muito boa',
			preco: 400000
		}
		];

		$scope.orderByMe = function(filter) {
			$scope.myOrderBy = filter;
		}

	});