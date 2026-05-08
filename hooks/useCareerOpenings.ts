"use client";

import { useMemo, useState } from "react";
import { jobOpenings, type JobDepartment } from "@/data/careerData";

export function useCareerOpenings() {
  const [activeDepartment, setActiveDepartment] = useState<"all" | JobDepartment>("all");
  const [activeRole, setActiveRole] = useState<string>("Growth Marketing Lead");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return jobOpenings.filter((job) => {
      const departmentMatches = activeDepartment === "all" || job.department === activeDepartment;
      const roleMatches = activeRole === "All Roles" || job.role === activeRole;
      const searchMatches =
        normalizedSearch.length === 0 ||
        `${job.title} ${job.location} ${job.details}`.toLowerCase().includes(normalizedSearch);

      return departmentMatches && roleMatches && searchMatches;
    });
  }, [activeDepartment, activeRole, searchQuery]);

  const activeJob = filteredJobs[0] ?? null;

  return {
    activeDepartment,
    setActiveDepartment,
    activeRole,
    setActiveRole,
    searchQuery,
    setSearchQuery,
    filteredJobs,
    activeJob,
  };
}
