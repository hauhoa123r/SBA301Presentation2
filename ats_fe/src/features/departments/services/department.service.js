import axiosClient from "../../../shared/services/axiosClient";

const departmentService = {
    getDepartments: async ({ page, size }) => {
        return axiosClient.get("/api/v1/departments", {
            params: { pageIndex: page, pageSize: size }
        });
    },
    createDepartment: async (departmentData) => {
        return axiosClient.post("/api/v1/departments", departmentData);
    },
    updateDepartment: async (departmentData) => {
        return axiosClient.put(`/api/v1/departments/${departmentData.id}`, departmentData);
    },
    deleteDepartment: async (departmentId) => {
        return axiosClient.delete(`/api/v1/departments/${departmentId}`);
    },

    findById: async (departmentId) => {
        console.log("Finding department by ID:", `/api/v1/departments/${departmentId}`);
        return axiosClient.get(`/api/v1/departments/${departmentId}`);
    },
}

export default departmentService;