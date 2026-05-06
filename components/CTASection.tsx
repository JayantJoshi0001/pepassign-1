"use client";

import { useState } from "react";
import { X } from "lucide-react";
import styles from "./CTASection.module.css";

interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
}

interface ESGData {
  score: number;
  rating: string;
  environmental: number;
  social: number;
  governance: number;
}

export default function CTASection() {
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const [showESGModal, setShowESGModal] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: string } | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    businessName: "",
    email: "",
    phone: "",
  });

  const [esgData, setESGData] = useState<ESGData | null>(null);

  // Mock API call for badge submission
  const submitBadgeApplication = async (data: FormData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock success response
      console.log("Badge application submitted:", data);

      setLoading(false);
      setShowBadgeModal(false);
      setFormData({ name: "", businessName: "", email: "", phone: "" });

      // Show success toast
      setToast({ message: "Application submitted successfully!", type: "success" });
      setTimeout(() => setToast(null), 3000);
    } catch (error) {
      setLoading(false);
      setToast({ message: "Failed to submit application", type: "error" });
      setTimeout(() => setToast(null), 3000);
    }
  };

  // Mock API call for ESG score
  const fetchESGScore = async () => {
    setShowCongrats(true);
    setLoading(true);

    try {
      // Simulate API call with celebration animation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock ESG data
      const mockESG: ESGData = {
        score: 78,
        rating: "Good",
        environmental: 82,
        social: 75,
        governance: 77,
      };

      setESGData(mockESG);
      setShowCongrats(false);
      setShowESGModal(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setShowCongrats(false);
      setToast({ message: "Failed to fetch ESG score", type: "error" });
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBadgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.businessName || !formData.email || !formData.phone) {
      setToast({ message: "Please fill all fields", type: "error" });
      setTimeout(() => setToast(null), 3000);
      return;
    }
    submitBadgeApplication(formData);
  };

  return (
    <>
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Be Part of the Movement</h2>
          <p className={styles.ctaText}>
            Pepagora is redefining how business can be a force for good. Whether
            you are a buyer, seller, policymaker, or investor—join us in shaping
            global trade that is inclusive, ethical, and future-ready.
          </p>
          <div className={styles.ctaButtonGroup}>
            <button
              onClick={() => setShowBadgeModal(true)}
              className={`${styles.ctaButton} ${styles.primary}`}
            >
              Apply for Social Impact Badges
            </button>
            <button
              onClick={fetchESGScore}
              disabled={loading}
              className={`${styles.ctaButton} ${styles.secondary}`}
            >
              View Your ESG Score or Upgrade
            </button>
          </div>
        </div>
      </section>

      {/* Badge Application Modal */}
      {showBadgeModal && (
        <div className="modal-overlay" onClick={() => setShowBadgeModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Apply for Social Impact Badges</h3>
              <button
                className="modal-close"
                onClick={() => setShowBadgeModal(false)}
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleBadgeSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleFormChange}
                  placeholder="Enter your business name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowBadgeModal(false)}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Congratulations Animation */}
      {showCongrats && (
        <div className="congrats-overlay">
          <div className="congrats-container">
            <div className="particles-container">
              {Array.from({ length: 10050 }).map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    '--angle': `${(i / 10050) * 360}deg`,
                    // eslint-disable-next-line react-hooks/purity
                    '--delay': `${Math.random() * 1}s`,
                  } as React.CSSProperties}
                />
              ))}
            </div>
            <h2 className="congrats-title">Congratulations! 🎉</h2>
            <p className="congrats-text">Fetching your ESG Score...</p>
          </div>
        </div>
      )}

      {/* ESG Score Modal */}
      {showESGModal && esgData && (
        <div className="modal-overlay" onClick={() => setShowESGModal(false)}>
          <div className="modal-content esg-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Your ESG Score</h3>
              <button
                className="modal-close"
                onClick={() => setShowESGModal(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="esg-content">
              <div className="esg-score-main">
                <div className="score-circle">
                  <span className="score-number">{esgData.score}</span>
                  <span className="score-max">/100</span>
                </div>
                <div className="score-rating">
                  <p className="rating-label">Rating</p>
                  <p className="rating-value">{esgData.rating}</p>
                </div>
              </div>

              <div className="esg-breakdown">
                <h4 className="breakdown-title">Detailed Scores</h4>
                <div className="score-items">
                  <div className="score-item">
                    <span className="item-label">Environmental</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${esgData.environmental}%` }}
                      ></div>
                    </div>
                    <span className="item-value">{esgData.environmental}</span>
                  </div>
                  <div className="score-item">
                    <span className="item-label">Social</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${esgData.social}%` }}
                      ></div>
                    </div>
                    <span className="item-value">{esgData.social}</span>
                  </div>
                  <div className="score-item">
                    <span className="item-label">Governance</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${esgData.governance}%` }}
                      ></div>
                    </div>
                    <span className="item-value">{esgData.governance}</span>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setShowESGModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </>
  );
}
