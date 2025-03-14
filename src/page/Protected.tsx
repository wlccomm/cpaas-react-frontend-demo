import { useEffect } from "react";
import { useLazyGetProtectedQuery } from "../app/apiAuth";
import { BootstrapLayout } from "../layout/BootstrapLayout";
import { CodeSnippet } from "../comp/CodeSnippet";

export default function Protected() {
  const [triggerGetProtected, resultGetProtected] = useLazyGetProtectedQuery();
  const onClickGetProtected = () => {
    triggerGetProtected();
  };
  useEffect(() => {
    document.title = "Protected";
  }, []);

  return (
    <BootstrapLayout>
      Protected
      <br />
      <br />
      <button type="button" onClick={onClickGetProtected}>
        GET /protected
      </button>
      <CodeSnippet
        title="GET /protected:"
        noTitleIfNoCode={true}
        code={JSON.stringify(resultGetProtected?.data, null, 2)}
      />
    </BootstrapLayout >
  )
}
