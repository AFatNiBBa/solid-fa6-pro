
import { Icon } from "../../index";

/**
 * A component that renders the `underline` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=thin underline}
 * @preview ![underline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/underline.svg)
 */
const Underline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 40c0-4.4 3.6-8 8-8l128 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L80 48l0 192c0 79.5 64.5 144 144 144s144-64.5 144-144l0-192-56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l128 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0 0 192c0 88.4-71.6 160-160 160s-160-71.6-160-160L64 48 8 48c-4.4 0-8-3.6-8-8zM0 472c0-4.4 3.6-8 8-8l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 480c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Underline;