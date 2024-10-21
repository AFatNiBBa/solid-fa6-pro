
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-icicles` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-icicles?s=duotone face-icicles}
 * @preview ![face-icicles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-icicles.svg)
 */
const FaceIcicles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 19.7 2.2 38.9 6.5 57.4l18 107.9C27 436.7 40.4 448 56 448c8.3 0 15.9-3.1 21.6-8.4C123.7 484.4 186.6 512 256 512c31.1 0 60.9-5.5 88.5-15.7c5.7 9.6 16.1 15.7 27.5 15.7c13.6 0 25.7-8.6 30.2-21.4l11.5-32.9c5.4-4.2 10.5-8.6 15.6-13.2l2.8 37.9c1.2 16.7 15.2 29.6 31.9 29.6s30.7-12.9 31.9-29.6l14.8-200c0-.5 .1-1.1 .1-1.6c.8-8.1 1.2-16.4 1.2-24.7C512 114.6 397.4 0 256 0S0 114.6 0 256zm35.9 39.7C33.9 283.3 43.4 272 56 272s22.1 11.3 20.1 23.7C69.4 335.7 62.7 375.8 56 415.8l-20-120.1zM112.7 344c3.8-22.7 23.6-40 47.3-40l8 0 0 40-55.3 0zm0 16l55.3 0 0 40-8 0c-23.8 0-43.5-17.3-47.3-40zm95.7-152a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM184 304l64 0 0 40-64 0 0-40zm0 56l64 0 0 40-64 0 0-40zm80-56l64 0 0 40-64 0 0-40zm0 56l64 0 0 40-32 48-32-48 0-40zM368.4 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM344 304l8 0c23.8 0 43.5 17.3 47.3 40L344 344l0-40zm0 56l56 0 0 40-28 80-28-80 0-40zm98.2-112.1C441 235.1 451.1 224 464 224s23 11.1 21.8 23.9L464 480 442.2 247.9z" />
        <path d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default FaceIcicles;