export default function Loading() {
  return (
    <div className="loading-skeleton" role="status" aria-live="polite" aria-label="Loading dashboard">
      <header className="sk-topbar">
        <div className="sk-brand">
          <div className="sk-logo" />
          <div className="sk-title">
            <div className="sk-line short" />
            <div className="sk-line tiny" />
          </div>
        </div>
        <div className="sk-actions">
          <div className="sk-btn" />
          <div className="sk-btn small" />
        </div>
      </header>

      <section className="sk-grid" aria-hidden>
        <aside className="sk-sidebar">
          <div className="sk-card">
            <div className="sk-line big" />
            <div className="sk-line small" />
          </div>
          <div className="sk-card">
            <div className="sk-line big" />
            <div className="sk-line small" />
          </div>
          <div className="sk-card">
            <div className="sk-line big" />
            <div className="sk-line small" />
          </div>
        </aside>

        <main className="sk-main">
          <div className="sk-map" />
        </main>

        <aside className="sk-stations">
          <div className="sk-station">
            <div className="sk-line med" />
            <div className="sk-line tiny" />
          </div>
          <div className="sk-station">
            <div className="sk-line med" />
            <div className="sk-line tiny" />
          </div>
          <div className="sk-station">
            <div className="sk-line med" />
            <div className="sk-line tiny" />
          </div>
        </aside>
      </section>

      <div className="sk-center-loader" aria-hidden>
        <div className="sk-bolt">⚡</div>
        <div className="sk-ring" />
        <div className="sk-loader-text">Charging Map • Loading...</div>
      </div>

      <style>{`
        :root{
          --bg:#071022;
          --card: rgba(255,255,255,0.03);
          --muted: rgba(255,255,255,0.12);
          --accent: #06d6ff;
        }
        *{box-sizing:border-box}
        .loading-skeleton{
          position:fixed;
          inset:0;
          background: linear-gradient(180deg,#041022 0%, #071022 100%);
          color:#e6eef6;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          display:flex;
          flex-direction:column;
          gap:18px;
          padding:20px;
          z-index:99999;
        }

        /* Topbar skeleton */
        .sk-topbar{display:flex;justify-content:space-between;align-items:center;gap:12px}
        .sk-brand{display:flex;align-items:center;gap:12px}
        .sk-logo{width:52px;height:44px;border-radius:10px;background:linear-gradient(90deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02));position:relative;overflow:hidden}
        .sk-title{display:flex;flex-direction:column;gap:6px}
        .sk-line{height:10px;border-radius:8px;background:linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02));position:relative;overflow:hidden}
        .sk-line.short{width:110px}
        .sk-line.tiny{width:64px;height:8px}
        .sk-actions{display:flex;gap:10px;align-items:center}
        .sk-btn{width:84px;height:36px;border-radius:8px;background:linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02));position:relative;overflow:hidden}
        .sk-btn.small{width:56px;height:32px}

        /* Grid */
        .sk-grid{display:grid;grid-template-columns:240px 1fr 320px;gap:18px;flex:1;align-items:start}
        .sk-sidebar, .sk-stations{display:flex;flex-direction:column;gap:12px}
        .sk-card, .sk-station{height:72px;border-radius:12px;background:var(--card);position:relative;overflow:hidden;padding:12px;display:flex;flex-direction:column;justify-content:center;gap:8px}
        .sk-line.big{width:80%;height:18px;border-radius:8px}
        .sk-line.med{width:68%;height:14px}
        .sk-line.small{width:48%;height:10px}

        .sk-main{display:flex;flex-direction:column}
        .sk-map{border-radius:14px;min-height:420px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));box-shadow:0 10px 30px rgba(0,0,0,0.6);position:relative;overflow:hidden}

        /* shimmer */
        .sk-card::after,
        .sk-station::after,
        .sk-logo::after,
        .sk-btn::after,
        .sk-line::after,
        .sk-map::after {
          content:"";
          position:absolute;
          inset:0;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          transform: translateX(-120%);
          animation: sk-shimmer 1.6s linear infinite;
        }
        @keyframes sk-shimmer { to { transform: translateX(120%); } }

        /* Center loader */
        .sk-center-loader{
          position:absolute;
          left:50%;top:50%;
          transform:translate(-50%,-50%);
          display:flex;flex-direction:column;align-items:center;gap:10px;padding:14px 18px;border-radius:12px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));box-shadow:0 18px 48px rgba(2,6,23,0.8);pointer-events:none
        }
        .sk-bolt{
          width:68px;height:68px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:30px;background:linear-gradient(90deg,var(--accent),#06a9ff);color:#07203a;box-shadow: 0 12px 30px rgba(6,214,255,0.08);
        }
        .sk-ring{width:72px;height:72px;border-radius:50%;border:4px solid rgba(255,255,255,0.06);border-top-color:var(--accent);animation:sk-spin 900ms linear infinite;margin-top:-78px;box-shadow:0 8px 20px rgba(6,214,255,0.04)}
        @keyframes sk-spin{to{transform:rotate(360deg)}}
        .sk-loader-text{font-size:13px;color:var(--muted);font-weight:600;margin-top:6px}

        /* responsive */
        @media (max-width:980px){
          .sk-grid{grid-template-columns:1fr;gap:12px}
          .sk-map{min-height:280px}
          .sk-stations{order:3}
          .sk-sidebar{order:1;flex-direction:row;overflow:auto}
        }
      `}</style>
    </div>
  )
}
