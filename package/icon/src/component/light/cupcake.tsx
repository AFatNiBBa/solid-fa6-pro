
import { Icon } from "../../index";

/**
 * A component that renders the `cupcake` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cupcake?s=light cupcake}
 * @preview ![cupcake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cupcake.svg)
 */
const Cupcake: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 0c-5.9 0-11.3 3.2-14.1 8.5s-2.5 11.5 .8 16.4l10.8 16.3c1.6 2.4 2.5 5.3 2.5 8.2c0 8.1-6.6 14.7-14.7 14.7L148 64c-36.2 0-65.8 28.3-67.9 64l-.1 0c-44.2 0-80 35.8-80 80s35.8 80 80 80l288 0c44.2 0 80-35.8 80-80s-35.8-80-80-80C368 57.3 310.7 0 240 0L208 0zm32 49.3c0-6-1.1-11.8-3.3-17.3l3.3 0c53 0 96 43 96 96c0 4-.6 7.8-1.7 11.4c-1.4 4.8-.5 10.1 2.5 14.1s7.8 6.4 12.8 6.4l18.3 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L80 256c-26.5 0-48-21.5-48-48s21.5-48 48-48l17.4 0c4.9 0 9.5-2.2 12.5-6.1s4.1-8.8 3-13.6c-.6-2.7-1-5.4-1-8.3c0-19.9 16.1-36 36-36l45.3 0C219.1 96 240 75.1 240 49.3zM89.7 471.4c3.7 23.4 23.8 40.6 47.4 40.6l46.7 0 .3 0 79.7 0 .3 0 46.7 0c23.6 0 43.8-17.2 47.4-40.6L382 320l-32.4 0L326.7 466.5c-1.2 7.8-7.9 13.5-15.8 13.5l-29.5 0 13.3-160-32.1 0L249.3 480l-50.6 0L185.4 320l-32.1 0 13.3 160-29.5 0c-7.9 0-14.6-5.7-15.8-13.5L98.4 320 66 320 89.7 471.4z" />
    </Icon>
);

export default Cupcake;