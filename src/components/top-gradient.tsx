export default function TopGradient({ children, showTopGradient }: { children: React.ReactNode, showTopGradient: boolean }) {
    return (
        <div className="relative flex-1 overflow-hidden">
        {showTopGradient && (
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b  from-background to-transparent z-10 transition-opacity duration-600" />
        )}
        {children}
        </div>
    )
}