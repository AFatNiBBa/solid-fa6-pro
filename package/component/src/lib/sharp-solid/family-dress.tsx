
import { Icon } from "../../index";

/**
 * A component that renders the `family-dress` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/family-dress?s=sharp-solid family-dress}
 * @preview ![family-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/family-dress.svg)
 */
const FamilyDress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 128A64 64 0 1 0 128 0a64 64 0 1 0 0 128zm48 48c0-5.5 .6-10.8 1.6-16L64 160 0 384l64 0 0 128 112 0 0-64-32 0 0-32 0-160 0-32 32 0 16 0c-10-13.4-16-30-16-48zm272-16l-113.6 0c1 5.2 1.6 10.5 1.6 16c0 18-6 34.6-16 48l16 0 32 0 0 32 0 160 0 32-32 0 0 64 112 0 0-128 64 0L448 160zm-64-32A64 64 0 1 0 384 0a64 64 0 1 0 0 128zM256 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm80 192l0-160-160 0 0 160 32 0 0 96 96 0 0-96 32 0z" />
    </Icon>
);

export default FamilyDress;