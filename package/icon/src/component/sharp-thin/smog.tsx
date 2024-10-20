
import { Icon } from "../../index";

/**
 * A component that renders the `smog` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smog?s=sharp-thin smog}
 * @preview ![smog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/smog.svg)
 */
const Smog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 0C96.5 0 32 64.5 32 144l0 136 0 8 8 0 136 0 123.3 0c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32l27.3 0 104 0 8 0 0-8 0-100 0-4 0-1.7s0 0 0 0C607.1 113.2 557.3 64 496 64c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.6 0-62.5 12.2-85.1 32.3C242.2 12.1 210.5 0 176 0zM48 144C48 73.3 105.3 16 176 16c33 0 63.1 12.5 85.8 33l5.6 5.1 5.4-5.4C293.1 28.5 321.1 16 352 16c45.2 0 84.1 26.8 101.8 65.3l3.1 6.7 6.9-2.5C473.9 82 484.7 80 496 80c53 0 96 43 96 96c0 1.2 0 2.5-.1 3.7l-.2 5.9 .3 .1 0 86.3-96 0-30.4 0-3.1 0-2.3 2.1c-20 18.5-46.7 29.9-76.1 29.9s-56.2-11.3-76.1-29.9l-2.3-2.1-3.1 0L176 272 48 272l0-128zM72 384l-8 0 0 16 8 0 144 0 8 0 0-16-8 0L72 384zm192 0l-8 0 0 16 8 0 368 0 8 0 0-16-8 0-368 0zM8 496l-8 0 0 16 8 0 368 0 8 0 0-16-8 0L8 496zm416 0l-8 0 0 16 8 0 144 0 8 0 0-16-8 0-144 0z" />
    </Icon>
);

export default Smog;