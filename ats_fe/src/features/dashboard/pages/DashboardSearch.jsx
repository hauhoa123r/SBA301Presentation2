import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
    Table,
    Spinner,
    Alert
} from "react-bootstrap";

export default function DashboardSearch() {
    const [searchForm, setSearchForm] = useState({
        email: "",
        phone: "",
        userName: "",
        departmentName: "",
        jobName: ""
    })

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = useCallback(async (formValues = searchForm) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                "http://localhost:8080/api/dashboard/search",
                {
                    params: formValues 
                }
            );
            setResults(response.data || []); 
        } catch (error) {
            console.error(error);
            setError("Đã xảy ra lỗi khi tải dữ liệu từ hệ thống.");
        } finally {
            setIsLoading(false);
        }
    }, [searchForm]);

    useEffect(() => {
        const initialForm = {
            email: "",
            phone: "",
            userName: "",
            departmentName: "",
            jobName: ""
        };
        handleSearch(initialForm);
    }, [handleSearch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        handleSearch();
    };

    const handleReset = () => {
        const clearedForm = {
            email: "",
            phone: "",
            userName: "",
            departmentName: "",
            jobName: ""
        };
        setSearchForm(clearedForm);
        handleSearch(clearedForm);
    };

    return (
        <Container fluid className="p-4 bg-light min-vh-100">
            {/* Bộ lọc tìm kiếm */}
            <Card className="border-0 shadow-sm rounded-4 mb-4">
                <Card.Body className="p-4">
                    <Card.Title className="text-dark fw-bold mb-4 fs-4">
                        <i className="bi bi-search me-2"></i>Dashboard Search
                    </Card.Title>

                    <Form onSubmit={handleSubmit}>
                        <Row className="g-3">
                            <Col md={4} sm={6}>
                                <Form.Group>
                                    <Form.Label className="small fw-semibold text-secondary">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Nhập email..."
                                        value={searchForm.email}
                                        onChange={handleChange}
                                        className="rounded-3"
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={4} sm={6}>
                                <Form.Group>
                                    <Form.Label className="small fw-semibold text-secondary">Số điện thoại</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        placeholder="Nhập số điện thoại..."
                                        value={searchForm.phone}
                                        onChange={handleChange}
                                        className="rounded-3"
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={4} sm={6}>
                                <Form.Group>
                                    <Form.Label className="small fw-semibold text-secondary">Tên nhân viên</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="userName"
                                        placeholder="Nhập tên nhân viên..."
                                        value={searchForm.userName}
                                        onChange={handleChange}
                                        className="rounded-3"
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6} sm={6}>
                                <Form.Group>
                                    <Form.Label className="small fw-semibold text-secondary">Phòng ban</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="departmentName"
                                        placeholder="Nhập tên phòng ban..."
                                        value={searchForm.departmentName}
                                        onChange={handleChange}
                                        className="rounded-3"
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6} sm={12}>
                                <Form.Group>
                                    <Form.Label className="small fw-semibold text-secondary">Tên công việc</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="jobName"
                                        placeholder="Nhập tên công việc..."
                                        value={searchForm.jobName}
                                        onChange={handleChange}
                                        className="rounded-3"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="d-flex gap-2 mt-4 justify-content-end">
                            <Button
                                variant="outline-secondary"
                                onClick={handleReset}
                                className="px-4 rounded-3 fw-medium"
                                disabled={isLoading}
                            >
                                Làm mới
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                className="px-4 rounded-3 fw-medium"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Spinner animation="border" size="sm" className="me-2" />
                                        Đang tìm...
                                    </>
                                ) : "Tìm kiếm"}
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            {/* Bảng kết quả hiển thị */}
            <Card className="border-0 shadow-sm rounded-4">
                <Card.Body className="p-4">
                    <Card.Title className="text-dark fw-bold mb-4 fs-5 d-flex justify-content-between align-items-center">
                        <span>Kết quả tìm kiếm</span>
                        <span className="badge bg-secondary rounded-pill fs-6 fw-normal">
                            {results.length} bản ghi
                        </span>
                    </Card.Title>

                    {error && <Alert variant="danger" className="rounded-3">{error}</Alert>}

                    {isLoading ? (
                        <div className="text-center py-5">
                            <Spinner animation="border" variant="primary" />
                            <p className="text-muted mt-2 mb-0">Đang tải dữ liệu, vui lòng đợi...</p>
                        </div>
                    ) : results.length === 0 ? (
                        <div className="text-center py-5 text-muted">
                            <i className="bi bi-inbox fs-1 d-block mb-2"></i>
                            Không tìm thấy kết quả nào phù hợp.
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <Table hover align="middle" className="mb-0 text-nowrap">
                                <thead className="table-light">
                                    <tr>
                                        <th className="py-3 px-3">Nhân viên</th>
                                        <th className="py-3">Email</th>
                                        <th className="py-3">Số điện thoại</th>
                                        <th className="py-3">Phòng ban</th>
                                        <th className="py-3">Công việc</th>
                                        <th className="py-3 text-center">Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((item) => (
                                        <tr key={`${item.id || item.userId}-${item.jobId}`}>
                                            <td className="py-3 px-3 fw-semibold text-dark">
                                                {item.userName || "N/A"}
                                            </td>
                                            <td className="py-3 text-secondary">{item.email || "N/A"}</td>
                                            <td className="py-3 text-secondary">{item.phone || "N/A"}</td>
                                            <td className="py-3">
                                                <span className="px-2 py-1 bg-light text-dark rounded-2 small border">
                                                    {item.departmentName || "Chưa phân phòng"}
                                                </span>
                                            </td>
                                            <td className="py-3 fw-medium">{item.jobName || "N/A"}</td>
                                            <td className="py-3 text-center">
                                                <span className={`badge ${item.jobStatus === 'ACTIVE' || item.jobStatus === 'COMPLETED'
                                                    ? 'bg-success-subtle text-success border border-success-subtle'
                                                    : 'bg-warning-subtle text-warning border border-warning-subtle'
                                                    } px-2 py-1.5 rounded-2 fw-semibold`}>
                                                    {item.jobStatus || "UNKNOWN"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}