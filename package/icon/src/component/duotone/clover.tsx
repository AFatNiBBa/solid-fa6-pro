
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clover` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clover?s=duotone clover}
 * @preview ![clover](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clover.svg)
 */
const Clover: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M216.6 49.9C205.1 38.5 189.5 32 173.3 32C139.4 32 112 59.4 112 93.3l0 4.9c0 12 3.3 23.7 9.4 34l31.9 53.2-53.2-31.9c-10.3-6.2-22-9.4-34-9.4l-4.9 0C27.4 144 0 171.4 0 205.3c0 16.2 6.5 31.8 17.9 43.3l7.4 7.4-7.4 7.4C6.5 274.9 0 290.5 0 306.7C0 340.6 27.4 368 61.3 368l4.9 0c12 0 23.7-3.3 34-9.4l53.2-31.9-31.9 53.2c-6.2 10.3-9.4 22-9.4 34l0 4.9c0 33.8 27.4 61.3 61.3 61.3c16.2 0 31.8-6.5 43.3-17.9l7.4-7.4 7.4 7.4c11.5 11.5 27.1 17.9 43.3 17.9c33.8 0 61.3-27.4 61.3-61.3l0-4.9c0-12-3.3-23.7-9.4-34l-31.9-53.2 53.2 31.9c10.3 6.2 22 9.4 34 9.4l4.9 0c33.8 0 61.3-27.4 61.3-61.3c0-16.2-6.5-31.8-17.9-43.3l-7.4-7.4 7.4-7.4c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3l-4.9 0c-12 0-23.7 3.3-34 9.4l-53.2 31.9 31.9-53.2c6.2-10.3 9.4-22 9.4-34l0-4.9C336 59.4 308.6 32 274.7 32c-16.2 0-31.8 6.5-43.3 17.9L224 57.4l-7.4-7.4z" />
    </Icon>
);

export default Clover;