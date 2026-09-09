import {
  Ticket,
  CircleDot,
  Clock3,
  CheckCircle2,
} from "lucide-react";

function StatsCard({ title, value, type }) {
  const icons = {
    total: Ticket,
    open: CircleDot,
    progress: Clock3,
    resolved: CheckCircle2,
  };

  const Icon = icons[type];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-sm transition">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h2>
        </div>

        <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center">
          <Icon size={22} className="text-slate-600" />
        </div>

      </div>
    </div>
  );
}

export default StatsCard;