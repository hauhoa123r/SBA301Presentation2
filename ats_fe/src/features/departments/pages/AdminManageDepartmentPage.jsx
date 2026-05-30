import {useEffect, useMemo, useState} from "react";
import {Badge, Button, Container, Form, InputGroup, Table,} from "react-bootstrap";
import jobService from "../../jobs/services/job.service";

const AdminManageDepartmentPage = () => {
    const [departments, setDepartments] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        function fetchData() {
            let promies = jobService.getDepartments();

            promies = promies.then((response) => {
                // console.log(response.json());
                return response.json();
                // setDepartments(JSON.parse(response));
            });

            promies.then((data) => {
                console.log("Data " + JSON.stringify(data, null, 2));
                setDepartments(data);
            });
        }

        fetchData();
    }, []);

    const visibleDepartments = useMemo(() => {
        return departments
    }, [departments, keyword]);


    const renderStatusBadge = (status) => {
        const bg = status === "ACTIVE" ? "success" : "secondary";
        return (
            <Badge bg={bg} className="rounded-pill px-3 py-2">
                {status}
            </Badge>
        );
    };

    return (
        <>

            <Container className="py-4">
                <div className="bg-white rounded-3 shadow-sm border p-3 mb-4">
                    <InputGroup>
                        <InputGroup.Text className="bg-white border-end-0">
                            <i className="bi bi-search text-muted"></i>
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            className="border-start-0 shadow-none"
                            placeholder="Search department by name, manager, or description..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </InputGroup>
                </div>

                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
                    <div className="d-flex align-items-center gap-2">
                        <h3 className="m-0 fw-bold text-dark">Departments</h3>
                        <span
                            className="badge rounded-pill px-3 py-2"
                            style={{
                                backgroundColor: "#eef2ff",
                                color: "#4f46e5",
                                border: "1px solid #c7d2fe",
                                fontWeight: 600,
                            }}
                        >
              {visibleDepartments.length} departments
            </span>
                    </div>
                    <Button
                        className="rounded-pill px-4 py-2 fw-semibold border-0 text-white"
                        style={{backgroundColor: "#4A3AFF"}}
                    >
                        <i className="bi bi-plus-lg me-2"></i>
                        Add Department
                    </Button>
                </div>

                <div className="bg-white rounded-3 shadow-sm overflow-hidden">
                    <Table responsive bordered hover className="mb-0 align-middle">
                        <thead className="table-light">
                        <tr>
                            <th className="px-4 py-3" style={{width: "80px"}}>
                                #
                            </th>
                            <th className="py-3">Name</th>
                            <th className="py-3">Description</th>
                            <th className="py-3">Manager</th>
                            <th className="py-3" style={{width: "130px"}}>
                                Status
                            </th>
                            <th
                                className="py-3 text-center text-nowrap"
                                style={{width: "220px"}}
                            >
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {visibleDepartments.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center text-muted py-5">
                                    No departments match your search.
                                </td>
                            </tr>
                        ) : (
                            visibleDepartments.map((dept, index) => (
                                <tr key={dept.id}>
                                    <td className="px-4 fw-semibold text-muted">{index + 1}</td>
                                    <td className="text-dark">{dept.departmentName}</td>
                                    <td className="text-dark">{dept.description}</td>
                                    <td>{dept.manager}</td>
                                    <td>{renderStatusBadge(dept.status)}</td>
                                    <td className="text-center text-nowrap">
                                        <Button
                                            size="sm"
                                            variant="outline-primary"
                                            className="me-2 rounded-pill px-3"
                                        >
                                            <i className="bi bi-pencil-square me-1"></i>
                                            Edit
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline-danger"
                                            className="rounded-pill px-3"
                                        >
                                            <i className="bi bi-trash3 me-1"></i>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    );
};

export default AdminManageDepartmentPage;
