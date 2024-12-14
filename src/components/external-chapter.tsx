import { Link } from "react-router-dom"

type Props = {
  externalUrl: string
}

const ExternalChapter = ({ externalUrl }: Props) => {
  return (
    <div>
      <h2>This manga you can read on </h2>
      <Link to={externalUrl}></Link>
    </div>
  )
}

export default ExternalChapter
