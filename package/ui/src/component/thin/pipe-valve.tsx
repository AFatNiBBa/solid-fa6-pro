
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=thin pipe-valve}
 * @preview ![pipe-valve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pipe-valve.svg)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 40c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 30.6L144.8 54.3C119.2 50.3 96 70.1 96 96s23.2 45.7 48.8 41.7L248 121.4l0 70.6L64 192c0-17.7-14.3-32-32-32s-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l384 0c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-17.7-14.3-32-32-32s-32 14.3-32 32l-184 0 0-70.6 103.2 16.3c25.6 4 48.8-15.7 48.8-41.7s-23.2-45.7-48.8-41.7L264 70.6 264 40zM448 208l0 224L64 432l0-224 192 0 192 0zM248 86.8l0 18.3L142.3 121.9C126.4 124.4 112 112.1 112 96s14.4-28.4 30.3-25.9L248 86.8zm16 0L369.7 70.1C385.6 67.6 400 79.9 400 96s-14.4 28.4-30.3 25.9L264 105.2l0-18.3zM48 448c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16s16 7.2 16 16l0 256zM496 192l0 256c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default PipeValve;