
import { Icon } from "../../index";

/**
 * A component that renders the `down-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-right?s=solid down-right}
 * @preview ![down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/down-right.svg)
 */
const DownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 432L96 432c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l72-72L11.3 171.3C4.1 164.1 0 154.2 0 144s4.1-20.1 11.3-27.3L52.7 75.3C59.9 68.1 69.8 64 80 64s20.1 4.1 27.3 11.3L241.4 209.4l72-72c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 240c0 17.7-14.3 32-32 32z" />
    </Icon>
);

export default DownRight;