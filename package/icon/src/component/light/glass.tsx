
import { Icon } from "../../index";

/**
 * A component that renders the `glass` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass?s=light glass}
 * @preview ![glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/glass.svg)
 */
const Glass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32.1 40.7c-.4-4.7 3.3-8.7 8-8.7l303.7 0c4.7 0 8.4 4 8 8.7L347.1 96 36.8 96 32.1 40.7zM39.5 128l305 0L317.2 450.7C315.8 467.3 302 480 285.4 480L98.6 480c-16.6 0-30.5-12.7-31.9-29.3L39.5 128zM40.1 0C16.7 0-1.7 20 .2 43.4l34.6 410C37.6 486.5 65.3 512 98.6 512l186.8 0c33.3 0 61-25.5 63.8-58.6l34.6-410C385.6 20 367.2 0 343.8 0L40.1 0z" />
    </Icon>
);

export default Glass;