"use client";

import { ExternalLink, Code2, Briefcase, User } from "lucide-react";
import type { Project } from "../types/project.types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ProjectDetailDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function getProjectThumbnail(project: Project): string {
  if (project.image) return project.image;
  return `https://placehold.co/600x400/1a1a2e/eaeaea?text=${encodeURIComponent(project.name)}`;
}

const typeConfig = {
  client: {
    badge: "Client Project",
    icon: Briefcase,
    badgeClass:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  personal: {
    badge: "Personal Project",
    icon: User,
    badgeClass:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  },
} as const;

export function ProjectDetailDialog({
  project,
  open,
  onOpenChange,
}: ProjectDetailDialogProps) {
  const config = typeConfig[project.projectType];
  const TypeIcon = config.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className=" min-w-[calc(100vw-4rem)]  overflow-y-auto"
        showCloseButton
      >
        <DialogHeader>
          <DialogTitle className="text-xl">{project.name}</DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            <span>{project.category}</span>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${config.badgeClass}`}
            >
              <TypeIcon className="h-3 w-3" />
              {config.badge}
            </span>
          </DialogDescription>
        </DialogHeader>

        {/* Responsive layout: side-by-side on desktop, stacked on mobile */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-10">
          {/* Left: Thumbnail — 70% */}
          <div className="overflow-hidden rounded-lg md:col-span-7">
            <img
              src={getProjectThumbnail(project)}
              alt={project.name}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Details — 30% */}
          <div className="flex flex-col gap-4 md:col-span-3">
            {project.organization && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Organization
                </p>
                <p className="text-sm text-neutral-900 dark:text-white">
                  {project.organization}
                </p>
              </div>
            )}

            {project.period && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Period
                </p>
                <p className="text-sm text-neutral-900 dark:text-white">
                  {project.period}
                </p>
              </div>
            )}

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Description
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights.length > 0 && (
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Highlights
                </p>
                <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-neutral-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.links && (
              <div className="flex flex-wrap gap-3 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
                {project.projectType === "personal" && project.links.source && (
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                  >
                    <Code2 className="h-4 w-4" />
                    Source Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
