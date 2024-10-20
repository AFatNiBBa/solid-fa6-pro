
import { Icon } from "../../index";

/**
 * A component that renders the `dolly` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly?s=regular dolly}
 * @preview ![dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dolly.svg)
 */
const Dolly: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l80.8 0c3.5 0 6.5 2.2 7.6 5.5l91.9 281.6C177.7 352.1 160 382 160 416c0 53 43 96 96 96s96-43 96-96c0-2.8-.1-5.5-.3-8.2L560 334.6c12.5-4.4 19.1-18.1 14.7-30.6s-18.1-19.1-30.6-14.7L335.8 362.5C318.5 336.9 289.2 320 256 320c-2 0-4 .1-6 .2L158 38.6C150.5 15.6 129 0 104.8 0L24 0zM256 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM457.4 117.3c-10.6-28.7-42.2-43.7-71.1-33.5L224.9 140.5l14.9 45.6 57.5-20.2 24.1 66.3c4.5 12.5 18.3 18.9 30.8 14.4s18.9-18.3 14.4-30.8L342.6 150l59.6-20.9c4.1-1.4 8.7 .7 10.2 4.8L467 282.5l45.3-15.9L457.4 117.3z" />
    </Icon>
);

export default Dolly;