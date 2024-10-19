
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `venus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/venus?s=light venus}
 * @preview ![venus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMTc2QzM2OCA3OC43OTkgMjg5LjIwMyAwIDE5MiAwQzk0Ljc5OSAwIDE2IDc4Ljc5OSAxNiAxNzZDMTYgMjY3Ljc5OSA4Ni4zMDkgMzQzLjEgMTc2IDM1MS4xOTNWNDAwSDExMkMxMDMuMTU2IDQwMCA5NiA0MDcuMTU2IDk2IDQxNlMxMDMuMTU2IDQzMiAxMTIgNDMySDE3NlY0OTZDMTc2IDUwNC44NDQgMTgzLjE1NiA1MTIgMTkyIDUxMlMyMDggNTA0Ljg0NCAyMDggNDk2VjQzMkgyNzJDMjgwLjg0NCA0MzIgMjg4IDQyNC44NDQgMjg4IDQxNlMyODAuODQ0IDQwMCAyNzIgNDAwSDIwOFYzNTEuMTkzQzI5Ny42OTUgMzQzLjEgMzY4IDI2Ny44MDEgMzY4IDE3NlpNNDggMTc2QzQ4IDk2LjU5OCAxMTIuNTk4IDMyIDE5MiAzMlMzMzYgOTYuNTk4IDMzNiAxNzZTMjcxLjQwMiAzMjAgMTkyIDMyMFM0OCAyNTUuNDAyIDQ4IDE3NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Venus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M368 176C368 78.799 289.203 0 192 0C94.799 0 16 78.799 16 176C16 267.799 86.309 343.1 176 351.193V400H112C103.156 400 96 407.156 96 416S103.156 432 112 432H176V496C176 504.844 183.156 512 192 512S208 504.844 208 496V432H272C280.844 432 288 424.844 288 416S280.844 400 272 400H208V351.193C297.695 343.1 368 267.801 368 176ZM48 176C48 96.598 112.598 32 192 32S336 96.598 336 176S271.402 320 192 320S48 255.402 48 176Z" />
        </Icon>
    </>
}