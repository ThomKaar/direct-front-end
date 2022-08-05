import React, { useState } from 'react';
import castVote from '../middlewares/castVote.js';
export default function Vote({prompt, promptInfo}) {
    const [approve, setApprove] = useState(undefined);

    return (
      <section className="w-2/5">
        <h2 style={{ padding: "1rem 0" }}>
          {prompt}
        </h2>
        <p className="my-4">
          {promptInfo}
        </p>
        <div>
            <button
              class="block w-1/2 px-8 py-4 mx-auto mb-5 rounded-md shadow-md bg-green-600 hover:bg-green-800"
              onClick={() => setApprove(true)}>
              yes
            </button>
            <button class="block w-1/2 px-8 py-4 mx-auto mb-8 rounded-md shadow-md bg-red-600 hover:bg-red-800"
            onClick={() => setApprove(false)}>
              no
            </button>
            <button
              class="block w-1/2 px-8 py-4 mx-auto rounded-md bg-purple-600 hover:bg-purple-800 disabled:mt-16 disabled:bg-stone-600"
              disabled={approve !== true & approve !== false}
              onClick={() => {
                  castVote(approve, prompt, 0, () => {window.location = '/'});
              }}
              >
                Cast Vote
            </button>
            {(approve === true || approve === false) && (
              <span class="my-4">
                  Confirm you are voting {approve ? 'yes' : 'no'} on {prompt}
              </span>
            )}
        </div>
      </section>
    );
  }