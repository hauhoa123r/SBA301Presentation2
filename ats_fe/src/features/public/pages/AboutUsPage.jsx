import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  Bullseye,
  EyeFill,
  Stars,
  GeoAltFill,
  PeopleFill,
  ShieldCheck,
} from "react-bootstrap-icons";

const offices = [
  { city: "Ho Chi Minh City", address: "Floor 12, Bitexco Tower, District 1", country: "Vietnam" },
  { city: "Ha Noi", address: "Keangnam Landmark 72, Nam Tu Liem", country: "Vietnam" },
  { city: "Da Nang", address: "Indochina Tower, Hai Chau District", country: "Vietnam" },
];

const principles = [
  { icon: <ShieldCheck size={26} />, title: "Integrity", desc: "We do the right thing, even when no one's watching.", color: "#4f46e5" },
  { icon: <PeopleFill size={26} />, title: "Teamwork", desc: "We win together — diverse perspectives make us stronger.", color: "#0d9488" },
  { icon: <Stars size={26} />, title: "Excellence", desc: "We hold ourselves to the highest standards in everything we ship.", color: "#ea580c" },
];

const AboutUsPage = () => {
  return (
    <>
      {/* Hero */}
      <div
        className="text-white py-5"
        style={{ background: "linear-gradient(135deg, #667eea 0%, #4A3AFF 100%)" }}
      >
        <Container className="text-center py-4">
          <h1 className="display-4 fw-bold mb-3">About TechCorp</h1>
          <p className="fs-5 text-white-50 mx-auto" style={{ maxWidth: 720 }}>
            Building meaningful technology since 2010 — with a team that cares about people,
            craft, and impact.
          </p>
        </Container>
      </div>

      {/* Mission & Vision */}
      <Container className="py-5">
        <Row className="g-4">
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100" style={{ borderRadius: 12, borderLeft: "6px solid #4f46e5" }}>
              <Card.Body className="p-4">
                <div className="mb-2" style={{ color: "#4f46e5" }}>
                  <Bullseye size={28} />
                </div>
                <h4 className="fw-bold text-dark mb-2">Our Mission</h4>
                <p className="text-secondary mb-0">
                  Empower businesses and people with technology that's reliable, accessible,
                  and human-centered. We build tools that respect both our users and our planet.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100" style={{ borderRadius: 12, borderLeft: "6px solid #db2777" }}>
              <Card.Body className="p-4">
                <div className="mb-2" style={{ color: "#db2777" }}>
                  <EyeFill size={28} />
                </div>
                <h4 className="fw-bold text-dark mb-2">Our Vision</h4>
                <p className="text-secondary mb-0">
                  Become Southeast Asia's most trusted technology partner — recognized for
                  our craft, our values, and the careers we help build.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Our Story */}
      <div style={{ backgroundColor: "#f8fafc" }} className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="text-center mb-4">
                <h2 className="fw-bold text-dark">Our Story</h2>
              </div>
              <p className="text-secondary fs-6">
                TechCorp was founded in 2010 by a small team of engineers who believed
                software should be built thoughtfully, not just quickly. What started as a
                three-person studio in Ho Chi Minh City has grown into a 500+ team across
                Vietnam, serving clients in fintech, logistics, healthcare, and education.
              </p>
              <p className="text-secondary fs-6">
                Today, we ship products used by millions of people every day — but our
                principles haven't changed. We still believe great software comes from
                great teams, and great teams come from great cultures.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Core Principles */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark mb-2">Core Principles</h2>
          <p className="text-secondary">The values that guide every decision we make.</p>
        </div>
        <Row className="g-4">
          {principles.map((p) => (
            <Col key={p.title} md={4}>
              <Card className="border-0 shadow-sm h-100" style={{ borderRadius: 12 }}>
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ color: p.color }}>{p.icon}</div>
                  <h5 className="fw-bold mb-2 text-dark">{p.title}</h5>
                  <p className="text-secondary mb-0 small">{p.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Offices */}
      <div style={{ backgroundColor: "#f8fafc" }} className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark mb-2">Our Offices</h2>
            <p className="text-secondary">Three locations across Vietnam, one team.</p>
          </div>
          <Row className="g-4">
            {offices.map((o) => (
              <Col key={o.city} md={4}>
                <Card className="border-0 shadow-sm h-100" style={{ borderRadius: 12 }}>
                  <Card.Body className="p-4">
                    <div className="mb-2" style={{ color: "#4f46e5" }}>
                      <GeoAltFill size={24} />
                    </div>
                    <h5 className="fw-bold text-dark mb-1">{o.city}</h5>
                    <div className="text-secondary small mb-1">{o.address}</div>
                    <div className="text-secondary small">{o.country}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUsPage;
