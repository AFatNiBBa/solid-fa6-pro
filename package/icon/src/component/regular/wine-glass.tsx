
import { Icon } from "../../index";

/**
 * A component that renders the `wine-glass` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass?s=regular wine-glass}
 * @preview ![wine-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/wine-glass.svg)
 */
const WineGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M184 464l0-114c44.4-7.5 81.5-35.5 101.7-73.6c13.6-24.4 20.4-53.2 17.7-83.7L287.5 14.5C286.8 6.2 279.9 0 271.8 0L264 0 56 0 48.2 0c-8.1 0-15 6.2-15.8 14.5L16.6 192.6c-2.7 30.5 4 59.3 17.7 83.7C54.5 314.5 91.6 342.5 136 350l0 114-64 0c-1 0-2.1 .1-3.1 .2C57.1 465.7 48 475.8 48 488c0 12.2 9.1 22.2 20.8 23.8c.9 .1 1.9 .2 2.9 .2l.3 0 88 0 88 0c1 0 2.1-.1 3.1-.2c11.8-1.5 20.9-11.6 20.9-23.8c0-12.2-9.1-22.2-20.8-23.8c-.9-.1-1.9-.2-2.9-.2l-.3 0-64 0zM78.2 48l163.6 0 6.3 80L71.9 128l6.3-80zM68.1 176l183.9 0 2.1 26.3c4.3 54.8-39 101.7-94 101.7s-98.3-46.9-94-101.7L68.1 176z" />
    </Icon>
);

export default WineGlass;