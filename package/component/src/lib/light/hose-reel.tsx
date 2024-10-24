
import { Icon } from "../../index";

/**
 * A component that renders the `hose-reel` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose-reel?s=light hose-reel}
 * @preview ![hose-reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hose-reel.svg)
 */
const HoseReel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 256C96 132.3 196.3 32 320 32s224 100.3 224 224l0 96-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l1.9 0 12 96.1c-7.8 1-13.9 7.7-13.9 15.9c0 8.8 7.2 16 16 16l1.9 0 14.1 0 32 0 14.1 0 1.9 0c8.8 0 16-7.2 16-16c0-8.1-6.1-14.8-13.9-15.9l12-96.1 1.9 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-96C576 114.6 461.4 0 320 0S64 114.6 64 256s114.6 256 256 256c57.6 0 110.8-19 153.6-51.2c7.1-5.3 8.5-15.3 3.2-22.4s-15.3-8.5-22.4-3.2C417 463.3 370.4 480 320 480C196.3 480 96 379.7 96 256zM573.9 384l-12 96-3.8 0-12-96 13.9 0 13.9 0zM464 256a144 144 0 1 1 -288 0 144 144 0 1 1 288 0zM320 80a176 176 0 1 0 0 352 176 176 0 1 0 0-352zm0 240a64 64 0 1 1 0-128 64 64 0 1 1 0 128zm-96-64a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
    </Icon>
);

export default HoseReel;