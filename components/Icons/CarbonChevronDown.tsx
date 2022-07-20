import { SVGBox, SVGBoxProps } from "components";

const CarbonChevronDown = (props: SVGBoxProps) => (
  <SVGBox {...props}>
    <path
      fill="currentColor"
      d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
    ></path>
  </SVGBox>
);

export { CarbonChevronDown };
