import React, { useState } from "react";


export default function Pagination({gotoNextPage, gotoPrevPage}) {
  
  return (
    <>
      {/* {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>} */}
      <div className="btn-group grid grid-cols-2 mx-auto">
        {gotoPrevPage && <button onClick={gotoPrevPage} className="btn btn-outline">Previous page</button>}
        {gotoNextPage && <button onClick={gotoNextPage} className="btn btn-outline">Next</button>}
      </div>
    </>
  );
}
