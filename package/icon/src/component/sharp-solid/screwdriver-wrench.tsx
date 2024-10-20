
import { Icon } from "../../index";

/**
 * A component that renders the `screwdriver-wrench` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver-wrench?s=sharp-solid screwdriver-wrench}
 * @preview ![screwdriver-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/screwdriver-wrench.svg)
 */
const ScrewdriverWrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 144C224 64.5 288.5 0 368 0c19 0 37.1 3.7 53.7 10.3L336 96l0 80 80 0 85.7-85.7C508.3 106.9 512 125 512 144c0 61.3-38.3 113.7-92.3 134.4l-45.1-45.1L352 210.7l-22.6 22.6-8.4 8.4-97-97 0-.8zM0 416L168.4 247.6 241.8 321l-8.4 8.4L210.7 352l22.6 22.6L96 512 0 416zm137.9-8L104 374.1 70.1 408 104 441.9 137.9 408zM287 321l-129-129L96 192 0 64 64 0 192 96l0 62.1L321 287l31-31L512 416l-96 96L256 352l31-31z" />
    </Icon>
);

export default ScrewdriverWrench;