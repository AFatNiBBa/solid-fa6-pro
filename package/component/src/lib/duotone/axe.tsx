
import { Icon, generic } from "../../index";

/**
 * A component that renders the `axe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe?s=duotone axe}
 * @preview ![axe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/axe.svg)
 */
const Axe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 464c0 8.2 3.1 16.4 9.4 22.6l16 16c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L328 245.3c-20.4-20.4-40.8-40.8-61.3-61.3L9.4 441.4C3.1 447.6 0 455.8 0 464zM384 352l0 32c0 17.7 14.3 32 32 32c123.7 0 224-100.3 224-224c0-17.7-14.3-32-32-32l-32 0 0 32c0 1.4 0 2.7-.1 4.1s-.1 2.7-.2 4.1c-.1 2.7-.3 5.4-.6 8.1c-.5 5.3-1.3 10.6-2.4 15.8C560.1 286.7 510.7 336.1 448 348.8c-10.3 2.1-21 3.2-32 3.2l-32 0zM408 42.7L469.3 104l33.4-33.4c12.5-12.5 12.5-32.8 0-45.3l-16-16C480.4 3.1 472.2 0 464 0s-16.4 3.1-22.6 9.4L408 42.7z" />
        <path d="M329.4 9.4c12.5-12.5 32.8-12.5 45.3 0L525.3 160l50.7 0 0 32c0 88.4-71.6 160-160 160l-32 0 0-50.7L233.4 150.6c-12.5-12.5-12.5-32.8 0-45.3l96-96z" />
    </Icon>
);

export default Axe;