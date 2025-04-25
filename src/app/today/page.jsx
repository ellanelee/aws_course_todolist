export default function TodoList() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        fontSize: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ marginTop: "10px" }}>아침 운동</div>
      <div style={{ marginTop: "10px" }}>오리엔테이션 및 오전수업</div>
      <div style={{ marginTop: "10px" }}>점심 식사</div>
      <div style={{ marginTop: "10px" }}>오후 수업</div>
    </main>
  )
}
