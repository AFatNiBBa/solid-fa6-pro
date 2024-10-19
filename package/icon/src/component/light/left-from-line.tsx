
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `left-from-line` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/left-from-line?s=light left-from-line}
 * @preview ![left-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgNjRDNDIzLjE1NiA2NCA0MTYgNzEuMTU2IDQxNiA4MFY0MzJDNDE2IDQ0MC44NDQgNDIzLjE1NiA0NDggNDMyIDQ0OFM0NDggNDQwLjg0NCA0NDggNDMyVjgwQzQ0OCA3MS4xNTYgNDQwLjg0NCA2NCA0MzIgNjRaTTMyMy4xNzIgMTkySDIwOFYxMzMuNTk0QzIwOCAxMTguNTk0IDE5OS4wOTQgMTA1LjA2MiAxODUuMjUgOTkuMDYyQzE3MS40NTMgOTMuMTI1IDE1NS40NjkgOTUuOTM4IDE0NC43MDMgMTA2LjEyNUwxMS41IDIyOC42NTZDNC4xODggMjM1LjUzMSAwIDI0NS41IDAgMjU2UzQuMTg4IDI3Ni40NjkgMTEuNjU2IDI4My41TDE0NC41NDcgNDA1LjcxOUMxNTUuNDY5IDQxNi4wNjIgMTcxLjQ1MyA0MTguODc1IDE4NS4zMTIgNDEyLjkzN0MxOTkuMDk0IDQwNi45MzggMjA4IDM5My40MDYgMjA4IDM3OC40MDZWMzIwSDMyMy4xNzJDMzQ3Ljg5MSAzMjAgMzY4IDI5OS45MDYgMzY4IDI3NS4xODhWMjM2LjgxMkMzNjggMjEyLjA5NCAzNDcuODkxIDE5MiAzMjMuMTcyIDE5MlpNMzM2IDI3NS4xODhDMzM2IDI4Mi4yNSAzMzAuMjUgMjg4IDMyMy4xNzIgMjg4SDE3NlYzNzguNDA2QzE3NiAzODAuNjI1IDE3NC42NTYgMzgyLjY1NiAxNzIuNjI1IDM4My41NjJDMTcwLjU0NyAzODQuNDM4IDE2OC4xNTYgMzg0IDE2Ni4zNTkgMzgyLjMxMkwzMy40NjkgMjYwLjA5NEMzMS42NTYgMjU4LjM0NCAzMS44MTIgMjUzLjUgMzMuMzEyIDI1Mi4wNjJMMTY2LjUxNiAxMjkuNTMxQzE2OC4xNTYgMTI4IDE3MC41NDcgMTI3LjU2MiAxNzIuNTYyIDEyOC40MzhDMTc0LjY1NiAxMjkuMzQ0IDE3NiAxMzEuMzc1IDE3NiAxMzMuNTk0VjIyNEgzMjMuMTcyQzMzMC4yNSAyMjQgMzM2IDIyOS43NSAzMzYgMjM2LjgxMlYyNzUuMTg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LeftFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 64C423.156 64 416 71.156 416 80V432C416 440.844 423.156 448 432 448S448 440.844 448 432V80C448 71.156 440.844 64 432 64ZM323.172 192H208V133.594C208 118.594 199.094 105.062 185.25 99.062C171.453 93.125 155.469 95.938 144.703 106.125L11.5 228.656C4.188 235.531 0 245.5 0 256S4.188 276.469 11.656 283.5L144.547 405.719C155.469 416.062 171.453 418.875 185.312 412.937C199.094 406.938 208 393.406 208 378.406V320H323.172C347.891 320 368 299.906 368 275.188V236.812C368 212.094 347.891 192 323.172 192ZM336 275.188C336 282.25 330.25 288 323.172 288H176V378.406C176 380.625 174.656 382.656 172.625 383.562C170.547 384.438 168.156 384 166.359 382.312L33.469 260.094C31.656 258.344 31.812 253.5 33.312 252.062L166.516 129.531C168.156 128 170.547 127.562 172.562 128.438C174.656 129.344 176 131.375 176 133.594V224H323.172C330.25 224 336 229.75 336 236.812V275.188Z" />
        </Icon>
    </>
}