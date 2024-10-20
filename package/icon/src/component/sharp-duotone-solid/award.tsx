
import { Icon, generic } from "../../index";

/**
 * A component that renders the `award` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/award?s=sharp-duotone-solid award}
 * @preview ![award](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/award.svg)
 */
const Award: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 456l75.8 0L128 512l56.1-133.2-35.8-23.6L96 358.3c-7.8-15.6-15.6-31.2-23.5-46.8c-3.2-1.6-6.4-3.2-9.6-4.8L0 456zm199.9-77.2L256 512l52.2-56 75.8 0L321.1 306.6c-3.2 1.6-6.4 3.2-9.6 4.8c-7.8 15.6-15.6 31.2-23.5 46.8l-52.3-3.1c-11.9 7.9-23.9 15.7-35.8 23.6z" />
        <path d="M235.7 28.8L192 0 148.3 28.8 96 25.7 72.5 72.5 25.7 96l3.1 52.3L0 192l28.8 43.7L25.7 288l46.8 23.5L96 358.3l52.3-3.1L192 384l43.7-28.8 52.3 3.1 23.5-46.8L358.3 288l-3.1-52.3L384 192l-28.8-43.7L358.3 96 311.5 72.5 288 25.7l-52.3 3.1zM192 112a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Award;