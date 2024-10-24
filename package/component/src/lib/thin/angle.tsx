
import { Icon } from "../../index";

/**
 * A component that renders the `angle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=thin angle}
 * @preview ![angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/angle.svg)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M231.2 43.6c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6L.8 468.4c-1.2 2.5-1.1 5.4 .4 7.8s4 3.8 6.8 3.8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L20.9 464 231.2 43.6zM294 250.7c-19.4-25.8-42.6-48.6-68.7-67.7c-3.9-2.9-9.5-1.4-11.7 2.9c-1.8 3.6-.7 7.9 2.5 10.2c24.6 18 46.4 39.5 64.8 63.8c2.6 3.4 7.3 4.3 10.9 2c3.9-2.5 4.9-7.7 2.1-11.3zm19.6 63c14.1 29.5 23.7 61.5 27.9 95.2c.5 4.1 3.9 7.2 8.1 7.2c4.7 0 8.4-4.1 7.9-8.8c-4.4-35.7-14.6-69.7-29.6-100.9c-2-4.3-7.4-5.7-11.3-3.1c-3.5 2.2-4.7 6.7-2.9 10.4z" />
    </Icon>
);

export default Angle;