import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Badge } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MapPin,
  Clock,
  Calendar,
  ShieldAlert,
  XCircle,
  Ticket,
  Lock,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const CONFIG = {
  partnerName: "Sheetal",
  location: "A Secret Milestone (To be revealed)",
  date: "February 14, 2026",
  time: "07:30 PM",
  years: "3",
};

export default function App() {
  const [step, setStep] = useState("splash"); // splash, invite, details, rejected
  const [showFakeError, setShowFakeError] = useState(false);

  // The 5-second Splash transition
  useEffect(() => {
    if (step === "splash") {
      const timer = setTimeout(() => setStep("invite"), 3500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const cardStyle = {
    background: "rgba(5, 5, 5, 0.95)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "50px 40px",
    borderRadius: "40px",
    backdropFilter: "blur(50px)",
    boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 1)",
  };

  return (
    <div
      style={{
        background: "radial-gradient(circle at center, #1a080c 0%, #000 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={6} xl={5}>
            <AnimatePresence mode="wait">
              {/* STEP 0: THE 5-SECOND FAKE DSEU PASS */}
              {step === "splash" && (
                <motion.div
                  key="splash"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="p-5 border border-secondary rounded-4"
                  style={{
                    background: "rgba(15, 15, 15, 0.5)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Ticket size={48} className="text-info mb-4" />
                  <h2 className="fw-bold tracking-tighter">DSEU FEST 2026 </h2>
                  <p className="text-secondary small mb-4">
                    Official Delegate Access • Entry #2026-VAL
                  </p>
                  <div className="d-flex justify-content-center align-items-center gap-2 text-info opacity-75">
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                    ></span>
                    <span className="fw-bold small tracking-widest uppercase">
                      Validating Credentials...
                    </span>
                  </div>
                </motion.div>
              )}

              {/* STEP 1: THE ROMANTIC REVEAL */}
              {step === "invite" && (
                <motion.div
                  key="invite"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-5 opacity-40 d-flex justify-content-center align-items-center gap-2">
                    <Lock size={14} className="text-danger" />
                    <div
                      className="small tracking-widest uppercase"
                      style={{ fontSize: "10px" }}
                    >
                      Secure Handshake • Connection Established
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
                      ⚠️ DON'T CLICK
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: THE SECURE DETAILS */}
              {step === "details" && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div style={cardStyle}>
                    <Badge
                      pill
                      bg="danger"
                      className="mb-4 px-3 py-2"
                      style={{ fontSize: "10px", letterSpacing: "2px" }}
                    >
                      CONFIRMED • SECURE_ACCESS
                    </Badge>

                    <h2 className="fw-bold mb-5 display-6">
                      It's a date, {CONFIG.partnerName}.
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
                        Decline Invitation (Final)
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
                    Choice Respected.
                  </h3>
                  <p className="text-secondary px-4">
                    Three years means I value your honesty. We'll celebrate some
                    other time, Sheetal.
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

      {/* FAKE NO MODAL (Clickbait Payoff) */}
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
            <ShieldAlert size={50} className="text-danger mb-4" />
            <h4 className="fw-bold tracking-tighter text-danger">
              403: CURIOSITY_DETECTED
            </h4>
            <p className="text-secondary small mt-3 px-2">
              Nice try, Sheetal. The "No" path has been restricted by Admin.
              <br />
              <br />
              Please re-authenticate your intent using the <b>'YES'</b> button.
            </p>
            <Button
              variant="danger"
              className="mt-4 w-100 fw-bold py-3 rounded-3"
              onClick={() => setShowFakeError(false)}
            >
              Return to Login
            </Button>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}
