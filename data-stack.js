import React, { useState, useEffect } from "react";

const CREAM = "#FAF7F2";
const BORDER = "#E8E0D5";
const TEXT = "#2D2A26";
const MUTED = "#9C8E82";
const ACCENT = "#C17B3F";

function SceneSources() {
  const [truckX, setTruckX] = useState(-160);
  const [showCrates, setShowCrates] = useState(false);
  useEffect(() => {
    function run() {
      setTruckX(-160); setShowCrates(false);
      setTimeout(() => setTruckX(62), 100);
      setTimeout(() => setShowCrates(true), 1400);
    }
    run();
    const id = setInterval(run, 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <svg viewBox="0 0 280 165" style={{width:"100%",height:"auto",display:"block"}} overflow="hidden">
      <defs><clipPath id="sceneClip"><rect x={0} y={0} width={280} height={165} /></clipPath></defs>
      <rect x={0} y={0} width={280} height={165} fill="#F0F9FF" />
      <rect x={0} y={130} width={280} height={35} fill="#D1FAE5" />
      <rect x={0} y={130} width={280} height={16} fill="#D6D3D1" />
      {[20,70,120,170,220].map(x => <rect key={x} x={x} y={137} width={30} height={3} rx={1} fill="#FAFAF9" opacity={0.7} />)}
      <rect x={4} y={72} width={44} height={58} fill="#DC2626" stroke="#991B1B" strokeWidth={1.5} />
      <polygon points="4,72 26,48 48,72" fill="#991B1B" />
      <rect x={16} y={95} width={14} height={35} fill="#78350F" />
      <rect x={50} y={88} width={16} height={42} fill="#E5E7EB" stroke="#9CA3AF" strokeWidth={1} />
      <ellipse cx={58} cy={88} rx={8} ry={5} fill="#D1D5DB" />
      <circle cx={248} cy={28} r={18} fill="#FEF08A" stroke="#FDE047" strokeWidth={1.5} />
      <ellipse cx={80} cy={22} rx={22} ry={10} fill="white" opacity={0.9} />
      <ellipse cx={96} cy={18} rx={16} ry={10} fill="white" opacity={0.9} />
      <ellipse cx={64} cy={20} rx={14} ry={8} fill="white" opacity={0.9} />
      <g clipPath="url(#sceneClip)" style={{transform:`translateX(${truckX}px)`,transition:"transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94)"}}>
        <rect x={0} y={88} width={105} height={42} rx={6} fill="#FEF3C7" stroke="#FCD34D" strokeWidth={2} />
        <rect x={100} y={94} width={44} height={36} rx={4} fill="#FDE68A" stroke="#FCD34D" strokeWidth={2} />
        <circle cx={24} cy={132} r={9} fill="#92400E" /><circle cx={24} cy={132} r={4} fill="#FEF3C7" />
        <circle cx={80} cy={132} r={9} fill="#92400E" /><circle cx={80} cy={132} r={4} fill="#FEF3C7" />
        <circle cx={116} cy={132} r={9} fill="#92400E" /><circle cx={116} cy={132} r={4} fill="#FEF3C7" />
        <text x={50} y={114} textAnchor="middle" fontSize={15}>🥦 🍅 🥕</text>
        <text x={50} y={126} textAnchor="middle" fontSize={7} fill={MUTED}>fresh data</text>
      </g>
    </svg>
  );
}

function SceneExtract() {
  const [truckX, setTruckX] = useState(-130);
  const [showBoxes, setShowBoxes] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [tickIdx, setTickIdx] = useState(0);
  useEffect(() => {
    function run() {
      setTruckX(-130); setShowBoxes(false); setDoorOpen(false); setTickIdx(0);
      setTimeout(() => setTruckX(50), 200);
      setTimeout(() => setDoorOpen(true), 1300);
      setTimeout(() => setShowBoxes(true), 1700);
      setTimeout(() => setTickIdx(1), 1900);
      setTimeout(() => setTickIdx(2), 2400);
      setTimeout(() => setTickIdx(3), 2900);
    }
    run();
    const id = setInterval(run, 5000);
    return () => clearInterval(id);
  }, []);
  const logs = ["Fivetran syncs data","Lands in Snowflake","Airflow triggers dbt"];
  return (
    <svg viewBox="0 0 280 165" style={{width:"100%",height:"auto",display:"block"}}>
      <rect x={0} y={148} width={280} height={3} rx={1} fill={BORDER} />
      <rect x={200} y={55} width={72} height={95} rx={4} fill="#57534E" stroke="#44403C" strokeWidth={2} />
      <rect x={210} y={60} width={52} height={14} rx={2} fill="#C17B3F" />
      <text x={236} y={71} textAnchor="middle" fontSize={9} fill="white" fontWeight={800}>KITCHEN</text>
      <rect x={213} y={78} width={36} height={70} rx={3} fill="#78716C" stroke="#57534E" strokeWidth={1}
        style={{transition:"transform 0.4s ease", transformOrigin:"213px 113px", transform:doorOpen?"scaleX(0.08)":"scaleX(1)"}} />
      {showBoxes && (
        <g>
          <rect x={158} y={110} width={28} height={28} rx={3} fill="#D1FAE5" stroke="#6EE7B7" strokeWidth={1.5} />
          <text x={172} y={128} textAnchor="middle" fontSize={13}>🥦</text>
          <rect x={126} y={114} width={26} height={26} rx={3} fill="#FEF3C7" stroke="#FCD34D" strokeWidth={1.5} />
          <text x={139} y={130} textAnchor="middle" fontSize={12}>🍅</text>
        </g>
      )}
      <g style={{transform:`translateX(${truckX}px)`,transition:"transform 1.1s cubic-bezier(0.25,0.46,0.45,0.94)"}}>
        <rect x={0} y={90} width={105} height={52} rx={6} fill="#DBEAFE" stroke="#93C5FD" strokeWidth={2} />
        <rect x={100} y={100} width={44} height={42} rx={4} fill="#BFDBFE" stroke="#93C5FD" strokeWidth={2} />
        <text x={16} y={74} fontSize={10} fill="#0369A1" fontWeight={700}>FIVETRAN</text>
        <text x={50} y={84} textAnchor="middle" fontSize={8} fill={MUTED}>on schedule</text>
        <circle cx={24} cy={145} r={10} fill="#1E3A5F" /><circle cx={24} cy={145} r={5} fill="#DBEAFE" />
        <circle cx={84} cy={145} r={10} fill="#1E3A5F" /><circle cx={84} cy={145} r={5} fill="#DBEAFE" />
        <circle cx={116} cy={145} r={10} fill="#1E3A5F" /><circle cx={116} cy={145} r={5} fill="#DBEAFE" />
      </g>
      {logs.map((l, i) => (
        <g key={i} style={{opacity:tickIdx>i?1:0,transition:"opacity 0.3s"}}>
          <text x={10} y={22+i*14} fontSize={9} fill="#059669" fontWeight={600}>✓ {l}</text>
        </g>
      ))}
    </svg>
  );
}

function SceneWarehouse() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    function run() { setStep(0); setTimeout(()=>setStep(1),600); setTimeout(()=>setStep(2),1400); setTimeout(()=>setStep(3),2200); }
    run();
    const id = setInterval(run, 5000);
    return () => clearInterval(id);
  }, []);
  const rawEmoji = ["🥦","🍅","🥕"];
  const cleanEmoji = ["🍲","🥗","🍱"];
  const doorOpen = step >= 1;
  return (
    <svg viewBox="0 0 280 165" style={{width:"100%",height:"auto",display:"block"}}>
      <rect x={60} y={10} width={160} height={148} rx={10} fill="#DBEAFE" stroke="#93C5FD" strokeWidth={3} />
      <rect x={70} y={18} width={140} height={132} rx={7} fill="#EFF6FF" />
      <line x1={60} y1={80} x2={220} y2={80} stroke="#93C5FD" strokeWidth={2.5} />
      <text x={140} y={36} textAnchor="middle" fontSize={8} fill="#1D4ED8" fontWeight={700} letterSpacing={0.5}>FREEZER</text>
      <text x={140} y={96} textAnchor="middle" fontSize={8} fill="#0369A1" fontWeight={700} letterSpacing={0.5}>FRESH</text>
      <text x={140} y={68} textAnchor="middle" fontSize={22}>❄️</text>
      <rect x={210} y={55} width={6} height={56} rx={3} fill="#93C5FD" />
      <rect x={60} y={10} width={160} height={148} rx={10}
        fill="#BFDBFE" stroke="#3B82F6" strokeWidth={2.5}
        style={{transition:"transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",transformOrigin:"60px 84px",transform:doorOpen?"scaleX(0.04)":"scaleX(1)"}} />
      {!doorOpen && <rect x={206} y={55} width={6} height={56} rx={3} fill="#60A5FA" />}
      {step >= 2 && (
        <g style={{opacity:1,transition:"opacity 0.4s"}}>
          {rawEmoji.map((e,i) => <text key={i} x={85+i*35} y={70} textAnchor="middle" fontSize={16}>{e}</text>)}
        </g>
      )}
      {step >= 3 && (
        <g style={{opacity:1,transition:"opacity 0.4s"}}>
          {cleanEmoji.map((e,i) => <text key={i} x={85+i*35} y={138} textAnchor="middle" fontSize={16}>{e}</text>)}
        </g>
      )}
    </svg>
  );
}

function SceneTransform() {
  const [phase, setPhase] = useState(1);
  useEffect(() => {
    setTimeout(() => setPhase(2), 1000);
    const id = setInterval(() => {
      setPhase(0);
      setTimeout(() => setPhase(1), 600);
      setTimeout(() => setPhase(2), 1600);
    }, 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <svg viewBox="0 0 280 165" style={{width:"100%",height:"auto",display:"block"}}>
      <rect x={18} y={108} width={244} height={46} rx={6} fill="#F5F5F4" stroke={BORDER} strokeWidth={2} />
      <circle cx={50} cy={86} r={20} fill="#FEF3C7" stroke={BORDER} strokeWidth={1.5} />
      <text x={50} y={94} textAnchor="middle" fontSize={20}>👨‍🍳</text>
      <rect x={98} y={98} width={84} height={18} rx={3} fill="#D4A574" stroke="#B8955A" strokeWidth={1.5} />
      {phase <= 1 && <text x={140} y={113} textAnchor="middle" fontSize={15}>🥦</text>}
      {phase === 1 && <text x={140} y={100} textAnchor="middle" fontSize={19} style={{transformOrigin:"center"}}>🔪</text>}
      {phase === 2 && (
        <g>
          <text x={115} y={113} textAnchor="middle" fontSize={14}>✅</text>
          <text x={140} y={113} textAnchor="middle" fontSize={14}>🍲</text>
          <text x={165} y={113} textAnchor="middle" fontSize={14}>🎯</text>
        </g>
      )}
      <text x={100} y={142} textAnchor="middle" fontSize={8.5} fill={MUTED}>raw data</text>
      <text x={178} y={142} textAnchor="middle" fontSize={8.5} fill={phase===2?"#059669":MUTED} fontWeight={phase===2?700:400}>
        {phase===2?"ready! ✓":"cleaning..."}
      </text>
    </svg>
  );
}

function SceneObservability() {
  const [idx, setIdx] = useState(-1);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => i>=4?-1:i+1), 750);
    return () => clearInterval(id);
  }, []);
  const checks = [{l:"Fivetran sync",ok:true},{l:"Airflow DAG",ok:true},{l:"Snowflake tables",ok:true},{l:"Sigma dashboard",ok:false}];
  return (
    <svg viewBox="0 0 280 165" style={{width:"100%",height:"auto",display:"block"}}>
      <rect x={0} y={0} width={280} height={165} fill="#FFFBEB" />
      <rect x={0} y={138} width={280} height={27} fill="#FEF3C7" />
      <rect x={0} y={130} width={280} height={10} rx={2} fill="#D4A574" />
      <circle cx={30} cy={48} r={20} fill="#FEF3C7" stroke={BORDER} strokeWidth={1.5} />
      <text x={30} y={56} textAnchor="middle" fontSize={20}>🧑‍⚕️</text>
      <rect x={14} y={72} width={34} height={52} rx={4} fill="white" stroke="#D4A574" strokeWidth={1.5} />
      <rect x={20} y={68} width={22} height={8} rx={2} fill="#D4A574" />
      <line x1={19} y1={84} x2={43} y2={84} stroke={BORDER} strokeWidth={1} />
      <line x1={19} y1={92} x2={43} y2={92} stroke={BORDER} strokeWidth={1} />
      <line x1={19} y1={100} x2={38} y2={100} stroke={BORDER} strokeWidth={1} />
      <rect x={68} y={8} width={204} height={18} rx={6} fill="#7C3AED" />
      <text x={170} y={21} textAnchor="middle" fontSize={9} fill="white" fontWeight={700} letterSpacing={0.5}>🍽️ KITCHEN INSPECTION</text>
      <rect x={68} y={30} width={204} height={116} rx={6} fill="white" stroke={BORDER} strokeWidth={1.5} />
      {checks.map((c, i) => (
        <g key={i}>
          <rect x={76} y={38+i*26} width={188} height={20} rx={5}
            fill={idx===i?"#F5F3FF":idx>i?(c.ok?"#F0FDF4":"#FEF9C3"):CREAM}
            stroke={idx===i?"#7C3AED":idx>i?(c.ok?"#6EE7B7":"#FCD34D"):BORDER}
            strokeWidth={idx===i?2:1} style={{transition:"all 0.3s"}} />
          <text x={88} y={52+i*26} fontSize={10} fill={idx>i?(c.ok?"#059669":"#D97706"):MUTED}>
            {idx>i?(c.ok?"✓":"⚠"):"○"} {c.l}
          </text>
        </g>
      ))}
      {idx > 3 && <text x={170} y={158} textAnchor="middle" fontSize={10} fill="#059669" fontWeight={700}>Inspection complete ✓</text>}
    </svg>
  );
}

function SceneBI() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    function run() {
      setPhase(0);
      setTimeout(() => setPhase(1), 500);
      setTimeout(() => setPhase(2), 1400);
      setTimeout(() => setPhase(3), 2200);
    }
    run();
    const id = setInterval(run, 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <svg viewBox="0 0 280 165" style={{width:"100%",height:"auto",display:"block"}}>
      <rect x={0} y={0} width={280} height={165} fill="#FFFBEB" />
      <rect x={0} y={128} width={280} height={37} fill="#FEF3C7" />
      <rect x={0} y={122} width={280} height={8} rx={2} fill="#D4A574" />
      <circle cx={36} cy={52} r={22} fill="#FEF3C7" stroke={BORDER} strokeWidth={1.5} />
      <text x={36} y={60} textAnchor="middle" fontSize={22}>👨‍🍳</text>
      <rect x={22} y={28} width={28} height={10} rx={3} fill="white" stroke={BORDER} strokeWidth={1} />
      <rect x={26} y={18} width={20} height={14} rx={4} fill="white" stroke={BORDER} strokeWidth={1} />
      <rect x={62} y={98} width={210} height={26} rx={4} fill="#D4A574" stroke="#B8955A" strokeWidth={1.5} />
      <text x={167} y={115} textAnchor="middle" fontSize={8} fill="white" fontWeight={700} letterSpacing={0.5}>PASS-THROUGH</text>
      {phase >= 1 && (
        <g>
          <ellipse cx={110} cy={80} rx={28} ry={10} fill="white" stroke={BORDER} strokeWidth={1.5} />
          <ellipse cx={110} cy={77} rx={24} ry={8} fill={CREAM} stroke={BORDER} strokeWidth={1} />
          <text x={110} y={82} textAnchor="middle" fontSize={18}>🍲</text>
          <text x={110} y={95} textAnchor="middle" fontSize={7} fill={MUTED}>clean meals</text>
        </g>
      )}
      {phase >= 2 && <text x={158} y={82} textAnchor="middle" fontSize={14}>→</text>}
      {phase >= 2 && (
        <g>
          <ellipse cx={210} cy={80} rx={32} ry={12} fill="white" stroke="#BE185D" strokeWidth={2} />
          <ellipse cx={210} cy={77} rx={27} ry={9} fill="#FDF2F8" stroke="#FBCFE8" strokeWidth={1} />
          <text x={210} y={83} textAnchor="middle" fontSize={16}>🍽️</text>
          <text x={210} y={96} textAnchor="middle" fontSize={7} fill="#BE185D" fontWeight={700}>dinner is served 🍷</text>
        </g>
      )}
      {phase >= 3 && (
        <g>
          <rect x={174} y={8} width={98} height={82} rx={7} fill="white" stroke="#BE185D" strokeWidth={1.5} />
          <rect x={178} y={12} width={90} height={74} rx={5} fill={CREAM} />
          <rect x={181} y={15} width={38} height={20} rx={3} fill="white" stroke={BORDER} strokeWidth={1} />
          <text x={200} y={23} textAnchor="middle" fontSize={6} fill={MUTED}>Fill Rate</text>
          <text x={200} y={32} textAnchor="middle" fontSize={9} fill={ACCENT} fontWeight={700}>94.2%</text>
          <rect x={223} y={15} width={38} height={20} rx={3} fill="white" stroke={BORDER} strokeWidth={1} />
          <text x={242} y={23} textAnchor="middle" fontSize={6} fill={MUTED}>Orders</text>
          <text x={242} y={32} textAnchor="middle" fontSize={9} fill="#059669" fontWeight={700}>4,201</text>
          {[28,18,24,32].map((h, i) => (
            <rect key={i} x={184+i*22} y={72-h} width={14} height={h} rx={2} fill={ACCENT} opacity={0.75} />
          ))}
          {["NE","SE","MW","W"].map((l, i) => (
            <text key={i} x={191+i*22} y={80} textAnchor="middle" fontSize={5.5} fill={MUTED}>{l}</text>
          ))}
          <rect x={186} y={38} width={56} height={14} rx={4} fill="#BE185D" />
          <text x={214} y={48} textAnchor="middle" fontSize={7} fill="white" fontWeight={700}>via Sigma ✓</text>
        </g>
      )}
      {phase >= 2 && <text x={62} y={88} textAnchor="middle" fontSize={13}>🤌</text>}
    </svg>
  );
}

// ── Reverse ETL scene — food analogy front and center ──────────────────────
function SceneReverseETL() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    function run() {
      setPhase(0);
      setTimeout(() => setPhase(1), 700);
      setTimeout(() => setPhase(2), 1800);
      setTimeout(() => setPhase(3), 2900);
    }
    run();
    const id = setInterval(run, 5500);
    return () => clearInterval(id);
  }, []);

  // Plate travels from central pantry to each station
  const stations = [
    { x: 20,  y: 90,  label: "☁️ Salesforce", sublabel: "Sales station",   c: "#1D4ED8", bg: "#EFF6FF", border: "#93C5FD" },
    { x: 174, y: 90,  label: "🟠 HubSpot",    sublabel: "Marketing station",c: "#C2410C", bg: "#FFF7ED", border: "#FDBA74" },
  ];
  // pantry center
  const px = 100, py = 28;

  return (
    <svg viewBox="0 0 280 165" style={{width:"100%",height:"auto",display:"block"}}>
      {/* kitchen floor */}
      <rect x={0} y={0} width={280} height={165} fill="#FFFBEB" />
      <rect x={0} y={140} width={280} height={25} fill="#FEF3C7" />
      <rect x={0} y={134} width={280} height={8} rx={2} fill="#D4A574" />

      {/* Central pantry shelf */}
      <rect x={84} y={6} width={112} height={44} rx={8} fill="#E0F2FE" stroke="#7DD3FC" strokeWidth={2} />
      <text x={140} y={23} textAnchor="middle" fontSize={12} fill="#0369A1" fontWeight={800}>❄️ PANTRY</text>
      <text x={140} y={36} textAnchor="middle" fontSize={10} fill="#0369A1" fontWeight={600}>(Snowflake)</text>
      {/* food items on shelf */}
      <text x={112} y={48} textAnchor="middle" fontSize={12}>🍲</text>
      <text x={140} y={48} textAnchor="middle" fontSize={12}>🥗</text>
      <text x={168} y={48} textAnchor="middle" fontSize={12}>🍱</text>

      {/* Runner chef with tray */}
      {phase >= 1 && (
        <g style={{opacity:1,transition:"opacity 0.4s"}}>
          <text x={140} y={70} textAnchor="middle" fontSize={13} fill="#059669" fontWeight={800}>👩‍🍳 runner</text>
          <text x={140} y={83} textAnchor="middle" fontSize={11} fill={TEXT}>restocking stations…</text>
        </g>
      )}

      {stations.map((s, i) => {
        const tx = s.x + 48, ty = s.y + 14;
        const lit = phase >= 2;
        return (
          <line key={i}
            x1={140} y1={50} x2={tx} y2={ty}
            stroke={lit ? s.border : BORDER}
            strokeWidth={lit ? 2 : 1.5}
            strokeDasharray="5 4"
            opacity={lit ? 0.9 : 0.25}
            style={{transition:"all 0.5s"}}
          />
        );
      })}

      {/* Station boxes */}
                {stations.map((s, i) => {
        const active = phase >= 2;
        const stocked = phase >= 3;
        return (
          <g key={i}>
            <rect x={s.x} y={s.y} width={88} height={46} rx={8}
              fill={active ? s.bg : "white"}
              stroke={active ? s.c : BORDER}
              strokeWidth={active ? 2.5 : 1.5}
              style={{transition:"all 0.4s"}}
            />
            <text x={s.x+44} y={s.y+17} textAnchor="middle" fontSize={12} fill={s.c} fontWeight={800}>{s.label}</text>
            <text x={s.x+44} y={s.y+30} textAnchor="middle" fontSize={10} fill={TEXT}>{s.sublabel}</text>
            {stocked && (
              <text x={s.x+44} y={s.y+43} textAnchor="middle" fontSize={10} fill="#059669" fontWeight={700}>✓ stocked!</text>
            )}
          </g>
        );
      })}

      {/* Phase 3 — confirmation */}
      {phase >= 3 && (
        <text x={140} y={156} textAnchor="middle" fontSize={9} fill="#059669" fontWeight={700}>
          No manual exports — Hightouch does the running 🏃‍♀️
        </text>
      )}
    </svg>
  );
}

function SceneDecision() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    function run() {
      setPhase(0);
      setTimeout(() => setPhase(1), 600);   // dish sent back
      setTimeout(() => setPhase(2), 1600);  // chef fixes
      setTimeout(() => setPhase(3), 2800);  // goes back out ✅
    }
    run();
    const id = setInterval(run, 5500);
    return () => clearInterval(id);
  }, []);

  // plate x positions for animation
  const plateStart = 210, plateKitchen = 130, plateDone = 210;
  const plateX = phase === 0 ? plateStart : phase === 1 ? plateKitchen : phase >= 2 ? plateKitchen : plateKitchen;
  const plateX3 = phase >= 3 ? plateDone : plateKitchen;

  return (
    <svg viewBox="0 0 280 165" style={{width:"100%",height:"auto",display:"block"}}>
      <rect x={0} y={0} width={280} height={165} fill="#FFFBEB" />
      <rect x={0} y={138} width={280} height={27} fill="#FEF3C7" />
      <rect x={0} y={132} width={280} height={8} rx={2} fill="#D4A574" />

      {/* Counter / pass-through */}
      <rect x={0} y={104} width={280} height={14} rx={3} fill="#D4A574" stroke="#B8955A" strokeWidth={1} />
      <text x={140} y={114} textAnchor="middle" fontSize={7} fill="white" fontWeight={700} letterSpacing={0.5}>PASS-THROUGH</text>

      {/* Manager on right */}
      <circle cx={242} cy={72} r={20} fill="#FEF3C7" stroke={BORDER} strokeWidth={1.5} />
      <text x={242} y={80} textAnchor="middle" fontSize={20}>👨‍💼</text>
      <text x={242} y={98} textAnchor="middle" fontSize={7.5} fill={MUTED}>manager</text>

      {/* Chef on left */}
      <circle cx={38} cy={72} r={20} fill="#FEF3C7" stroke={BORDER} strokeWidth={1.5} />
      <text x={38} y={80} textAnchor="middle" fontSize={20}>👨‍🍳</text>
      <text x={38} y={98} textAnchor="middle" fontSize={7.5} fill={MUTED}>chef</text>

      {/* Step labels */}
      <text x={140} y={18} textAnchor="middle" fontSize={10} fill={TEXT} fontWeight={700}>
        {phase === 0 ? "🍽️ CPAP order placed…" : phase === 1 ? "❌ supplier A cancels!" : phase === 2 ? "🔀 rerouting to supplier B…" : "✅ order fulfilled — on time!"}
      </text>

      {/* Plate — slides back to chef on phase 1, then back out on phase 3 */}
      <g style={{transform: `translateX(${phase === 0 ? 0 : phase === 1 ? -80 : phase === 2 ? -80 : 0}px)`, transition:"transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)"}}>
        <ellipse cx={210} cy={93} rx={26} ry={9} fill="white" stroke={phase >= 3 ? "#6EE7B7" : phase === 1 ? "#FCD34D" : BORDER} strokeWidth={phase===1||phase>=3?2:1.5} />
        <ellipse cx={210} cy={91} rx={21} ry={7} fill={phase >= 3 ? "#F0FDF4" : CREAM} />
        <text x={210} y={95} textAnchor="middle" fontSize={14}>{phase >= 3 ? "🚀" : phase === 1 ? "❌" : "🛏️"}</text>
      </g>

      {/* Fix spark on chef */}
      {phase === 2 && (
        <g>
          <text x={38} y={58} textAnchor="middle" fontSize={13}>⚡</text>
          <text x={66} y={72} textAnchor="middle" fontSize={9} fill="#D97706" fontWeight={700}>fixing…</text>
        </g>
      )}

      {/* Done badge */}
      {phase >= 3 && (
        <g style={{opacity:1,transition:"opacity 0.4s"}}>
          <rect x={88} y={30} width={104} height={28} rx={8} fill="#F0FDF4" stroke="#6EE7B7" strokeWidth={2} />
          <text x={140} y={49} textAnchor="middle" fontSize={10} fill="#059669" fontWeight={800}>✅ supplier B · on time</text>
        </g>
      )}
    </svg>
  );
}

const SCENE_MAP = {
  sources: SceneSources, extract: SceneExtract, warehouse: SceneWarehouse,
  transform: SceneTransform, observability: SceneObservability,
  bi: SceneBI, reverseEtl: SceneReverseETL, decision: SceneDecision,
};

const STEPS = [
  { id:"intro", nodeIds:[], emoji:"🍽️", isIntro:true,
    headline:"Our data stack is like a restaurant kitchen",
    sub:"Raw ingredients come in. They get cleaned, cooked, and plated.\nThen served to the right people at the right time.",
    body:"Every dashboard and decision at Tomorrow Health follows this same flow. Let's walk through it.",
    cta:"Start the journey →" },
  { id:"sources", nodeIds:["sources"], emoji:"🥦", color:"#65A30D", borderC:"#BBF7D0",
    kitchenRole:"Fresh ingredients arrive", headline:"It starts with raw data",
    body:"Orders, claims and calls data.",
    tool:"TH App · AWS · Partner APIs", toolLabel:"Our suppliers", cta:"Next →" },
  { id:"extract", nodeIds:["extract"], emoji:"🚚", color:"#0369A1", borderC:"#7DD3FC",
    kitchenRole:"Fivetran is our food delivery service", headline:"Fivetran delivers the ingredients",
    body:"Just like a food delivery service, Fivetran picks up raw data from all our sources and drops it at the kitchen door... on schedule, every time.",
    tool:"Fivetran · Airflow", toolLabel:"Delivery driver + kitchen timer", cta:"Next →" },
  { id:"warehouse", nodeIds:["warehouse"], emoji:"🧊", color:"#0EA5E9", borderC:"#BAE6FD",
    kitchenRole:"The walk-in fridge", headline:"One home for all data",
    body:"Snowflake stores everything — raw on one shelf, clean and ready on another.",
    tool:"Snowflake", toolLabel:"The walk-in fridge", cta:"Next →" },
  { id:"transform", nodeIds:["transform"], emoji:"👨‍🍳", color:"#D97706", borderC:"#FDE68A",
    kitchenRole:"Prep cook cleans & chops", headline:"Raw data gets cleaned up",
    body:"dbt transforms messy records into reliable numbers dashboards can trust.",
    tool:"dbt", toolLabel:"The prep cook", cta:"Next →" },
  { id:"observability", nodeIds:["observability"], emoji:"🧑‍⚕️", color:"#7C3AED", borderC:"#C4B5FD",
    kitchenRole:"The health inspector", headline:"A watchdog on every step",
    body:"Metaplane monitors the full pipeline. Bad data gets caught before it reaches anyone.",
    tool:"Metaplane · GitHub CI", toolLabel:"The health inspector", cta:"Next →" },
  { id:"bi", nodeIds:["bi"], emoji:"🍽️", color:"#BE185D", borderC:"#FBCFE8",
    kitchenRole:"Head chef plates the dish", headline:"Data becomes a dashboard",
    body:"Sigma turns clean data into visual dashboards anyone can open and explore.",
    tool:"Sigma", toolLabel:"Head chef", cta:"Next →" },
  { id:"reverseEtl", nodeIds:["reverseEtl","ops"], emoji:"🏃‍♀️", color:"#059669", borderC:"#6EE7B7",
    kitchenRole:"The runner restocks every station", headline:"Clean data flows back into your daily tools",
    body:"Think of Hightouch as the kitchen runner — they take prepped dishes from the central pantry (Snowflake) and restock each station. Salesforce gets its tray. HubSpot gets its tray. No one has to walk back to the pantry themselves.",
    tool:"Hightouch · Salesforce · HubSpot", toolLabel:"The kitchen runner", cta:"Next →" },
  { id:"decision", nodeIds:["decision"], emoji:"👨‍💼", color:"#4338CA", borderC:"#A5B4FC",
    kitchenRole:"The restaurant owner reads the service report",     headline:"The kitchen manager reads the ticket — and fixes the order",
    body:"Supplier A cancels a CPAP order — like a dish that never makes it out of the kitchen. The manager spots it on the service report and reroutes to supplier B. Patient gets their equipment on time.",
    kitchenRole:"The manager reads the service report",
    tool:"Leadership · Ops · Managers", toolLabel:"Who reads the report", cta:"Start over ↺", isLast:true },
];

const NODES = [
  {id:"sources",       x:18,  y:100, w:72, h:58, label:"Data Sources",   icon:"🗄️"},
  {id:"extract",       x:118, y:76,  w:72, h:58, label:"Extract & Load", icon:"📤"},
  {id:"warehouse",     x:222, y:62,  w:78, h:66, label:"Data Warehouse", icon:"❄️"},
  {id:"transform",     x:222, y:178, w:78, h:52, label:"Transformer",    icon:"⚙️"},
  {id:"observability", x:222, y:14,  w:78, h:44, label:"Observability",  icon:"👁️"},
  {id:"bi",            x:330, y:62,  w:72, h:55, label:"BI",             icon:"📊"},
  {id:"reverseEtl",    x:330, y:130, w:72, h:48, label:"Reverse ETL",   icon:"🔁"},
  {id:"ops",           x:330, y:190, w:72, h:48, label:"Ops Apps",       icon:"🛠️"},
  {id:"decision",      x:432, y:92,  w:72, h:58, label:"Decisions",      icon:"👔"},
];

const NCOLOR  = {sources:"#64748B",extract:"#0369A1",warehouse:"#0EA5E9",transform:"#D97706",observability:"#7C3AED",bi:"#BE185D",reverseEtl:"#059669",ops:"#C2410C",decision:"#4338CA"};
const NBORDER = {sources:"#CBD5E1",extract:"#7DD3FC",warehouse:"#BAE6FD",transform:"#FDE68A",observability:"#C4B5FD",bi:"#FBCFE8",reverseEtl:"#6EE7B7",ops:"#FDBA74",decision:"#A5B4FC"};
const NBG     = {sources:"#F8FAFC",extract:"#E0F2FE",warehouse:"#E0F2FE",transform:"#FEF9C3",observability:"#F5F3FF",bi:"#FDF2F8",reverseEtl:"#ECFDF5",ops:"#FFF7ED",decision:"#EEF2FF"};

const PIPES = [
  {from:"sources",to:"extract",c:"#94A3B8"},
  {from:"extract",to:"warehouse",c:"#38BDF8"},
  {from:"warehouse",to:"transform",c:"#FCD34D",d:true},
  {from:"transform",to:"warehouse",c:"#FCD34D",d:true},
  {from:"extract",to:"observability",c:"#C4B5FD",d:true},
  {from:"warehouse",to:"observability",c:"#C4B5FD",d:true},
  {from:"bi",to:"observability",c:"#C4B5FD",d:true},
  {from:"warehouse",to:"bi",c:"#FBCFE8"},
  {from:"warehouse",to:"reverseEtl",c:"#6EE7B7"},
  {from:"reverseEtl",to:"ops",c:"#FDBA74"},
  {from:"bi",to:"decision",c:"#A5B4FC"},
  {from:"ops",to:"decision",c:"#A5B4FC"},
];

const PCOLS = ["#94A3B8","#38BDF8","#6EE7B7","#FBCFE8","#FCD34D","#A5B4FC","#C4B5FD"];

function gc(n) { return {x:n.x+n.w/2, y:n.y+n.h/2}; }
function crv(a, b) {
  const f=gc(a), t=gc(b), dx=t.x-f.x;
  return `M${f.x},${f.y} C${f.x+dx*.55},${f.y} ${t.x-dx*.55},${t.y} ${t.x},${t.y}`;
}
function ptC(a, b, t) {
  const f=gc(a), te=gc(b), dx=te.x-f.x;
  const cx1=f.x+dx*.55, cy1=f.y, cx2=te.x-dx*.55, cy2=te.y, m=1-t;
  return {
    x: m*m*m*f.x + 3*m*m*t*cx1 + 3*m*t*t*cx2 + t*t*t*te.x,
    y: m*m*m*f.y + 3*m*m*t*cy1 + 3*m*t*t*cy2 + t*t*t*te.y,
  };
}

function Diagram({ activeIds, onNodeClick }) {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const id = setInterval(() => {
      setParticles(prev => {
        const next = prev.map(p => ({...p, t:p.t+0.02})).filter(p => p.t < 1);
        if (Math.random() < 0.28 && next.length < 16) {
          const pipe = PIPES[Math.floor(Math.random()*PIPES.length)];
          const fn = NODES.find(n => n.id===pipe.from);
          const tn = NODES.find(n => n.id===pipe.to);
          if (fn && tn) next.push({id:Math.random(), from:fn, to:tn, color:PCOLS[Math.floor(Math.random()*PCOLS.length)], t:0});
        }
        return next;
      });
    }, 40);
    return () => clearInterval(id);
  }, []);

  const dotGrid = [];
  for (let xi=0; xi<11; xi++)
    for (let yi=0; yi<6; yi++)
      dotGrid.push(<circle key={`${xi}-${yi}`} cx={xi*50} cy={yi*46} r={1} fill={BORDER} opacity={0.5} />);

  return (
    <svg viewBox="0 0 530 248" style={{width:"100%",maxHeight:350,height:"auto",display:"block"}}>
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="shadow" x="-15%" y="-15%" width="135%" height="145%"><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#2D2A26" floodOpacity="0.07"/></filter>
      </defs>
      {dotGrid}
      {PIPES.map(p => {
        const fn = NODES.find(n => n.id===p.from), tn = NODES.find(n => n.id===p.to);
        if (!fn || !tn) return null;
        const lit = !activeIds.length || activeIds.includes(p.from) || activeIds.includes(p.to);
        return <path key={`${p.from}-${p.to}`} d={crv(fn,tn)} fill="none" stroke={lit?p.c:BORDER} strokeWidth={lit?2:1.5} strokeDasharray={p.d?"5 4":"none"} opacity={lit?0.85:0.2} strokeLinecap="round" style={{transition:"all 0.4s"}} />;
      })}
      {particles.map(p => {
        const pos = ptC(p.from, p.to, p.t);
        const op = p.t<0.1 ? p.t*10 : p.t>0.9 ? (1-p.t)*10 : 1;
        return <circle key={p.id} cx={pos.x} cy={pos.y} r={4} fill={p.color} opacity={op*0.9} filter="url(#glow)" />;
      })}
      {NODES.map(node => {
        const isActive = activeIds.includes(node.id);
        const isDim = activeIds.length > 0 && !isActive;
        const cx = node.x + node.w/2;
        const labelWords = node.label.split(" ");
        return (
          <g key={node.id} onClick={() => onNodeClick(node.id)} style={{cursor:"pointer"}}>
            {isActive && <rect x={node.x-5} y={node.y-5} width={node.w+10} height={node.h+10} rx={15} fill="none" stroke={NBORDER[node.id]} strokeWidth={2.5} opacity={0.7} filter="url(#glow)" />}
            <rect x={node.x} y={node.y} width={node.w} height={node.h} rx={12} fill={isActive?NBG[node.id]:"white"} stroke={isActive?NCOLOR[node.id]:NBORDER[node.id]} strokeWidth={isActive?2.5:1.5} opacity={isDim?0.18:1} filter={isDim?"none":"url(#shadow)"} style={{transition:"all 0.35s"}} />
            <text x={cx} y={node.y+node.h*0.44} textAnchor="middle" fontSize={16} opacity={isDim?0.18:1}>{node.icon}</text>
            <text x={cx} y={node.y+node.h*0.44+14} textAnchor="middle" fontSize={7} fontWeight={700} opacity={isDim?0.18:1} fill={isActive?NCOLOR[node.id]:MUTED} style={{transition:"all 0.3s"}}>
              {labelWords.map((w, i) => <tspan key={i} x={cx} dy={i===0?0:9}>{w}</tspan>)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function App() {
  const [stepIdx, setStepIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const step = STEPS[stepIdx];
  const isIntro = !!step.isIntro;

  const goTo = (i) => { setStepIdx(i); setAnimKey(k => k+1); };
  const advance = () => step.isLast ? goTo(0) : goTo(stepIdx+1);
  const back = () => { if (stepIdx > 1) goTo(stepIdx-1); };
  const handleNodeClick = (nodeId) => {
    const i = STEPS.findIndex(s => s.nodeIds && s.nodeIds.includes(nodeId));
    if (i > 0) goTo(i);
  };

  const SceneComp = (!isIntro && step.id && SCENE_MAP[step.id]) ? SCENE_MAP[step.id] : null;

  const progressDots = STEPS.slice(1).map((_, i) => (
    <div key={i} onClick={() => goTo(i+1)}
      style={{width:i===stepIdx-1?20:7,height:7,borderRadius:10,cursor:"pointer",transition:"all 0.3s",
        background:ACCENT,opacity:i===stepIdx-1?1:i<stepIdx-1?0.4:0.2}} />
  ));

  const introChips = STEPS.slice(1).map((s, i) => (
    <div key={s.id} onClick={() => goTo(i+1)}
      style={{display:"flex",alignItems:"center",gap:5,background:CREAM,borderRadius:20,
        padding:"4px 11px",border:`1px solid ${BORDER}`,cursor:"pointer"}}>
      <span style={{fontSize:13}}>{s.emoji}</span>
      <span style={{color:MUTED,fontSize:11}}>{s.kitchenRole}</span>
    </div>
  ));

  return (
    <div style={{background:CREAM,minHeight:"100vh",fontFamily:"'Inter',sans-serif",display:"flex",flexDirection:"column"}}>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}`}</style>

      <div style={{padding:"10px 22px",background:"white",borderBottom:`1px solid ${BORDER}`,
        display:"flex",alignItems:"center",gap:10,boxShadow:"0 1px 4px rgba(0,0,0,0.04)",flexShrink:0}}>
        <span style={{fontSize:18}}>🍽️</span>
        <h1 style={{margin:0,color:TEXT,fontSize:14,fontWeight:700}}>Tomorrow Health — How Our Data Works</h1>
        {!isIntro && (
          <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:8}}>
            <div style={{display:"flex",gap:4}}>{progressDots}</div>
            <span style={{color:MUTED,fontSize:11}}>{stepIdx}/{STEPS.length-1}</span>
          </div>
        )}
      </div>

      <div style={{flex:1,overflowY:"auto"}}>
        <div style={{background:"white",borderBottom:`1px solid ${BORDER}`,padding:"6px 20px 4px"}}>
          <Diagram activeIds={step.nodeIds||[]} onNodeClick={handleNodeClick} />
          {isIntro && <p style={{textAlign:"center",margin:"0 0 6px",color:MUTED,fontSize:11}}>Click any node to jump to it — or follow the story below</p>}
        </div>

        <div style={{padding:"16px 20px 28px",maxWidth:680,margin:"0 auto",width:"100%",boxSizing:"border-box"}}>
          {isIntro ? (
            <div key={animKey} style={{animation:"fadeUp 0.35s ease"}}>
              <div style={{background:"white",borderRadius:18,border:`1px solid ${BORDER}`,overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.06)"}}>
                <div style={{background:`linear-gradient(135deg,#FEF3C7,${CREAM})`,padding:"28px 28px 20px",textAlign:"center",borderBottom:`1px solid ${BORDER}`}}>
                  <div style={{fontSize:50,marginBottom:10}}>🍽️</div>
                  <h2 style={{margin:"0 0 10px",color:TEXT,fontSize:21,fontWeight:800,lineHeight:1.2}}>{step.headline}</h2>
                  <p style={{margin:"0 0 6px",color:MUTED,fontSize:13.5,lineHeight:1.7,whiteSpace:"pre-line"}}>{step.sub}</p>
                  <p style={{margin:0,color:MUTED,fontSize:13,lineHeight:1.6}}>{step.body}</p>
                </div>
                <div style={{padding:"18px 28px"}}>
                  <div style={{display:"flex",flexWrap:"wrap",gap:7,justifyContent:"center",marginBottom:18}}>{introChips}</div>
                  <button onClick={advance} style={{width:"100%",padding:"13px",borderRadius:11,border:"none",
                    background:ACCENT,color:"white",cursor:"pointer",fontSize:14,fontWeight:700,
                    boxShadow:"0 3px 14px rgba(193,123,63,0.3)"}}>{step.cta}</button>
                </div>
              </div>
            </div>
          ) : (
            <div key={animKey} style={{animation:"fadeUp 0.35s ease"}}>
              <div style={{background:"white",borderRadius:18,border:`1px solid ${BORDER}`,overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.06)"}}>
                <div style={{height:3,background:`linear-gradient(90deg,${step.color},${step.borderC})`}} />
                <div style={{background:`linear-gradient(160deg,${CREAM},white)`,borderBottom:`1px solid ${BORDER}`,padding:"8px 16px 0"}}>
                  {SceneComp && <SceneComp key={`${step.id}-${animKey}`} />}
                </div>
                <div style={{padding:"18px 24px 22px"}}>
                  <div style={{display:"inline-flex",alignItems:"center",gap:6,background:CREAM,borderRadius:20,
                    padding:"4px 12px",border:`1px solid ${BORDER}`,marginBottom:12}}>
                    <span style={{fontSize:13}}>{step.emoji}</span>
                    <span style={{fontSize:11,color:MUTED,fontStyle:"italic"}}>{step.kitchenRole}</span>
                  </div>
                  <h2 style={{margin:"0 0 8px",color:TEXT,fontSize:19,fontWeight:800,lineHeight:1.3}}>{step.headline}</h2>
                  <p style={{margin:"0 0 16px",color:MUTED,fontSize:13.5,lineHeight:1.75}}>{step.body}</p>
                  {step.tool && (
                    <div style={{display:"inline-flex",alignItems:"center",gap:8,background:CREAM,borderRadius:10,
                      padding:"8px 14px",border:`1px solid ${BORDER}`,marginBottom:18}}>
                      <span style={{fontSize:14}}>🔧</span>
                      <div>
                        <div style={{fontSize:9.5,color:MUTED,fontWeight:600,textTransform:"uppercase",letterSpacing:0.8}}>{step.toolLabel}</div>
                        <div style={{fontSize:12,color:TEXT,fontWeight:700}}>{step.tool}</div>
                      </div>
                    </div>
                  )}
                  <div style={{display:"flex",gap:8}}>
                    {stepIdx > 1 && (
                      <button onClick={back} style={{padding:"10px 16px",borderRadius:10,border:`1px solid ${BORDER}`,
                        background:"white",color:MUTED,cursor:"pointer",fontSize:13,fontWeight:600}}>←</button>
                    )}
                    <button onClick={advance} style={{flex:1,padding:"11px",borderRadius:10,
                      border:step.isLast?`1px solid ${BORDER}`:"none",
                      background:step.isLast?"white":ACCENT,
                      color:step.isLast?MUTED:"white",cursor:"pointer",fontSize:14,fontWeight:700,
                      boxShadow:step.isLast?"none":"0 2px 10px rgba(193,123,63,0.28)"}}>
                      {step.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}