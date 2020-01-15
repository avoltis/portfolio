import React from 'react';
import 'bulma-pageloader';

export default function Loader() {
  return (
    <div
      className="pageloader is-active"
      // style={{ 'background-color': '#1f2424' }}
    >
      <span className="title">loading</span>
    </div>
  );
}
