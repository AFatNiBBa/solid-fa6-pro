
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bullet` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bullet?s=thin chart-bullet}
 * @preview ![chart-bullet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chart-bullet.svg)
 */
const ChartBullet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 32c4.4 0 8 3.6 8 8l0 24 176 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-176 0 0 24c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-24L48 224c-26.5 0-48-21.5-48-48l0-64C0 85.5 21.5 64 48 64l224 0 0-24c0-4.4 3.6-8 8-8zM160 80l0 128 112 0 0-128L160 80zm128 0l0 128 176 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L288 80zM144 80L48 80c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l96 0 0-128zM376 256c4.4 0 8 3.6 8 8l0 24 80 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-80 0 0 24c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-24L48 448c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l320 0 0-24c0-4.4 3.6-8 8-8zM224 304l0 128 144 0 0-128-144 0zm160 0l0 128 80 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-80 0zm-176 0L48 304c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l160 0 0-128z" />
    </Icon>
);

export default ChartBullet;