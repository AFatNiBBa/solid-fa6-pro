
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-round` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-round?s=sharp-light brackets-round}
 * @preview ![brackets-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/brackets-round.svg)
 */
const BracketsRound: typeof Icon = x => (
    <Icon {...x}>
        <path d="M136.4 33.9C91.2 58.4 0 136.7 0 256S91.2 453.6 136.4 478.1l15.2-28.1C111.5 428.2 32 358.6 32 256S111.5 83.8 151.6 62.1L136.4 33.9zm239.2 0L360.4 62.1C400.5 83.8 480 153.4 480 256s-79.5 172.2-119.6 193.9l15.2 28.1C420.8 453.6 512 375.3 512 256s-91.2-197.6-136.4-222.1z" />
    </Icon>
);

export default BracketsRound;