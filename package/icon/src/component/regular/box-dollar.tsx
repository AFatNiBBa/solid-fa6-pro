
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `box-dollar` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-dollar?s=regular box-dollar}
 * @preview ![box-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzkuNzgxIDE0NS4zODdMMzk0LjM1MiA2NC42MjNDMzgzLjAxNiA0NC40NzEgMzYxLjY5MSAzMiAzMzguNTcgMzJIMTA5LjQzQzg2LjMwOSAzMiA2NC45ODQgNDQuNDcxIDUzLjY0OCA2NC42MjNMOC4yMTkgMTQ1LjM4N0MyLjgzIDE1NC45NjcgMCAxNjUuNzczIDAgMTc2Ljc2NFY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2VjE3Ni43NjRDNDQ4IDE2NS43NzMgNDQ1LjE3IDE1NC45NjcgNDM5Ljc4MSAxNDUuMzg3Wk0yNDcuMDE2IDgwSDMzOC41N0MzNDQuMzQyIDgwIDM0OS42ODYgODMuMTI1IDM1Mi41MTYgODguMTU0TDM5Mi4xODIgMTU4LjY3MkgyNDcuMDE2VjgwWk05NS40ODQgODguMTU0Qzk4LjMxNCA4My4xMjUgMTAzLjY1OCA4MCAxMDkuNDMgODBIMTk5LjAxNlYxNTguNjcySDU1LjgxOEw5NS40ODQgODguMTU0Wk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlYyMDYuNjcySDQwMFY0MTZaTTIxNi45NTMgMzU4LjYwOUMyMTAuNzk3IDM1Ny42ODggMjAzIDM1NC44OTEgMTk2LjEyNSAzNTIuNDA2TDE5Mi40MjIgMzUxLjA3OEMxODQuMDc4IDM0OC4xNDEgMTc0Ljk1MyAzNTIuNDY5IDE3MiAzNjAuODEyQzE2OS4wNDcgMzY5LjE0MSAxNzMuNDA2IDM3OC4yODEgMTgxLjczNCAzODEuMjM0TDE4NS4yODEgMzgyLjVDMTkyLjMyNiAzODUuMDQzIDIwMC4xODcgMzg3LjY0OCAyMDguMDMxIDM4OS4yODNWNDAwQzIwOC4wMzEgNDA4Ljg0NCAyMTUuMTg3IDQxNiAyMjQuMDMxIDQxNlMyNDAuMDMxIDQwOC44NDQgMjQwLjAzMSA0MDBWMzg5LjYxM0MyNTkuMzgxIDM4NS43NjggMjczLjEzOSAzNzQuMjAzIDI3Ni4yMTkgMzU2LjM5MUMyODIuNSAzMjAuMDk0IDI0OC42NDEgMzEwLjM5MSAyMjguNDIyIDMwNC42MDlMMjIzLjYwOSAzMDMuMjE5QzIwMS45NjkgMjk2Ljg1OSAyMDIuNTMxIDI5My41OTQgMjAzLjMxMiAyODkuMDc4QzIwNC42NDEgMjgxLjM3NSAyMTguMTA5IDI3OS4zMTIgMjMwLjk1MyAyODEuMzc1QzIzNS44NzUgMjgyLjE0MSAyNDEuMzEyIDI4My44NDQgMjQ2LjQ2OSAyODUuNjI1QzI1NC43NSAyODguNDUzIDI2My45MzcgMjg0LjA3OCAyNjYuODEyIDI3NS43MTlDMjY5LjcwMyAyNjcuMzc1IDI2NS4yNjYgMjU4LjI2NiAyNTYuOTA2IDI1NS4zNzVDMjUxLjMwNyAyNTMuNDQxIDI0NS41NzIgMjUyLjAyNSAyNDAuMDMxIDI1MC44NTVWMjQwQzI0MC4wMzEgMjMxLjE1NiAyMzIuODc1IDIyNCAyMjQuMDMxIDIyNFMyMDguMDMxIDIzMS4xNTYgMjA4LjAzMSAyNDBWMjUwLjA3NEMxODguNTIzIDI1My44NjEgMTc0Ljg3NyAyNjUuNzE1IDE3MS43ODEgMjgzLjYyNUMxNjUuNTc4IDMxOS41MTYgMTk5LjkyMiAzMjkuNjA5IDIxNC41NzggMzMzLjkwNkwyMTkuNTk0IDMzNS4zNTlDMjQ1IDM0Mi42NDEgMjQ1LjY0MSAzNDUuMzkxIDI0NC42ODggMzUwLjkyMkMyNDMuMzQ0IDM1OC42MjUgMjI5LjcwMyAzNjAuNjU2IDIxNi45NTMgMzU4LjYwOVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BoxDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M439.781 145.387L394.352 64.623C383.016 44.471 361.691 32 338.57 32H109.43C86.309 32 64.984 44.471 53.648 64.623L8.219 145.387C2.83 154.967 0 165.773 0 176.764V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V176.764C448 165.773 445.17 154.967 439.781 145.387ZM247.016 80H338.57C344.342 80 349.686 83.125 352.516 88.154L392.182 158.672H247.016V80ZM95.484 88.154C98.314 83.125 103.658 80 109.43 80H199.016V158.672H55.818L95.484 88.154ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V206.672H400V416ZM216.953 358.609C210.797 357.688 203 354.891 196.125 352.406L192.422 351.078C184.078 348.141 174.953 352.469 172 360.812C169.047 369.141 173.406 378.281 181.734 381.234L185.281 382.5C192.326 385.043 200.187 387.648 208.031 389.283V400C208.031 408.844 215.187 416 224.031 416S240.031 408.844 240.031 400V389.613C259.381 385.768 273.139 374.203 276.219 356.391C282.5 320.094 248.641 310.391 228.422 304.609L223.609 303.219C201.969 296.859 202.531 293.594 203.312 289.078C204.641 281.375 218.109 279.312 230.953 281.375C235.875 282.141 241.312 283.844 246.469 285.625C254.75 288.453 263.937 284.078 266.812 275.719C269.703 267.375 265.266 258.266 256.906 255.375C251.307 253.441 245.572 252.025 240.031 250.855V240C240.031 231.156 232.875 224 224.031 224S208.031 231.156 208.031 240V250.074C188.523 253.861 174.877 265.715 171.781 283.625C165.578 319.516 199.922 329.609 214.578 333.906L219.594 335.359C245 342.641 245.641 345.391 244.688 350.922C243.344 358.625 229.703 360.656 216.953 358.609Z" />
        </Icon>
    </>
}