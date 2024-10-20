
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-a` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-a?s=duotone circle-a}
 * @preview ![circle-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-a.svg)
 */
const CircleA: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm130.5 77.3c34.7-69.3 69.3-138.7 104-208c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3c34.7 69.3 69.3 138.7 104 208c.9 1.7 1.5 3.5 1.9 5.3c.2 .9 .4 1.8 .5 2.7c.1 .7 .1 1.3 .1 1.3l0 1.5c0 1.1 0 1.4-.1 1.6c0 .5-.1 1.1-.2 1.6c-.1 1.1-.4 2.1-.7 3.2c-.6 2.1-1.5 4.1-2.6 6c-2.3 3.7-5.6 6.9-9.8 9c-11.9 5.9-26.3 1.1-32.2-10.7L321.2 320l-130.3 0c-5.8 11.6-11.6 23.2-17.4 34.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2zM214.8 272l82.3 0c-13.7-27.4-27.4-54.9-41.2-82.3c-13.7 27.5-27.4 54.9-41.2 82.3z" />
        <path d="M277.5 125.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-104 208c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7L190.8 320l130.3 0 17.4 34.7c5.9 11.9 20.3 16.7 32.2 10.7s16.7-20.3 10.7-32.2l-104-208zM297.2 272l-82.3 0L256 189.7 297.2 272z" />
    </Icon>
);

export default CircleA;