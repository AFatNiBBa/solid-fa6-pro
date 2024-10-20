
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gramophone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gramophone?s=duotone gramophone}
 * @preview ![gramophone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gramophone.svg)
 */
const Gramophone: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 296c0 1.5 .1 2.9 .4 4.3c.6 3.1 1.7 6.1 3.5 8.8c2.4 3.7 5.9 6.8 10.2 8.7c1.4 .6 2.8 1.1 4.3 1.5c3.4 .8 6.8 .9 10 .2c3-.6 5.9-1.7 8.7-3.5c.3-.2 .7-.5 1-.7c108.2-77.3 197.2-76.6 241.4-69.4c4.7 .8 9.3 3.7 12.4 8.6c2.6 4.9 4 10.3 4.1 15.6c-.2 18.7-15.3 33.7-34 33.7l-110 0c-11.6 0-21.3 8.2-23.5 19.2c-.3 1.6-.5 3.2-.5 4.8l0 56 48 0 0-32 86.6 0c45 0 81.4-36.5 81.4-81.4l0-.6c0-12-2.8-24.1-8.2-35c-8.5-17.5-22.9-31.7-40.1-40.4C257.8 159.3 213.4 114 186.4 77.8c-13.5-18.1-22.6-34-28.2-45.1c-2.8-5.6-4.8-9.9-6-12.8c-.6-1.4-1-2.5-1.3-3.2c-.1-.2-.2-.4-.3-.7C147.1 6.1 137.5-.4 127 0c-10.5 .4-19.5 7.7-22.2 17.8L32.8 289.7c-.1 .3-.2 .7-.3 1c-.4 1.8-.6 3.6-.6 5.3z" />
        <path d="M64 384c-17.7 0-32 14.3-32 32l0 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-32c0-17.7-14.3-32-32-32L64 384z" />
    </Icon>
);

export default Gramophone;