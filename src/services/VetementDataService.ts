import http from "@/http-common"

class VetementDataService {
    getAll(): Promise<any> {
        return http.get("/all");
    }

    get(id: any): Promise<any> {
        return http.get(`/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post("/create", data);
    }
    
    update(id: any, data: any): Promise<any> {
        return http.put(`/update/${id}`, data);
    }
    
    delete(id: any): Promise<any> {
        return http.delete(`/${id}`);
    }
}

export default new VetementDataService();