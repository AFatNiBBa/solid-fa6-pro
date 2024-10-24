
import { Icon } from "../../index";

/**
 * A component that renders the `binoculars` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binoculars?s=sharp-regular binoculars}
 * @preview ![binoculars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/binoculars.svg)
 */
const Binoculars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32l96 0 0 48L96 80l0-48zM68 112l20 0 112 0 24 0 0 24 0 24 64 0 0-24 0-24 24 0 112 0 20 0 3.6 19.7 15.2 83.7 45.8 76.2 3.4 5.7 0 6.6 0 152 0 24-24 0-176 0-24 0 0-24 0-168-64 0 0 168 0 24-24 0L24 480 0 480l0-24L0 304l0-6.6 3.4-5.7 45.7-76.2 15.2-83.7L68 112zM108 160L95.6 228.3l-.8 4.3-2.3 3.8L48 310.6 48 432l128 0 0-272-68 0zM404 160l-68 0 0 272 128 0 0-121.4-44.6-74.3-2.2-3.8-.8-4.3L404 160zM416 32l0 48-96 0 0-48 96 0z" />
    </Icon>
);

export default Binoculars;