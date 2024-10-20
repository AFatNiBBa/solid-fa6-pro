
import { Icon } from "../../index";

/**
 * A component that renders the `fire-extinguisher` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-extinguisher?s=light fire-extinguisher}
 * @preview ![fire-extinguisher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/fire-extinguisher.svg)
 */
const FireExtinguisher: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 96l0-16 0-16L480 32l0 96L320 96zM288 64l-96 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48C104.5 64 55.6 92.3 27 135.1c-7.3 11-13.4 22.9-17.8 35.6c-2.9 8.3 1.4 17.5 9.8 20.4s17.5-1.4 20.4-9.8c3.6-10.1 8.4-19.7 14.3-28.4C76.5 118.6 115.6 96 160 96l0 33.1c-54.3 7.8-96 54.4-96 110.9l0 208c0 35.3 28.7 64 64 64l96 0c35.3 0 64-28.7 64-64l0-208c0-56.4-41.7-103.1-96-110.9L192 96l96 0s0 0 0 0c0 15.3 10.8 28.4 25.7 31.4l160 32c9.4 1.9 19.1-.6 26.6-6.6s11.7-15.2 11.7-24.7l0-96c0-9.6-4.3-18.7-11.7-24.7s-17.2-8.5-26.6-6.6l-160 32c-15 3-25.7 16.1-25.7 31.4zM176 160c44.2 0 80 35.8 80 80l0 144L96 384l0-144c0-44.2 35.8-80 80-80zm80 288c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-32 160 0 0 32z" />
    </Icon>
);

export default FireExtinguisher;