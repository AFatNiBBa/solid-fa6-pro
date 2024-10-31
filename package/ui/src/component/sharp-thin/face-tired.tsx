
import { Icon } from "../../index";

/**
 * A component that renders the `face-tired` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tired?s=sharp-thin face-tired}
 * @preview ![face-tired](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-tired.svg)
 */
const FaceTired: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 368c39 0 75.9 7.4 108.6 20.7C352.5 340 308.4 304 256 304s-96.5 36-108.6 84.7C180.1 375.4 217 368 256 368zm0 16c-40.7 0-78.8 8.5-111.7 23.4c-5.6 2.5-11 5.3-16.3 8.1c0-6.4 .5-12.7 1.4-18.8C138.7 335.2 191.8 288 256 288s117.3 47.2 126.6 108.8c.9 6.1 1.4 12.4 1.4 18.8c-5.3-2.9-10.7-5.6-16.3-8.1C334.8 392.5 296.7 384 256 384zM132.4 157.3l7.2 3.6 80 40 14.3 7.2-14.3 7.2-80 40-7.2 3.6-7.2-14.3 7.2-3.6L198.1 208l-65.7-32.8-7.2-3.6 7.2-14.3zm240 3.6l7.2-3.6 7.2 14.3-7.2 3.6L313.9 208l65.7 32.8 7.2 3.6-7.2 14.3-7.2-3.6-80-40L278.1 208l14.3-7.2 80-40z" />
    </Icon>
);

export default FaceTired;