
import { Icon } from "../../index";

/**
 * A component that renders the `pretzel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pretzel?s=sharp-solid pretzel}
 * @preview ![pretzel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pretzel.svg)
 */
const Pretzel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M138.6 32C62.1 32 0 94.1 0 170.6C0 253.3 40.9 326.5 103.7 371L82.5 401l-23 32.7 65.4 46L148 447l28.7-40.8c21.8 6.4 44.9 9.8 68.7 9.8l10.6 0 10.6 0c23.9 0 46.9-3.4 68.7-9.8L364 447l23 32.7 65.4-46-23-32.7-21.1-30C471.1 326.5 512 253.3 512 170.6C512 94.1 449.9 32 373.4 32L364 32c-42.6 0-81 18-108 46.8C229 50 190.6 32 148 32l-9.4 0zM216 180l0 7.4c0 15.5-4.8 30.7-13.7 43.4l-52.5 74.7C107.5 275.6 80 226.3 80 170.6c0-32.4 26.2-58.6 58.6-58.6l9.4 0c37.6 0 68 30.4 68 68zm40 113.5L285.2 335c-6.1 .7-12.3 1-18.6 1L256 336l-10.6 0c-6.3 0-12.5-.3-18.6-1L256 293.5zm53.7-62.6C300.8 218.2 296 203 296 187.4l0-7.4c0-37.6 30.4-68 68-68l9.4 0c32.4 0 58.6 26.2 58.6 58.6c0 55.7-27.5 105-69.7 134.9l-52.5-74.7z" />
    </Icon>
);

export default Pretzel;