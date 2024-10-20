
import { Icon } from "../../index";

/**
 * A component that renders the `users-medical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-medical?s=sharp-solid users-medical}
 * @preview ![users-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/users-medical.svg)
 */
const UsersMedical: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM48 192l148 0c-2.6 10.2-4 21-4 32c0 38.2 16.8 72.5 43.3 96L0 320 48 192zM640 320l-32 0 0-32-32 0-64 0-32 0 0 32-75.3 0c26.6-23.5 43.3-57.8 43.3-96c0-11-1.4-21.8-4-32l148 0 48 128zM480 480l0 32-352 0 48-160 240 0 0 32 0 64 0 32 32 0 32 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm288 96l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default UsersMedical;