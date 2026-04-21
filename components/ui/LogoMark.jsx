export function LogoMark() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
      <span className="absolute left-[9px] h-5 w-[7px] rounded-full bg-sky-500" />
      <span className="absolute right-[9px] h-5 w-[7px] rounded-full bg-orange-500" />
      <span className="absolute top-[7px] h-[7px] w-5 rounded-full bg-orange-500" />
      <span className="absolute bottom-[7px] h-[7px] w-5 rounded-full bg-sky-500" />
      <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
    </div>
  );
}

