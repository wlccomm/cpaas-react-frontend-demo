export default function BreakpointHelper() {
  return (
    <div>
      <div className="d-block d-sm-none">1 of 6, X-Small, None, &lt;576px</div>
      <div className="d-none d-sm-block d-md-none">
        2 of 6, Small, sm, &#8805;576px
      </div>
      <div className="d-none d-md-block d-lg-none">
        3 of 6, Medium, md, &#8805;768px
      </div>
      <div className="d-none d-lg-block d-xl-none">
        4 of 6, Large, lg, &#8805;992px
      </div>
      <div className="d-none d-xl-block d-xxl-none">
        5 of 6, Extra large, xl, &#8805;1200px
      </div>
      <div className="d-none d-xxl-block">
        6 of 6, Extra extra large, xxl, &#8805;1400px
      </div>
    </div>
  );
}
