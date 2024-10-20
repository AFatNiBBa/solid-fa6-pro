
import { Icon } from "../../index";

/**
 * A component that renders the `link-simple-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple-slash?s=thin link-simple-slash}
 * @preview ![link-simple-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/link-simple-slash.svg)
 */
const LinkSimpleSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM608 256c0-88.4-71.6-160-160-160l-88 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0c79.5 0 144 64.5 144 144c0 36.3-13.5 69.5-35.7 94.9l12.6 9.9C593.3 332.7 608 296.1 608 256zm-136 8c4.4 0 8-3.6 8-8s-3.6-8-8-8l-45.9 0 20.3 16 25.7 0zM193.7 248L168 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l45.9 0-20.3-16zm-110-86.9l-12.6-9.9C46.7 179.3 32 215.9 32 256c0 88.4 71.6 160 160 160l88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-88 0c-79.5 0-144-64.5-144-144c0-36.3 13.5-69.5 35.7-94.9z" />
    </Icon>
);

export default LinkSimpleSlash;