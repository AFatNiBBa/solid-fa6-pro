
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `up-right-from-square` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-from-square?s=light up-right-from-square}
 * @preview ![up-right-from-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzIwQzM5MS4xNjQgMzIwIDM4NCAzMjcuMTY0IDM4NCAzMzZWNDQ4QzM4NCA0NjUuNjc0IDM2OS42NzQgNDgwIDM1MiA0ODBINjRDNDYuMzI4IDQ4MCAzMiA0NjUuNjc0IDMyIDQ0OFYxNjBDMzIgMTQyLjMyNiA0Ni4zMjggMTI4IDY0IDEyOEgxNzZDMTg0LjgzOCAxMjggMTkyIDEyMC44MzYgMTkyIDExMlMxODQuODM4IDk2IDE3NiA5Nkg2NEMyOC42NTQgOTYgMCAxMjQuNjU0IDAgMTYwVjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzUyQzM4Ny4zNDggNTEyIDQxNiA0ODMuMzQ2IDQxNiA0NDhWMzM2QzQxNiAzMjcuMTY0IDQwOC44MzggMzIwIDQwMCAzMjBaTTQ4MCAwSDM2OC4wMzFDMzU1LjAzMSAwIDM0My40MzggNy43NjYgMzM4LjQ2OSAxOS43NjZTMzM2LjIxOSA0NS40NTMgMzQ1LjQwNiA1NC42MjVMMzkwLjA3NiA5OS4yOTlMMTgwLjY4OCAzMDguNjg4QzE3NC40MzggMzE0LjkzOCAxNzQuNDM4IDMyNS4wNjMgMTgwLjY4OCAzMzEuMzEyQzE4My44MTIgMzM0LjQzOCAxODcuOTA2IDMzNiAxOTIgMzM2UzIwMC4xODggMzM0LjQzOCAyMDMuMzEyIDMzMS4zMTJMNDEyLjY5NyAxMjEuOTI4TDQ1Ny4zNzUgMTY2LjYwOUM0NjMuNTMxIDE3Mi43MzQgNDcxLjY1NiAxNzUuOTg0IDQ3OS45NjkgMTc1Ljk4NEM0ODQuMDk0IDE3NS45ODQgNDg4LjI4MSAxNzUuMTcyIDQ5Mi4yNSAxNzMuNTMxQzUwNC4yNSAxNjguNTQ3IDUxMiAxNTYuOTUzIDUxMiAxNDMuOTY5VjMyQzUxMiAxNC4zNTkgNDk3LjY1NiAwIDQ4MCAwWk00ODAgMTQzLjk2OUwzNjcuODc1IDMyLjAxNkMzNjcuODc1IDMyLjAxNiAzNjcuOTM4IDMyIDM2OC4wMzEgMzJINDgwVjE0My45NjlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UpRightFromSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M400 320C391.164 320 384 327.164 384 336V448C384 465.674 369.674 480 352 480H64C46.328 480 32 465.674 32 448V160C32 142.326 46.328 128 64 128H176C184.838 128 192 120.836 192 112S184.838 96 176 96H64C28.654 96 0 124.654 0 160V448C0 483.346 28.654 512 64 512H352C387.348 512 416 483.346 416 448V336C416 327.164 408.838 320 400 320ZM480 0H368.031C355.031 0 343.438 7.766 338.469 19.766S336.219 45.453 345.406 54.625L390.076 99.299L180.688 308.688C174.438 314.938 174.438 325.063 180.688 331.312C183.812 334.438 187.906 336 192 336S200.188 334.438 203.312 331.312L412.697 121.928L457.375 166.609C463.531 172.734 471.656 175.984 479.969 175.984C484.094 175.984 488.281 175.172 492.25 173.531C504.25 168.547 512 156.953 512 143.969V32C512 14.359 497.656 0 480 0ZM480 143.969L367.875 32.016C367.875 32.016 367.938 32 368.031 32H480V143.969Z" />
        </Icon>
    </>
}