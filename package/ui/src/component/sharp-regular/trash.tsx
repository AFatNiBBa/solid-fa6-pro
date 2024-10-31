
import { Icon } from "../../index";

/**
 * A component that renders the `trash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash?s=sharp-regular trash}
 * @preview ![trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trash.svg)
 */
const Trash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M147.2 0L160 0 288 0l12.8 0L308 10.7 354.2 80l13.7 0L416 80l32 0 0 48-35.6 0L384 512 64 512 35.6 128 0 128 0 80l32 0 48.1 0 13.7 0L140 10.7 147.2 0zm4.4 80l145 0L275.2 48 172.8 48 151.5 80zM83.7 128l24.9 336 230.8 0 24.9-336L83.7 128z" />
    </Icon>
);

export default Trash;