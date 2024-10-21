
import { Icon } from "../../index";

/**
 * A component that renders the `lambda` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=sharp-light lambda}
 * @preview ![lambda](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lambda.svg)
 */
const Lambda: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 32L0 32 0 64l16 0 133.8 0 12.1 26.2-.7-.3L1.4 480 36 480 179.8 129 337.5 470.7l4.3 9.3 10.2 0 80 0 16 0 0-32-16 0-69.8 0L174.5 41.3 170.2 32 160 32 16 32z" />
    </Icon>
);

export default Lambda;