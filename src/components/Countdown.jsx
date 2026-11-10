import { useEffect, useState } from 'react'

// Contador regresivo hasta la fecha `endTime` (ej. "2026-12-31T23:59:59")
function Countdown({ endTime, className }) {
  const end = new Date(endTime)
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer) // se limpia al quitar el componente
  }, [])

  if (isNaN(end)) return <div className={className}>Invalid date</div>

  const diff = Math.max(0, end - now)
  const s = Math.floor(diff / 1000)
  const texto = diff
    ? `${Math.floor(s / 86400)}d ${Math.floor((s % 86400) / 3600)}h ${Math.floor((s % 3600) / 60)}m ${s % 60}s`
    : 'Time is up!'

  return <div className={className}>{texto}</div>
}

export default Countdown
