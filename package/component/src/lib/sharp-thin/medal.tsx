
import { Icon } from "../../index";

/**
 * A component that renders the `medal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/medal?s=sharp-thin medal}
 * @preview ![medal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/medal.svg)
 */
const Medal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M266.5 128.3c6.1 .3 12.1 .9 18.1 1.7L360.6 16l121.5 0-102 153c4.3 3.2 8.5 6.6 12.5 10.1L501.3 16 512 0 492.8 0 352 0 266.5 128.3zM119.4 179.1c4-3.5 8.2-6.9 12.5-10.1L29.9 16l121.5 0 76 113.9c6-.8 12-1.4 18.1-1.7L160 0 19.2 0 0 0 10.7 16 119.4 179.1zM256 176a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 336a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm7.2-275.5L256 221.9l-7.2 14.5-26.4 53.4-58.9 8.6-16 2.3 11.6 11.3 42.6 41.6-10.1 58.7-2.7 16 14.3-7.5L256 393l52.7 27.7 14.3 7.5-2.7-16-10.1-58.7 42.6-41.6 11.6-11.3-16-2.3-58.9-8.6-26.4-53.4zM235 300.7l21-42.6 21 42.6 1.9 3.8 4.2 .6 47 6.8-34 33.2-3 2.9 .7 4.1 8 46.9-42.1-22.1-3.7-2-3.7 2L210.2 399l8-46.9 .7-4.1-3-2.9-34-33.2 47-6.8 4.2-.6 1.9-3.8z" />
    </Icon>
);

export default Medal;