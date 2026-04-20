import { contactItems } from "@/lib/site-data";
import { ClockIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";

const iconMap = {
  phone: PhoneIcon,
  mail: MailIcon,
  clock: ClockIcon,
};

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-[var(--color-navy)] text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2 text-sm font-medium">
        {contactItems.map((item) => {
          const Icon = iconMap[item.type];

          return (
            <a key={item.label} href={item.href} className="inline-flex items-center gap-2 text-white/90 transition hover:text-white">
              <Icon className="h-4 w-4 text-orange-400" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

