export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-600 to-green-400">
      {children}
    </div>
  )
}
