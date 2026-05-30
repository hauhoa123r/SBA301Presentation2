import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  PeopleFill,
  BriefcaseFill,
  GeoAltFill,
  Award,
  RocketTakeoff,
  HeartFill,
  Lightbulb,
} from "react-bootstrap-icons";

const stats = [
  { icon: <PeopleFill />, value: "500+", label: "Team Members" },
  { icon: <BriefcaseFill />, value: "12", label: "Open Positions" },
  { icon: <GeoAltFill />, value: "3", label: "Office Locations" },
  { icon: <Award />, value: "15+", label: "Years in Business" },
];

const values = [
  {
    icon: <RocketTakeoff size={28} />,
    title: "Innovation First",
    desc: "We embrace new ideas and continuously push boundaries to build products that matter.",
    color: "#4f46e5",
  },
  {
    icon: <HeartFill size={28} />,
    title: "People-Centric",
    desc: "Our team is our greatest asset. We invest in growth, well-being, and meaningful work.",
    color: "#db2777",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Learn & Share",
    desc: "Continuous learning culture with mentorship, training, and open knowledge sharing.",
    color: "#ea580c",
  },
];

const PublicHomePage = ({ onBrowseJobs }) => {
  return (
    <>
      {/* Hero */}
      <div
        className="text-white py-5"
        style={{ background: "linear-gradient(135deg, #667eea 0%, #4A3AFF 100%)" }}
      >
        <Container className="text-center py-4">
          <h1 className="display-4 fw-bold mb-3">Build the Future With Us</h1>
          <p className="fs-5 text-white-50 mb-4 mx-auto" style={{ maxWidth: 720 }}>
            We're TechCorp — a team of passionate builders, designers, and thinkers shaping
            the next generation of technology. Join us and grow your career.
          </p>
          <Button
            size="lg"
            className="rounded-pill px-4 fw-semibold"
            style={{ backgroundColor: "white", color: "#4f46e5", border: "none" }}
            onClick={onBrowseJobs}
          >
            Browse Open Positions →
          </Button>
        </Container>
      </div>

      {/* Stats */}
      <Container className="py-5">
        <Row className="g-4">
          {stats.map((s) => (
            <Col key={s.label} md={3} sm={6}>
              <Card className="border-0 shadow-sm text-center h-100" style={{ borderRadius: 12 }}>
                <Card.Body className="p-4">
                  <div className="mb-2" style={{ color: "#4f46e5", fontSize: 28 }}>
                    {s.icon}
                  </div>
                  <h3 className="fw-bold mb-1 text-dark">{s.value}</h3>
                  <div className="text-secondary small">{s.label}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Values */}
      <div style={{ backgroundColor: "#f8fafc" }} className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark mb-2">Why Work With Us</h2>
            <p className="text-secondary">A culture built on growth, trust, and meaningful work.</p>
          </div>
          <Row className="g-4">
            {values.map((v) => (
              <Col key={v.title} md={4}>
                <Card className="border-0 shadow-sm h-100" style={{ borderRadius: 12 }}>
                  <Card.Body className="p-4">
                    <div className="mb-3" style={{ color: v.color }}>{v.icon}</div>
                    <h5 className="fw-bold mb-2 text-dark">{v.title}</h5>
                    <p className="text-secondary mb-0 small">{v.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* CTA */}
      <Container className="py-5 text-center">
        <h3 className="fw-bold text-dark mb-3">Ready to Make an Impact?</h3>
        <p className="text-secondary mb-4">Explore current openings across engineering, design, marketing and more.</p>
        <Button
          size="lg"
          className="rounded-pill px-4 fw-semibold"
          style={{ backgroundColor: "#4f46e5", border: "none" }}
          onClick={onBrowseJobs}
        >
          See All Jobs
        </Button>
      </Container>
    </>
  );
};

export default PublicHomePage;
