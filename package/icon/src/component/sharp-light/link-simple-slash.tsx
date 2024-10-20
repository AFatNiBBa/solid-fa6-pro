
import { Icon } from "../../index";

/**
 * A component that renders the `link-simple-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple-slash?s=sharp-light link-simple-slash}
 * @preview ![link-simple-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/link-simple-slash.svg)
 */
const LinkSimpleSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32.5 10L19.9 .1 .1 25.3l12.6 9.9L607.8 502.2l12.6 9.9 19.8-25.2-12.6-9.9L32.5 10zM608 256c0-88.4-71.6-160-160-160l-80 0-16 0 0 32 16 0 80 0c70.7 0 128 57.3 128 128c0 35.5-14.4 67.6-37.7 90.8l25.3 19.9C591.1 338 608 299 608 256zM456 272l16 0 0-32-16 0-53 0 40.5 32 12.4 0zM196.4 240L184 240l-16 0 0 32 16 0 53 0-40.5-32zm-94.7-74.8L76.5 145.3C48.9 174 32 213 32 256c0 88.4 71.6 160 160 160l80 0 16 0 0-32-16 0-80 0c-70.7 0-128-57.3-128-128c0-35.5 14.4-67.6 37.7-90.8z" />
    </Icon>
);

export default LinkSimpleSlash;