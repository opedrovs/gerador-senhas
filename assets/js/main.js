import 'core-js/stable';
import 'regenerator-runtime/runtime';

import formGeradorSenhas from './modules/mainGeradorSenhas';
import RangeValor from './modules/RangeValor';

formGeradorSenhas();

const rangeValor = new RangeValor('.caracteres-input', '.caracteres-text');
rangeValor.init();
