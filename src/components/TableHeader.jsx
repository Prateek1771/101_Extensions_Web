export default function TableHeader() {
  return (
    <>
      <div className="table-cols" role="row">
        <span className="col-header">NO.</span>
        <span className="col-header">NAME</span>
        <span className="col-header fn-col">FUNCTION</span>
        <span className="col-header">CATEGORY</span>
        <span className="col-header"></span>
        <span className="col-header"></span>
      </div>
      <hr className="table-divider" />
    </>
  );
}
