
import { Icon } from "../../index";

/**
 * A component that renders the `monument` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=sharp-light monument}
 * @preview ![monument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/monument.svg)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M86.3 384l39.8-272.9L192 45.3l65.9 65.9L297.7 384l32.3 0L288 96 214.6 22.6 192 0 169.4 22.6 96 96 54 384l32.3 0zM240 288l-96 0 0 32 96 0 0-32zM32 480l0-32 320 0 0 32L32 480zM0 416l0 32 0 32 0 32 32 0 320 0 32 0 0-32 0-32 0-32-32 0L32 416 0 416z" />
    </Icon>
);

export default Monument;