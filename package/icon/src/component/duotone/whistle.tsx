
import { Icon, generic } from "../../index";

/**
 * A component that renders the `whistle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whistle?s=duotone whistle}
 * @preview ![whistle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/whistle.svg)
 */
const Whistle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 256c0-23.6 4.3-46.3 12.1-67.2c6.1-16.3 14.4-31.6 24.4-45.5c3.6-5 7.4-9.7 11.5-14.3c11.4-12.9 24.5-24.3 39-33.8C149.2 75.5 185.2 64 224 64c7.8 0 15.4 .5 22.9 1.4c.5 0 1.1 0 1.7 .1c37.8 4.5 73.8 19.4 103.9 43.2l69.8 55.2c5 4 7.2 10.6 5.5 16.8l-6.5 24c-3.2 11.7 1.1 24.2 10.8 31.5c9.6 7.2 22.7 7.9 33 1.7l19.3-11.6c5.7-3.4 12.9-3 18.2 1.2l127 100.4c6.6 5.2 10.5 13.2 10.5 21.6c0 6.9-2.6 13.5-7.2 18.5l-63.3 69.6c-6.1 6.7-14.7 10.5-23.7 10.5l-2 0c-5.2 0-10.2-1.2-14.8-3.6L380.7 367c-34.8 49-92 81-156.7 81C118 448 32 362 32 256zm128 0a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M0 128c0 28.4 18.5 52.5 44.1 60.8c6.1-16.3 14.4-31.6 24.4-45.5c-1.4 .4-2.9 .6-4.5 .6c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16c0 .3 0 .7 0 1c11.4-12.9 24.5-24.3 39-33.8C107.8 76.5 87.4 64 64 64C28.7 64 0 92.7 0 128zM224 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Whistle;