
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sterling-sign` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sterling-sign?s=solid sterling-sign}
 * @preview ![sterling-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDQwQzMyMCA0NjIuMDk0IDMwMi4wOTQgNDgwIDI4MCA0ODBINDBDMjQuNTYyIDQ4MCAxMC41IDQ3MS4xMDkgMy44NzUgNDU3LjE3MkMtMi43NSA0NDMuMjE5IC0wLjc1IDQyNi43MDMgOSA0MTQuNzM0QzM0LjE1NiAzODMuODU5IDQ4IDM0NC45NTMgNDggMzA1LjE1NlYyODhIMzJDMTQuMzEyIDI4OCAwIDI3My42NzIgMCAyNTZTMTQuMzEyIDIyNCAzMiAyMjRINDhWMTYxLjQzOEM0OCA5MC4wNjIgMTA2LjA2MiAzMiAxNzcuNDM4IDMyQzE5MS40MDYgMzIgMjA1LjIxOSAzNC4yNSAyMTguNSAzOC42ODhMMjkyLjY4OCA2My41QzMxMy42MjUgNzAuNTE2IDMyNC45MzggOTMuMTcyIDMxNy45MzggMTE0LjEyNUMzMTAuOTM4IDEzNS4wNDcgMjg4LjM3NSAxNDYuMzc1IDI2Ny4zMTMgMTM5LjM3NUwxOTMuMTI1IDExNC41NjJDMTg4LjA2MiAxMTIuODU5IDE4Mi43ODEgMTEyIDE3Ny40MzggMTEyQzE1MC4xODggMTEyIDEyOCAxMzQuMTcyIDEyOCAxNjEuNDM4VjIyNEgyMjRDMjQxLjY4OCAyMjQgMjU2IDIzOC4zMjggMjU2IDI1NlMyNDEuNjg4IDI4OCAyMjQgMjg4SDEyOFYzMDUuMTU2QzEyOCAzMzcuNzk3IDEyMS42MjUgMzcwLjAzMSAxMDkuNTMxIDQwMEgyODBDMzAyLjA5NCA0MDAgMzIwIDQxNy45MDYgMzIwIDQ0MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SterlingSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 440C320 462.094 302.094 480 280 480H40C24.562 480 10.5 471.109 3.875 457.172C-2.75 443.219 -0.75 426.703 9 414.734C34.156 383.859 48 344.953 48 305.156V288H32C14.312 288 0 273.672 0 256S14.312 224 32 224H48V161.438C48 90.062 106.062 32 177.438 32C191.406 32 205.219 34.25 218.5 38.688L292.688 63.5C313.625 70.516 324.938 93.172 317.938 114.125C310.938 135.047 288.375 146.375 267.313 139.375L193.125 114.562C188.062 112.859 182.781 112 177.438 112C150.188 112 128 134.172 128 161.438V224H224C241.688 224 256 238.328 256 256S241.688 288 224 288H128V305.156C128 337.797 121.625 370.031 109.531 400H280C302.094 400 320 417.906 320 440Z" />
        </Icon>
    </>
}