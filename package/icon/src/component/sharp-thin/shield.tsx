
import { Icon } from "../../index";

/**
 * A component that renders the `shield` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=sharp-thin shield}
 * @preview ![shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shield.svg)
 */
const Shield: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 17.2l-5.8 2.2L42.7 99.9l-9.6 3.7-.6 10.3c-2.8 47.8 4.7 121.5 36 193.6c31.4 72.4 87.2 143.6 181.1 184.3l6.4 2.7 6.4-2.7C356.2 451.2 412 379.9 443.5 307.5c31.3-72.1 38.8-145.8 36-193.6l-.6-10.3-9.6-3.7L261.8 19.4 256 17.2zM494.3 92.5l1.2 20.5c2.9 50-4.9 126.3-37.3 200.9c-32.7 75.2-91.1 150-189.4 192.6L256 512l-12.7-5.5C144.9 463.9 86.6 389.2 53.9 313.9C21.4 239.3 13.6 162.9 16.6 113l1.2-20.5L36.9 85 244.4 4.5 256 0l11.6 4.5L475.1 85l19.2 7.4z" />
    </Icon>
);

export default Shield;