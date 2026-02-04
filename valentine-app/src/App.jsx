import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Badge } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MapPin,
  Clock,
  Calendar,
  AlertTriangle,
  XCircle,
  Lock,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const CONFIG = {
  partnerName: "Sheetal",
  // We keep the actual location out of the UI text
  location: "That's hidden for now.",
  date: "February 14, 2026",
  time: "After Your Classes",
  years: "3",
};

export default function App() {
  const [step, setStep] = useState("invite"); // invite, details, rejected
  const [showFakeError, setShowFakeError] = useState(false);

  const cardStyle = {
    background: "rgba(8, 8, 8, 0.98)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "50px 40px",
    borderRadius: "40px",
    backdropFilter: "blur(60px)",
    boxShadow: "0 40px 100px rgba(0, 0, 0, 1)",
  };

  return (
    <div
      style={{
        background: "radial-gradient(circle at center, #1a080c 0%, #000 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={6} xl={5}>
            <AnimatePresence mode="wait">
              {/* STEP 1: THE REVERSE PSYCHOLOGY CLICKBAIT */}
              {step === "invite" && (
                <motion.div
                  key="invite"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-5 opacity-40 d-flex justify-content-center align-items-center gap-2">
                    <Lock size={14} className="text-danger" />
                    <div
                      className="small tracking-widest uppercase"
                      style={{ fontSize: "10px" }}
                    >
                      Private Invitation • v3.0
                    </div>
                  </div>

                  <h1
                    className="display-4 fw-bold mb-5"
                    style={{ letterSpacing: "-2px" }}
                  >
                    Will you be my Valentine,{" "}
                    <span style={{ color: "#ff4d6d" }}>
                      {CONFIG.partnerName}
                    </span>
                    ?
                  </h1>

                  <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
                    <Button
                      variant="light"
                      className="px-5 py-3 fw-bold rounded-pill order-2 order-sm-1 shadow-lg"
                      onClick={() => setStep("details")}
                    >
                      Yes, I'm In
                    </Button>

                    <Button
                      variant="outline-danger"
                      className="px-5 py-3 rounded-pill border-2 order-1 order-sm-2"
                      style={{ borderStyle: "dotted" }}
                      onClick={() => setShowFakeError(true)}
                    >
                      ⚠️ No I am not intrested
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: THE SECURE DETAILS & GENUINE NO */}
              {step === "details" && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div style={cardStyle}>
                    <Badge
                      pill
                      bg="danger"
                      className="mb-4 px-3 py-2"
                      style={{ fontSize: "10px", letterSpacing: "2px" }}
                    >
                      CONFIRMED • SECURE_DETAILS
                    </Badge>

                    <h2 className="fw-bold mb-5 display-6 text-white">
                      See you there, {CONFIG.partnerName}.
                    </h2>

                    <div className="text-start mb-5 d-grid gap-3">
                      <div
                        className="d-flex align-items-center p-3 rounded-4"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <Calendar className="text-danger me-4" size={22} />
                        <div>
                          <small className="text-secondary d-block">WHEN</small>
                          <span className="fw-bold text-light">
                            {CONFIG.date}
                          </span>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center p-3 rounded-4"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <Clock className="text-danger me-4" size={22} />
                        <div>
                          <small className="text-secondary d-block">TIME</small>
                          <span className="fw-bold text-light">
                            {CONFIG.time}
                          </span>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center p-3 rounded-4"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <MapPin className="text-danger me-4" size={22} />
                        <div>
                          <small className="text-secondary d-block">
                            WHERE
                          </small>
                          <span className="fw-bold text-light">
                            {CONFIG.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="d-grid gap-2 pt-4 border-top border-secondary border-opacity-25">
                      <Button
                        variant="outline-secondary"
                        className="rounded-pill py-2 border-secondary"
                        style={{ fontSize: "13px", opacity: 0.5 }}
                        onClick={() => setStep("rejected")}
                      >
                        Decline Invitation (Genuine)
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: THE MATURE REJECT */}
              {step === "rejected" && (
                <motion.div
                  key="3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <XCircle
                    size={60}
                    className="text-secondary mb-4 opacity-10"
                  />
                  <h3 className="fw-bold text-secondary mb-3">
                    Invitation Declined.
                  </h3>
                  <p className="text-secondary px-4">
                    Your choice respected. After 3 years, I value your honesty
                    over a forced "Yes.".And it's completely fine. I understand.
                  </p>
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="mt-4 opacity-30 rounded-pill px-4"
                    onClick={() => setStep("invite")}
                  >
                    Reset
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Col>
        </Row>
      </Container>

      {/* FAKE NO MODAL (Reverse Psychology Payoff) */}
      <Modal
        show={showFakeError}
        onHide={() => setShowFakeError(false)}
        centered
        contentClassName="bg-black text-light border-danger"
      >
        <div
          style={{
            border: "1px solid rgba(255, 77, 109, 0.2)",
            borderRadius: "15px",
          }}
        >
          <Modal.Body className="text-center p-5">
            <AlertTriangle size={50} className="text-danger mb-4" />
            <h4 className="fw-bold tracking-tighter text-danger">
              403: CURIOSITY_DETECTED
            </h4>
            <p className="text-secondary small mt-3 px-2">
              The "No" path has been temporarily disabled because you can't say
              no. There is no 'NO' Please use the <b>'YES'</b> button to
              proceed.
            </p>
            <Button
              variant="danger"
              className="mt-4 w-100 fw-bold py-3 rounded-3"
              onClick={() => setShowFakeError(false)}
            >
              Now Go Back and Click Yes
            </Button>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}
