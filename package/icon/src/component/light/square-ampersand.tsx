
import { Icon } from "../../index";

/**
 * A component that renders the `square-ampersand` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ampersand?s=light square-ampersand}
 * @preview ![square-ampersand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-ampersand.svg)
 */
const SquareAmpersand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm176 88c0 6.2 2.4 12.1 6.6 16.6l22.1 23.3 21.8-15C235 203 240 193.5 240 183.2c0-12.8-10.4-23.2-23.2-23.2L200 160c-13.3 0-24 10.7-24 24zm68.7 51.2l-17.5 12.1 45.4 47.7L307 246.7c5.1-7.2 15.1-8.9 22.3-3.7s8.9 15.1 3.7 22.3l-38 53.2L331.6 357c6.1 6.4 5.8 16.5-.6 22.6s-16.5 5.8-22.6-.6l-32.4-34-6.3 8.8c-13.5 18.9-35.3 30.2-58.6 30.2l-36 0c-34.9 0-63.2-28.3-63.2-63.2c0-20.8 10.2-40.3 27.4-52.1l38.7-26.6-18.6-19.5C149.5 212.2 144 198.4 144 184c0-30.9 25.1-56 56-56l16.8 0c30.5 0 55.2 24.7 55.2 55.2c0 20.8-10.2 40.2-27.3 52zm-87.1 59.9c-8.5 5.8-13.5 15.4-13.5 25.7c0 17.2 14 31.2 31.2 31.2l36 0c12.9 0 25-6.2 32.5-16.8l9.8-13.8-53.2-55.8-42.9 29.5z" />
    </Icon>
);

export default SquareAmpersand;