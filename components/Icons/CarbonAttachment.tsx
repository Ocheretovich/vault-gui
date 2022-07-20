import React, { SVGProps } from "react";

// https://icones.js.org/collection/carbon?s=arrow

export function CarbonAttachment(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="m28.1 18.9l-15-15c-2.5-2.6-6.6-2.6-9.2-.1s-2.6 6.7 0 9.2l.1.1L6.8 16l1.4-1.4l-2.9-2.9c-1.7-1.7-1.7-4.6 0-6.3s4.6-1.8 6.3-.1l.1.1l14.9 14.9c1.8 1.7 1.8 4.6.1 6.3c-1.7 1.8-4.6 1.8-6.3.1l-.1-.1l-7.4-7.4c-1-1-.9-2.6 0-3.5c1-.9 2.5-.9 3.5 0l4.1 4.1l1.4-1.4l-4.2-4.2c-1.8-1.7-4.6-1.6-6.3.2c-1.6 1.7-1.6 4.4 0 6.2l7.5 7.5c2.5 2.6 6.6 2.6 9.2.1s2.6-6.7 0-9.3c0 .1 0 0 0 0z"
      />
    </svg>
  );
}
