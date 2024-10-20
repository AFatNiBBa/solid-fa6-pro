
import { Icon } from "../../index";

/**
 * A component that renders the `mintbit` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mintbit?s=brands mintbit}
 * @preview ![mintbit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/mintbit.svg)
 */
const Mintbit: typeof Icon = x => (
    <Icon {...x}>
        <path d="M73.2 512V438.9H365.7V365.7h73.2V219.4H512V0H292.6V73.1H146.3v73.2H73.2V438.9H0V512H73.2zm73.1-219.4h73.2v73.1H146.3V292.6zm73.2-73.1h73.1v73.1H219.4V219.4zm73.1 0V146.3h73.2v73.1H292.6zM365.7 73.1h73.2v73.2H365.7V73.1z" />
    </Icon>
);

export default Mintbit;