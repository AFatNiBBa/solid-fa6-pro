
import { Icon } from "../../index";

/**
 * A component that renders the `key` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key?s=sharp-light key}
 * @preview ![key](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/key.svg)
 */
const Key: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 176c0-79.5 64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144c-11.1 0-22-1.3-32.4-3.6l-8.6-2-6.3 6.3L257.4 352 208 352l-16 0 0 16 0 48-48 0-16 0 0 16 0 48-96 0 0-81.4L194.8 235.8l6.9-6.9-2.9-9.3c-4.4-13.8-6.7-28.4-6.7-43.7zM336 0C238.8 0 160 78.8 160 176c0 15.1 1.9 29.8 5.5 43.9L4.7 380.7 0 385.4 0 392 0 496l0 16 16 0 128 0 16 0 0-16 0-48 48 0 16 0 0-16 0-48 40 0 6.6 0 4.7-4.7 30-30c10 1.8 20.2 2.7 30.7 2.7c97.2 0 176-78.8 176-176S433.2 0 336 0zm32 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Key;