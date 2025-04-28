import axiosInstance from "../AxiosInstance";

export class PostoService {
    constructor(http = axiosInstance) {
        this.http = http
    }

    async SearchPostosProximos(location){
        try {
            console.log(location)
            const response = await this.http.get(`posto/proximos?lat=${location.latitude}&lon=${location.longitude}`)
            return response.data
        } catch (error) {
            console.log("Erro ao buscar postos proximos", error);
            if (error.response && error.response.status !== 200) {
                throw new Error('Erro de validação: Verifique os dados enviados');
            } else {
                throw new Error('Erro no servidor: Tente novamente mais tarde');
            } 
        }
    }
}