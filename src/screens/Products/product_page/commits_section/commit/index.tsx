import { useEffect, useState } from 'react';
import { Commit as commit, useCommits } from '../../../../../context/commits';

function Commit ({ id }: { id: string }) {
  const [commit, setCommit] = useState<commit>();
  const get = useCommits(state => state.one);
  useEffect(() => {
    get(id,setCommit)
    
  }, []);
  return <div>{commit?.content}</div>;
}
export default Commit;
