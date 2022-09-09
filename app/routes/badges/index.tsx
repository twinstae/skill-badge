import CenterCardLayout from "~/components/CenterCardLayout";

export default function BadgeDetailPage(){
  return (
    <CenterCardLayout>
      <h1>기본적인 리눅스 커맨드를 활용할 수 있습니다</h1>
      <ul className="steps steps-vertical">
        <li className="step step-primary">
          pwd, ls, cp, mv, tree 명령어로 파일 시스템을 탐색하고 조작할 수 있습니다
        </li>
        <li className="step step-primary">stdio</li>
        <li className="step">permission</li>
        <li className="step">packages</li>
        <li className="step">network</li>
        <li className="step">find</li>
        <li className="step">compress, rsync</li>
        <li className="step">ssh</li>
        <li className="step">regex</li>
        <li className="step">text edit</li>
        <li className="step">format</li>
        <li className="step">sh</li>
      </ul>
    </CenterCardLayout>
  )
}
