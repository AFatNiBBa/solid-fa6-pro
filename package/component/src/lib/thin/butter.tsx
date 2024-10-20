
import { Icon } from "../../index";

/**
 * A component that renders the `butter` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=thin butter}
 * @preview ![butter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/butter.svg)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 80l0 208-16 0 0-208L128 80c-26.5 0-48 21.5-48 48l0 160-16 0 0-160c0-35.3 28.7-64 64-64l336 0 8 0 8 0 32 0c35.3 0 64 28.7 64 64l0 160-16 0 0-160c0-26.5-21.5-48-48-48l-32 0zM0 328c0-4.4 3.6-8 8-8l24 0 16 0 544 0 16 0 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0 0 64c0 26.5-21.5 48-48 48L80 448c-26.5 0-48-21.5-48-48l0-64L8 336c-4.4 0-8-3.6-8-8zm48 8l0 64c0 17.7 14.3 32 32 32l480 0c17.7 0 32-14.3 32-32l0-64L48 336z" />
    </Icon>
);

export default Butter;