
import { Icon } from "../../index";

/**
 * A component that renders the `tennis-ball` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tennis-ball?s=thin tennis-ball}
 * @preview ![tennis-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tennis-ball.svg)
 */
const TennisBall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M266.5 495.8c-9.8-61.2 8.9-126 56.1-173.2s112-65.8 173.2-56.1c.2-3.5 .2-7 .2-10.5C496 123.5 388.5 16 256 16c-3.5 0-7 .1-10.5 .2c9.8 61.2-8.9 126-56.1 173.2s-112 65.8-173.2 56.1c-.2 3.5-.2 7-.2 10.5c0 132.5 107.5 240 240 240c3.5 0 7-.1 10.5-.2zm16-1.2c111.3-12.2 199.8-100.7 212-212c-56.7-9.5-116.9 7.6-160.7 51.4s-60.8 104-51.4 160.7zM229.5 17.5c-111.3 12.2-199.8 100.7-212 212c56.7 9.5 116.9-7.6 160.7-51.4s60.8-104 51.4-160.7zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default TennisBall;