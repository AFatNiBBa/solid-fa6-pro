
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-half` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-half?s=thin temperature-half}
 * @preview ![temperature-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/temperature-half.svg)
 */
const TemperatureHalf: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 16c-35.3 0-64 28.7-64 64l0 163.7c0 8.4-4.4 15.7-10.7 20.3C53 287.3 32 325.2 32 368c0 70.7 57.3 128 128 128s128-57.3 128-128c0-42.8-21-80.7-53.3-104c-6.3-4.6-10.7-11.9-10.7-20.3L224 80c0-35.3-28.7-64-64-64zM80 80c0-44.2 35.8-80 80-80s80 35.8 80 80l0 163.7c0 2.7 1.4 5.4 4 7.3c36.3 26.1 60 68.8 60 117c0 79.5-64.5 144-144 144S16 447.5 16 368c0-48.2 23.7-90.8 60-117c2.6-1.9 4-4.6 4-7.3L80 80zm80 336a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 16c-35.3 0-64-28.7-64-64c0-32.6 24.4-59.6 56-63.5L152 200c0-4.4 3.6-8 8-8s8 3.6 8 8l0 104.5c31.6 3.9 56 30.9 56 63.5c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default TemperatureHalf;