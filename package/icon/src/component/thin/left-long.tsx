
import { Icon } from "../../index";

/**
 * A component that renders the `left-long` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=thin left-long}
 * @preview ![left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/left-long.svg)
 */
const LeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 312l0 81.1c0 3.8-3.1 6.9-6.9 6.9c-1.8 0-3.5-.7-4.7-1.9L16.8 257.9c-.5-.5-.8-1.2-.8-1.9s.3-1.4 .8-1.9L164.4 113.9c1.3-1.2 3-1.9 4.7-1.9c3.8 0 6.9 3.1 6.9 6.9l0 81.1c0 8.8 7.2 16 16 16l280 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-280 0c-8.8 0-16 7.2-16 16zM5.8 269.5L153.4 409.7c4.3 4 9.9 6.3 15.8 6.3c12.6 0 22.9-10.2 22.9-22.9l0-65.1 0-16 16 0 264 0c22.1 0 40-17.9 40-40l0-32c0-22.1-17.9-40-40-40l-264 0-16 0 0-16 0-65.1c0-12.6-10.2-22.9-22.9-22.9c-5.9 0-11.5 2.3-15.8 6.3L5.8 242.5C2.1 246 0 250.9 0 256s2.1 10 5.8 13.5z" />
    </Icon>
);

export default LeftLong;