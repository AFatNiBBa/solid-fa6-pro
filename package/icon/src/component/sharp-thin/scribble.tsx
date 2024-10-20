
import { Icon } from "../../index";

/**
 * A component that renders the `scribble` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scribble?s=sharp-thin scribble}
 * @preview ![scribble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/scribble.svg)
 */
const Scribble: typeof Icon = x => (
    <Icon {...x}>
        <path d="M210 17.5C222.1 6.2 238 0 254.6 0l.9 0C291.1 0 320 28.9 320 64.6c0 17.1-6.8 33.5-18.9 45.7L62.2 349.1C53.1 358.2 48 370.6 48 383.4C48 410.3 69.7 432 96.6 432c12.9 0 25.2-5.1 34.3-14.2L401.8 146.9c12.1-12.1 28.5-18.9 45.7-18.9c35.7 0 64.6 28.9 64.6 64.6c0 17.1-6.8 33.5-18.9 45.7L356.9 374.5c-13.4 13.4-20.9 31.5-20.9 50.3l0 2.6c0 37.9 30.7 68.6 68.6 68.6c11.2 0 22.3-3.1 31.9-8.8l63.4-38 8.2 13.7-63.4 38c-12.1 7.3-26 11.1-40.2 11.1c-46.7 0-84.6-37.9-84.6-84.6l0-2.6c0-23.1 9.2-45.3 25.5-61.7L481.8 226.9c9.1-9.1 14.2-21.5 14.2-34.3c0-26.8-21.7-48.6-48.6-48.6c-12.9 0-25.2 5.1-34.3 14.2L142.2 429.1C130.1 441.2 113.7 448 96.6 448C60.9 448 32 419.1 32 383.4c0-17.1 6.8-33.5 18.9-45.7L289.8 98.9c9.1-9.1 14.2-21.5 14.2-34.3C304 37.7 282.3 16 255.4 16l-.9 0c-12.5 0-24.5 4.7-33.6 13.2L13.4 221.9 2.6 210.1 210 17.5z" />
    </Icon>
);

export default Scribble;