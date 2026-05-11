"use client";

import { Minus, Plus, Search } from "lucide-react";
import { useState } from "react";
import ActionButton from "@/components/ui/ActionButton";
import { departmentTabs, roleFilters } from "@/data/careerData";
import { useCareerOpenings } from "@/hooks/useCareerOpenings";
import styles from "./OpeningsSection.module.css";

export default function OpeningsSection() {
  const {
    activeDepartment,
    setActiveDepartment,
    activeRole,
    setActiveRole,
    searchQuery,
    setSearchQuery,
    filteredJobs,
  } = useCareerOpenings();

  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const activeExpandedJobId =
    expandedJobId && filteredJobs.some((job) => job.id === expandedJobId)
      ? expandedJobId
      : filteredJobs[0]?.id ?? null;

  const toggleJob = (jobId: string) => {
    setExpandedJobId((current) => (current === jobId ? null : jobId));
  };

  return (
    <section id="openings" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          Current <span>Openings</span>
        </h2>

        <div className={styles.tabs}>
          {departmentTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`${styles.tab} ${activeDepartment === tab.key ? styles.activeTab : ""}`}
              onClick={() => setActiveDepartment(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          <aside className={styles.sidebar}>
            <label className={styles.searchWrap}>
              <input
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <Search size={16} />
            </label>

            <ul className={styles.roleList}>
              {roleFilters.map((role) => (
                <li key={role}>
                  <button
                    type="button"
                    className={`${styles.roleBtn} ${activeRole === role ? styles.activeRole : ""}`}
                    onClick={() => setActiveRole(role)}
                  >
                    {role}
                  </button>
                </li>
              ))}
            </ul>

            <p className={styles.note}>Don&apos;t find what you&apos;re looking for? Reach out at careers@pepagora.com and tell us how you can contribute.</p>
          </aside>

          <article className={styles.jobCard}>
            {filteredJobs.length ? (
              <div className={styles.accordionList}>
                {filteredJobs.map((job) => {
                  const isExpanded = activeExpandedJobId === job.id;

                  return (
                    <div key={job.id} className={`${styles.accordionItem} ${isExpanded ? styles.accordionItemOpen : ""}`}>
                      <button
                        type="button"
                        className={styles.accordionTrigger}
                        onClick={() => toggleJob(job.id)}
                        aria-expanded={isExpanded}
                      >
                        <span className={styles.accordionTitle}>{job.title}</span>
                        <span className={styles.accordionIcon} aria-hidden="true">
                          {isExpanded ? <Minus size={24} /> : <Plus size={24} />}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className={styles.accordionPanel}>
                          <div className={styles.accordionPanelCard}>
                            <h3>{job.title}</h3>
                            <div className={styles.metaGrid}>
                              <div>
                                <p className={styles.metaLabel}>Location</p>
                                <p className={styles.metaValue}>{job.location}</p>
                              </div>
                              <div>
                                <p className={styles.metaLabel}>Experience</p>
                                <p className={styles.metaValue}>{job.experience}</p>
                              </div>
                            </div>
                            <div className={styles.detailsBlock}>
                              <p className={styles.metaLabel}>Job Details</p>
                              <p className={styles.jobDetails}>{job.details}</p>
                            </div>
                            <ActionButton label="View More" variant="ghost" size="sm" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className={styles.emptyState}>No openings match your current filters.</p>
            )}
          </article>

          <p className={`${styles.noteBelowCard}`}>
            Don&apos;t find what you&apos;re looking for? Reach out at careers@pepagora.com and tell us how you can contribute.
          </p>
        </div>
      </div>
    </section>
  );
}
