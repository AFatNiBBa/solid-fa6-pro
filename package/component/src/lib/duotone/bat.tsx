
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bat?s=duotone bat}
 * @preview ![bat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bat.svg)
 */
const Bat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M195.1 159.2c8.5 4 17 8.1 25.5 12.1c6.4 3.1 13.5 4.7 20.6 4.7l93.5 0c7.1 0 14.2-1.6 20.6-4.7l25.5-12.1-19-101.4c-1.1-5.7-6-9.8-11.8-9.8c-3.8 0-7.4 1.8-9.6 4.8L329.6 67.2C323.6 75.3 314.1 80 304 80l-32 0c-10.1 0-19.6-4.7-25.6-12.8L235.6 52.8c-2.3-3-5.8-4.8-9.6-4.8c-5.8 0-10.8 4.1-11.8 9.8l-19 101.4z" />
        <path d="M334.8 176H241.2c-7.1 0-14.2-1.6-20.6-4.7L123.4 125c-16.2-7.7-35.5-3.6-47.1 10C27.1 192.4 0 265.6 0 341.2v37.6c0 9.7 10.2 16 18.9 11.7l63.8-31.9c7.5-3.7 16.6-1.1 20.9 6.1l29.8 49.7c5.4 8.9 17.7 10.4 25 3.1l36.6-36.6c6.8-6.8 18.1-6.1 24 1.6l56.2 73.1c6.4 8.3 19 8.3 25.4 0l56.2-73.1c5.9-7.7 17.2-8.4 24-1.6l36.6 36.6c7.4 7.4 19.7 5.8 25-3.1l29.8-49.7c4.3-7.2 13.4-9.8 20.9-6.1l63.8 31.9c8.7 4.3 18.9-2 18.9-11.7V341.2c0-75.6-27.1-148.8-76.3-206.2c-11.6-13.6-30.9-17.7-47.1-10l-97.2 46.3c-6.4 3.1-13.5 4.7-20.6 4.7z" />
    </Icon>
);

export default Bat;