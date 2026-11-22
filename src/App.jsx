import './App.css'

function App() {
  return (
    <div className="main">
      {/* SIDEBAR */}
      <div className="sidebar">
        <h2 className="logo">✦ aster <span>INSTITUTE</span></h2>

        <div className="tbox">
          <div className="av">DR</div>
          <div><b style={{color:'#111'}}>Teacher workspace</b><p>Assigned classes only</p></div>
          <b>›</b>
        </div>

        <p className="h">WORKSPACE</p>
        <p className="m on">⊞ Overview</p>
        <p className="m">▦ Attendance sheet</p>
        <p className="m">👥 Students & results</p>
        <p className="m">📅 Class schedule</p>
        <p className="m">📁 Resources</p>

        <div className="pcard">
          <span>🌱</span><br/>
          <b>A little progress,<br/>every day.</b>
          <p>Fall term 2026<br/>Week 6 of 16</p>
          <div className="pr"><div></div></div>
        </div>

        <p className="m">⚙ Settings</p>
        <div className="prof">
          <div className="av2">D</div>
          <div><b style={{color:'#111'}}>Daniel Reed</b><p>Mathematics faculty</p></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="content">
        <div className="top">
          <div>
            <h1 style={{color:'#111', fontSize:'26px', fontWeight:'800', marginBottom:'6px'}}>Ready for a great class, Daniel?</h1>
            <p style={{color:'#666', fontSize:'13px'}}>Monday, 05 October 2026 • Your assigned classes, all in one place.</p>
          </div>
          <div>
            <span className="bell">🔔<i>3</i></span>
            <button className="btn">📋 Mark attendance</button>
          </div>
        </div>

        {/* 4 CARDS */}
        <div className="cards">
          <div className="card"><p>Students in 10-A</p><h2 style={{color:'#111'}}>32</h2><p className="s">64 across your 2 classes</p></div>
          <div className="card"><p>Class attendance</p><h2 style={{color:'#111'}}>91%</h2><span className="g">↗ 3 pts from last month</span></div>
          <div className="card"><p>Class performance</p><h2 style={{color:'#111'}}>81%</h2><span className="g">↗ 8 pts since August</span></div>
          <div className="card"><p>Students to support</p><h2 style={{color:'#111'}}>4</h2><span className="r">Below 75% attendance</span></div>
        </div>

        <div className="grid">
          <div className="big flex2">
            <div className="rb"><div><h3 style={{color:'#111'}}>Class growth & performance</h3><p>Grade 10-A • Weekly assessment average</p></div><span className="pill">Grade 10-A ▼</span></div>
            <h1 style={{color:'#111', fontSize:'32px', margin:'14px 0'}}>81% <span className="g">↗ +8 pts since August</span></h1>
            <svg viewBox="0 0 400 130" className="svg"><path d="M0,90 C50,70 80,95 120,70 S200,40 250,55 S330,30 400,20" fill="none" stroke="#7C6CF0" strokeWidth="3"/><path d="M0,110 C60,100 120,95 200,80 S320,70 400,60" fill="none" stroke="#2DD4BF" strokeWidth="3" strokeDasharray="6 6"/><circle cx="120" cy="70" r="6" fill="#7C6CF0"/><circle cx="250" cy="55" r="6" fill="#7C6CF0"/><circle cx="400" cy="20" r="6" fill="#2DD4BF"/></svg>
            <div className="dates"><span>Aug 24</span><span>Sep 07</span><span>Sep 21</span><span>Oct 05</span></div>
            <p className="legend">🟣 Performance &nbsp; 🔵 Attendance</p>
          </div>

          <div className="big flex1">
            <h3 style={{color:'#111'}}>Your teaching schedule</h3><p className="gr">Upcoming classes • Today</p>
            <div className="sch on"><b style={{color:'#111'}}>09:00 - 10:00</b><span className="now">In 10 min</span><p>Mathematics • 10-A</p><small>Room 204 • 32 students</small></div>
            <div className="sch"><b style={{color:'#111'}}>10:15 - 11:15</b><p>Mathematics • 10-B</p><small>Room 206 • 32 students</small></div>
            <div className="sch"><b style={{color:'#111'}}>14:15 - 15:00</b><p>10-A Practice clinic</p><small>Room 204 • Extra support</small></div>
            <p className="link">View full timetable →</p>
          </div>
        </div>

        <div className="grid">
          <div className="big flex2">
            <h3 style={{color:'#111'}}>Exam results - Grade 10-A</h3><p className="gr">Latest assessments</p>
            <table>
              <tr><th>Assessment</th><th>Subject</th><th>Average</th><th>Pass Rate</th></tr>
              <tr><td>📐 Unit test 02</td><td>Mathematics</td><td><b style={{color:'#111'}}>85%</b></td><td>30 / 32 <div className="bar"><i style={{width:'94%'}}></i></div></td></tr>
              <tr><td>⚛️ Unit test 02</td><td>Physics</td><td><b style={{color:'#111'}}>79%</b></td><td>28 / 32 <div className="bar"><i style={{width:'87%'}}></i></div></td></tr>
              <tr><td>💻 Practical 01</td><td>Computing</td><td><b style={{color:'#111'}}>82%</b></td><td>31 / 32 <div className="bar"><i style={{width:'97%'}}></i></div></td></tr>
            </table>
            <p className="link">View detailed breakdown →</p>
          </div>

          <div className="big flex1">
            <h3 style={{color:'#111'}}>Attendance insight</h3><p className="gr">Grade 10-A • Last 4 weeks</p>
            <div className="donut"><div><h2 style={{color:'#111'}}>91%</h2><p>Present</p></div></div>
            <p className="center">🟣 Present &nbsp; 🔵 Late &nbsp; 🟠 Absent</p>
            <div className="warn">⚠️ 4 students below 75%<br/><span>Requires follow-up this week</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App