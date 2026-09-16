import Clt from './Clt.js';
import Pj from './Pj.js';
import Terceirizado from './Terceirizado.js';

const funcionarioClt = new Clt(
	'Ana Souza',
	1,
	'52998224725',
	3500,
	1200,
	4700
);

const funcionarioPj = new Pj(
	'Bruno Lima',
	2,
	'11144477735',
	5000,
	160,
	6400,
	40
);

const funcionarioTerceirizado = new Terceirizado(
	'Carla Mendes',
	3,
	'93541134780',
	3000,
	0.2,
	3600
);

funcionarioClt.imprimeInfo();
funcionarioPj.imprimeInfo();
funcionarioTerceirizado.imprimeInfo();
