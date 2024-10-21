
import { Icon, generic } from "../../index";

/**
 * A component that renders the `binary-circle-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-circle-check?s=duotone binary-circle-check}
 * @preview ![binary-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/binary-circle-check.svg)
 */
const BinaryCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0l64 0c35.3 0 64 28.7 64 64l0 96c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 64zM0 480c0-17.7 14.3-32 32-32l16 0 0-83.6-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.5-1.6 28.8 4.4s13.3 15.7 13.3 26l0 128 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32zM64 64l0 96 64 0 0-96L64 64zM192 352c0-35.3 28.7-64 64-64l64 0c6.2 0 12.2 .9 17.9 2.5c-11.2 22.9-17.6 48.6-17.9 75.7l0-14.2-64 0 0 96 64 0 19.2 0c7.8 15.3 17.8 29.3 29.5 41.5C357 503.3 339.5 512 320 512l-64 0c-35.3 0-64-28.7-64-64l0-96zm32-160c0-17.7 14.3-32 32-32l16 0 0-83.6-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16C297.2 .5 300.6 0 304 0c6.6 0 13.2 2.1 18.7 6c8.3 6 13.3 15.7 13.3 26l0 128 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32zm96 177.8c0 4.8 .3 9.5 .7 14.2l-.7 0 0-14.2z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default BinaryCircleCheck;