
import { Icon } from "../../index";

/**
 * A component that renders the `truck-clock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-clock?s=sharp-thin truck-clock}
 * @preview ![truck-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/truck-clock.svg)
 */
const TruckClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 16l0 384 51.3 0c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64L400 400l0-384L16 16zM64.4 416L16 416 0 416l0-16L0 16 0 0 16 0 400 0l16 0 0 16 0 80 72 0 3.3 0 2.3 2.3 112 112 2.3 2.3 0 3.3 0 184 24 0 8 0 0 16-8 0-56.4 0c.2 2.6 .4 5.3 .4 8c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7 .1-5.4 .4-8l-.4 0-160.4 0c.2 2.6 .4 5.3 .4 8c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7 .1-5.4 .4-8zM416 216l172.7 0-104-104L416 112l0 104zm0 16l0 141.4c15.9-22.6 42.2-37.4 72-37.4c40.3 0 74.2 27.1 84.7 64l19.3 0 0-168-176 0zM224 424A72 72 0 1 0 80 424a72 72 0 1 0 144 0zm264 72a72 72 0 1 0 0-144 72 72 0 1 0 0 144zM208 272a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 56l0 56 40 0 8 0 0 16-8 0-48 0-8 0 0-8 0-64 0-8 16 0 0 8z" />
    </Icon>
);

export default TruckClock;