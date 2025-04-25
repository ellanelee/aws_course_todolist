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
      <div style={{ marginTop: "10px" }}>오전 면접</div>
      <div style={{ marginTop: "10px" }}>점심 식사</div>
      <div style={{ marginTop: "10px" }}>오후 과제</div>
    </main>
  )
}
