import Colaborador from "./Colaborador";
import QuadroColaboradores from "./QuadroColaboradores";
import geraRelatorio from "./GeraRetorio";
import { Cargos } from "./enum/cargos";
import Pagamento from "./Pagamento";
import CalculaSalario from "./CalculaSalario";

const quadro_colaboradores = new QuadroColaboradores();
const calcula_salario = new CalculaSalario();
const gerador_relatorio = new geraRelatorio(calcula_salario, quadro_colaboradores.colaboradores);
const pagamento = new Pagamento(calcula_salario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadro_colaboradores.contratarColaborador(colaborador1);
quadro_colaboradores.contratarColaborador(colaborador2);
quadro_colaboradores.contratarColaborador(colaborador3);

console.log(gerador_relatorio.gerarJSON());

console.log(colaborador1);
pagamento.paga(colaborador1);
console.log(colaborador1);