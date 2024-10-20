
import { Icon } from "../../index";

/**
 * A component that renders the `curling-stone` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=sharp-light curling-stone}
 * @preview ![curling-stone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/curling-stone.svg)
 */
const CurlingStone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 32l-16 0 0 16 0 112-48 0-16 0 0 16 0 48-32 0L0 288l0 24 0 24 0 80 64 64 448 0 64-64 0-80 0-24 0-24-64-64-32 0 0-48 0-16-16 0-272 0 0-96 208 0 16 0 0-32-16 0L176 32zM448 224l-320 0 0-32 32 0 32 0 256 0 0 32zM32 312l0-10.7L77.3 256l421.5 0L544 301.3l0 10.7 0 24L32 336l0-24zm0 56l512 0 0 34.7L498.7 448 77.3 448 32 402.7 32 368z" />
    </Icon>
);

export default CurlingStone;