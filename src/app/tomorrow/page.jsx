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
      <div style={{ marginTop: "10px" }}>오전수업</div>
      <div style={{ marginTop: "10px" }}>과제</div>
      <div style={{ marginTop: "10px" }}>점심 식사</div>
      <div style={{ marginTop: "10px" }}>동아리 모임</div>
    </main>
  )
}
