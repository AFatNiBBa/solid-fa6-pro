
import { Icon } from "../../index";

/**
 * A component that renders the `popcorn` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popcorn?s=sharp-solid popcorn}
 * @preview ![popcorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/popcorn.svg)
 */
const Popcorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32.2 160l87.6 0 208.4 0 87.6 0c.1-1.3 .2-2.7 .2-4c0-20.9-14.5-38.3-34-42.9c1.3-4.2 2-8.6 2-13.1c0-24.3-19.7-44-44-44c-1.9 0-3.7 .1-5.6 .3C329.3 37.7 312.3 24 292 24c-8.5 0-16.5 2.4-23.2 6.6C261.8 12.7 244.4 0 224 0s-37.8 12.7-44.8 30.6C172.5 26.4 164.5 24 156 24c-20.3 0-37.3 13.7-42.4 32.3c-1.8-.2-3.7-.3-5.6-.3c-24.3 0-44 19.7-44 44c0 4.6 .7 9 2 13.1c-19.5 4.5-34 22-34 42.9c0 1.3 .1 2.7 .2 4zm79.9 153.9L97.8 192 0 192 80 512l288 0 80-320-97.8 0L335.9 313.9 318.2 464 286 464l18.1-153.9L318 192l-78 0 0 256 0 16-32 0 0-16 0-256-78 0 13.9 118.1L162 464l-32.2 0L112.1 313.9z" />
    </Icon>
);

export default Popcorn;