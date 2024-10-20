
import { Icon } from "../../index";

/**
 * A component that renders the `butter` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=regular butter}
 * @preview ![butter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/butter.svg)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 112l0 176-48 0 0-176-288 0c-8.8 0-16 7.2-16 16l0 160-48 0 0-160c0-35.3 28.7-64 64-64l288 0 24 0 24 0 48 0c35.3 0 64 28.7 64 64l0 160-48 0 0-160c0-8.8-7.2-16-16-16l-48 0zM0 344c0-13.3 10.7-24 24-24l592 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 48c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-48-8 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Butter;