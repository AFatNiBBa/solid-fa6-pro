
import { Icon } from "../../index";

/**
 * A component that renders the `balloon` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/balloon?s=light balloon}
 * @preview ![balloon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/balloon.svg)
 */
const Balloon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M205.6 405.8s0 0 0 0s0 0 0 0s0 0 0 0L192 415.3l-13.6-9.5s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0l-.2-.2-1.1-.8c-1-.7-2.6-1.9-4.6-3.4c-4-3-9.9-7.6-17-13.5c-14.2-11.8-33.1-28.8-51.8-49.4C65 295.9 32 243.6 32 192c0-88.4 71.6-160 160-160s160 71.6 160 160c0 51.6-33 103.9-71.7 146.5c-18.8 20.6-37.6 37.6-51.8 49.4c-7.1 5.9-12.9 10.5-17 13.5c-2 1.5-3.6 2.7-4.6 3.4l-1.1 .8-.2 .2s0 0 0 0zM192 439.6l3.4 6.8L212.2 480l-40.4 0 16.8-33.7 3.4-6.8zM0 192C0 320 160 432 160 432l-30.6 61.3c-.9 1.8-1.4 3.8-1.4 5.8c0 7.1 5.8 12.9 12.9 12.9l102.1 0c7.1 0 12.9-5.8 12.9-12.9c0-2-.5-4-1.4-5.8L224 432s160-112 160-240C384 86 298 0 192 0S0 86 0 192zm112-16c0-35.3 28.7-64 64-64c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
    </Icon>
);

export default Balloon;