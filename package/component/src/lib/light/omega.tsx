
import { Icon } from "../../index";

/**
 * A component that renders the `omega` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/omega?s=light omega}
 * @preview ![omega](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/omega.svg)
 */
const Omega: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 64C118 64 32 150 32 256c0 69.5 36.9 130.4 92.3 164.1c9.4 5.7 15.9 16.1 15.9 27.9c0 17.7-14.3 32-32 32L16 480c-8.8 0-16-7.2-16-16s7.2-16 16-16l92.2 0s0 0 0 0c0 0 0 0 0-.1c-.1-.1-.2-.3-.5-.5C43.1 408.2 0 337.1 0 256C0 132.3 100.3 32 224 32s224 100.3 224 224c0 81.1-43.1 152.1-107.6 191.4c-.3 .2-.4 .3-.5 .5c0 0 0 .1 0 .1c0 0 0 0 0 0l92.2 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-92.2 0c-17.7 0-32-14.3-32-32c0-11.8 6.5-22.2 15.9-27.9C379.1 386.4 416 325.5 416 256c0-106-86-192-192-192z" />
    </Icon>
);

export default Omega;