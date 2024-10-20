
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-sun` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-sun?s=sharp-thin temperature-sun}
 * @preview ![temperature-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/temperature-sun.svg)
 */
const TemperatureSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 110.7L312 104 297.6 17.5 294.7 0 280.1 10.2 208 60.7 135.9 10.2 121.3 0l-2.9 17.5L104 104 17.5 118.4 0 121.3l10.2 14.5L60.7 208 10.2 280.1 0 294.7l17.5 2.9L104 312l14.4 86.5 2.9 17.5 14.5-10.2L208 355.3l72.1 50.5L294.6 416c-1.9-6.7-3.4-13.6-4.5-20.7L208 336l.1-.1-.1-.1-9.2 6.4-65.9 46.1-13.2-79-1.9-11.3-11.3-1.9-79-13.2 46.1-65.9 6.4-9.2-6.4-9.2L27.7 132.9l79-13.2 11.3-1.9 1.9-11.3 13.2-79 65.9 46.1 9.2 6.4 9.2-6.4 65.9-46.1 13.2 79 1.9 11.3 11.3 1.9 42.6 7.1 0-16.2zM304 208c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c18.2 0 35.1-5 49.6-13.8L286 264c11.4-15.8 18-35.1 18-56zm-96-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM392.9 261.6l7.1-4.8 0-8.5L400 16l128 0 0 232.2 0 8.5 7.1 4.8c34.3 23 56.9 62.1 56.9 106.5c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-44.4 22.6-83.5 56.9-106.5zM544 0L528 0 400 0 384 0l0 16 0 232.2c-38.6 25.8-64 69.8-64 119.8c0 79.5 64.5 144 144 144s144-64.5 144-144c0-49.9-25.4-93.9-64-119.8L544 16l0-16zM416 368a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0c0-32.6-24.4-59.6-56-63.5L472 72l0-8-16 0 0 8 0 232.5c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default TemperatureSun;