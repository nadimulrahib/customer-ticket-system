import { useState } from "react";

const CalendarIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
);

const PRIORITY_STYLES = {
  High: "bg-red-50 text-red-600 border-red-100",
  Medium: "bg-amber-50 text-amber-600 border-amber-100",
  Low: "bg-gray-100 text-gray-500 border-gray-200",
  Urgent: "bg-green-100 text-green-500 border-green-200",
};

const STATUS_STYLES = {
  open: {
    wrapper: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
    pulse: true,
  },

  In_Progress: {
    wrapper: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
    pulse: false,
  },
};

export default function Customer({ singleCustomer, onClick }) {
  const { id, title, description, customer, priority, status, createdAt } =
    singleCustomer;

  const [hovered, setHovered] = useState(false);

  
  const statusStyle = STATUS_STYLES[status] ?? STATUS_STYLES.open;
  const priorityStyle = PRIORITY_STYLES[priority] ?? PRIORITY_STYLES.Low;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        bg-white rounded-xl border border-gray-200 p-5 w-full max-w-md
        cursor-pointer select-none outline-none
        transition-all duration-200
        ${hovered ? "shadow-md -translate-y-0.5" : "shadow-sm"}
        focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2
      `}
    >
      {/* Title + Status */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="text-gray-900 font-semibold text-base leading-snug">
          {title}
        </h2>
        <span
          className={`inline-flex items-center gap-1.5 shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border ${statusStyle.wrapper}`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot} ${statusStyle.pulse ? "animate-pulse" : ""}`}
          />
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs">
        {/* Ticket ID + Priority */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 font-medium">#{id}</span>
          <span
            className={`inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded border uppercase tracking-wide text-[10px] ${priorityStyle}`}
          >
            <AlertIcon />
            {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
          </span>
        </div>

        {/* Assignee + Date */}
        <div className="flex items-center gap-3 text-gray-400">
          <div className="flex items-center gap-1.5">
     
            <span className="text-gray-500 font-medium">{customer}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon />
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
