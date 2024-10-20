
import { Icon } from "../../index";

/**
 * A component that renders the `lasso` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lasso?s=sharp-thin lasso}
 * @preview ![lasso](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/lasso.svg)
 */
const Lasso: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 176c0 97.2-128.9 176-288 176c-30.4 0-59.6-2.9-87.1-8.2C220.4 361.9 232 387.6 232 415c0 53.6-43.4 97-97 97l-95 0-8 0 0-16 8 0 95 0c44.7 0 81-36.3 81-81c0-30.7-17.3-58.7-44.8-72.4l-30.7-15.4C56.4 296.5 0 240.3 0 176C0 78.8 128.9 0 288 0S576 78.8 576 176zM288 336c150.2 0 272-71.6 272-160S438.2 16 288 16S16 87.6 16 176s121.8 160 272 160z" />
    </Icon>
);

export default Lasso;