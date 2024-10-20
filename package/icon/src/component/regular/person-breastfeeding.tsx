
import { Icon } from "../../index";

/**
 * A component that renders the `person-breastfeeding` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-breastfeeding?s=regular person-breastfeeding}
 * @preview ![person-breastfeeding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-breastfeeding.svg)
 */
const PersonBreastfeeding: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 0A80 80 0 1 0 144 80a80 80 0 1 0 160 0zM116.9 282.2c19.6-26.5 50.6-42.2 83.6-42.2l58.3 0c27.6 0 54.1 11 73.7 30.6l55.2 55.3c12 12 12.5 31.3 1.2 43.9L326.1 440c-8.8 9.9-8 25.1 1.9 33.9s25.1 8 33.9-1.9l62.8-70.2c28.3-31.6 27-79.8-3-109.8l-55.2-55.3C338 208.1 299.3 192 258.9 192l-58.3 0c-48.2 0-93.6 22.9-122.2 61.7l-56 75.7C-8.1 370.6 7.5 429.5 54.5 450.2L190.3 510c12.1 5.3 26.3-.2 31.6-12.3s-.2-26.3-12.3-31.6L73.8 406.2c-18.8-8.3-25-31.8-12.8-48.3l56-75.7zM192 328c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 43.4c0 7.5 2.1 14.8 6.1 21.2C177.8 437 226.5 464 278.9 464l1.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-1.1 0c-35.1 0-67.7-17.7-86.9-46.9l0-41.1zm80 56a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default PersonBreastfeeding;