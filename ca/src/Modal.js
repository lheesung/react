export default function Modal(props) {
  return (
    <div className="modal" style={{background: props.color}}>
      <h4>{props.post[0]}</h4>
      <p>내용</p>
      <p>날짜</p>
    </div>
  )
}