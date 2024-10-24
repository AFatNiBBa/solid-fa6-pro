
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-up-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-up-down?s=thin chart-line-up-down}
 * @preview ![chart-line-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chart-line-up-down.svg)
 */
const ChartLineUpDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 32c4.4 0 8 3.6 8 8l0 368c0 30.9 25.1 56 56 56l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 480c-39.8 0-72-32.2-72-72L0 40c0-4.4 3.6-8 8-8zM352 72c0-4.4 3.6-8 8-8l112 0c4.4 0 8 3.6 8 8l0 112c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-92.7L293.7 261.7c-3.1 3.1-8.2 3.1-11.3 0L208 187.3l-98.3 98.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l104-104c3.1-3.1 8.2-3.1 11.3 0L288 244.7 452.7 80 360 80c-4.4 0-8-3.6-8-8zm8 312c-4.4 0-8-3.6-8-8s3.6-8 8-8l92.7 0-90.3-90.3 11.3-11.3L464 356.7l0-92.7c0-4.4 3.6-8 8-8s8 3.6 8 8l0 112c0 4.4-3.6 8-8 8l-112 0z" />
    </Icon>
);

export default ChartLineUpDown;