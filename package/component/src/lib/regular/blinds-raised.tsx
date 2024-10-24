
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-raised` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-raised?s=regular blinds-raised}
 * @preview ![blinds-raised](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/blinds-raised.svg)
 */
const BlindsRaised: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24C0 34.6 6.9 43.6 16.4 46.8l-15 45C.5 94.6 0 97.5 0 100.5C0 115.7 12.3 128 27.5 128l84.5 0 0-48L55.9 80 66.6 48 112 48l32 0 0 32 0 48 0 80 0 48 0 116.1C116 382 96 408.6 96 440c0 39.8 32.2 72 72 72s72-32.2 72-72c0-31.4-20-58-48-67.9L192 256l0-48 0-80 0-48 0-32 32 0 221.4 0 10.7 32L224 80l0 48 260.5 0c15.2 0 27.5-12.3 27.5-27.5c0-3-.5-5.9-1.4-8.7l-15-45C505.1 43.6 512 34.6 512 24c0-13.3-10.7-24-24-24l-8 0L192 0 144 0 32 0 24 0zM144 440a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM112 208l-56.5 0 15.4-48-50.4 0L1.3 219.9c-.9 2.7-1.3 5.6-1.3 8.4C0 243.6 12.4 256 27.7 256l84.3 0 0-48zm112 48l260.3 0c15.3 0 27.7-12.4 27.7-27.7c0-2.9-.4-5.7-1.3-8.4L491.5 160l-50.4 0 15.4 48L224 208l0 48z" />
    </Icon>
);

export default BlindsRaised;