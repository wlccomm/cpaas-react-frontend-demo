import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { incrementHitCountPing } from "../app/appSlice";
import { useGetPingQuery, useLazyGetPingQuery } from "../app/apiPing";
import { BootstrapLayout } from "../layout/BootstrapLayout";
import { CodeSnippet } from "../comp/CodeSnippet";

export default function Ping() {
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetPingQuery("");
  const [triggerGetPing, resultGetPing] = useLazyGetPingQuery();

  const onClickGetPing = () => {
    // console.log("onClickGetPing");
    dispatch(incrementHitCountPing());
    triggerGetPing("");
  };

  useEffect(() => {
    document.title = "Ping";
  }, [dispatch]);

  return (
    <BootstrapLayout>
      Ping
      <br />
      <br />
      Page purpose:
      <br />
      1. Add to hit counter
      <br />
      2. Call ping api as soon as the page loads and display the results
      <br />
      Check api results in devtools, will use cached results
      <br />
      3. Add button to trigger same api and display results
      <br />
      Check api results in devtools, ignores cache and always calls api
      <br />
      <br />
      {error ? (
        <>error: ping api did not work</>
      ) : isLoading ? (
        <>loading: ping api...</>
      ) : data ? (
        <>success: ping api worked</>
      ) : null}
      <br />
      <br />
      <button type="button" onClick={onClickGetPing}>
        GET /ping
      </button>
      <CodeSnippet
        title="GET /ping:"
        noTitleIfNoCode={true}
        code={JSON.stringify(resultGetPing?.data, null, 2)}
      />
    </BootstrapLayout>
  );
}
