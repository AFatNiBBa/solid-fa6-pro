
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `box-dollar` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-dollar?s=solid box-dollar}
 * @preview ![box-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuNjI1IDE1OC43NUwzOTEuMjUgNTMuODc1QzM4Ni44NzUgNDAuNzUgMzc0Ljc1IDMyIDM2MC44NzUgMzJIMjQwVjE2MEg0NDYuNzVDNDQ3LjEyNSAxNTkuNSA0NDcuMjUgMTU5LjI1IDQ0Ny42MjUgMTU4Ljc1Wk0wIDE5MlY0MzJDMCA0NTguNTEgMjEuNDkgNDgwIDQ4IDQ4MEg0MDBDNDI2LjUxIDQ4MCA0NDggNDU4LjUxIDQ0OCA0MzJWMTkySDBaTTI3Ni4yMTkgMzcyLjM5MUMyNzMuMTM5IDM5MC4yMDMgMjU5LjM4MSA0MDEuNzY4IDI0MC4wMzEgNDA1LjYxM1Y0MTZDMjQwLjAzMSA0MjQuODQ0IDIzMi44NzUgNDMyIDIyNC4wMzEgNDMyUzIwOC4wMzEgNDI0Ljg0NCAyMDguMDMxIDQxNlY0MDUuMjgzQzIwMC4xODcgNDAzLjY0OCAxOTIuMzI2IDQwMS4wNDMgMTg1LjI4MSAzOTguNUwxODEuNzM0IDM5Ny4yMzRDMTczLjQwNiAzOTQuMjgxIDE2OS4wNDcgMzg1LjE0MSAxNzIgMzc2LjgxMkMxNzQuOTUzIDM2OC40NjkgMTg0LjA3OCAzNjQuMTQxIDE5Mi40MjIgMzY3LjA3OEwxOTYuMTI1IDM2OC40MDZDMjAzIDM3MC44OTEgMjEwLjc5NyAzNzMuNjg4IDIxNi45NTMgMzc0LjYwOUMyMjkuNzAzIDM3Ni42NTYgMjQzLjM0NCAzNzQuNjI1IDI0NC42ODggMzY2LjkyMkMyNDUuNjQxIDM2MS4zOTEgMjQ1IDM1OC42NDEgMjE5LjU5NCAzNTEuMzU5TDIxNC41NzggMzQ5LjkwNkMxOTkuOTIyIDM0NS42MDkgMTY1LjU3OCAzMzUuNTE2IDE3MS43ODEgMjk5LjYyNUMxNzQuODc3IDI4MS43MTUgMTg4LjUyMyAyNjkuODYxIDIwOC4wMzEgMjY2LjA3NFYyNTZDMjA4LjAzMSAyNDcuMTU2IDIxNS4xODggMjQwIDIyNC4wMzEgMjQwUzI0MC4wMzEgMjQ3LjE1NiAyNDAuMDMxIDI1NlYyNjYuODU1QzI0NS41NzIgMjY4LjAyNSAyNTEuMzA3IDI2OS40NDEgMjU2LjkwNiAyNzEuMzc1QzI2NS4yNjYgMjc0LjI2NiAyNjkuNzAzIDI4My4zNzUgMjY2LjgxMyAyOTEuNzE5QzI2My45MzggMzAwLjA3OCAyNTQuNzUgMzA0LjQ1MyAyNDYuNDY5IDMwMS42MjVDMjQxLjMxMyAyOTkuODQ0IDIzNS44NzUgMjk4LjE0MSAyMzAuOTUzIDI5Ny4zNzVDMjE4LjEwOSAyOTUuMzEzIDIwNC42NDEgMjk3LjM3NSAyMDMuMzEzIDMwNS4wNzhDMjAyLjUzMSAzMDkuNTk0IDIwMS45NjkgMzEyLjg1OSAyMjMuNjA5IDMxOS4yMTlMMjI4LjQyMiAzMjAuNjA5QzI0OC42NDEgMzI2LjM5MSAyODIuNSAzMzYuMDk0IDI3Ni4yMTkgMzcyLjM5MVpNMjA4IDE2MFYzMkg4Ny4xMjVDNzMuMjUgMzIgNjEuMTI1IDQwLjc1IDU2Ljc1IDUzLjg3NUwwLjM3NSAxNTguNzVDMC43NSAxNTkuMjUgMC44NzUgMTU5LjUgMS4yNSAxNjBIMjA4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BoxDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M447.625 158.75L391.25 53.875C386.875 40.75 374.75 32 360.875 32H240V160H446.75C447.125 159.5 447.25 159.25 447.625 158.75ZM0 192V432C0 458.51 21.49 480 48 480H400C426.51 480 448 458.51 448 432V192H0ZM276.219 372.391C273.139 390.203 259.381 401.768 240.031 405.613V416C240.031 424.844 232.875 432 224.031 432S208.031 424.844 208.031 416V405.283C200.187 403.648 192.326 401.043 185.281 398.5L181.734 397.234C173.406 394.281 169.047 385.141 172 376.812C174.953 368.469 184.078 364.141 192.422 367.078L196.125 368.406C203 370.891 210.797 373.688 216.953 374.609C229.703 376.656 243.344 374.625 244.688 366.922C245.641 361.391 245 358.641 219.594 351.359L214.578 349.906C199.922 345.609 165.578 335.516 171.781 299.625C174.877 281.715 188.523 269.861 208.031 266.074V256C208.031 247.156 215.188 240 224.031 240S240.031 247.156 240.031 256V266.855C245.572 268.025 251.307 269.441 256.906 271.375C265.266 274.266 269.703 283.375 266.813 291.719C263.938 300.078 254.75 304.453 246.469 301.625C241.313 299.844 235.875 298.141 230.953 297.375C218.109 295.313 204.641 297.375 203.313 305.078C202.531 309.594 201.969 312.859 223.609 319.219L228.422 320.609C248.641 326.391 282.5 336.094 276.219 372.391ZM208 160V32H87.125C73.25 32 61.125 40.75 56.75 53.875L0.375 158.75C0.75 159.25 0.875 159.5 1.25 160H208Z" />
        </Icon>
    </>
}