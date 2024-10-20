
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=thin flag-pennant}
 * @preview ![flag-pennant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/flag-pennant.svg)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8L0 40 0 344 0 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-154.3L442.7 199.5c3.2-1.1 5.3-4.2 5.3-7.5s-2.1-6.4-5.3-7.5L16 34.3 16 8zm0 43.3L415.9 192 16 332.7 16 51.3z" />
    </Icon>
);

export default FlagPennant;