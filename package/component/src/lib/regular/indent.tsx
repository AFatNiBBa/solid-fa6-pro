
import { Icon } from "../../index";

/**
 * A component that renders the `indent` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=regular indent}
 * @preview ![indent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/indent.svg)
 */
const Indent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 77.3 10.7 88 24 88l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 40C10.7 40 0 50.7 0 64zM192 192c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-208 0c-13.3 0-24 10.7-24 24zm24 104c-13.3 0-24 10.7-24 24s10.7 24 24 24l208 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-208 0zM0 448c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 424c-13.3 0-24 10.7-24 24zM121 268.4c7.8-6.4 7.8-18.3 0-24.7L26.2 165.6C15.7 157 0 164.4 0 177.9L0 334.1c0 13.5 15.7 20.9 26.2 12.4L121 268.4z" />
    </Icon>
);

export default Indent;