import React from 'react';
import 'bulma-pageloader';

export default function Loader() {
  return (
    <div
      class="pageloader is-active"
      // style={{ 'background-color': '#1f2424' }}
    >
      <span class="title">loading</span>
    </div>
  );
}
