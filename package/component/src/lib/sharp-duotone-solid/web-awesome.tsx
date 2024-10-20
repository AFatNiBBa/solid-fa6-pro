
import { Icon, generic } from "../../index";

/**
 * A component that renders the `web-awesome` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/web-awesome?s=sharp-duotone-solid web-awesome}
 * @preview ![web-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/web-awesome.svg)
 */
const WebAwesome: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M46.4 192L176 480l288 0L593.6 192c-.5 0-1.1 0-1.6 0c-1 0-2.1 0-3.1-.1s-2-.2-3-.3c-2-.3-3.9-.6-5.8-1.1c-3.8-1-7.4-2.4-10.8-4.2c-6.8-3.6-12.6-8.9-16.9-15.2L448 192 342 99.2c-6.6 3.1-14 4.8-21.8 4.8c-1 0-2 0-2.9-.1s-1.9-.1-2.9-.2c-1.9-.2-3.8-.5-5.6-.9c-3.7-.8-7.2-2-10.6-3.6L192 192 87.6 171.1C79 183.7 64.4 192 48 192c-.5 0-1.1 0-1.6 0z" />
        <path d="M268.2 52a52 52 0 1 1 104 0 52 52 0 1 1 -104 0zM0 144a48 48 0 1 1 96 0A48 48 0 1 1 0 144zM592 96a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default WebAwesome;