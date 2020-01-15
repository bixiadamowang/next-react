import Link from "next/link";
import {withRouter} from 'next/router'
function HanB({router}) {
  return (
    <div>
      <div>{router.query.name}</div>
      <Link href="/"><a>回首页</a></Link>
    </div>
  );
}

export default withRouter(HanB);
