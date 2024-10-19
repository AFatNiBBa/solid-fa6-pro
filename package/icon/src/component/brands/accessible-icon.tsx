
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `accessible-icon` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/accessible-icon?s=brands accessible-icon}
 * @preview ![accessible-icon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjMuOSAyNTUuOEw0MTEgNDEzLjFjLTMuMyA0MC43LTYzLjkgMzUuMS02MC42LTQuOWwxMC0xMjIuNS00MS4xIDIuM2MxMC4xIDIwLjcgMTUuOCA0My45IDE1LjggNjguNSAwIDQxLjItMTYuMSA3OC43LTQyLjMgMTA2LjVsLTM5LjMtMzkuM2M1Ny45LTYzLjcgMTMuMS0xNjcuMi03NC0xNjcuMi0yNS45IDAtNDkuNSA5LjktNjcuMiAyNkw3MyAyNDMuMmMyMi0yMC43IDUwLjEtMzUuMSA4MS40LTQwLjJsNzUuMy04NS43LTQyLjYtMjQuOC01MS42IDQ2Yy0zMCAyNi44LTcwLjYtMTguNS00MC41LTQ1LjRsNjgtNjAuN2M5LjgtOC44IDI0LjEtMTAuMiAzNS41LTMuNiAwIDAgMTM5LjMgODAuOSAxMzkuNSA4MS4xIDE2LjIgMTAuMSAyMC43IDM2IDYuMSA1Mi42TDI4NS43IDIyOWwxMDYuMS01LjljMTguNS0xLjEgMzMuNiAxNC40IDMyLjEgMzIuN3ptLTY0LjktMTU0YzI4LjEgMCA1MC45LTIyLjggNTAuOS01MC45QzQwOS45IDIyLjggMzg3LjEgMCAzNTkgMGMtMjguMSAwLTUwLjkgMjIuOC01MC45IDUwLjkgMCAyOC4xIDIyLjggNTAuOSA1MC45IDUwLjl6TTE3OS42IDQ1Ni41Yy04MC42IDAtMTI3LjQtOTAuNi04Mi43LTE1Ni4xbC0zOS43LTM5LjdDMzYuNCAyODcgMjQgMzIwLjMgMjQgMzU2LjRjMCAxMzAuNyAxNTAuNyAyMDEuNCAyNTEuNCAxMjIuNWwtMzkuNy0zOS43Yy0xNiAxMC45LTM1LjMgMTcuMy01Ni4xIDE3LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function AccessibleIcon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z" />
        </Icon>
    </>
}