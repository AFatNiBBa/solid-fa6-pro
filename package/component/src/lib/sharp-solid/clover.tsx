
import { Icon } from "../../index";

/**
 * A component that renders the `clover` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clover?s=sharp-solid clover}
 * @preview ![clover](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clover.svg)
 */
const Clover: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M120.9 126.9L160 192 94.9 152.9C85.1 147.1 74 144 62.6 144C28 144 0 172 0 206.6V224l32 32L0 288v17.4C0 340 28 368 62.6 368c11.4 0 22.5-3.1 32.2-8.9L160 320l-39.1 65.1c-5.8 9.7-8.9 20.9-8.9 32.2c0 34.6 28 62.6 62.6 62.6H192l32-32 32 32h17.4c34.6 0 62.6-28 62.6-62.6c0-11.4-3.1-22.5-8.9-32.2L288 320l65.1 39.1c9.7 5.8 20.9 8.9 32.2 8.9c34.6 0 62.6-28 62.6-62.6V288l-32-32 32-32V206.6c0-34.6-28-62.6-62.6-62.6c-11.4 0-22.5 3.1-32.2 8.9L288 192l39.1-65.1c5.8-9.7 8.9-20.9 8.9-32.2C336 60 308 32 273.4 32H256L224 64 192 32H174.6C140 32 112 60 112 94.6c0 11.4 3.1 22.5 8.9 32.2z" />
    </Icon>
);

export default Clover;