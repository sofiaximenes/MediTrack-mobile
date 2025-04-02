import axiosInstance from "../AxiosInstance";

export class MedicamentoService {
    constructor(http = axiosInstance) {
        this.http = http
    }

    async SearchMedsPorNome(nome){
        try {
            const response =  await this.http.get(`medicamento/pesquisar/${nome}`);
            console.log(response.data)
        } catch (error) {
            console.log("Erro ao buscar medicamento", error);
            if (error.response && error.response.status !== 200) {
                throw new Error('Erro de validação: Verifique os dados enviados');
            } else {
                throw new Error('Erro no servidor: Tente novamente mais tarde');
            }
        }
    }

    async GetAllPostosByMedicamentoId(medicamentoId){
        try {
            const response =  await this.http.get(`medicamento/${medicamentoId}`);
            console.log(response.data)
        } catch (error) {
            console.log("Erro ao buscar postos", error);
            if (error.response && error.response.status !== 200) {
                throw new Error('Erro de validação: Verifique os dados enviados');
            } else {
                throw new Error('Erro no servidor: Tente novamente mais tarde');
            }
        }
    }

}