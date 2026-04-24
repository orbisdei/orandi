// prayer-app-core.js
// Shared React components for Orandi Orandi.
// Imported by both iOS and Android wrappers.
// Requires: prayer-data.js loaded first, React in scope via Babel.

// ═══════════════════════════════════════════════════════
// THEMES
// ═══════════════════════════════════════════════════════
const THEMES = {
  sepia: {
    bg:'#F5ECD7', appBg:'#F2E8CC', headerBg:'#5C1A2E', headerText:'#F5ECD7',
    divider:'#C8A96E', text:'#2C1810', textMuted:'#7A5C44', accent:'#B8943F',
    leftColBg:'#F5ECD7', rightColBg:'#EDE0C4',
    rowHover:'rgba(184,148,63,0.1)', rowBorder:'rgba(184,148,63,0.3)',
    langBarBg:'#E8D5B0', navBg:'#5C1A2E', navText:'#F5ECD7',
    shadow:'rgba(92,26,46,0.18)', inputBg:'rgba(0,0,0,0.06)',
  },
  dark: {
    bg:'#0D0D14', appBg:'#12121C', headerBg:'#1A1428', headerText:'#E8D9C0',
    divider:'#6B5030', text:'#E8D9C0', textMuted:'#8070A0', accent:'#C9A84C',
    leftColBg:'#12121C', rightColBg:'#0F0F18',
    rowHover:'rgba(201,168,76,0.09)', rowBorder:'rgba(201,168,76,0.18)',
    langBarBg:'#1A1428', navBg:'#1A1428', navText:'#E8D9C0',
    shadow:'rgba(0,0,0,0.5)', inputBg:'rgba(255,255,255,0.08)',
  },
  light: {
    bg:'#F8F5F0', appBg:'#FFFFFF', headerBg:'#FAFAFA', headerText:'#2C1810',
    divider:'#D4B896', text:'#1A1008', textMuted:'#8B7355', accent:'#7A3B1E',
    leftColBg:'#FFFFFF', rightColBg:'#FAF7F3',
    rowHover:'rgba(122,59,30,0.05)', rowBorder:'rgba(212,184,150,0.55)',
    langBarBg:'#F5F0E8', navBg:'#F5F0E8', navText:'#2C1810',
    shadow:'rgba(44,24,16,0.1)', inputBg:'rgba(0,0,0,0.05)',
  },
};

// ═══════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════
const IC = {
  cross:    () => <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="6" y="0" width="2" height="14" rx="1"/><rect x="0" y="5.5" width="14" height="2" rx="1"/></svg>,
  chevDown: () => <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4 4-4"/></svg>,
  chevLeft: () => <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 1L1 7l6 6"/></svg>,
  swap:     () => <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3.5 2.5L1 5h2v7h2V5h2L3.5 2.5zM12.5 13.5L15 11h-2V4h-2v7H9l3.5 2.5z"/></svg>,
  rotate:   () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 6A6 6 0 1 0 12 11"/><path d="M13.5 2v4h-4"/></svg>,
  book:     () => <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M4 2h9a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm1 3v1h7V5H5zm0 3v1h7V8H5zm0 3v1h4v-1H5z"/></svg>,
  globe:    () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="10" cy="10" r="7.5"/><ellipse cx="10" cy="10" rx="3" ry="7.5"/><line x1="2.5" y1="10" x2="17.5" y2="10"/><line x1="3.5" y1="6.5" x2="16.5" y2="6.5"/><line x1="3.5" y1="13.5" x2="16.5" y2="13.5"/></svg>,
  settings: () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="10" cy="10" r="2.5"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4"/></svg>,
};

// ═══════════════════════════════════════════════════════
// TOGGLE SWITCH
// ═══════════════════════════════════════════════════════
function OrandiToggle({ on, onChange, accent }) {
  return (
    <button onClick={() => onChange(!on)} style={{
      width:44, height:26, borderRadius:13, border:'none', cursor:'pointer',
      background: on ? accent : '#ccc',
      position:'relative', transition:'background 0.2s', flexShrink:0,
    }}>
      <div style={{
        position:'absolute', top:3,
        left: on ? 21 : 3, width:20, height:20,
        borderRadius:'50%', background:'#fff',
        transition:'left 0.2s', boxShadow:'0 1px 3px rgba(0,0,0,0.25)',
      }} />
    </button>
  );
}

// ═══════════════════════════════════════════════════════
// SETTINGS SCREEN
// ═══════════════════════════════════════════════════════
function OrandiSettings({ tweaks, onClose }) {
  const t = THEMES[tweaks.theme];
  const labelStyle = { fontFamily:'Cinzel, serif', fontSize:9, color:t.textMuted, textTransform:'uppercase', letterSpacing:2.5, marginBottom:10, marginTop:20 };
  const rowStyle   = { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'13px 0', borderBottom:`1px solid ${t.rowBorder}` };

  return (
    <div style={{ position:'absolute', inset:0, zIndex:200, background:t.appBg, display:'flex', flexDirection:'column' }}>
      {/* Header */}
      <div style={{ padding:'14px 16px 12px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:`1px solid ${t.rowBorder}` }}>
        <button style={{ background:'none', border:'none', cursor:'pointer', color:t.accent, fontFamily:'Cinzel, serif', fontSize:12, display:'flex', alignItems:'center', gap:5 }} onClick={onClose}>
          <IC.chevLeft /> Back
        </button>
        <span style={{ fontFamily:'Cinzel, serif', fontSize:12, letterSpacing:2, color:t.text, textTransform:'uppercase' }}>Settings</span>
        <div style={{width:60}} />
      </div>

      <div style={{ flex:1, overflowY:'auto', padding:'20px 16px 40px' }}>
        {/* Font size */}
        <div style={labelStyle}>Text Size</div>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <span style={{ fontFamily:'EB Garamond, serif', fontSize:14, color:t.textMuted }}>A</span>
          <input type="range" min={13} max={24} step={1} value={tweaks.fontSize}
            onChange={e => tweaks._set({ fontSize:+e.target.value })}
            style={{ flex:1, accentColor:t.accent, background:`linear-gradient(to right, ${t.accent} ${((tweaks.fontSize-13)/11)*100}%, ${t.inputBg} 0)` }}
          />
          <span style={{ fontFamily:'EB Garamond, serif', fontSize:22, color:t.text }}>A</span>
          <span style={{ fontFamily:'Cinzel, serif', fontSize:12, color:t.accent, minWidth:22, textAlign:'right' }}>{tweaks.fontSize}</span>
        </div>
        <div style={{ fontFamily:'EB Garamond, serif', color:t.text, marginTop:10, padding:'10px 14px', background:t.langBarBg, borderRadius:8, lineHeight:1.65, fontSize:tweaks.fontSize }}>
          Pater noster, qui es in caelis, sanctificetur nomen tuum.
        </div>

        {/* Theme */}
        <div style={labelStyle}>Theme</div>
        {[{id:'sepia',label:'Parchment',sub:'Warm traditional'},{id:'dark',label:'Night',sub:'Dark mode'},{id:'light',label:'Day',sub:'Clean & bright'}].map(th => (
          <button key={th.id} onClick={() => tweaks._set({ theme:th.id })} style={{
            display:'flex', alignItems:'center', width:'100%', padding:'11px 14px', gap:12,
            background: tweaks.theme===th.id ? `${t.accent}22` : 'transparent',
            border:`1px solid ${tweaks.theme===th.id ? t.accent : t.rowBorder}`,
            borderRadius:8, cursor:'pointer', marginBottom:8,
          }}>
            <div style={{ width:26, height:26, borderRadius:'50%', flexShrink:0, border:`1px solid ${t.rowBorder}`,
              background: th.id==='sepia'?'#C9A84C':th.id==='dark'?'#1a1428':'#f0ece4' }} />
            <div style={{textAlign:'left'}}>
              <div style={{fontFamily:'Cinzel, serif', fontSize:13, color:t.text}}>{th.label}</div>
              <div style={{fontFamily:'EB Garamond, serif', fontSize:12, color:t.textMuted}}>{th.sub}</div>
            </div>
            {tweaks.theme===th.id && <span style={{marginLeft:'auto', color:t.accent, fontSize:16}}>✓</span>}
          </button>
        ))}

        {/* Display toggles */}
        <div style={labelStyle}>Display</div>
        {[
          {key:'showVerseNumbers', label:'Verse Numbers',    sub:'Number before each verse'},
          {key:'highlightActive',  label:'Highlight on Touch', sub:'Glow verse on tap'},
        ].map(item => (
          <div key={item.key} style={rowStyle}>
            <div>
              <div style={{ fontFamily:'Cinzel, serif', fontSize:12, color:t.text }}>{item.label}</div>
              <div style={{ fontFamily:'EB Garamond, serif', fontSize:12, color:t.textMuted, marginTop:1 }}>{item.sub}</div>
            </div>
            <OrandiToggle on={tweaks[item.key]} onChange={v => tweaks._set({[item.key]:v})} accent={t.accent} />
          </div>
        ))}

        {/* Default languages */}
        <div style={labelStyle}>Default Languages</div>
        {['leftLang','rightLang'].map(key => (
          <div key={key} style={rowStyle}>
            <div>
              <div style={{ fontFamily:'Cinzel, serif', fontSize:12, color:t.text }}>{key==='leftLang' ? 'Primary Language' : 'Translation Language'}</div>
              <div style={{ fontFamily:'EB Garamond, serif', fontSize:12, color:t.textMuted, marginTop:1 }}>{key==='leftLang' ? 'Top / left column' : 'Bottom / right column'}</div>
            </div>
            <select value={tweaks[key]} onChange={e => tweaks._set({[key]:e.target.value})} style={{
              fontFamily:'Cinzel, serif', fontSize:11, color:t.accent, background:t.appBg,
              border:`1px solid ${t.divider}`, borderRadius:6, padding:'4px 8px', cursor:'pointer',
            }}>
              {Object.entries(window.LANG_NAMES).map(([v,l]) => <option key={v} value={v}>{l}</option>)}
            </select>
          </div>
        ))}

        <div style={{ fontFamily:'EB Garamond, serif', fontSize:12, color:t.textMuted, textAlign:'center', fontStyle:'italic', paddingTop:28 }}>
          Orandi · Catholic Prayer App<br/>All translations are official liturgical texts.
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// PRAYER SELECTOR MODAL
// ═══════════════════════════════════════════════════════
function OrandiPrayerModal({ currentId, onSelect, onClose, theme, lang }) {
  const t = THEMES[theme];
  const initCat = () => {
    const c = window.PRAYER_CATEGORIES.find(c => c.prayers.includes(currentId));
    return c ? c.id : window.PRAYER_CATEGORIES[0].id;
  };
  const [expanded, setExpanded] = React.useState(initCat);

  return (
    <div style={{ position:'absolute', inset:0, zIndex:100, display:'flex', flexDirection:'column', justifyContent:'flex-end', background:'rgba(0,0,0,0.55)' }} onClick={onClose}>
      <div style={{ background:t.appBg, borderRadius:'18px 18px 0 0', maxHeight:'82%', display:'flex', flexDirection:'column', boxShadow:`0 -6px 30px ${t.shadow}` }} onClick={e => e.stopPropagation()}>
        <div style={{ width:36, height:4, background:t.divider, borderRadius:2, margin:'12px auto 6px', opacity:.5 }} />
        <div style={{ fontFamily:'Cinzel, serif', fontSize:10, color:t.textMuted, textTransform:'uppercase', letterSpacing:2.5, textAlign:'center', padding:'6px 0 10px' }}>Select Prayer</div>
        <div style={{ overflowY:'auto', flex:1, paddingBottom:32 }}>
          {window.PRAYER_CATEGORIES.map(cat => (
            <div key={cat.id}>
              <button onClick={() => setExpanded(expanded===cat.id ? null : cat.id)} style={{
                width:'100%', padding:'10px 20px', background:t.langBarBg, border:'none', cursor:'pointer',
                display:'flex', justifyContent:'space-between', alignItems:'center',
                borderTop:`1px solid ${t.rowBorder}`,
              }}>
                <span style={{ fontFamily:'Cinzel, serif', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:t.accent }}>{cat.label}</span>
                <span style={{ color:t.textMuted, fontSize:10 }}>{expanded===cat.id ? '▲' : '▼'}</span>
              </button>
              {expanded===cat.id && cat.prayers.map(pid => {
                const p = window.PRAYERS.find(pr => pr.id===pid);
                if (!p) return null;
                const isCur = pid===currentId;
                return (
                  <button key={pid} onClick={() => onSelect(pid)} style={{
                    width:'100%', padding:'11px 24px', border:'none', cursor:'pointer', textAlign:'left',
                    background: isCur ? `${t.accent}20` : 'transparent',
                    display:'flex', alignItems:'center', justifyContent:'space-between',
                    borderBottom:`1px solid ${t.rowBorder}`,
                  }}>
                    <div>
                      <div style={{ fontFamily:'Cinzel, serif', fontSize:14, color:t.text, fontWeight: isCur ? 600 : 400 }}>{p.title[lang] || p.title.en}</div>
                      <div style={{ fontFamily:'EB Garamond, serif', fontSize:11, color:t.textMuted, marginTop:2, fontStyle:'italic' }}>
                        {p.title.la !== (p.title[lang]||p.title.en) ? p.title.la+' · ' : ''}{p.verses.length} verses
                      </div>
                    </div>
                    {isCur && <span style={{ color:t.accent, fontSize:17 }}>✓</span>}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// LANGUAGE SELECTOR MODAL
// ═══════════════════════════════════════════════════════
function OrandiLangModal({ side, currentLang, otherLang, onSelect, onClose, theme }) {
  const t = THEMES[theme];
  return (
    <div style={{ position:'absolute', inset:0, zIndex:100, display:'flex', flexDirection:'column', justifyContent:'flex-end', background:'rgba(0,0,0,0.55)' }} onClick={onClose}>
      <div style={{ background:t.appBg, borderRadius:'18px 18px 0 0', boxShadow:`0 -6px 30px ${t.shadow}` }} onClick={e => e.stopPropagation()}>
        <div style={{ width:36, height:4, background:t.divider, borderRadius:2, margin:'12px auto 6px', opacity:.5 }} />
        <div style={{ fontFamily:'Cinzel, serif', fontSize:10, color:t.textMuted, textTransform:'uppercase', letterSpacing:2.5, textAlign:'center', padding:'6px 0 10px' }}>
          {side==='left' ? 'Primary' : 'Translation'} Language
        </div>
        <div style={{ paddingBottom:32 }}>
          {Object.entries(window.LANG_NAMES).map(([lang, name]) => {
            const isCur = lang===currentLang, isOther = lang===otherLang;
            return (
              <button key={lang} onClick={() => onSelect(lang)} style={{
                display:'flex', alignItems:'center', width:'100%', padding:'12px 24px',
                background: isCur ? `${t.accent}20` : 'transparent', border:'none', cursor:'pointer',
                borderBottom:`1px solid ${t.rowBorder}`,
              }}>
                <span style={{ fontFamily:'Cinzel, serif', fontSize:14, color: isCur ? t.accent : t.text, fontWeight: isCur ? 600 : 400, flex:1, textAlign:'left' }}>{name}</span>
                {isCur && <span style={{ color:t.accent, fontSize:16 }}>✓</span>}
                {isOther && !isCur && <span style={{ fontFamily:'Cinzel, serif', fontSize:9, color:t.textMuted, textTransform:'uppercase', letterSpacing:1 }}>other side</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// SPLIT PRAYER VIEW — true split screen with scroll sync
// ═══════════════════════════════════════════════════════
function SplitPrayerView({ prayer, leftLang, rightLang, theme, fontSize, showVerseNumbers, highlightActive, isLandscape }) {
  const t = THEMES[theme];
  const leftRef  = React.useRef();
  const rightRef = React.useRef();
  const syncing  = React.useRef(false);
  const [activeVerse, setActiveVerse] = React.useState(null);

  // Equalize verse heights so lines stay aligned across both panes
  React.useLayoutEffect(() => {
    const equalize = () => {
      if (!leftRef.current || !rightRef.current) return;
      const lv = leftRef.current.querySelectorAll('[data-vi]');
      const rv = rightRef.current.querySelectorAll('[data-vi]');
      lv.forEach(el => { el.style.minHeight = ''; });
      rv.forEach(el => { el.style.minHeight = ''; });
      for (let i = 0; i < lv.length; i++) {
        if (!rv[i]) continue;
        const h = Math.max(lv[i].getBoundingClientRect().height, rv[i].getBoundingClientRect().height);
        lv[i].style.minHeight = h + 'px';
        rv[i].style.minHeight = h + 'px';
      }
    };
    equalize();
    const t1 = setTimeout(equalize, 200);
    const t2 = setTimeout(equalize, 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [prayer.id, leftLang, rightLang, fontSize, isLandscape]);

  React.useEffect(() => {
    if (leftRef.current)  leftRef.current.scrollTop  = 0;
    if (rightRef.current) rightRef.current.scrollTop = 0;
  }, [prayer.id]);

  const sync = (src, dst) => {
    if (syncing.current) return;
    syncing.current = true;
    if (dst.current) dst.current.scrollTop = src.current.scrollTop;
    requestAnimationFrame(() => { syncing.current = false; });
  };

  const pane = (lang, ref, onScroll, bg, isRight) => (
    <div ref={ref} onScroll={onScroll} style={{ flex:1, overflowY:'auto', overflowX:'hidden', WebkitOverflowScrolling:'touch', background:bg }}>
      {prayer.verses.map((verse, i) => (
        <div key={i} data-vi={i} style={{
          padding:'10px 14px', paddingLeft: (showVerseNumbers && !isRight) ? 30 : 14,
          fontSize, lineHeight:1.75, fontFamily:'EB Garamond, serif', color:t.text,
          borderBottom:`1px solid ${t.rowBorder}`,
          wordBreak:'break-word', hyphens:'auto', transition:'background 0.15s',
          boxSizing:'border-box', position:'relative',
          background: (activeVerse===i && highlightActive) ? t.rowHover : 'transparent',
          fontStyle: isRight && lang==='la' ? 'italic' : 'normal',
        }}
          onMouseEnter={() => setActiveVerse(i)}
          onMouseLeave={() => setActiveVerse(null)}
          onTouchStart={() => setActiveVerse(i)}
          onTouchEnd={() => setTimeout(() => setActiveVerse(null), 500)}
        >
          {showVerseNumbers && !isRight && (
            <span style={{ position:'absolute', left:6, top:11, fontFamily:'Cinzel, serif', fontSize:8, color:t.textMuted, userSelect:'none', lineHeight:1 }}>{i+1}</span>
          )}
          {verse[lang] || (isRight ? verse.la : verse.en)}
        </div>
      ))}
      <div style={{ padding:'18px 0', textAlign:'center', color:t.divider, fontSize:18, userSelect:'none' }}>✦</div>
    </div>
  );

  return (
    <div style={{ flex:1, display:'flex', flexDirection: isLandscape ? 'row' : 'column', overflow:'hidden', minHeight:0 }}>
      {pane(leftLang,  leftRef,  () => sync(leftRef,  rightRef), t.leftColBg,  false)}
      <div style={{ background:t.divider, flexShrink:0, opacity:.5, width: isLandscape ? 2 : '100%', height: isLandscape ? '100%' : 2 }} />
      {pane(rightLang, rightRef, () => sync(rightRef, leftRef),  t.rightColBg, true)}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// PRAYER APP — platform-agnostic, sized by wrapper
// ═══════════════════════════════════════════════════════
function PrayerApp({ isLandscape, width, height, onToggleOrientation, tweaks }) {
  const { theme, fontSize, leftLang, rightLang, showVerseNumbers, highlightActive } = tweaks;
  const t = THEMES[theme];

  const [prayerId,        setPrayerId]        = React.useState('ourFather');
  const [showPrayerModal, setShowPrayerModal] = React.useState(false);
  const [showLangModal,   setShowLangModal]   = React.useState(null);
  const [showSettings,    setShowSettings]    = React.useState(false);
  const [activeTab,       setActiveTab]       = React.useState('prayer');

  const prayer = window.PRAYERS.find(p => p.id===prayerId) || window.PRAYERS[0];
  const hdrBorder = `1px solid ${theme==='light' ? t.rowBorder : 'rgba(255,255,255,0.1)'}`;

  // ── PORTRAIT HEADER ────────────────────────────────
  const PortraitHeader = () => (
    <div style={{ background:t.headerBg, color:t.headerText, flexShrink:0, borderBottom:hdrBorder }}>
      <div style={{ display:'flex', alignItems:'center', padding:'9px 12px', gap:8 }}>
        <span style={{ color:t.accent, opacity:.9, flexShrink:0 }}><IC.cross /></span>
        <span style={{ fontFamily:'Cinzel, serif', fontSize:11, letterSpacing:3.5, fontWeight:600, textTransform:'uppercase', flexShrink:0 }}>Orandi</span>
        <button onClick={() => setShowPrayerModal(true)} style={{
          flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:5,
          background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.2)',
          borderRadius:20, padding:'5px 10px', cursor:'pointer',
          color:t.headerText, fontFamily:'Cinzel, serif', fontSize:11, maxWidth:180, overflow:'hidden',
        }}>
          <span style={{ overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{prayer.title[leftLang] || prayer.title.en}</span>
          <IC.chevDown />
        </button>
        <button onClick={onToggleOrientation} style={{
          width:32, height:32, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.2)',
          background:'rgba(255,255,255,0.1)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
          color:t.headerText, flexShrink:0,
        }}><IC.rotate /></button>
      </div>
    </div>
  );

  // ── LANDSCAPE HEADER (single row) ──────────────────
  const LandscapeHeader = () => (
    <div style={{ background:t.headerBg, color:t.headerText, flexShrink:0, display:'flex', alignItems:'center', padding:'0 10px', height:44, gap:8, borderBottom:hdrBorder }}>
      <span style={{ color:t.accent, opacity:.9 }}><IC.cross /></span>
      <span style={{ fontFamily:'Cinzel, serif', fontSize:10, letterSpacing:3, fontWeight:600, textTransform:'uppercase', flexShrink:0 }}>Orandi</span>
      <button onClick={() => setShowPrayerModal(true)} style={{
        flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:5,
        background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.2)',
        borderRadius:20, padding:'4px 10px', cursor:'pointer',
        color:t.headerText, fontFamily:'Cinzel, serif', fontSize:11, minWidth:0, overflow:'hidden', maxWidth:200,
      }}>
        <span style={{ overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{prayer.title[leftLang] || prayer.title.en}</span>
        <IC.chevDown />
      </button>
      <button onClick={() => setShowLangModal('left')} style={{
        display:'flex', alignItems:'center', gap:4, background:'rgba(255,255,255,0.12)',
        border:'1px solid rgba(255,255,255,0.2)', borderRadius:20, padding:'4px 10px',
        cursor:'pointer', color:t.accent, fontFamily:'Cinzel, serif', fontSize:10,
        letterSpacing:1, textTransform:'uppercase', flexShrink:0,
      }}>{window.LANG_NAMES[leftLang]} <IC.chevDown /></button>
      <button onClick={() => tweaks._set({ leftLang:rightLang, rightLang:leftLang })} style={{
        width:28, height:28, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.2)',
        background:'rgba(255,255,255,0.1)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
        color:t.headerText, flexShrink:0,
      }}><IC.swap /></button>
      <button onClick={() => setShowLangModal('right')} style={{
        display:'flex', alignItems:'center', gap:4, background:'rgba(255,255,255,0.1)',
        border:'1px solid rgba(255,255,255,0.2)', borderRadius:20, padding:'4px 10px',
        cursor:'pointer', color:`${t.headerText}99`, fontFamily:'Cinzel, serif', fontSize:10,
        letterSpacing:1, textTransform:'uppercase', flexShrink:0,
      }}>{window.LANG_NAMES[rightLang]} <IC.chevDown /></button>
      <button onClick={onToggleOrientation} style={{
        width:28, height:28, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.2)',
        background:'rgba(255,255,255,0.1)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
        color:t.headerText, flexShrink:0,
      }}><IC.rotate /></button>
    </div>
  );

  // ── LANGUAGE BAR (portrait only) ───────────────────
  const LangBar = () => (
    <div style={{ display:'flex', alignItems:'center', background:t.langBarBg, borderBottom:`1px solid ${t.rowBorder}`, flexShrink:0, height:38 }}>
      <button onClick={() => setShowLangModal('left')} style={{ flex:1, height:'100%', background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:5, fontFamily:'Cinzel, serif', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:t.accent, fontWeight:600 }}>
        {window.LANG_NAMES[leftLang]} <IC.chevDown />
      </button>
      <button onClick={() => tweaks._set({ leftLang:rightLang, rightLang:leftLang })} style={{ width:34, height:34, borderRadius:'50%', border:`1px solid ${t.divider}55`, background:t.appBg, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:t.textMuted, flexShrink:0 }}>
        <IC.swap />
      </button>
      <button onClick={() => setShowLangModal('right')} style={{ flex:1, height:'100%', background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:5, fontFamily:'Cinzel, serif', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:t.textMuted, fontWeight:600 }}>
        {window.LANG_NAMES[rightLang]} <IC.chevDown />
      </button>
    </div>
  );

  // ── PRAYER TITLE STRIP ─────────────────────────────
  const TitleStrip = () => (
    <div style={{ display:'flex', flexDirection: isLandscape ? 'row' : 'column', background:t.langBarBg, borderBottom:`2px solid ${t.divider}55`, flexShrink:0 }}>
      <div style={{ flex:1, padding: isLandscape ? '8px 12px' : '8px 14px', fontFamily:'Cinzel, serif', fontSize: isLandscape ? 12 : 13, fontWeight:600, color:t.accent, letterSpacing:.5, borderRight: isLandscape ? `2px solid ${t.divider}55` : 'none', borderBottom: !isLandscape ? `1px solid ${t.rowBorder}` : 'none', textAlign:'center' }}>
        {prayer.title[leftLang] || prayer.title.en}
      </div>
      <div style={{ flex:1, padding: isLandscape ? '8px 12px' : '8px 14px', fontFamily:'Cinzel, serif', fontSize: isLandscape ? 12 : 13, fontWeight:600, color:t.textMuted, letterSpacing:.5, textAlign:'center', fontStyle:'italic' }}>
        {prayer.title[rightLang] || prayer.title.la}
      </div>
    </div>
  );

  // ── BOTTOM NAV ─────────────────────────────────────
  const BottomNav = () => (
    <div style={{ display:'flex', background:t.navBg, borderTop:`1px solid ${t.rowBorder}33`, flexShrink:0, paddingBottom: isLandscape ? 0 : 4 }}>
      {[{id:'prayer',icon:<IC.book />,label:'Prayers'},{id:'languages',icon:<IC.globe />,label:'Languages'},{id:'settings',icon:<IC.settings />,label:'Settings'}].map(item => (
        <button key={item.id} onClick={() => {
          setActiveTab(item.id);
          if (item.id==='prayer') setShowPrayerModal(true);
          else if (item.id==='languages') setShowLangModal('left');
          else if (item.id==='settings') setShowSettings(true);
        }} style={{
          flex:1, padding: isLandscape ? '7px 0 5px' : '8px 0 5px',
          background:'none', border:'none', cursor:'pointer',
          display:'flex', flexDirection:'column', alignItems:'center', gap:2,
          color: activeTab===item.id ? t.accent : `${t.navText}77`, transition:'color 0.15s',
        }}>
          {item.icon}
          <span style={{ fontFamily:'Cinzel, serif', fontSize:8, letterSpacing:1, textTransform:'uppercase' }}>{item.label}</span>
        </button>
      ))}
    </div>
  );

  const closeModal = (cb) => { if (cb) cb(); setActiveTab('prayer'); };

  return (
    <div style={{ width, height, display:'flex', flexDirection:'column', background:t.appBg, overflow:'hidden', position:'relative' }}>
      {isLandscape ? <LandscapeHeader /> : <PortraitHeader />}
      {!isLandscape && <LangBar />}
      <TitleStrip />
      <SplitPrayerView prayer={prayer} leftLang={leftLang} rightLang={rightLang} theme={theme} fontSize={fontSize} showVerseNumbers={showVerseNumbers} highlightActive={highlightActive} isLandscape={isLandscape} />
      <BottomNav />

      {showPrayerModal && <OrandiPrayerModal currentId={prayerId} onSelect={id => { setPrayerId(id); closeModal(() => setShowPrayerModal(false)); }} onClose={() => closeModal(() => setShowPrayerModal(false))} theme={theme} lang={leftLang} />}
      {showLangModal   && <OrandiLangModal side={showLangModal} currentLang={showLangModal==='left' ? leftLang : rightLang} otherLang={showLangModal==='left' ? rightLang : leftLang} onSelect={lang => { tweaks._set(showLangModal==='left' ? {leftLang:lang} : {rightLang:lang}); closeModal(() => setShowLangModal(null)); }} onClose={() => closeModal(() => setShowLangModal(null))} theme={theme} />}
      {showSettings    && <OrandiSettings tweaks={tweaks} onClose={() => closeModal(() => setShowSettings(false))} />}
    </div>
  );
}

// Export everything to window for cross-script access
Object.assign(window, { THEMES, IC, OrandiToggle, OrandiSettings, OrandiPrayerModal, OrandiLangModal, SplitPrayerView, PrayerApp });
